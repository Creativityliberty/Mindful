import { Head } from '@inertiajs/react';
import React from 'react';
import { Mail, ShieldCheck, Sparkles } from 'lucide-react';

export default function Privacy() {
    return (
        <>
            <Head title="Politique de Confidentialité - FormationSession" />
            
            <div className="relative min-h-screen bg-background">
                {/* Soft ambient background aura */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[130px]" />
                </div>

                <div className="relative w-full px-6 py-16 md:px-10 lg:px-16 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="border-b border-border/20 pb-8 mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase mb-4">
                            <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                            Juridique
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif">
                            Politique de Confidentialité
                        </h1>
                        <p className="text-sm text-foreground/45 mt-3">Dernière mise à jour : 17 Juillet 2026</p>
                    </div>

                    {/* Split-Screen Canvas Layout */}
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
                        
                        {/* Left Column: Fixed summary card */}
                        <div className="lg:sticky lg:top-28 space-y-6">
                            <div className="rounded-[2rem] border border-border/30 bg-background/50 p-8 backdrop-blur-md relative overflow-hidden shadow-xl">
                                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                                    Vos données vous appartiennent.
                                </h2>
                                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
                                    Chez FormationSession, nous croyons à la transparence absolue. Cette politique de confidentialité détaille les informations que nous collectons, comment nous les utilisons et vos droits à cet égard.
                                </p>
                                
                                <div className="pt-6 border-t border-border/20 mt-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                            <Mail className="h-4.5 w-4.5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-foreground/40 block uppercase">Contact DPO</span>
                                            <a href="mailto:contact@formationsession.com" className="text-xs text-foreground/80 hover:text-sky-400 font-semibold transition-colors">
                                                contact@formationsession.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Legal Text Content */}
                        <div className="divide-y divide-border/20 text-foreground/80">
                            
                            <div className="pb-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">1. Collecte des données personnelles</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70 mb-4">
                                    Nous collectons uniquement les informations nécessaires à votre inscription, à votre suivi de formation et au traitement de vos paiements :
                                </p>
                                <ul className="space-y-2.5 text-sm font-light text-foreground/70 pl-2">
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Votre nom complet et votre adresse e-mail.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Vos informations de profil (nom du formateur, biographie le cas échéant).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Vos historiques d'achats et de complétion de leçons.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Vos identifiants de facturation et de paiement traités de manière sécurisée via Stripe.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="py-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">2. Utilisation des données</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70 mb-4">
                                    Les données collectées sont utilisées exclusivement pour :
                                </p>
                                <ul className="space-y-2.5 text-sm font-light text-foreground/70 pl-2">
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Gérer et valider votre compte utilisateur.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Vous fournir l'accès aux leçons et cours achetés (y compris en mode aperçu).</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Assurer le suivi pédagogique des formations.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Traiter vos paiements Stripe de manière cryptée et sécurisée.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                        <span>Vous envoyer des notifications de suivi ou des réponses à vos questions.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="py-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">3. Partage des données</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Vos données ne sont jamais revendues à des tiers. Elles sont uniquement partagées avec nos partenaires indispensables au bon fonctionnement de la plateforme (Stripe pour le paiement sécurisé et notre hébergeur web). Les formateurs ont accès aux noms et progrès des étudiants inscrits à leurs cours.
                                </p>
                            </div>

                            <div className="py-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">4. Vos droits</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Conformément aux réglementations européennes (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles. Vous pouvez exercer ce droit à tout moment en modifiant votre profil ou en nous contactant via notre adresse e-mail de support.
                                </p>
                            </div>

                            <div className="pt-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">5. Contact</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Pour toute question concernant la protection de vos données personnelles ou pour faire valoir vos droits, vous pouvez nous écrire à : <a href="mailto:contact@formationsession.com" className="font-semibold text-sky-400 hover:underline">contact@formationsession.com</a>.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
