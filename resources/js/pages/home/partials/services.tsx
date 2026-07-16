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

const services = [
    {
        icon: Brain,
        title: 'Mindfulness & Méditation',
        description:
            'Apaiser le tumulte mental et vivre pleinement l’instant présent grâce à des méditations quotidiennes guidées.',
        href: '/courses?category=Mindfulness',
    },
    {
        icon: Flame,
        title: 'Équilibrage des chakras',
        description:
            'Harmoniser vos centres énergétiques pour libérer vos blocages et revitaliser votre corps et votre esprit.',
        href: '/courses?category=Chakras',
    },
    {
        icon: Leaf,
        title: 'Yoga & mouvement conscient',
        description:
            'Des pratiques fluides et conscientes pour habiter votre corps, développer votre souplesse et relâcher les tensions.',
        href: '/courses?category=Yoga',
    },
    {
        icon: HeartPulse,
        title: 'Bien-être holistique',
        description:
            'Prendre soin de vous au quotidien avec la sophrologie, la nutrition consciente et les rituels de soin de soi.',
        href: '/courses?category=Sophrologie',
    },
    {
        icon: GraduationCap,
        title: 'Formations certifiantes',
        description:
            'Des parcours structurés et validés pour approfondir vos connaissances ou acquérir de nouvelles compétences.',
        href: '/courses',
    },
    {
        icon: LayoutDashboard,
        title: 'Espace Transmission',
        description:
            'Partagez votre lumière. Publiez vos cours et gérez votre communauté de praticiens en toute simplicité.',
        href: '/become-trainer',
    },
] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export function Services() {
    return (
        <section className="relative py-24 md:py-32">
            {/* blob décoratif */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[140px] dark:bg-primary/[0.06]" />
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
                        Tout pour votre épanouissement intérieur
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60">
                        Une plateforme pensée pour réunir apprenants et
                        formateurs autour du bien-être, de la méditation et du
                        développement spirituel, dans un espace bienveillant et
                        structuré.
                    </p>
                </motion.div>

                {/* grille */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                            >
                                <Link href={service.href} className="block h-full">
                                    <Card className="group h-full border-border/40 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-lg dark:border-border/50 dark:bg-background/50 cursor-pointer">
                                        <CardContent className="p-7">
                                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                                                <Icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-sm leading-relaxed text-foreground/60">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
