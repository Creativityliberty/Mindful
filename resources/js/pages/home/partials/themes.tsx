import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState, useRef, MouseEvent } from 'react';

const themes = [
    {
        title: 'Radiesthésie & Pendule',
        description:
            "Découvrez les principes de la radiesthésie et apprenez à utiliser un pendule avec méthode.",
        href: '/courses?theme=radiesthesie',
        image: '/assets/images/theme_radiesthesie.jpg',
    },
    {
        title: 'Chakras & Équilibrage',
        description:
            "Explorez les sept chakras, leurs symboles et les pratiques pour travailler l'attention.",
        href: '/courses?theme=chakras',
        image: '/assets/images/theme_chakras.jpg',
    },
    {
        title: 'Méditation & Relaxation',
        description:
            'Apprenez à ralentir et à intégrer des pratiques de relaxation profonde dans votre quotidien.',
        href: '/courses?theme=meditation',
        image: '/assets/images/theme_meditation.jpg',
    },
    {
        title: 'Développement Personnel',
        description:
            "Découvrez des outils pour développer votre intuition et avancer avec confiance.",
        href: '/courses?theme=developpement-personnel',
        image: '/assets/images/theme_developpement.jpg',
    },
];

// Duplicate themes array to ensure seamless infinite loop scrolling
const marqueeThemes = [...themes, ...themes, ...themes];

function MagneticCard({ theme }: { theme: typeof themes[number] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        
        // Calculate relative position (-0.5 to 0.5) from card center
        const x = (clientX - (left + width / 2)) * 0.25; // 0.25 is strength multiplier
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
                    {/* Background glass art image */}
                    <img
                        src={theme.image}
                        alt={theme.title}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Obsidian overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-10" />

                    {/* Text content inside the shade */}
                    <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                        {/* Glowing line indicators */}
                        <div className="w-8 h-[2px] bg-primary rounded-full mb-3 origin-left transition-all duration-300 group-hover:w-16" />

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                            {theme.title}
                        </h3>

                        <p className="text-xs md:text-sm text-white/60 leading-relaxed mb-4">
                            {theme.description}
                        </p>

                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2.5">
                            Découvrir l'univers
                            <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function Themes() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.02] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 mb-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
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
            </div>

            {/* Horizontal Magnetic Marquee Container */}
            <div 
                className="relative overflow-hidden w-full py-8 flex"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Linear Infinite scrolling track */}
                <motion.div
                    className="flex gap-6 w-max px-3"
                    animate={{ x: ['0%', '-33.333%'] }}
                    transition={{
                        x: {
                            duration: isHovered ? 60 : 35, // Slows down when hovered
                            ease: 'linear',
                            repeat: Infinity,
                        }
                    }}
                >
                    {marqueeThemes.map((theme, index) => (
                        <MagneticCard 
                            key={`${theme.title}-${index}`} 
                            theme={theme} 
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}