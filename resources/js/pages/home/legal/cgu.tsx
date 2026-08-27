import { Head } from '@inertiajs/react';
import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function CGU() {
    const { t } = useTranslation();

    return (
        <>
            <Head title={`${t('legal_pages.cgu_title')} - FormationSession`} />
            
            <div className="relative min-h-screen bg-background">
                {/* Soft ambient background aura */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[130px]" />
                </div>

                <div className="relative w-full px-6 py-16 md:px-10 lg:px-16 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="border-b border-border/20 pb-8 mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase mb-4">
                            <FileText className="h-3.5 w-3.5 text-sky-400" />
                            {t('legal_pages.badge')}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif">
                            {t('legal_pages.cgu_title')}
                        </h1>
                        <p className="text-sm text-foreground/45 mt-3">{t('legal_pages.last_updated')}</p>
                    </div>

                    {/* Split-Screen Canvas Layout */}
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] items-start">
                        
                        {/* Left Column: Fixed summary card */}
                        <div className="lg:sticky lg:top-28 space-y-6">
                            <div className="rounded-[2rem] border border-border/30 bg-background/50 p-8 backdrop-blur-md relative overflow-hidden shadow-xl">
                                <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
                                    {t('legal_pages.cgu_sidebar_title')}
                                </h2>
                                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
                                    {t('legal_pages.cgu_sidebar_desc')}
                                </p>
                                
                                <div className="pt-6 border-t border-border/20 mt-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                            <Mail className="h-4.5 w-4.5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-foreground/40 block uppercase">{t('legal_pages.legal_contact')}</span>
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
                                <h2 className="text-lg font-bold text-foreground mb-3">1. Description des services</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    La plateforme propose un espace d'apprentissage en ligne composé de leçons gratuites et payantes, ainsi qu'un espace de création de contenu pour les formateurs certifiés. Les cours peuvent être consultés à tout moment via le compte étudiant de l'utilisateur.
                                </p>
                            </div>

                            <div className="py-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">2. Inscription et sécurité du compte</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Pour utiliser nos services, vous devez créer un compte en fournissant des informations exactes et complètes. Vous êtes seul responsable du maintien de la confidentialité de vos identifiants de connexion. Toute utilisation suspecte de votre compte doit nous être signalée immédiatement.
                                </p>
                            </div>

                            <div className="py-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">3. Achat de formations & Remboursement</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Les prix des cours sont fixés librement par les formateurs et affichés toutes taxes comprises. L'accès à la formation payante est débloqué immédiatement après validation du paiement par Stripe. Vous disposez d'un droit de rétractation de 14 jours, à condition de ne pas avoir complété plus de 20% des leçons payantes de la formation.
                                </p>
                            </div>

                            <div className="py-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">4. Propriété intellectuelle</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Tous les contenus (vidéos, supports PDF, audios de pratique, textes et structures) présents sur le site sont la propriété exclusive de leurs auteurs respectifs (les formateurs) ou de la plateforme. Tout téléchargement non autorisé, revente ou diffusion publique est strictement interdit et passible de poursuites judiciaires.
                                </p>
                            </div>

                            <div className="pt-8">
                                <h2 className="text-lg font-bold text-foreground mb-3">5. Résiliation du compte</h2>
                                <p className="text-sm leading-relaxed font-light text-foreground/70">
                                    Vous pouvez supprimer votre compte à tout moment depuis votre tableau de bord. FormationSession se réserve le droit de suspendre ou supprimer tout compte d'utilisateur en cas de non-respect flagrant des présentes CGU.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
