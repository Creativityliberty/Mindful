import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Brain, Flame, Leaf, HeartPulse, ShieldCheck, Clock, Users, GraduationCap, Infinity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const stats = [
    {
        number: '01',
        icon: Brain,
        title: 'Radiesthésie',
        eyebrow: 'Formations disponibles',
        description: 'Pendule, baguettes, géobiologie',
        href: '/courses?category=radiesthesie',
        image: '/assets/images/theme_radiesthesie.jpg',
        glow: 'rgba(168, 85, 247, 0.2)', // Purple
    },
    {
        id: 1,
        number: '02',
        icon: Leaf,
        title: 'Chakras',
        eyebrow: 'Équilibrage énergétique',
        description: '7 centres, harmonisation complète',
        href: '/courses?category=chakras',
        image: '/assets/images/theme_chakras.jpg',
        glow: 'rgba(16, 185, 129, 0.2)', // Emerald
    },
    {
        number: '03',
        icon: Flame,
        title: 'Pendule',
        eyebrow: 'Pratique divinatoire',
        description: 'Techniques expertes et avancées',
        href: '/courses?category=pendule',
        image: '/assets/images/service_pendule.jpg',
        glow: 'rgba(245, 158, 11, 0.2)', // Amber
    },
    {
        number: '04',
        icon: Clock,
        title: 'Pratique',
        eyebrow: 'Approche pédagogique',
        description: 'Vidéos, exercices, de mise en situation',
        href: '/courses',
        image: '/assets/images/theme_meditation.jpg',
        glow: 'rgba(56, 189, 248, 0.2)', // Blue
    },
    {
        number: '05',
        icon: HeartPulse,
        title: 'Énergétique',
        eyebrow: 'Domaines couverts',
        description: 'Soins à distance, nettoyage vibratoire',
        href: '/courses?category=energetique',
        image: '/assets/images/service_energetique.jpg',
        glow: 'rgba(239, 68, 68, 0.2)', // Red
    },
    {
        number: '06',
        icon: Infinity,
        title: 'À vie',
        eyebrow: 'Accès aux formations',
        description: 'Après inscription, accès illimité',
        href: '/courses',
        image: '/assets/images/theme_developpement.jpg',
        glow: 'rgba(236, 72, 153, 0.2)', // Pink
    },
] as const;

