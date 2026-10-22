import { Button } from '@/components/ui/button';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, staggerChildren: 0.12 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
    },
};

export function Hero() {
    const { t } = useTranslation();

    const highlightPills = [
        t('hero.pill1'),
        t('hero.pill2'),
        t('hero.pill3'),
    ];

    const heroStats = [
        { label: t('hero.stat1_label'), value: t('hero.stat1_val') },
        { label: t('hero.stat2_label'), value: t('hero.stat2_val') },
        { label: t('hero.stat3_label'), value: t('hero.stat3_val') },
    ];

    return (
        <section
            className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden bg-background"
            role="region"
            aria-label="Hero FormationSession"
        >
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-0 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/[0.04] blur-[140px]" />
                <div className="absolute right-10 bottom-10 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[150px]" />
            </div>

            <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-16 md:px-8 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
                    
                    {/* Colonne Gauche : Titre, Promesse, CTA & Réassurance */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto max-w-2xl text-center lg:text-left lg:mx-0"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase backdrop-blur"
                        >
                            <Sparkles className="h-3.5 w-3.5 text-sky-500" />
                            {t('hero.badge')}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl font-sans leading-tight">
                                {t('hero.title_part1')}
                                <br />
                                <span className="bg-gradient-to-r from-sky-400 via-primary to-sky-500 bg-clip-text text-transparent">
                                    {t('hero.title_part2')}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="mx-auto lg:mx-0 mb-8 max-w-xl text-base md:text-lg text-foreground/65 font-light leading-relaxed"
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
                        >
                            <Button
                                size="lg"
                                className="group gap-2 rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12"
                                asChild
                            >
                                <Link href="/courses">
                                    {t('hero.explore_btn')}
                                    <ArrowRight
                                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </Button>

                            <Button
                                variant="secondary"
                                size="lg"
                                className="rounded-full h-12 border border-border/40 text-sm font-semibold tracking-wide"
                                asChild
                            >
                                <Link href="/become-trainer">
                                    {t('hero.become_trainer_btn')}
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.ul
                            variants={itemVariants}
                            className="mb-10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs font-medium text-foreground/70"
                        >
                            {highlightPills.map((pill) => (
                                <li
                                    key={pill}
                                    className="rounded-full border border-border/40 bg-secondary/40 px-3.5 py-1.5 backdrop-blur text-[11px] font-semibold tracking-wider uppercase"
                                >
                                    {pill}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            variants={statsVariants}
                            className="grid gap-4 rounded-3xl border border-border/30 bg-background/60 p-5 backdrop-blur-md sm:grid-cols-3 shadow-sm"
                        >
                            {heroStats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    className="space-y-1 text-center lg:text-left"
                                >
                                    <div className="text-[10px] tracking-wider md:text-xs text-foreground/50 uppercase font-semibold">
                                        {stat.label}
                                    </div>
                                    <div className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
                                        {stat.value}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Colonne Droite : L'Image Publicitaire Créateur & Interface Verre */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                        className="relative mx-auto w-full max-w-lg lg:max-w-none flex items-center justify-center"
                    >
                        {/* Glow halo under image */}
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-sky-400/10 to-transparent blur-2xl opacity-60" />

                        <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card shadow-2xl shadow-sky-500/10 group">
                            <img
                                src="/assets/images/hero_mentor_formationsession_glass.webp"
                                alt="Studio Formateur FormationSession : tableau de bord holographique en verre avec métriques en direct"
                                fetchPriority="high"
                                decoding="sync"
                                className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle glossy border highlight */}
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
