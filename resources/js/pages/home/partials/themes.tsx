import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState, useRef, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';

function MagneticCard({ theme, discoverLabel }: { theme: { title: string; description: string; href: string; image: string }; discoverLabel: string }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        
        const x = (clientX - (left + width / 2)) * 0.25;
        const y = (clientY - (top + height / 2)) * 0.25;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.8 }}
            className="relative w-[280px] md:w-[320px] h-[380px] md:h-[440px] shrink-0 rounded-3xl overflow-hidden border border-border/30 bg-card shadow-xl cursor-pointer group origin-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-primary/40"
        >
            <Link href={theme.href} className="block w-full h-full">
                <div className="relative w-full h-full flex flex-col justify-end">
                    <img
                        src={theme.image}
                        alt={theme.title}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Aucun masque sombre : la photo reste 100% lumineuse et naturelle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none z-10" />

                    {/* Cartouche Verre Dépoli Blanc Lumineux (Lumière & Élégance Luxe) */}
                    <div className="relative z-20 m-3 p-3.5 md:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl border border-white/90 dark:border-white/20 shadow-xl shadow-slate-900/10 flex flex-col justify-end transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 group-hover:shadow-2xl">
                        <div className="w-6 h-[2px] bg-primary rounded-full mb-1.5 origin-left transition-all duration-300 group-hover:w-12" />

                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                            {theme.title}
                        </h3>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug mb-2 line-clamp-1 font-normal">
                            {theme.description}
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2">
                            {discoverLabel}
                            <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function Themes() {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const themes = [
        {
            title: t('themes.theme1_title'),
            description: t('themes.theme1_desc'),
            href: '/courses?category=bougies',
            image: '/assets/images/theme_bougies.webp',
        },
        {
            title: t('themes.theme2_title'),
            description: t('themes.theme2_desc'),
            href: '/courses?category=onglerie',
            image: '/assets/images/theme_onglerie.webp',
        },
        {
            title: t('themes.theme3_title'),
            description: t('themes.theme3_desc'),
            href: '/courses?category=ceramique',
            image: '/assets/images/theme_ceramique.webp',
        },
        {
            title: t('themes.theme4_title'),
            description: t('themes.theme4_desc'),
            href: '/courses?category=patisserie',
            image: '/assets/images/theme_patisserie.webp',
        },
        {
            title: t('themes.theme5_title'),
            description: t('themes.theme5_desc'),
            href: '/courses?category=couture',
            image: '/assets/images/theme_couture.webp',
        },
        {
            title: t('themes.theme6_title'),
            description: t('themes.theme6_desc'),
            href: '/courses?category=digital',
            image: '/assets/images/theme_digital.webp',
        },
    ];

    const marqueeThemes = [...themes, ...themes];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.02] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        {t('themes.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('themes.title')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                        {t('themes.subtitle')}
                    </p>
                </motion.div>
            </div>

            <div 
                className="relative overflow-hidden w-full py-8 flex"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex gap-6 w-max px-3"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        x: {
                            duration: isHovered ? 75 : 45,
                            ease: 'linear',
                            repeat: Infinity,
                        }
                    }}
                >
                    {marqueeThemes.map((theme, index) => (
                        <MagneticCard 
                            key={`${theme.title}-${index}`} 
                            theme={theme} 
                            discoverLabel={t('themes.discover_universe')}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}