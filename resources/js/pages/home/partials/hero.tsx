import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation();
    const heroRef = useRef<HTMLDivElement>(null);

    // Écoute de la progression du scroll sur la section Hero
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    // 1. L'image de fond s'assombrit et zoome très subtilement au scroll
    const imageScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.08]);
    const overlayDarkness = useTransform(scrollYProgress, [0, 0.45], [0.35, 0.88]);

    // 2. Le texte et les éléments de gauche apparaissent progressivement avec le scroll
    const textOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.05, 0.35], [40, 0]);

    // 3. L'indicateur "Défiler" disparaît dès qu'on commence à scroller
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

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
        <div ref={heroRef} className="relative h-[220vh] w-full bg-slate-950">
            {/* Scène épinglée (Sticky) sur toute la hauteur de la fenêtre */}
            <section
                className="sticky top-0 flex h-screen w-full items-center overflow-hidden text-white"
                role="region"
                aria-label="Hero FormationSession"
            >
                {/* 1. L'Image en fond : visible et majestueuse dès le départ */}
                <motion.div
                    style={{ scale: imageScale }}
                    className="absolute inset-0 z-0 select-none will-change-transform"
                >
                    <img
                        src="/assets/images/hero_formatrice_dashboard_glass.webp"
                        alt="Formatrice FormationSession : tableau de bord holographique en verre avec métriques et gestion en direct"
                        fetchPriority="high"
                        decoding="sync"
                        className="h-full w-full object-cover object-[72%_center] md:object-right-center"
                    />
                </motion.div>

                {/* 2. Le voile sombre qui s'intensifie au scroll pour révéler le texte */}
                <motion.div
                    style={{ opacity: overlayDarkness }}
                    className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30 backdrop-blur-[2px]"
                />

                {/* Dégradés d'intégration haut et bas */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-28 bg-gradient-to-b from-slate-950/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-background via-slate-950/60 to-transparent" />

                {/* Petit badge incitatif au départ : "Défilez pour découvrir" */}
                <motion.div
                    style={{ opacity: scrollHintOpacity }}
                    className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300/80"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                        Scrollez pour entrer dans l'académie
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <ChevronDown className="h-5 w-5 text-sky-400" />
                    </motion.div>
                </motion.div>

                {/* 3. Contenu textuel : émerge au fur et à mesure du scroll */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-8 lg:px-12 will-change-transform"
                >
                    <div className="max-w-2xl text-left">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-300 uppercase backdrop-blur-md shadow-sm">
                            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                            {t('hero.badge')}
                        </div>

                        <div>
                            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl font-sans leading-[1.12] drop-shadow-md">
                                {t('hero.title_part1')}
                                <br />
                                <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-amber-200 bg-clip-text text-transparent">
                                    {t('hero.title_part2')}
                                </span>
                            </h1>
                        </div>

                        <p className="mb-8 max-w-xl text-base md:text-lg text-slate-200 font-light leading-relaxed drop-shadow-sm">
                            {t('hero.description')}
                        </p>

                        <div className="mb-8 flex flex-col items-stretch sm:items-center gap-4 sm:flex-row sm:justify-start">
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
                        </div>

                        <ul className="mb-10 flex flex-wrap items-center justify-start gap-2.5 text-xs font-medium text-slate-300">
                            {highlightPills.map((pill) => (
                                <li
                                    key={pill}
                                    className="rounded-full border border-white/15 bg-slate-900/60 px-3.5 py-1.5 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-slate-200 shadow-sm"
                                >
                                    {pill}
                                </li>
                            ))}
                        </ul>

                        <div className="grid gap-4 rounded-3xl border border-white/15 bg-slate-900/60 p-5 backdrop-blur-md sm:grid-cols-3 shadow-xl">
                            {heroStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="space-y-1 text-left"
                                >
                                    <div className="text-[10px] tracking-wider md:text-xs text-slate-400 uppercase font-semibold">
                                        {stat.label}
                                    </div>
                                    <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