export function Chiffres() {
    const [activeIndex, setActiveIndex] = useState(1); // Default to Chakras (index 1)

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % stats.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + stats.length) % stats.length);
    };

    const activeItem = stats[activeIndex];

    return (
        <section className="relative py-28 md:py-36 overflow-hidden bg-background">
            {/* Soft background aura linked to the active card color */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        background: `radial-gradient(circle, ${activeItem.glow} 0%, transparent 65%)`
                    }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none blur-[100px]"
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center z-10 relative"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        Une plateforme dédiée aux
                    </div>

                    <h2 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        <span className="bg-gradient-to-r from-purple-400 via-amber-200 to-indigo-400 bg-clip-text text-transparent">pratiques énergétiques</span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base md:text-lg text-foreground/60 leading-relaxed">
                        Des formateurs passionnés, des apprenants motivés et des contenus de qualité réunis sur une seule plateforme dédiée à la radiesthésie et à l'énergétique.
                    </p>
                </motion.div>

                {/* 3D Stack Curved Deck Carousel */}
                <div className="relative flex flex-col items-center justify-center min-h-[460px] md:min-h-[580px] w-full perspective-[1400px] z-10">
                    <div className="relative flex items-center justify-center w-full h-[400px] md:h-[500px] overflow-visible">
                        {stats.map((item, index) => {
                            let offset = index - activeIndex;

                            // Loop around array circularity
                            if (offset < -2) offset += stats.length;
                            if (offset > 2) offset -= stats.length;

                            const isActive = offset === 0;
                            const isPrev = offset === -1;
                            const isNext = offset === 1;
                            const isFarPrev = offset === -2;
                            const isFarNext = offset === 2;
                            const isHidden = !isActive && !isPrev && !isNext && !isFarPrev && !isFarNext;

                            // Exact Framer 3D curved trajectory coordinates
                            let x = '0%';
                            let scale = 1;
                            let zIndex = 10;
                            let rotateY = 0;
                            let opacity = 1;
                            let translateZ = 0;

                            if (isActive) {
                                x = '0%';
                                scale = 1.05;
                                zIndex = 30;
                                rotateY = 0;
                                translateZ = 120;
                                opacity = 1;
                            } else if (isPrev) {
                                x = '-48%';
                                scale = 0.88;
                                zIndex = 20;
                                rotateY = 28;
                                translateZ = -60;
                                opacity = 0.65;
                            } else if (isNext) {
                                x = '48%';
                                scale = 0.88;
                                zIndex = 20;
                                rotateY = -28;
                                translateZ = -60;
                                opacity = 0.65;
                            } else if (isFarPrev) {
                                x = '-88%';
                                scale = 0.72;
                                zIndex = 15;
                                rotateY = 45;
                                translateZ = -180;
                                opacity = 0.3;
                            } else if (isFarNext) {
                                x = '88%';
                                scale = 0.72;
                                zIndex = 15;
                                rotateY = -45;
                                translateZ = -180;
                                opacity = 0.3;
                            } else if (isHidden) {
                                opacity = 0;
                                scale = 0.5;
                                x = offset < 0 ? '-140%' : '140%';
                                translateZ = -300;
                            }

                            const CardIcon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                    }}
                                    animate={{
                                        x,
                                        scale,
                                        zIndex,
                                        rotateY,
                                        opacity,
                                        transform: `perspective(1200px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                                    }}
                                    transition={{
                                        duration: 0.75,
                                        ease: [0.25, 1, 0.5, 1],
                                    }}
                                    onClick={() => !isActive && setActiveIndex(index)}
                                    className={`absolute w-[260px] md:w-[320px] h-[360px] md:h-[460px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md cursor-pointer select-none origin-center ${
                                        isActive ? 'cursor-default border-primary/30 shadow-primary/5' : 'hover:border-white/20'
                                    }`}
                                >
                                    <div className="relative w-full h-full flex flex-col justify-between p-7 md:p-8">
                                        {/* Background glass art image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        
                                        {/* Dark obsidian overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/95 pointer-events-none z-0" />

                                        {/* Top Header Card */}
                                        <div className="relative z-10 flex items-center justify-between">
                                            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 text-white backdrop-blur-sm">
                                                <CardIcon className="h-5 w-5" />
                                            </div>
                                            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                                                {item.number}
                                            </span>
                                        </div>

                                        {/* Content Area */}
                                        <div className="relative z-10 flex flex-col items-center text-center mt-auto">
                                            <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-2">
                                                {item.eyebrow}
                                            </span>
                                            
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                                                {item.title}
                                            </h3>

                                            <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light mb-6">
                                                {item.description}
                                            </p>

                                            {/* Circular Arrow Button (Always visible on active, hidden on inactive) */}
                                            <motion.div
                                                animate={{
                                                    opacity: isActive ? 1 : 0,
                                                    y: isActive ? 0 : 10,
                                                    scale: isActive ? 1 : 0.8
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="h-10 w-10 rounded-full border border-white/20 bg-white/10 hover:bg-primary hover:border-primary hover:text-white text-white/90 flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-xs"
                                            >
                                                <ArrowRight className="h-5 w-5" />
                                            </motion.div>
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
                            {stats.map((_, idx) => (
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

                {/* Bottom Trust/Features Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20 md:mt-24 p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl relative z-10"
                >
                    <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                                <Users className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white leading-tight">Formateurs passionnés</h4>
                                <p className="text-xs text-white/50">Experts dans leur domaine</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white leading-tight">Apprenants motivés</h4>
                                <p className="text-xs text-white/50">Une communauté bienveillante</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white leading-tight">Contenus de qualité</h4>
                                <p className="text-xs text-white/50">Formations complètes et à jour</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                                <Infinity className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white leading-tight">Accès à vie</h4>
                                <p className="text-xs text-white/50">Apprenez à votre rythme</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
