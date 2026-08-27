import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TrainerProfile = {
    id: number;
    name: string;
    role: string;
    specialty: string;
    bio: string;
    avatar: string;
    courseCount: number;
    studentCount: string;
    rating: number;
    reviewCount: number;
    featured?: boolean;
};

export function Trainers() {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);

    const trainersData: TrainerProfile[] = [
        {
            id: 1,
            name: 'Louise',
            role: t('trainers.founder_role'),
            specialty: t('trainers.founder_specialty'),
            bio: t('trainers.founder_bio'),
            avatar: '/assets/images/service_chakras_lux.jpg',
            courseCount: 8,
            studentCount: '2 400+',
            rating: 4.9,
            reviewCount: 184,
            featured: true,
        },
        {
            id: 2,
            name: t('trainers.trainer2_name'),
            role: t('trainers.trainer2_role'),
            specialty: t('trainers.trainer2_specialty'),
            bio: t('trainers.trainer2_bio'),
            avatar: '/assets/images/service_pendule.jpg',
            courseCount: 4,
            studentCount: '1 100+',
            rating: 4.8,
            reviewCount: 94,
        },
        {
            id: 3,
            name: t('trainers.trainer3_name'),
            role: t('trainers.trainer3_role'),
            specialty: t('trainers.trainer3_specialty'),
            bio: t('trainers.trainer3_bio'),
            avatar: '/assets/images/service_chakras_lux.jpg',
            courseCount: 5,
            studentCount: '1 450+',
            rating: 5.0,
            reviewCount: 112,
        },
    ];

    const leadTrainer = trainersData.find((t) => t.featured) || trainersData[0];
    const boardTrainers = [...trainersData, ...trainersData];

    return (
        <section className="relative overflow-hidden bg-background py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.02] blur-[160px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            {t('trainers.badge')}
                        </div>
                        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                            {t('trainers.title')}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-foreground/60">
                            {t('trainers.subtitle')}
                        </p>
                    </div>

                    <Button
                        variant="secondary"
                        className="w-fit shrink-0 rounded-full border border-border/40 hover:bg-primary/10 transition-all duration-300"
                        asChild
                    >
                        <Link href="/become-trainer" preserveState prefetch>
                            {t('trainers.become_trainer_btn')}
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Lead Founder Hero Spotlight (Louise) */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="group mb-16 relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-background/90 via-background/60 to-primary/[0.05] p-8 md:p-12 shadow-2xl backdrop-blur-xl"
                >
                    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-center">
                        {/* Circular Avatar Spotlight */}
                        <div className="relative flex justify-center">
                            <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full p-2 border-2 border-primary/40 shadow-2xl shadow-primary/20 bg-background overflow-hidden group-hover:border-primary transition-all duration-500">
                                <img
                                    src={leadTrainer.avatar}
                                    alt={leadTrainer.name}
                                    className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute -bottom-2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20 flex items-center gap-1.5">
                                <Sparkles className="h-3.5 w-3.5" />
                                {leadTrainer.role}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary justify-center lg:justify-start">
                                <ShieldCheck className="h-4 w-4" />
                                {leadTrainer.specialty}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                                {leadTrainer.name}
                            </h3>

                            <p className="text-base leading-relaxed text-foreground/70 font-light">
                                {leadTrainer.bio}
                            </p>

                            {/* Stats Counter Bar */}
                            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-border/40 max-w-md mx-auto lg:mx-0">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-foreground">{leadTrainer.courseCount}</span>
                                    <span className="text-xs text-foreground/50">{t('trainers.courses_published')}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-foreground">{leadTrainer.studentCount}</span>
                                    <span className="text-xs text-foreground/50">{t('trainers.students_count')}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-amber-400 flex items-center justify-center lg:justify-start gap-1">
                                        <Star className="h-4 w-4 fill-amber-400" />
                                        {leadTrainer.rating}
                                    </span>
                                    <span className="text-xs text-foreground/50">{leadTrainer.reviewCount} {t('trainers.certified_reviews')}</span>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-center lg:justify-start">
                                <Link
                                    href="/courses"
                                    className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                                >
                                    {t('trainers.view_courses')}
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trainers Infinite Interactive Board Slider */}
                <div
                    className="relative overflow-hidden py-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{
                            x: {
                                duration: isHovered ? 60 : 30,
                                ease: 'linear',
                                repeat: Infinity,
                            },
                        }}
                    >
                        {boardTrainers.map((trainer, index) => (
                            <div
                                key={`${trainer.name}-${index}`}
                                className="group relative w-[280px] md:w-[320px] shrink-0 rounded-3xl border border-border/40 bg-background/80 p-6 md:p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-2xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="relative h-14 w-14 rounded-full p-1 border border-primary/30 shadow-md bg-background overflow-hidden shrink-0 group-hover:border-primary transition-colors">
                                            <img
                                                src={trainer.avatar}
                                                alt={trainer.name}
                                                className="h-full w-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                                {trainer.name}
                                            </h4>
                                            <span className="text-xs font-medium text-foreground/50 block">
                                                {trainer.specialty}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light mb-6 line-clamp-3">
                                        {trainer.bio}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/30 flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                                        <Star className="h-3.5 w-3.5 fill-amber-400" />
                                        <span>{trainer.rating}</span>
                                        <span className="text-foreground/40 font-normal">({trainer.reviewCount})</span>
                                    </div>

                                    <Link
                                        href="/courses"
                                        className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                                    >
                                        {t('trainers.view_short')}
                                        <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
