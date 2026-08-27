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
            className="relative w-[280px] md:w-[320px] h-[360px] md:h-[420px] shrink-0 rounded-3xl overflow-hidden border border-white/10 bg-background/80 shadow-2xl backdrop-blur-md cursor-pointer group origin-center transition-all duration-300 hover:scale-105 hover:border-primary/20"
        >
            <Link href={theme.href} className="block w-full h-full">
                <div className="relative w-full h-full flex flex-col justify-end">
                    <img
                        src={theme.image}
                        alt={theme.title}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-10" />

                    <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                        <div className="w-8 h-[2px] bg-primary rounded-full mb-3 origin-left transition-all duration-300 group-hover:w-16" />

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {theme.title}
                        </h3>

                        <p className="text-xs md:text-sm text-white/60 leading-relaxed mb-4">
                            {theme.description}
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2.5">
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
            href: '/courses?theme=radiesthesie',
            image: '/assets/images/theme_radiesthesie.jpg',
        },
        {
            title: t('themes.theme2_title'),
            description: t('themes.theme2_desc'),
            href: '/courses?theme=chakras',
            image: '/assets/images/theme_chakras.jpg',
        },
        {
            title: t('themes.theme3_title'),
            description: t('themes.theme3_desc'),
            href: '/courses?theme=meditation',
            image: '/assets/images/theme_meditation.jpg',
        },
        {
            title: t('themes.theme4_title'),
            description: t('themes.theme4_desc'),
            href: '/courses?theme=developpement-personnel',
            image: '/assets/images/theme_developpement.jpg',
        },
    ];

    const marqueeThemes = [...themes, ...themes, ...themes];

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
                    animate={{ x: ['0%', '-33.333%'] }}
                    transition={{
                        x: {
                            duration: isHovered ? 60 : 35,
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