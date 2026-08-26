import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const themes = [
    {
        title: 'Radiesthésie & Pendule',
        description:
            "Découvrez les principes de la radiesthésie et apprenez à utiliser un pendule avec méthode. Prise en main de l'outil, observation des mouvements, définition de vos conventions et formulation de questions précises.",
        href: '/courses?theme=radiesthesie',
        image: '/assets/images/theme_radiesthesie.jpg',
    },
    {
        title: 'Chakras & Équilibrage',
        description:
            "Explorez les sept chakras, leurs symboles et les pratiques traditionnellement utilisées pour travailler l'attention, les ressentis et l'équilibre énergétique personnel.",
        href: '/courses?theme=chakras',
        image: '/assets/images/theme_chakras.jpg',
    },
    {
        title: 'Méditation & Relaxation',
        description:
            'Apprenez à ralentir, à porter votre attention sur le moment présent et à intégrer des pratiques simples de méditation ou de relaxation profonde dans votre quotidien.',
        href: '/courses?theme=meditation',
        image: '/assets/images/theme_meditation.jpg',
    },
    {
        title: 'Développement Personnel',
        description:
            "Découvrez des outils pour mieux vous connaître, observer vos ressentis, développer votre intuition et avancer avec davantage de confiance et de clarté dans votre pratique.",
        href: '/courses?theme=developpement-personnel',
        image: '/assets/images/theme_developpement.jpg',
    },
];

export function Themes() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % themes.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + themes.length) % themes.length);
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
            {/* Ambient spectral glow behind the deck */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[160px] dark:bg-primary/[0.08]" />
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
                        Thématiques
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Explorez nos différents univers
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                        Choisissez la voie qui résonne avec votre cheminement intérieur et commencez votre initiation.
                    </p>
                </motion.div>

                {/* 3D Stack Carousel Container */}
                <div className="relative flex flex-col items-center justify-center min-h-[460px] md:min-h-[580px] w-full perspective-[1200px]">
                    <div className="relative flex items-center justify-center w-full h-[400px] md:h-[500px]">
                        {themes.map((theme, index) => {
                            // Calculate positioning relative to the active card
                            let offset = index - activeIndex;
                            
                            // Adjust for circular wrap-around
                            if (offset < -1) offset += themes.length;
                            if (offset > 1) offset -= themes.length;

                            const isActive = offset === 0;
                            const isPrev = offset === -1;
                            const isNext = offset === 1;
                            const isHidden = !isActive && !isPrev && !isNext;

                            // Custom Framer Motion 3D layout values
                            let x = '0%';
                            let scale = 1;
                            let zIndex = 10;
                            let rotateY = 0;
                            let opacity = 1;

                            if (isActive) {
                                x = '0%';
                                scale = 1.05;
                                zIndex = 30;
                                rotateY = 0;
                                opacity = 1;
                            } else if (isPrev) {
                                x = '-60%';
                                scale = 0.85;
                                zIndex = 20;
                                rotateY = 32;
                                opacity = 0.6;
                            } else if (isNext) {
                                x = '60%';
                                scale = 0.85;
                                zIndex = 20;
                                rotateY = -32;
                                opacity = 0.6;
                            } else if (isHidden) {
                                scale = 0.6;
                                zIndex = 10;
                                opacity = 0;
                                x = offset < 0 ? '-100%' : '100%';
                            }

                            return (
                                <motion.div
                                    key={theme.title}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                    animate={{
                                        x,
                                        scale,
                                        zIndex,
                                        rotateY,
                                        opacity,
                                    }}
                                    transition={{
                                        duration: 0.65,
                                        ease: [0.25, 1, 0.5, 1], // Smooth custom cubic bezier
                                    }}
                                    onClick={() => !isActive && setActiveIndex(index)}
                                    className={`absolute w-[280px] md:w-[360px] h-[380px] md:h-[480px] rounded-3xl overflow-hidden border border-white/15 bg-background/80 shadow-2xl backdrop-blur-md cursor-pointer select-none origin-center ${
                                        isActive ? 'cursor-default pointer-events-auto' : 'pointer-events-auto'
                                    }`}
                                >
                                    {/* Glass/Refraction card layout */}
                                    <div className="relative w-full h-full flex flex-col justify-end">
                                        {/* Premium 3D Render Image */}
                                        <img
                                            src={theme.image}
                                            alt={theme.title}
                                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                        />
                                        
                                        {/* Elegant shadow gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none z-10" />

                                        {/* Card content visible inside the shade */}
                                        <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                                            {/* Glowing indicator line on active card */}
                                            {isActive && (
                                                <motion.div 
                                                    layoutId="activeGlowLine"
                                                    className="w-12 h-1 bg-gradient-to-r from-primary to-amber-400 rounded-full mb-4"
                                                />
                                            )}
                                            
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                                                {theme.title}
                                            </h3>

                                            <p className="text-xs md:text-sm text-white/70 leading-relaxed line-clamp-3 mb-6">
                                                {theme.description}
                                            </p>

                                            <Button 
                                                variant="secondary" 
                                                size="sm" 
                                                className={`rounded-full w-fit gap-1.5 font-medium transition-all duration-300 ${
                                                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                                                }`}
                                                asChild
                                            >
                                                <Link href={theme.href}>
                                                    Explorer l'univers
                                                    <ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Navigation controllers */}
                    <div className="flex items-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handlePrev}
                            className="rounded-full h-11 w-11 border-border/60 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        
                        <div className="flex items-center gap-1.5">
                            {themes.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={handleNext}
                            className="rounded-full h-11 w-11 border-border/60 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                        >
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}