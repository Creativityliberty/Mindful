import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation();
    const heroRef = useRef<HTMLDivElement>(null);

    // Progression du scroll sur la section Hero
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end end'],
    });

    // 1. Image : Net au départ, s'assombrit progressivement quand le texte monte
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const overlayDarkness = useTransform(scrollYProgress, [0, 0.25, 0.7], [0.3, 0.65, 0.9]);

    // 2. Disparition rapide du hint de scroll
    const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

    // 3. Apparition séquentielle immédiate et réactive (dès les premiers pixels de scroll)
    // 3.1 Badge (très tôt : 3% à 12%)
    const badgeOpacity = useTransform(scrollYProgress, [0.03, 0.12], [0, 1]);
    const badgeY = useTransform(scrollYProgress, [0.03, 0.12], [24, 0]);

    // 3.2 Titre principal (10% à 22%)
    const titleOpacity = useTransform(scrollYProgress, [0.10, 0.22], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0.10, 0.22], [28, 0]);

    // 3.3 Description (20% à 34%)
    const descOpacity = useTransform(scrollYProgress, [0.20, 0.34], [0, 1]);
    const descY = useTransform(scrollYProgress, [0.20, 0.34], [28, 0]);

    // 3.4 Boutons d'Action CTA (32% à 46%)
    const ctaOpacity = useTransform(scrollYProgress, [0.32, 0.46], [0, 1]);
    const ctaY = useTransform(scrollYProgress, [0.32, 0.46], [28, 0]);

    // 3.5 Pilules réassurance (44% à 58%)
    const pillsOpacity = useTransform(scrollYProgress, [0.44, 0.58], [0, 1]);
    const pillsY = useTransform(scrollYProgress, [0.44, 0.58], [24, 0]);

    // 3.6 Statistiques en verre (56% à 72%)
    const statsOpacity = useTransform(scrollYProgress, [0.56, 0.72], [0, 1]);
    const statsY = useTransform(scrollYProgress, [0.56, 0.72], [28, 0]);

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
            {/* Scène épinglée (Sticky) pendant la séquence de scroll */}
            <section
                className="sticky top-0 flex h-screen w-full items-center overflow-hidden text-white"
                role="region"
                aria-label="Hero FormationSession"
            >
                {/* 1. L'Image Haute Définition originale du Tableau de Bord en action */}
                <motion.div
                    style={{ scale: imageScale }}
                    className="absolute inset-0 z-0 select-none will-change-transform"
                >
                    <picture>
                        <source
                            srcSet="/assets/images/hero_vendez_vos_connaissances.webp"
                            type="image/webp"
                        />
                        <img
                            src="/assets/images/hero_vendez_vos_connaissances.png"
                            alt="FormationSession : Vendez vos connaissances et compétences"
                            fetchPriority="high"
                            decoding="sync"
                            className="h-full w-full object-cover object-[70%_center] md:object-right-center"
                        />
                    </picture>
                </motion.div>

                {/* 2. Voile cinématographique adaptatif */}
                <motion.div
                    style={{ opacity: overlayDarkness }}
                    className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20 backdrop-blur-[1.5px]"
                />

                {/* Dégradés d'intégration haut et bas */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-28 bg-gradient-to-b from-slate-950/85 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-background via-slate-950/60 to-transparent" />

                {/* Petit badge incitatif au départ : "Défilez pour découvrir" */}
                <motion.div
                    style={{ opacity: scrollHintOpacity }}
                    className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase bg-slate-950/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-400/30 text-sky-200 shadow-lg shadow-sky-950/50">
                        Scrollez pour découvrir la plateforme
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <ChevronDown className="h-5 w-5 text-sky-400" />
                    </motion.div>
                </motion.div>

                {/* 3. Contenu textuel : Révélé UN PAR UN au fil du scroll */}
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-8 lg:px-12">
                    <div className="max-w-2xl text-left">
                        {/* 3.1 Badge */}
                        <motion.div
                            style={{ opacity: badgeOpacity, y: badgeY }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-sky-300 uppercase backdrop-blur-md shadow-sm will-change-transform"
                        >
                            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                            {t('hero.badge')}
                        </motion.div>

                        {/* 3.2 Titre Principal */}
                        <motion.div
                            style={{ opacity: titleOpacity, y: titleY }}
                            className="will-change-transform"
                        >
                            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl font-sans leading-[1.12] drop-shadow-md">
                                {t('hero.title_part1')}
                                <br />
                                <span className="bg-gradient-to-r from-sky-300 via-sky-100 to-amber-200 bg-clip-text text-transparent">
                                    {t('hero.title_part2')}
                                </span>
                            </h1>
                        </motion.div>

                        {/* 3.3 Description */}
                        <motion.p
                            style={{ opacity: descOpacity, y: descY }}
                            className="mb-8 max-w-xl text-base md:text-lg text-slate-200 font-light leading-relaxed drop-shadow-sm will-change-transform"
                        >
                            {t('hero.description')}
                        </motion.p>

                        {/* 3.4 Boutons d'Action (CTA) */}
                        <motion.div
                            style={{ opacity: ctaOpacity, y: ctaY }}
                            className="mb-8 flex flex-col items-stretch sm:items-center gap-4 sm:flex-row sm:justify-start will-change-transform"
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

                        {/* 3.5 Pilules / Mots-clés */}
                        <motion.ul
                            style={{ opacity: pillsOpacity, y: pillsY }}
                            className="mb-10 flex flex-wrap items-center justify-start gap-2.5 text-xs font-medium text-slate-300 will-change-transform"
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

                        {/* 3.6 Métriques et Statistiques Clés */}
                        <motion.div
                            style={{ opacity: statsOpacity, y: statsY }}
                            className="grid gap-4 rounded-3xl border border-white/15 bg-slate-900/60 p-5 backdrop-blur-md sm:grid-cols-3 shadow-xl will-change-transform"
                        >
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
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
