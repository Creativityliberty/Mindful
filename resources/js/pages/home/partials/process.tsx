import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, UserPlus, PlayCircle, Award, Video, UploadCloud, DollarSign } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function Process() {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [targetTab, setTargetTab] = useState<'students' | 'trainers'>('students');
    
    const studentSteps = [
        {
            number: '01',
            icon: Search,
            title: t('process.step1_title'),
            description: t('process.step1_desc'),
        },
        {
            number: '02',
            icon: PlayCircle,
            title: t('process.step2_title'),
            description: t('process.step2_desc'),
        },
        {
            number: '03',
            icon: Award,
            title: t('process.step3_title'),
            description: t('process.step3_desc'),
        },
    ];

    const trainerSteps = [
        {
            number: '01',
            icon: UploadCloud,
            title: t('process.trainer_step1_title'),
            description: t('process.trainer_step1_desc'),
        },
        {
            number: '02',
            icon: Video,
            title: t('process.trainer_step2_title'),
            description: t('process.trainer_step2_desc'),
        },
        {
            number: '03',
            icon: DollarSign,
            title: t('process.trainer_step3_title'),
            description: t('process.trainer_step3_desc'),
        },
    ];

    const activeSteps = targetTab === 'students' ? studentSteps : trainerSteps;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={containerRef} className="relative bg-muted/20 py-24 md:py-32 dark:bg-foreground/[0.01]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[140px] dark:bg-primary/[0.04]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        {t('process.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('process.title')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg text-foreground/60 mb-8">
                        {t('process.subtitle')}
                    </p>

                    {/* Toggle Bilatéral Apprenants / Formateurs */}
                    <div className="inline-flex items-center rounded-full border border-border/60 bg-background/80 p-1.5 shadow-sm backdrop-blur-md">
                        <button
                            type="button"
                            onClick={() => setTargetTab('students')}
                            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                targetTab === 'students'
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'text-foreground/70 hover:text-foreground'
                            }`}
                        >
                            {t('process.tab_students')}
                        </button>
                        <button
                            type="button"
                            onClick={() => setTargetTab('trainers')}
                            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                targetTab === 'trainers'
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'text-foreground/70 hover:text-foreground'
                            }`}
                        >
                            {t('process.tab_trainers')}
                        </button>
                    </div>
                </motion.div>

                {/* Sticky layout on large screens */}
                <div className="relative grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
                    
                    {/* Colonne de gauche (Sticky) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-40 flex h-fit flex-col justify-start">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">{t('process.sidebar_badge')}</p>
                            <h3 className="text-3xl font-semibold text-foreground mb-8 max-w-xs">
                                {targetTab === 'students' ? '3 étapes pour apprendre et pratiquer' : '3 étapes pour créer et monétiser'}
                            </h3>
                            
                            <div className="relative flex flex-col gap-6 pl-4 border-l border-border/50">
                                <motion.div 
                                    className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-primary via-amber-400 to-primary origin-top"
                                    style={{ height: heightTransform }}
                                />
                                {activeSteps.map((step) => (
                                    <div key={`left-${targetTab}-${step.number}`} className="flex items-center gap-4 py-1">
                                        <div className="text-sm font-bold text-foreground/40">{step.number}</div>
                                        <div className="text-sm font-medium text-foreground/80">{step.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite (Cartes empilées) */}
                    <div className="flex flex-col gap-8">
                        {activeSteps.map((step, index) => (
                            <motion.div
                                key={`${targetTab}-${step.number}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative rounded-3xl border border-border/40 bg-card p-8 md:p-10 shadow-xs transition-all duration-300 hover:border-border hover:shadow-xl dark:border-border/60 dark:bg-card/70"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/40 bg-secondary/50 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <step.icon className="h-6 w-6" />
                                        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-border/60 text-[10px] font-bold text-foreground/60 shadow-xs">
                                            {step.number}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-2xl font-semibold tracking-tight text-foreground">
                                            {step.title}
                                        </h4>
                                        <p className="text-base leading-relaxed text-foreground/60">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
