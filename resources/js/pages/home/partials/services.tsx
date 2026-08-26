import { motion, type Variants } from 'framer-motion';
import {
    Brain,
    Flame,
    Leaf,
    HeartPulse,
    GraduationCap,
    LayoutDashboard,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { useState, useRef, MouseEvent } from 'react';

const services = [
    {
        icon: Brain,
        title: 'Radiesthésie',
        description:
            'Apprenez à détecter et mesurer les vibrations énergétiques des lieux, objets et personnes à l\'aide de votre pendule et de vos baguettes.',
        href: '/courses?category=radiesthesie',
        className: 'md:col-span-4 lg:col-span-4 min-h-[220px]',
        glowColor: 'rgba(168, 85, 247, 0.15)', // Purple
    },
    {
        icon: Flame,
        title: 'Pratique du Pendule',
        description:
            'Maîtrisez les techniques de questionnement, les graphiques et les protocoles avancés pour des consultations précises et fiables.',
        href: '/courses?category=pendule',
        className: 'md:col-span-2 lg:col-span-2 min-h-[220px]',
        glowColor: 'rgba(245, 158, 11, 0.15)', // Amber
    },
    {
        icon: Leaf,
        title: 'Équilibrage des Chakras',
        description:
            'Harmonisez vos centres énergétiques pour libérer les blocages, revitaliser votre corps et retrouver un équilibre profond et durable.',
        href: '/courses?category=chakras',
        className: 'md:col-span-2 lg:col-span-2 min-h-[220px]',
        glowColor: 'rgba(16, 185, 129, 0.15)', // Emerald
    },
    {
        icon: HeartPulse,
        title: 'Énergétique & Vibratoire',
        description:
            'Découvrez les principes de l\'énergétique, les soins à distance et les techniques de nettoyage vibratoire pour votre bien-être.',
        href: '/courses?category=energetique',
        className: 'md:col-span-4 lg:col-span-4 min-h-[220px]',
        glowColor: 'rgba(239, 68, 68, 0.15)', // Red
    },
    {
        icon: GraduationCap,
        title: 'Formations Certifiantes',
        description:
            'Des parcours structurés avec attestation de compétences pour approfondir vos connaissances et valider votre pratique.',
        href: '/courses',
        className: 'md:col-span-3 lg:col-span-3 min-h-[220px]',
        glowColor: 'rgba(59, 130, 246, 0.15)', // Blue
    },
    {
        icon: LayoutDashboard,
        title: 'Espace Formateur',
        description:
            'Partagez votre savoir-faire. Publiez vos formations et gérez votre communauté d\'apprenants en toute simplicité.',
        href: '/become-trainer',
        className: 'md:col-span-3 lg:col-span-3 min-h-[220px]',
        glowColor: 'rgba(236, 72, 153, 0.15)', // Pink
    },
] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

function BentoCard({ service }: { service: typeof services[number] }) {
    const Icon = service.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div variants={itemVariants} className={service.className}>
            <Link href={service.href} className="block h-full">
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-background/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 dark:border-border/50 dark:bg-background/40 cursor-pointer"
                >
                    {/* Spotlight glow effect */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, ${service.glowColor}, transparent 80%)`,
                        }}
                    />

                    {/* Content container */}
                    <CardContent className="relative z-10 flex h-full flex-col justify-between p-8">
                        <div>
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </div>

                            <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-foreground/60 max-w-md">
                                {service.description}
                            </p>
                        </div>
                    </CardContent>
                </div>
            </Link>
        </motion.div>
    );
}

export function Services() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* blobs décoratifs en arrière-plan */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[150px] dark:bg-primary/[0.05]" />
                <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-amber-500/[0.02] blur-[130px] dark:bg-amber-500/[0.04]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* en-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        Ce que nous proposons
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        Tout pour votre pratique énergétique
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                        Une plateforme pensée pour réunir apprenants et
                        formateurs autour de la radiesthésie, du pendule et
                        de l'équilibrage énergétique, dans un espace bienveillant
                        et structuré.
                    </p>
                </motion.div>

                {/* grille Bento */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-6 grid-cols-1 md:grid-cols-6"
                >
                    {services.map((service) => (
                        <BentoCard key={service.title} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
