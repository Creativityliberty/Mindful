import { motion } from 'framer-motion';
import {
    Flame,
    Gem,
    Palette,
    Utensils,
    Scissors,
    Brain,
    ArrowRight,
    Sparkles,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export function Services() {
    const { t } = useTranslation();

    const services = [
        {
            id: 0,
            icon: Flame,
            title: t('services.item0_title'),
            description: t('services.item0_desc'),
            href: '/courses?category=bougies',
            color: 'from-amber-500 via-orange-500 to-rose-500',
            badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/30',
            image: '/assets/images/theme_bougies.webp',
        },
        {
            id: 1,
            icon: Gem,
            title: t('services.item1_title'),
            description: t('services.item1_desc'),
            href: '/courses?category=onglerie',
            color: 'from-pink-500 via-rose-500 to-amber-400',
            badgeColor: 'bg-pink-500/20 text-pink-200 border-pink-400/30',
            image: '/assets/images/theme_onglerie.webp',
        },
        {
            id: 2,
            icon: Palette,
            title: t('services.item2_title'),
            description: t('services.item2_desc'),
            href: '/courses?category=ceramique',
            color: 'from-emerald-500 via-teal-600 to-stone-600',
            badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30',
            image: '/assets/images/theme_ceramique.webp',
        },
        {
            id: 3,
            icon: Utensils,
            title: t('services.item3_title'),
            description: t('services.item3_desc'),
            href: '/courses?category=patisserie',
            color: 'from-amber-600 via-yellow-600 to-orange-700',
            badgeColor: 'bg-orange-500/20 text-orange-200 border-orange-400/30',
            image: '/assets/images/theme_patisserie.webp',
        },
        {
            id: 4,
            icon: Scissors,
            title: t('services.item4_title'),
            description: t('services.item4_desc'),
            href: '/courses?category=couture',
            color: 'from-purple-500 via-indigo-600 to-blue-600',
            badgeColor: 'bg-purple-500/20 text-purple-200 border-purple-400/30',
            image: '/assets/images/theme_couture.webp',
        },
        {
            id: 5,
            icon: Brain,
            title: t('services.item5_title'),
            description: t('services.item5_desc'),
            href: '/courses?category=digital',
            color: 'from-sky-500 via-blue-600 to-cyan-500',
            badgeColor: 'bg-sky-500/20 text-sky-200 border-sky-400/30',
            image: '/assets/images/theme_digital.webp',
        },
    ];

    return (
        <section className="relative py-24 md:py-36 overflow-hidden bg-background">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sky-400/[0.015] blur-[160px]" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.01] blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{t('services.badge')}</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground"
                    >
                        {t('services.title_main')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        {t('services.subtitle')}
                    </motion.p>
                </div>

                {/* Services Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.08 }}
                            >
                                <Link
                                    href={service.href}
                                    className="group relative flex h-[420px] md:h-[460px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-card shadow-xl transition-all duration-500 hover:border-border hover:shadow-2xl dark:border-border/60"
                                >
                                    {/* Image de fond avec effet Zoom smooth */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Voile Dégradé de Luxe */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 transition-opacity duration-500 group-hover:opacity-95" />

                                    {/* Partie Haute : Icône Épurée */}
                                    <div className="relative z-10 p-6 md:p-8 flex items-center justify-end">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                                            <IconComponent className="h-5 w-5" />
                                        </div>
                                    </div>

                                    {/* Partie Basse : Titre, Description & CTA */}
                                    <div className="relative z-10 p-6 md:p-8 space-y-3">
                                        <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm font-light leading-relaxed text-white/80 line-clamp-2">
                                            {service.description}
                                        </p>

                                        <div className="pt-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-white uppercase group-hover:text-sky-400 transition-colors">
                                            <span>{t('services.join_learning')}</span>
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
