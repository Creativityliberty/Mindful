<?php

declare(strict_types=1);

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class AgentMailWebhookController extends Controller
{
    /**
     * Handle incoming webhooks from AgentMail (Svix signed).
     */
    public function handle(Request $request): JsonResponse
    {
        $payload = $request->all();
        $rawContent = $request->getContent();

        // Optional Svix Signature validation if secret configured
        $secret = env('AGENTMAIL_WEBHOOK_SECRET');
        $svixSignature = $request->header('svix-signature');
        $svixTimestamp = $request->header('svix-timestamp');
        $svixId = $request->header('svix-id');

        if (!empty($secret) && !empty($svixSignature) && !empty($svixTimestamp) && !empty($svixId)) {
            $toSign = "{$svixId}.{$svixTimestamp}.{$rawContent}";
            $cleanSecret = str_starts_with($secret, 'whsec_') ? substr($secret, 6) : $secret;
            $decodedSecret = base64_decode($cleanSecret);

            $expectedSig = base64_encode(hash_hmac('sha256', $toSign, $decodedSecret, true));
            $signatures = explode(' ', $svixSignature);

            $valid = false;
            foreach ($signatures as $sig) {
                $parts = explode(',', $sig);
                if (count($parts) === 2 && hash_equals($expectedSig, $parts[1])) {
                    $valid = true;
                    break;
                }
            }

            if (!$valid) {
                Log::warning('AgentMail webhook invalid signature', [
                    'ip' => $request->ip(),
                ]);
                return response()->json(['error' => 'Invalid signature'], 401);
            }
        }

        // Log the event received
        Log::info('AgentMail webhook received', [
            'event' => $payload['event_type'] ?? $payload['type'] ?? 'unknown',
            'inbox_id' => $payload['inbox_id'] ?? null,
        ]);

        // Extract message details
        $messageData = $payload['data'] ?? $payload['message'] ?? $payload;
        $from = $messageData['from'] ?? 'Expéditeur inconnu';
        $subject = $messageData['subject'] ?? 'Sans objet';
        $text = $messageData['text'] ?? $messageData['body'] ?? '';
        $html = $messageData['html'] ?? nl2br(e($text));

        // Recipients list (Lionel & Fabienne)
        $alertEmailsConfig = env('AGENTMAIL_ALERT_EMAILS', 'fabieolliveaud@gmail.com,numtemalionel@gmail.com');
        $alertEmails = array_filter(array_map('trim', explode(',', $alertEmailsConfig)));

        if (!empty($alertEmails)) {
            try {
                foreach ($alertEmails as $recipient) {
                    Mail::send([], [], function ($msg) use ($recipient, $from, $subject, $html, $text) {
                        $msg->to($recipient)
                            ->subject("[FormationSession · AgentMail] " . $subject)
                            ->text("Nouveau message reçu via AgentMail :\n\nDe : {$from}\nObjet : {$subject}\n\nMessage :\n{$text}")
                            ->html("<div style='font-family:sans-serif;line-height:1.6;color:#222;max-width:600px;margin:0 auto;padding:20px;border:1px solid #eee;border-radius:12px;'>" .
                                "<div style='background:#f0f9ff;padding:12px 16px;border-radius:8px;margin-bottom:16px;border-left:4px solid #0284c7;'>" .
                                "<strong style='color:#0369a1;'>Nouvel email entrant sur FormationSession (AgentMail)</strong>" .
                                "</div>" .
                                "<p><strong>De :</strong> " . e(is_array($from) ? json_encode($from) : $from) . "</p>" .
                                "<p><strong>Objet :</strong> " . e($subject) . "</p>" .
                                "<hr style='border:0;border-top:1px solid #eee;margin:16px 0;'/>" .
                                "<div>{$html}</div>" .
                                "</div>");
                    });
                }
                Log::info('AgentMail message forwarded to alert emails', ['recipients' => $alertEmails]);
            } catch (\Throwable $e) {
                Log::error('Failed to forward AgentMail message: ' . $e->getMessage());
            }
        }

        return response()->json(['status' => 'success']);
    }
}
