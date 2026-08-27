<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\BrevoService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewsletterController extends Controller
{
    protected BrevoService $brevo;

    public function __construct(BrevoService $brevo)
    {
        $this->brevo = $brevo;
    }

    /**
     * Page principale du Dashboard Newsletter Admin.
     */
    public function index(Request $request): Response
    {
        if (!$request->user()?->canManageNewsletter()) {
            abort(403, 'Accès réservé exclusivement à Fabienne.');
        }

        $accountInfo = $this->brevo->getAccountInfo();
        $contactsData = $this->brevo->getContacts(50, 0);
        $campaignsData = $this->brevo->getCampaigns(20, 0);

        return Inertia::render('admin/newsletter/index', [
            'account' => $accountInfo ?? [],
            'contacts' => $contactsData['contacts'] ?? [],
            'totalContacts' => $contactsData['count'] ?? 0,
            'campaigns' => $campaignsData['campaigns'] ?? [],
        ]);
    }

    /**
     * Créer et envoyer une campagne e-mail.
     */
    public function sendCampaign(Request $request)
    {
        if (!$request->user()?->canManageNewsletter()) {
            abort(403, 'Accès réservé exclusivement à Fabienne.');
        }

        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'senderName' => 'required|string|max:100',
            'senderEmail' => 'required|email',
            'htmlContent' => 'required|string',
            'sendNow' => 'boolean',
        ]);

        $result = $this->brevo->createAndSendCampaign($validated);

        if ($result['success']) {
            return redirect()->back()->with('success', 'Campagne e-mail créée et envoyée avec succès via Brevo !');
        }

        return redirect()->back()->withErrors(['error' => $result['message'] ?? 'Erreur lors de l\'envoi.']);
    }

    /**
     * Inscription manuelle ou API d'un nouveau contact.
     */
    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
        ]);

        $this->brevo->addContact($validated['email']);

        return response()->json(['message' => 'Merci pour votre inscription à la newsletter !']);
    }
}
