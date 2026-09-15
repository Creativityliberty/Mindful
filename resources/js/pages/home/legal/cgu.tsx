import { Link } from '@inertiajs/react';
import React from 'react';
import { Mail, FileText, ShieldAlert, CheckCircle2, AlertTriangle, Scale, Lock, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';

export default function CGU() {
    const { t } = useTranslation();

    const articles = [
        { id: 'art-1', num: 'Article 1', title: 'Mentions légales & Édition' },
        { id: 'art-2', num: 'Article 2', title: 'Objet & Champ d’application' },
        { id: 'art-3', num: 'Article 3', title: 'Inscription & Accès' },
        { id: 'art-4', num: 'Article 4', title: 'Usage personnel & Anti-mutualisation' },
        { id: 'art-5', num: 'Article 5', title: 'Propriété & Responsabilité LCEN' },
        { id: 'art-6', num: 'Article 6', title: 'Abonnements & Tarifs' },
        { id: 'art-7', num: 'Article 7', title: 'Résiliation & Données' },
        { id: 'art-8', num: 'Article 8', title: 'Responsabilité de l’Éditeur' },
        { id: 'art-9', num: 'Article 9', title: 'Données personnelles (RGPD)' },
        { id: 'art-10', num: 'Article 10', title: 'Modification des CGU/CGS' },
        { id: 'art-11', num: 'Article 11', title: 'Droit applicable & Juridiction' },
    ];

    return (
        <>
            <SEOHead
                title={`${t('legal_pages.cgu_title')} | FormationSession`}
                description={t('seo.cgu_description')}
                noIndex
            />
            
            <div className="relative min-h-screen bg-background pt-20">
                {/* Soft ambient background aura */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[140px]" />
                </div>

                <div className="relative w-full px-6 py-12 md:px-10 lg:px-16 max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="border-b border-border/20 pb-8 mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase mb-4">
                            <FileText className="h-3.5 w-3.5 text-sky-400" />
                            {t('legal_pages.badge')}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans mb-3">
                            Conditions Générales d'Utilisation et de Services (CGU/CGS)
                        </h1>
                        <p className="text-xs text-foreground/50 tracking-wide">
                            {t('legal_pages.last_updated')} — En vigueur au 15 septembre 2026
                        </p>
                    </div>

                    {/* Split-Screen Layout */}
                    <div className="grid gap-12 lg:grid-cols-[300px_1fr] items-start">
                        
                        {/* Left Column: Fixed summary card + Table of contents */}
                        <div className="lg:sticky lg:top-28 space-y-6">
                            <div className="rounded-2xl border border-border/30 bg-card/60 p-6 backdrop-blur-md shadow-lg space-y-4">
                                <h2 className="text-sm font-bold tracking-wider uppercase text-foreground/50 font-mono">
                                    Sommaire des Articles
                                </h2>
                                <nav className="space-y-1">
                                    {articles.map((art) => (
                                        <a
                                            key={art.id}
                                            href={`#${art.id}`}
                                            className="block rounded-lg px-2.5 py-1.5 text-xs text-foreground/70 hover:bg-secondary hover:text-sky-400 transition-colors font-medium"
                                        >
                                            <span className="font-mono text-[10px] text-foreground/40 mr-1.5">{art.num}</span>
                                            {art.title}
                                        </a>
                                    ))}
                                </nav>
                                
                                <div className="pt-4 border-t border-border/20 space-y-2">
                                    <span className="text-[10px] font-bold text-foreground/40 block uppercase">Support & Questions Juridiques</span>
                                    <a
                                        href="mailto:contact@formationsession.com"
                                        className="inline-flex items-center gap-2 text-xs text-sky-400 font-semibold hover:underline"
                                    >
                                        <Mail className="h-3.5 w-3.5" />
                                        contact@formationsession.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Legal Text Content */}
                        <div className="space-y-12 text-foreground/85 leading-relaxed font-light text-sm md:text-base">
                            
                            {/* Article 1 */}
                            <section id="art-1" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 1</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Mentions Légales et Édition du Site
                                </h2>
                                <p>
                                    Le présent site internet <strong>https://formationsession.com/</strong> (ci-après <em>« la Plateforme »</em>) est co-édité par deux entrepreneurs individuels agissant conjointement dans le cadre d'un pacte de co-édition :
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-sm text-foreground/75">
                                    <li>
                                        <strong>Fabienne Dizy-Olliveaud</strong>, Entrepreneur Individuel (EI), exerçant sous le nom commercial <em>« Spiritualité 1.618 »</em>, immatriculé(e) sous le numéro SIRET <strong>98200809600025</strong>, dont le siège social est situé au <strong>23A Rue Thiers 76170 Lillebonne</strong>, France.
                                    </li>
                                    <li>
                                        <strong>Lionel TAGNE</strong>, Entrepreneur Individuel (EI).
                                    </li>
                                </ul>
                                <p className="text-sm text-foreground/75">
                                    (Ci-après désignés ensemble l'<strong>« Éditeur »</strong>).
                                </p>
                                <div className="pt-2 text-sm text-foreground/75 space-y-1">
                                    <p><strong>Co-directeurs de la publication :</strong> Fabienne Dizy-Olliveaud et Lionel TAGNE</p>
                                    <p><strong>Adresse email de contact :</strong> <a href="mailto:contact@formationsession.com" className="text-sky-400 hover:underline">contact@formationsession.com</a></p>
                                    <p><strong>Hébergement de la Plateforme :</strong> Infrastructure serveurs haute disponibilité en Union Européenne.</p>
                                </div>
                            </section>

                            {/* Article 2 */}
                            <section id="art-2" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 2</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Objet et Champ d'Application
                                </h2>
                                <p>
                                    Les présentes Conditions Générales d'Utilisation et de Services (ci-après les <strong>« CGU/CGS »</strong>) ont pour objet de définir les conditions et modalités dans lesquelles l'Éditeur met à disposition des Utilisateurs (apprenants) et des Formateurs l'accès à la Plateforme et à ses services d'hébergement, de diffusion, de gestion pédagogique et de monétisation de formations en ligne.
                                </p>
                                <p>
                                    Toute création de compte, souscription d'un abonnement, achat ou utilisation de la Plateforme implique l'acceptation expresse, sans réserve ni restriction, des présentes CGU/CGS.
                                </p>
                            </section>

                            {/* Article 3 */}
                            <section id="art-3" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 3</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Inscription et Accès aux Services
                                </h2>
                                <p>
                                    <strong>Création de compte :</strong> L'accès aux fonctionnalités d'hébergement, de publication et de suivi des formations nécessite la création d'un compte personnel d'Utilisateur ou de Formateur.
                                </p>
                                <p>
                                    <strong>Exactitude des informations :</strong> Le Formateur s'engage à fournir des informations exactes, complètes et constamment tenues à jour (identité complète, coordonnées, informations d'immatriculation professionnelle le cas échéant, coordonnées de paiement). L'Éditeur se réserve le droit d'exiger toute pièce justificative pour vérifier l'identité du titulaire du compte.
                                </p>
                            </section>

                            {/* Article 4 - CRITICAL */}
                            <section id="art-4" className="rounded-2xl border border-rose-500/30 bg-rose-500/[0.02] p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <div className="flex items-center gap-2 text-rose-400">
                                    <ShieldAlert className="h-5 w-5" />
                                    <span className="text-xs font-mono font-bold tracking-wider uppercase">Article 4 — Clause Essentielle</span>
                                </div>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Usage Strictement Personnel du Compte, Interdiction de Mutualisation et Contenus Interdits
                                </h2>
                                
                                <div className="space-y-3">
                                    <p>
                                        <strong>Caractère individuel et intransférable :</strong> L'accès à la Plateforme et l'abonnement souscrit sont strictement personnels, nominatifs et intransférables. Un compte utilisateur ne peut correspondre qu'à une seule personne physique ou une seule entité juridique dûment identifiée lors de l'inscription.
                                    </p>
                                    
                                    <p>
                                        <strong>Interdiction formelle de prêter, louer ou héberger pour des tiers :</strong> Il est formellement interdit au Formateur :
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-sm text-foreground/80">
                                        <li>De prêter, vendre, louer, céder ou partager ses identifiants et accès à des tiers ;</li>
                                        <li>D'héberger, de publier ou de distribuer sur son compte des formations, cours, vidéos ou contenus créés par ou appartenant à des tiers, amis ou partenaires commerciaux non identifiés sur le compte ;</li>
                                        <li>De mutualiser le coût d'un abonnement mensuel ou annuel entre plusieurs formateurs distincts sous un même compte.</li>
                                    </ul>

                                    <p>
                                        <strong>Contrôle et vérification d'identité :</strong> L'Éditeur se réserve le droit de procéder à des contrôles automatisés ou manuels (cohérence du nom de l'auteur présent dans les médias avec l'identité du titulaire du compte, vérification du compte bancaire de versement, adresses IP d'accès).
                                    </p>

                                    <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-300 dark:text-rose-200 space-y-2">
                                        <p className="font-semibold">Sanctions en cas de fraude ou de partage (Clause Pénale) :</p>
                                        <p>
                                            Tout manquement à la présente clause constitue une violation grave des CGU/CGS. En cas de constatation ou de suspicion légitime de mutualisation de compte, l'Éditeur se réserve le droit d'appliquer immédiatement, de plein droit et sans préavis :
                                        </p>
                                        <ul className="list-disc pl-5 space-y-1 text-xs">
                                            <li>La suspension ou la résiliation définitive du compte du Formateur ;</li>
                                            <li>La suppression immédiate de la Plateforme de l'ensemble des formations litigieuses déposées pour le compte de tiers ;</li>
                                            <li>Le maintien de la facturation ou la conservation des sommes déjà perçues au titre de l'abonnement à titre de clause pénale, sans préjudice de poursuites et de dommages et intérêts complémentaires.</li>
                                        </ul>
                                    </div>

                                    <p className="pt-2">
                                        <strong>Interdiction des contenus illicites ou dangereux :</strong> Il est strictement interdit au Formateur de publier, héberger ou diffuser sur la Plateforme des formations ou contenus :
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1 text-sm text-foreground/80">
                                        <li>Contraires aux lois et règlements en vigueur, à l'ordre public ou aux bonnes mœurs ;</li>
                                        <li>Proposant des conseils médicaux, thérapeutiques ou de santé non fondés scientifiquement ou s'apparentant à de l'exercice illégal de la médecine ;</li>
                                        <li>Incitant à la violence, à la haine, à la discrimination, ou comportant des propos diffamatoires ou injurieux ;</li>
                                        <li>Promouvant des pratiques financières trompeuses, des arnaques, du sectarisme ou des activités illégales ;</li>
                                        <li>Portant atteinte aux droits de propriété intellectuelle de tiers.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Article 5 */}
                            <section id="art-5" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 5</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Propriété Intellectuelle, Responsabilité des Contenus et Statut d'Hébergeur (LCEN)
                                </h2>
                                <p>
                                    <strong>Propriété de la Plateforme :</strong> La structure générale de la Plateforme, les textes, graphismes, logiciels, codes sources, logos et marques sont la propriété exclusive de l'Éditeur ou de ses partenaires et sont protégés par le Code de la propriété intellectuelle.
                                </p>
                                <p>
                                    <strong>Garantie sur les contenus hébergés :</strong> Le Formateur déclare et garantit être le propriétaire exclusif ou l'ayant droit légitime de l'ensemble des contenus (vidéos, audio, documents PDF, images, textes) qu'il met en ligne sur la Plateforme.
                                </p>
                                <div className="rounded-xl border border-sky-400/30 bg-sky-400/[0.04] p-4 text-sm space-y-2">
                                    <p className="font-semibold text-sky-400">Statut d'Hébergeur Technique & Exonération (Loi LCEN Article 6) :</p>
                                    <p className="text-foreground/80">
                                        <strong>Absence d'obligation générale de surveillance :</strong> Conformément à l'article 6 de la Loi pour la Confiance dans l'Économie Numérique (LCEN), l'Éditeur agit en qualité de simple intermédiaire technique et hébergeur. À ce titre, l'Éditeur n'a aucune obligation générale de surveiller les formations, cours, vidéos ou documents déposés par les Formateurs, ni de rechercher des faits ou circonstances révélant des activités illicites.
                                    </p>
                                    <p className="text-foreground/80">
                                        <strong>Responsabilité exclusive du Formateur :</strong> Le Formateur est le seul et unique responsable du contenu, de la véracité, de la légalité et de la sécurité des formations qu'il crée et diffuse via la Plateforme. L'Éditeur décline toute responsabilité quant aux dommages directs ou indirects, matériels ou physiques, subis par des tiers ou des apprenants à la suite du suivi ou de l'application des conseils contenus dans une formation.
                                    </p>
                                    <p className="text-foreground/80">
                                        <strong>Procédure de signalement et retrait :</strong> Tout utilisateur ou tiers constatant un contenu manifestement illicite ou dangereux est invité à le signaler immédiatement à l'Éditeur à l'adresse <a href="mailto:contact@formationsession.com" className="text-sky-400 font-semibold underline">contact@formationsession.com</a>. Dès réception d'un signalement conforme, l'Éditeur se réserve le droit de retirer promptement le contenu litigieux et de suspendre le compte du Formateur concerné.
                                    </p>
                                </div>
                            </section>

                            {/* Article 6 */}
                            <section id="art-6" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 6</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Abonnements et Conditions Financières
                                </h2>
                                <p>
                                    <strong>Tarifs et souscription :</strong> Les tarifs des abonnements (mensuels ou annuels) pour l'hébergement des formations et l'accès aux outils de diffusion sont indiqués en Euros (HT/TTC) sur la page des tarifs de la Plateforme.
                                </p>
                                <p>
                                    <strong>Paiement et reconduction :</strong> Les abonnements sont payables d'avance par carte bancaire ou moyen de paiement sécurisé proposé sur la Plateforme. Ils sont reconduits tacitement pour une durée égale à la période initiale, sauf résiliation effectuée par le Formateur depuis son espace client avant la date d'échéance.
                                </p>
                                <p>
                                    <strong>Défaut de paiement :</strong> En cas d'échec de prélèvement ou de défaut de paiement, l'Éditeur se réserve le droit de suspendre l'accès aux services et de masquer les formations hébergées jusqu'à parfaite régularisation.
                                </p>
                            </section>

                            {/* Article 7 */}
                            <section id="art-7" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 7</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Résiliation et Conséquences sur les Données
                                </h2>
                                <p>
                                    <strong>Résiliation par le Formateur :</strong> Le Formateur peut résilier son abonnement à tout moment depuis son espace personnel. La résiliation prendra effet à la fin de la période d'abonnement en cours.
                                </p>
                                <p>
                                    <strong>Suppression des formations et sauvegarde :</strong> À la fin de la période d'abonnement ou en cas de résiliation pour manquement, l'Éditeur n'est plus tenu de maintenir l'hébergement des fichiers du Formateur. Il appartient exclusivement au Formateur d'effectuer une sauvegarde intégrale de l'ensemble de ses contenus avant la date de prise d'effet de la résiliation.
                                </p>
                            </section>

                            {/* Article 8 */}
                            <section id="art-8" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 8</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Responsabilité de l'Éditeur
                                </h2>
                                <p>
                                    <strong>Disponibilité du service :</strong> L'Éditeur s'efforce de maintenir la Plateforme accessible 24h/24 et 7j/7, mais ne garantit pas une continuité absolue de service. Il peut interrompre l'accès pour des raisons de maintenance, de mise à jour ou de contraintes techniques, sans que sa responsabilité ne puisse être engagée à ce titre.
                                </p>
                                <p>
                                    <strong>Force majeure :</strong> L'Éditeur ne pourra être tenu responsable des pannes, indisponibilités ou pertes de données causées par un cas de force majeure ou par une défaillance imprévisible de l'hébergeur tiers.
                                </p>
                            </section>

                            {/* Article 9 */}
                            <section id="art-9" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 9</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Données Personnelles (RGPD)
                                </h2>
                                <p>
                                    L'Éditeur collecte et traite les données personnelles des Utilisateurs et Formateurs dans le strict respect de la réglementation en vigueur (Règlement Général sur la Protection des Données - RGPD et Loi Informatique et Libertés).
                                </p>
                                <p>
                                    Pour en savoir plus sur la gestion de vos données et l'exercice de vos droits (accès, rectification, suppression, portabilité), veuillez consulter notre <Link href="/legal/confidentialite" className="text-sky-400 font-semibold hover:underline">Politique de Confidentialité</Link>.
                                </p>
                            </section>

                            {/* Article 10 */}
                            <section id="art-10" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 10</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Modification des CGU/CGS
                                </h2>
                                <p>
                                    L'Éditeur se réserve le droit de modifier les présentes CGU/CGS à tout moment pour les adapter aux évolutions légales, techniques ou commerciales. Les Utilisateurs et Formateurs seront informés de toute mise à jour par notification sur le site ou par courrier électronique. La poursuite de l'utilisation de la Plateforme après notification vaut acceptation pleine et entière des nouvelles CGU/CGS.
                                </p>
                            </section>

                            {/* Article 11 */}
                            <section id="art-11" className="rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm space-y-4 scroll-mt-28">
                                <span className="text-xs font-mono font-bold tracking-wider text-sky-400 uppercase">Article 11</span>
                                <h2 className="text-xl font-bold text-foreground font-sans">
                                    Droit Applicable et Juridiction Compétente
                                </h2>
                                <p>
                                    Les présentes CGU/CGS sont régies et soumises au <strong>droit français</strong>.
                                </p>
                                <p>
                                    En cas de litige relatif à leur interprétation, leur exécution ou leur résiliation, les parties s'engagent à rechercher préalablement une solution amiable. À défaut d'accord amiable, les tribunaux français compétents seront ceux du ressort du siège social ou du domicile désigné par l'Éditeur.
                                </p>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
