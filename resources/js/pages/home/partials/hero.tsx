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
            className="relative isolate flex min-h-[90vh] md:min-h-[94vh] w-full items-center overflow-hidden bg-slate-950 text-white"
            role="region"
            aria-label="Hero FormationSession"
        >
            {/* Background Image Hero Immersif */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/assets/images/hero_formatrice_dashboard_glass.webp"
                    alt="Formatrice FormationSession : tableau de bord holographique en verre avec métriques et gestion en direct"
                    fetchPriority="high"
                    decoding="sync"
                    className="h-full w-full object-cover object-[72%_center] md:object-right-center"
                />

                {/* Dégradé cinématique pour lisibilité parfaite du texte à gauche et transition douce */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent md:to-slate-950/20" />
                
                {/* Dégradés haut et bas pour s'intégrer harmonieusement avec la navbar et la section suivante */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-slate-950/60 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-8 lg:px-12">
                <div className="max-w-2xl text-left">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-300 uppercase backdrop-blur-md shadow-sm"
                        >
                            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                            {t('hero.badge')}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl font-sans leading-[1.12] drop-shadow-md">
                                {t('hero.title_part1')}
                                <br />
                                <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-amber-200 bg-clip-text text-transparent">
                                    {t('hero.title_part2')}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="mb-8 max-w-xl text-base md:text-lg text-slate-200 font-light leading-relaxed drop-shadow-sm"
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mb-8 flex flex-col items-stretch sm:items-center gap-4 sm:flex-row sm:justify-start"
                        >
                            <Button
                                size="lg"
                                className="group gap-2 rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12 bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/25 transition-all"
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
                                className="rounded-full h-12 border border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-md text-sm font-semibold tracking-wide transition-all"
                                asChild
                            >
                                <Link href="/become-trainer">
                                    {t('hero.become_trainer_btn')}
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.ul
                            variants={itemVariants}
                            className="mb-10 flex flex-wrap items-center justify-start gap-2.5 text-xs font-medium text-slate-300"
                        >
                            {highlightPills.map((pill) => (
                                <li
                                    key={pill}
                                    className="rounded-full border border-white/15 bg-slate-900/60 px-3.5 py-1.5 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-slate-200 shadow-sm"
                                >
                                    {pill}
                                </li>
                            ))}
                        </motion.ul>

                        <motion.div
                            variants={statsVariants}
                            className="grid gap-4 rounded-3xl border border-white/15 bg-slate-900/60 p-5 backdrop-blur-md sm:grid-cols-3 shadow-xl"
                        >
                            {heroStats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    className="space-y-1 text-left"
                                >
                                    <div className="text-[10px] tracking-wider md:text-xs text-slate-400 uppercase font-semibold">
                                        {stat.label}
                                    </div>
                                    <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                                        {stat.value}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
