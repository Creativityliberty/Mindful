import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain,
    Flame,
    Leaf,
    HeartPulse,
    GraduationCap,
    LayoutDashboard,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Services() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const services = [
        {
            id: 0,
            icon: Brain,
            title: t('services.item0_title'),
            description: t('services.item0_desc'),
            href: '/courses?category=radiesthesie',
            color: 'from-purple-500 to-indigo-600',
            glow: 'rgba(168, 85, 247, 0.25)',
            image: '/assets/images/service_radiesthesie.jpg',
        },
        {
            id: 1,
            icon: Flame,
            title: t('services.item1_title'),
            description: t('services.item1_desc'),
            href: '/courses?category=pendule',
            color: 'from-amber-400 to-orange-600',
            glow: 'rgba(245, 158, 11, 0.25)',
            image: '/assets/images/service_pendule.jpg',
        },
        {
            id: 2,
            icon: Leaf,
            title: t('services.item2_title'),
            description: t('services.item2_desc'),
            href: '/courses?category=chakras',
            color: 'from-emerald-400 to-teal-600',
            glow: 'rgba(16, 185, 129, 0.25)',
            image: '/assets/images/service_chakras.jpg',
        },
        {
            id: 3,
            icon: HeartPulse,
            title: t('services.item3_title'),
            description: t('services.item3_desc'),
            href: '/courses?category=energetique',
            color: 'from-rose-500 to-red-600',
            glow: 'rgba(239, 68, 68, 0.25)',
            image: '/assets/images/service_energetique.jpg',
        },
        {
            id: 4,
            icon: GraduationCap,
            title: t('services.item4_title'),
            description: t('services.item4_desc'),
            href: '/courses',
            color: 'from-sky-400 to-blue-600',
            glow: 'rgba(56, 189, 248, 0.25)',
            image: '/assets/images/service_certifiant.jpg',
        },
        {
            id: 5,
            icon: LayoutDashboard,
            title: t('services.item5_title'),
            description: t('services.item5_desc'),
            href: '/become-trainer',
            color: 'from-pink-500 to-rose-600',
            glow: 'rgba(236, 72, 153, 0.25)',
            image: '/assets/images/service_formateur.jpg',
        },
    ];

    const activeService = services[activeIndex];

    return (
        <section className="relative py-28 md:py-36 overflow-hidden bg-background">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.02] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        {t('services.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('services.title')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                        {t('services.subtitle')}
                    </p>
                </motion.div>

                {/* The Quantum Orbit System Layout */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full min-h-[500px]">
                    
                    {/* Orbit Ring area */}
                    <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[420px] md:h-[420px] shrink-0">
                        {/* Outer Orbit Circle */}
                        <div className="absolute inset-0 rounded-full border border-border/30 dark:border-border/10 pointer-events-none" />
                        
                        {/* Inner Pulsing Core */}
                        <div className="relative flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full border border-white/10 shadow-2xl backdrop-blur-md z-20 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={`img-${activeService.id}`}
                                    src={activeService.image}
                                    alt=""
                                    initial={{ opacity: 0, scale: 1.15 }}
                                    animate={{ opacity: 0.75, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-black/60 z-10" />

                            <div className="relative z-20 text-center px-2">
                                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">{t('services.focus')}</p>
                                <p className="text-xs md:text-sm font-semibold text-white tracking-wide mt-0.5 line-clamp-1">
                                    {activeService.title}
                                </p>
                            </div>
                        </div>

                        {/* Orbiting Satellite Nodes */}
                        {services.map((service, index) => {
                            const angle = (index / services.length) * (2 * Math.PI) - (Math.PI / 2);
                            const radius = 150;
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
                                    whileHover={{ scale: 1.15 }}
                                    onClick={() => setActiveIndex(index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`absolute flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border transition-all duration-300 z-30 shadow-md ${
                                        isSelected
                                            ? `border-primary bg-background text-primary scale-110 shadow-lg shadow-primary/10`
                                            : 'border-border/60 bg-background/90 text-foreground/60 hover:text-foreground hover:border-border'
                                    }`}
                                >
                                    <service.icon className="h-5 w-5 md:h-6 md:w-6" />
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Description Display panel */}
                    <div className="flex-1 flex flex-col justify-center min-h-[220px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="space-y-6 max-w-xl text-center lg:text-left"
                            >
                                <span className={`inline-block text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-gradient-to-r ${activeService.color} text-white shadow-xs`}>
                                    {t('services.universe', { number: activeIndex + 1 })}
                                </span>
                                
                                <h3 className="text-3xl font-semibold text-foreground tracking-tight">
                                    {activeService.title}
                                </h3>

                                <p className="text-lg leading-relaxed text-foreground/60">
                                    {activeService.description}
                                </p>

                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <Link
                                        href={activeService.href}
                                        className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                                    >
                                        {t('services.join_learning')}
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
