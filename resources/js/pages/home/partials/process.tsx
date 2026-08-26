import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, UserPlus, PlayCircle, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        number: '01',
        icon: Search,
        title: 'Explorez les formations',
        description:
            'Parcourez notre catalogue de cours en radiesthésie, pendule et équilibrage des chakras, filtrés par thème et niveau.',
    },
    {
        number: '02',
        icon: UserPlus,
        title: 'Créez votre compte',
        description:
            'Inscrivez-vous gratuitement, choisissez votre formation et accédez à votre espace d’apprentissage personnalisé.',
    },
    {
        number: '03',
        icon: PlayCircle,
        title: 'Suivez votre cours',
        description:
            'Progressez à votre rythme avec des vidéos, exercices guidés et ressources proposés par votre formateur.',
    },
    {
        number: '04',
        icon: Sparkles,
        title: 'Pratiquez au quotidien',
        description:
            'Appliquez les techniques dans votre quotidien et développez votre sensibilité énergétique pas à pas.',
    },
] as const;

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Détection du scroll sur le conteneur pour remplir la ligne du temps (fil d'or)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="relative bg-muted/20 py-24 md:py-32 dark:bg-foreground/[0.01]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[140px] dark:bg-primary/[0.04]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* en-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-24 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        Comment ça marche
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Commencer votre formation est simple
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                        En quelques étapes, accédez à des formations de qualité en radiesthésie et pratiques énergétiques, et progressez à votre rythme, pas à pas.
                    </p>
                </motion.div>

                {/* Sticky layout on large screens */}
                <div className="relative grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
                    
                    {/* Colonne de gauche (Sticky) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-40 flex h-fit flex-col justify-start">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Votre Parcours</p>
                            <h3 className="text-3xl font-semibold text-foreground mb-8 max-w-xs">
                                4 étapes simples vers l'autonomie
                            </h3>
                            
                            {/* Éléments visuels interactifs de progression */}
                            <div className="relative flex flex-col gap-6 pl-4 border-l border-border/50">
                                {/* Fil d'or dynamique qui descend au scroll */}
                                <motion.div 
                                    className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-primary via-amber-400 to-primary origin-top"
                                    style={{ height: heightTransform }}
                                />
                                {steps.map((step, idx) => (
                                    <div key={`left-${step.number}`} className="flex items-center gap-4 py-1">
                                        <div className="text-sm font-bold text-foreground/40">{step.number}</div>
                                        <div className="text-sm font-medium text-foreground/80">{step.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite (Défilement des étapes) */}
                    <div className="flex flex-col gap-12 lg:gap-24">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.21, 0.47, 0.32, 0.98],
                                    }}
                                    className="group relative flex flex-col items-start gap-6 rounded-3xl border border-border/30 bg-background/50 p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:shadow-xl dark:border-border/40 dark:bg-background/30"
                                >
                                    <div className="flex w-full items-start justify-between">
                                        {/* Icône de l'étape */}
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/40 bg-background text-primary dark:border-border/50 dark:bg-background/80 transition-transform duration-500 group-hover:scale-110">
                                            <Icon className="h-6 w-6" aria-hidden="true" />
                                        </div>

                                        {/* Grand chiffre de progression */}
                                        <span className="text-6xl font-extrabold tracking-tight text-foreground/5 opacity-40 select-none group-hover:text-primary/10 transition-colors duration-500">
                                            {step.number}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-foreground/60 max-w-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
