import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const avis = [
    {
        initiales: 'FD',
        nom: 'Fabienne Dizy',
        role: 'Accompagnatrice Holistique',
        entreprise: 'Cabinet L\'Orisugi',
        contenu:
            'La formation Orisugi a profondément enrichi mes accompagnements. Allier le Fil d\'Or et la création contemplative me permet de guider mes consultants vers des libérations intérieures douces et durables.',
    },
    {
        initiales: 'JR',
        nom: 'Julien R.',
        role: 'Praticien Énergétique',
        entreprise: 'Soins à domicile',
        contenu:
            'L\'initiation au LaHoChi avec Louise a été un tournant pour ma pratique. Le livret pédagogique est extrêmement clair et l\'accompagnement individuel m\'a donné la confiance nécessaire pour lancer mes premières séances.',
    },
    {
        initiales: 'AL',
        nom: 'Amandine L.',
        role: 'Étudiante en radiesthésie',
        entreprise: 'Apprentissage autonome',
        contenu:
            'Je partais de zéro et j\'appréhendais beaucoup le maniement du pendule. Grâce aux exercices simples et à la bienveillance du cours, j\'ai pu établir mes premières conventions et ressentir les énergies rapidement.',
    },
    {
        initiales: 'SM',
        nom: 'Sophie M.',
        role: 'Praticienne Reiki',
        entreprise: 'Reconversion',
        contenu:
            'Cette plateforme n\'est pas juste un catalogue de vidéos. On y trouve un véritable espace d\'échange et d\'écoute. Pouvoir poser des questions aux formateurs et partager avec d\'autres élèves change tout.',
    },
] as const;

const avisLoop = [...avis, ...avis];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[140px] dark:bg-primary/[0.05]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mb-16 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        Témoignages
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Ce que nos étudiants partagent
                    </h2>

                    <p className="mx-auto max-w-xl text-lg text-foreground/60">
                        Découvrez les retours d'expérience et les histoires de transformation de ceux qui ont suivi nos formations holistiques.
                    </p>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <motion.div
                    className="flex w-max gap-5 px-6 md:px-8 lg:px-12"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 30,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {avisLoop.map((temoignage, index) => (
                        <div
                            key={`${temoignage.nom}-${index}`}
                            className="flex min-h-[260px] w-[320px] shrink-0 flex-col gap-5 rounded-2xl border border-border/40 bg-background/60 p-7 backdrop-blur-sm dark:border-border/50 dark:bg-background/50"
                        >
                            <Quote
                                className="h-7 w-7 text-primary/40"
                                aria-hidden="true"
                            />

                            <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                                {temoignage.contenu}
                            </p>

                            <div className="flex items-center gap-3 border-t border-border/30 pt-5">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                    {temoignage.initiales}
                                </div>

                                <div>
                                    <div className="text-sm font-semibold text-foreground">
                                        {temoignage.nom}
                                    </div>

                                    <div className="text-xs text-foreground/50">
                                        {temoignage.role} ·{' '}
                                        {temoignage.entreprise}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
