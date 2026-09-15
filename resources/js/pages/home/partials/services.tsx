import { motion, AnimatePresence } from 'framer-motion';
import {
    Flame,
    Sparkles,
    Palette,
    Utensils,
    Scissors,
    Brain,
    ArrowRight,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function Services() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    const services = [
        {
            id: 0,
            icon: Flame,
            title: t('services.item0_title'),
            description: t('services.item0_desc'),
            href: '/courses?category=bougies',
            color: 'from-amber-500 via-orange-500 to-rose-500',
            glowColor: 'rgba(245, 158, 11, 0.18)',
            accentColor: 'rgb(245, 158, 11)',
            image: '/assets/images/theme_bougies.jpg',
        },
        {
            id: 1,
            icon: Sparkles,
            title: t('services.item1_title'),
            description: t('services.item1_desc'),
            href: '/courses?category=onglerie',
            color: 'from-pink-500 via-rose-500 to-amber-400',
            glowColor: 'rgba(244, 114, 182, 0.18)',
            accentColor: 'rgb(244, 114, 182)',
            image: '/assets/images/theme_onglerie.jpg',
        },
        {
            id: 2,
            icon: Palette,
            title: t('services.item2_title'),
            description: t('services.item2_desc'),
            href: '/courses?category=ceramique',
            color: 'from-emerald-500 via-teal-600 to-stone-600',
            glowColor: 'rgba(16, 185, 129, 0.18)',
            accentColor: 'rgb(16, 185, 129)',
            image: '/assets/images/theme_ceramique.jpg',
        },
        {
            id: 3,
            icon: Utensils,
            title: t('services.item3_title'),
            description: t('services.item3_desc'),
            href: '/courses?category=patisserie',
            color: 'from-amber-600 via-yellow-600 to-orange-700',
            glowColor: 'rgba(217, 119, 6, 0.18)',
            accentColor: 'rgb(217, 119, 6)',
            image: '/assets/images/theme_patisserie.jpg',
        },
        {
            id: 4,
            icon: Scissors,
            title: t('services.item4_title'),
            description: t('services.item4_desc'),
            href: '/courses?category=couture',
            color: 'from-purple-500 via-indigo-600 to-blue-600',
            glowColor: 'rgba(139, 92, 246, 0.18)',
            accentColor: 'rgb(139, 92, 246)',
            image: '/assets/images/theme_couture.jpg',
        },
        {
            id: 5,
            icon: Brain,
            title: t('services.item5_title'),
            description: t('services.item5_desc'),
            href: '/courses?category=digital',
            color: 'from-sky-500 via-blue-600 to-cyan-500',
            glowColor: 'rgba(14, 165, 233, 0.18)',
            accentColor: 'rgb(14, 165, 233)',
            image: '/assets/images/theme_digital.jpg',
        },
    ];

    // Autoplay fluide du carrousel d'univers
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, services.length]);

    const activeService = services[activeIndex];

    return (
        <section 
            className="relative py-28 md:py-36 overflow-hidden bg-background transition-colors duration-700"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Halo réactif à l'Univers sélectionné */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    key={`aura-${activeService.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1 }}
                    style={{ backgroundColor: activeService.glowColor }}
                    className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* En-tête de section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/80 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60">
                        {t('services.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('services.title')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/70">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                {/* Système d'Orbite Quantum & Contenu Dynamique */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full min-h-[520px]">
                    
                    {/* Zone de l'Orbite Centrale */}
                    <div className="relative flex items-center justify-center w-[340px] h-[340px] md:w-[460px] md:h-[460px] shrink-0">
                        {/* Cercle d'orbite extérieur avec effets subtils */}
                        <div className="absolute inset-0 rounded-full border border-border/40 dark:border-white/10 pointer-events-none" />
                        
                        {/* Cœur visuel de l'Univers sélectionné */}
                        <div className="relative flex items-center justify-center w-44 h-44 md:w-56 md:h-56 rounded-full border border-white/40 dark:border-white/20 shadow-2xl backdrop-blur-md z-20 overflow-hidden group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={`img-${activeService.id}`}
                                    src={activeService.image}
                                    alt={activeService.title}
                                    initial={{ opacity: 0, scale: 1.15 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-transform duration-700 group-hover:scale-105"
                                />
                            </AnimatePresence>

                            {/* Cartouche translucide bas de photo */}
                            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 flex flex-col items-center text-center">
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                    {t('services.universe', { number: activeIndex + 1 })}
                                </p>
                                <p className="text-xs md:text-sm font-semibold text-white tracking-wide line-clamp-1">
                                    {activeService.title}
                                </p>
                            </div>
                        </div>

                        {/* Nœuds d'Orbites Satellite (6 Univers) */}
                        {services.map((service, index) => {
                            const angle = (index / services.length) * (2 * Math.PI) - (Math.PI / 2);
                            const radius = 175; // rayon d'orbite étendu
                            const x = Math.round(Math.cos(angle) * radius);
                            const y = Math.round(Math.sin(angle) * radius);
                            const isSelected = activeIndex === index;

                            return (
                                <motion.button
                                    key={service.id}
                                    style={{
                                        x: `${x}px`,
                                        y: `${y}px`,
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => setActiveIndex(index)}
                                    className={`absolute flex h-13 w-13 md:h-16 md:w-16 items-center justify-center rounded-full border transition-all duration-300 z-30 shadow-lg ${
                                        isSelected
                                            ? `border-white bg-white text-slate-900 scale-110 shadow-2xl ring-4 ring-offset-2 ring-offset-background ring-primary/40`
                                            : 'border-border/60 bg-background/90 text-foreground/70 hover:text-foreground hover:border-border hover:bg-card'
                                    }`}
                                >
                                    <service.icon className={`h-5 w-5 md:h-6 md:w-6 ${isSelected ? 'text-slate-900' : ''}`} />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Panneau de Présentation & Description */}
                    <div className="flex-1 flex flex-col justify-center min-h-[260px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -24 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="space-y-6 max-w-xl text-center lg:text-left"
                            >
                                {/* Badge branding coloré par Univers */}
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gradient-to-r ${activeService.color} text-white shadow-md`}>
                                        {t('services.universe', { number: activeIndex + 1 })}
                                    </span>
                                </div>
                                
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                                    {activeService.title}
                                </h3>

                                <p className="text-lg leading-relaxed text-foreground/70">
                                    {activeService.description}
                                </p>

                                <div className="pt-2 flex justify-center lg:justify-start">
                                    <Link
                                        href={activeService.href}
                                        className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg transition-all hover:gap-3.5 hover:shadow-xl hover:scale-[1.02]"
                                    >
                                        {t('services.join_learning')}
                                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Puces de navigation rapide sous la description */}
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-2">
                            {services.map((service, index) => (
                                <button
                                    key={`bullet-${service.id}`}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        activeIndex === index
                                            ? 'w-8 bg-primary'
                                            : 'w-2.5 bg-border/60 hover:bg-border'
                                    }`}
                                    aria-label={`Aller à l'univers ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
