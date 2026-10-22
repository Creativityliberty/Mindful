<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('home/contact');
    }

    public function submit(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nom' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'objet' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        $apiKey = env('AGENTMAIL_API_KEY');
        $inboxId = env('AGENTMAIL_INBOX_ID', 'formationsession@agentmail.to');

        // Optional webhook or automated forwarding to AgentMail inbox
        if (!empty($apiKey) && !empty($inboxId)) {
            try {
                $response = Http::withToken($apiKey)
                    ->post("https://api.agentmail.to/v0/inboxes/{$inboxId}/messages/send", [
                        'to' => [env('MAIL_ADMIN_ADDRESS', 'contact@formationsession.com')],
                        'subject' => "[Contact FormationSession] {$validated['objet']} - {$validated['nom']}",
                        'text' => "Nouveau message de contact reçu sur FormationSession :\n\n" .
                            "Nom : {$validated['nom']}\n" .
                            "Email : {$validated['email']}\n" .
                            "Objet : {$validated['objet']}\n\n" .
                            "Message :\n{$validated['message']}\n",
                        'html' => "<div style='font-family:sans-serif;line-height:1.6;color:#222;'>" .
                            "<h2>Nouveau message de contact - FormationSession</h2>" .
                            "<p><strong>Nom :</strong> " . e($validated['nom']) . "</p>" .
                            "<p><strong>Email :</strong> <a href='mailto:" . e($validated['email']) . "'>" . e($validated['email']) . "</a></p>" .
                            "<p><strong>Objet :</strong> " . e($validated['objet']) . "</p>" .
                            "<hr style='border:0;border-top:1px solid #eee;margin:20px 0;'/>" .
                            "<p><strong>Message :</strong></p>" .
                            "<p style='white-space:pre-wrap;background:#f9f9f9;padding:15px;border-radius:8px;border:1px solid #eee;'>" . e($validated['message']) . "</p>" .
                            "</div>",
                    ]);

                if (!$response->successful()) {
                    Log::warning('AgentMail forwarding failed', [
                        'status' => $response->status(),
                        'body' => $response->body(),
                    ]);
                }
            } catch (\Throwable $e) {
                Log::error('AgentMail error during contact submission: ' . $e->getMessage());
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Votre message a bien été transmis à l\'équipe.',
        ]);
    }
}
