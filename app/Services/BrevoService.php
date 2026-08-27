<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class BrevoService
{
    protected string $apiKey;
    protected string $baseUrl = 'https://api.brevo.com/v3';

    public function __construct()
    {
        $this->apiKey = config('services.brevo.key') ?? env('BREVO_API_KEY', '');
    }

    /**
     * Obtenir les headers d'authentification Brevo.
     */
    protected function headers(): array
    {
        return [
            'api-key' => $this->apiKey,
            'accept' => 'application/json',
            'content-type' => 'application/json',
        ];
    }

    /**
     * Récupérer les informations du compte Brevo.
     */
    public function getAccountInfo()
    {
        $response = Http::withHeaders($this->headers())->get("{$this->baseUrl}/account");
        return $response->json();
    }

    /**
     * Récupérer la liste des contacts / abonnés.
     */
    public function getContacts(int $limit = 50, int $offset = 0)
    {
        $response = Http::withHeaders($this->headers())->get("{$this->baseUrl}/contacts", [
            'limit' => $limit,
            'offset' => $offset,
        ]);

        return $response->json();
    }

    /**
     * Inscrire un nouveau contact dans Brevo (ex: depuis le Formulaire Newsletter).
     */
    public function addContact(string $email, array $attributes = [], array $listIds = [])
    {
        $payload = [
            'email' => $email,
            'updateEnabled' => true,
        ];

        if (!empty($attributes)) {
            $payload['attributes'] = $attributes;
        }

        if (!empty($listIds)) {
            $payload['listIds'] = $listIds;
        }

        $response = Http::withHeaders($this->headers())->post("{$this->baseUrl}/contacts", $payload);

        if ($response->failed()) {
            Log::error('Erreur lors de l\'ajout de contact Brevo: ' . $response->body());
        }

        return $response->json();
    }

    /**
     * Récupérer les campagnes e-mail existantes.
     */
    public function getCampaigns(int $limit = 20, int $offset = 0)
    {
        $response = Http::withHeaders($this->headers())->get("{$this->baseUrl}/emailCampaigns", [
            'limit' => $limit,
            'offset' => $offset,
        ]);

        return $response->json();
    }

    /**
     * Créer et envoyer une campagne e-mail immédiatement ou programmée.
     */
    public function createAndSendCampaign(array $data)
    {
        // $data: name, subject, senderName, senderEmail, htmlContent, listIds
        $payload = [
            'name' => $data['name'] ?? $data['subject'],
            'subject' => $data['subject'],
            'sender' => [
                'name' => $data['senderName'] ?? 'FormationSession',
                'email' => $data['senderEmail'] ?? 'contact@formationsession.com',
            ],
            'htmlContent' => $data['htmlContent'],
            'recipients' => [
                'listIds' => $data['listIds'] ?? [2], // Par défaut liste 2 ou globale
            ],
        ];

        // Étape 1 : Créer la campagne
        $response = Http::withHeaders($this->headers())->post("{$this->baseUrl}/emailCampaigns", $payload);

        if ($response->failed()) {
            Log::error('Erreur création campagne Brevo: ' . $response->body());
            return ['success' => false, 'message' => $response->json('message') ?? 'Erreur de création'];
        }

        $campaignId = $response->json('id');

        // Si l'envoi immédiat est demandé
        if (!empty($data['sendNow']) && $campaignId) {
            $sendResponse = Http::withHeaders($this->headers())->post("{$this->baseUrl}/emailCampaigns/{$campaignId}/sendNow");
            if ($sendResponse->failed()) {
                return ['success' => false, 'message' => 'Campagne créée mais échec lors de l\'envoi immédiat.'];
            }
        }

        return ['success' => true, 'id' => $campaignId];
    }

    /**
     * Envoyer un e-mail de test pour une campagne.
     */
    public function sendTestEmail(int $campaignId, array $emails)
    {
        $response = Http::withHeaders($this->headers())->post("{$this->baseUrl}/emailCampaigns/{$campaignId}/sendTest", [
            'emailTo' => $emails,
        ]);

        return $response->successful();
    }
}
