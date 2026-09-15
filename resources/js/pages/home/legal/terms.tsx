import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';
import { Shield, Mail, Building, Server } from 'lucide-react';

export default function Terms() {
    const { t } = useTranslation();

    return (
        <>
            <SEOHead
                title={`${t('legal_pages.terms_title')} | FormationSession`}
                description={t('seo.terms_description')}
                noIndex
            />
            
            <div className="relative min-h-screen pt-20 bg-background">
                {/* Subtle aura */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-4xl px-6 py-12 md:px-8">
                    <div className="border-b border-border/40 pb-6 mb-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase mb-4">
                            <Shield className="h-3.5 w-3.5 text-sky-400" />
                            {t('legal_pages.badge')}
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-3 font-sans">
                            {t('legal_pages.terms_title')}
                        </h1>
                        <p className="text-xs text-foreground/50 tracking-wide">{t('legal_pages.last_updated')}</p>
                    </div>

                    <div className="space-y-10 text-foreground/80 leading-relaxed font-light">
                        {/* 1. Éditeur */}
                        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 md:p-8 backdrop-blur-sm space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                    <Building className="h-5 w-5" />
                                </div>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    1. Édition du site & Co-direction
                                </h2>
                            </div>
                            <p className="text-sm text-foreground/75 leading-relaxed">
                                Le site internet <strong>https://formationsession.com</strong> est co-édité par deux entrepreneurs individuels agissant conjointement dans le cadre d'un pacte de co-édition :
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/75">
                                <li>
                                    <strong>Fabienne Dizy-Olliveaud</strong>, Entrepreneur Individuel (EI), exerçant sous le nom commercial <em>« Spiritualité 1.618 »</em>, immatriculée sous le numéro SIRET <strong>98200809600025</strong>, dont le siège social est situé au <strong>23A Rue Thiers, 76170 Lillebonne</strong>, France.
                                </li>
                                <li>
                                    <strong>Lionel TAGNE</strong>, Entrepreneur Individuel (EI).
                                </li>
                            </ul>
                            <div className="pt-2 text-sm text-foreground/75">
                                <p><strong>Co-directeurs de la publication :</strong> Fabienne Dizy-Olliveaud et Lionel TAGNE</p>
                                <p><strong>Email de contact officiel :</strong> <a href="mailto:contact@formationsession.com" className="text-sky-400 font-medium hover:underline">contact@formationsession.com</a></p>
                            </div>
                        </div>

                        {/* 2. Hébergement */}
                        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 md:p-8 backdrop-blur-sm space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                    <Server className="h-5 w-5" />
                                </div>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    2. Hébergement de la plateforme
                                </h2>
                            </div>
                            <p className="text-sm text-foreground/75 leading-relaxed">
                                L'infrastructure applicative, les médias de cours et la base de données sécurisée sont hébergés sur des serveurs haute disponibilité en Union Européenne, garantissant la conformité RGPD, la redondance et la protection des données utilisateurs.
                            </p>
                        </div>

                        {/* 3. Propriété intellectuelle */}
                        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 md:p-8 backdrop-blur-sm space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    3. Propriété intellectuelle & Droits d'auteur
                                </h2>
                            </div>
                            <p className="text-sm text-foreground/75 leading-relaxed">
                                L'ensemble des éléments graphiques, marques, logos, structure logicielle, interfaces et code source de la plateforme sont la propriété exclusive des co-éditeurs et sont protégés par le Code de la propriété intellectuelle.
                            </p>
                            <p className="text-sm text-foreground/75 leading-relaxed">
                                Les contenus pédagogiques (vidéos, fiches PDF, supports et cours) hébergés sur la plateforme demeurent la propriété exclusive de leurs auteurs / formateurs respectifs, conformément à nos Conditions Générales d'Utilisation et de Services (CGU/CGS).
                            </p>
                        </div>

                        {/* 4. Contact légal */}
                        <div className="rounded-2xl border border-border/40 bg-card/50 p-6 md:p-8 backdrop-blur-sm space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    4. Contact et réclamations
                                </h2>
                            </div>
                            <p className="text-sm text-foreground/75 leading-relaxed">
                                Pour toute question juridique, notification de contenu ou exercice de vos droits, vous pouvez contacter directement l'équipe éditoriale à l'adresse suivante :
                            </p>
                            <a href="mailto:contact@formationsession.com" className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-semibold text-sky-400 hover:bg-sky-400/20 transition-colors">
                                <Mail className="h-3.5 w-3.5" />
                                contact@formationsession.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
