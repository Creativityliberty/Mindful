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
            className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-background"
            role="region"
            aria-label="Hero FormationSession"
        >
            {/* fond avec dégradés - Soft sky blue */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/[0.015] blur-[140px]" />
                <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/[0.01] blur-[120px]" />
            </div>

            <div className="absolute inset-y-0 right-0 z-[5] hidden w-[52%] lg:block">
                <img
                    src="/assets/images/service_acces_lux.jpg"
                    alt="Atelier ensoleillé"
                    aria-hidden="true"
                    fetchPriority="high"
                    decoding="sync"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
            </div>

            {/* contenu texte & CTA */}
            <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-24 md:px-8 lg:px-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-4xl text-center lg:text-left lg:mx-0 lg:max-w-2xl"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-foreground/70 uppercase backdrop-blur"
                    >
                        <Sparkles
                            className="h-4 w-4 text-sky-400"
                            aria-hidden="true"
                        />
                        {t('hero.badge')}
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                    >
                        <motion.h1
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 8,
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl font-sans"
                        >
                            {t('hero.title_part1')}
                            <br />
                            {t('hero.title_part2')}
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto lg:mx-0 mb-10 max-w-2xl text-base md:text-lg text-foreground/60 font-light leading-relaxed"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
                    >
                        <Button
                            size="lg"
                            className="group gap-2 rounded-full px-8 text-base tracking-[0.2em] uppercase"
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
                            className="rounded-full"
                            asChild
                        >
                            <Link href="/become-trainer">
                                {t('hero.become_trainer_btn')}
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.ul
                        variants={itemVariants}
                        className="mb-12 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs tracking-[0.2em] text-foreground/70 uppercase dark:text-foreground/80"
                    >
                        {highlightPills.map((pill) => (
                            <li
                                key={pill}
                                className="rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur dark:border-border/60 dark:bg-background/70"
                            >
                                {pill}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        variants={statsVariants}
                        className="grid gap-4 rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm sm:grid-cols-3 dark:border-border/60 dark:bg-background/70"
                    >
                        {heroStats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="space-y-1 text-center lg:text-left"
                            >
                                <div className="text-xs tracking-[0.3em] text-foreground/50 uppercase dark:text-foreground/60">
                                    {stat.label}
                                </div>
                                <div className="text-3xl font-semibold text-foreground">
                                    {stat.value}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
