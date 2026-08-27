import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Sparkles, Check, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';

export default function HowItWorks() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'student' | 'trainer'>('student');

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://formationsession.com';
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t('seo.how_it_works_title'),
        "description": t('seo.how_it_works_description'),
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": t('how_it_works_page.student_step1_title'),
                "text": t('how_it_works_page.student_step1_desc')
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": t('how_it_works_page.student_step2_title'),
                "text": t('how_it_works_page.student_step2_desc')
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": t('how_it_works_page.student_step3_title'),
                "text": t('how_it_works_page.student_step3_desc')
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": t('how_it_works_page.student_step4_title'),
                "text": t('how_it_works_page.student_step4_desc')
            }
        ]
    });

    const studentSteps = [
        {
            number: '01',
            title: t('how_it_works_page.student_step1_title'),
            description: t('how_it_works_page.student_step1_desc'),
        },
        {
            number: '02',
            title: t('how_it_works_page.student_step2_title'),
            description: t('how_it_works_page.student_step2_desc'),
        },
        {
            number: '03',
            title: t('how_it_works_page.student_step3_title'),
            description: t('how_it_works_page.student_step3_desc'),
        },
        {
            number: '04',
            title: t('how_it_works_page.student_step4_title'),
            description: t('how_it_works_page.student_step4_desc'),
        },
    ];

    const trainerSteps = [
        {
            number: '01',
            title: t('how_it_works_page.trainer_step1_title'),
            description: t('how_it_works_page.trainer_step1_desc'),
        },
        {
            number: '02',
            title: t('how_it_works_page.trainer_step2_title'),
            description: t('how_it_works_page.trainer_step2_desc'),
        },
        {
            number: '03',
            title: t('how_it_works_page.trainer_step3_title'),
            description: t('how_it_works_page.trainer_step3_desc'),
        },
        {
            number: '04',
            title: t('how_it_works_page.trainer_step4_title'),
            description: t('how_it_works_page.trainer_step4_desc'),
        },
    ];

    return (
        <>
            <SEOHead
                title={t('seo.how_it_works_title')}
                description={t('seo.how_it_works_description')}
                jsonLd={jsonLd}
            />
            <div className="relative min-h-screen bg-background">
            {/* Soft Ambient Sky Blue Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[150px]" />
            </div>

            <div className="relative w-full px-6 py-12 md:px-10 lg:px-16 max-w-7xl mx-auto">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center space-y-4"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                        <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                        {t('how_it_works_page.badge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif">
                        {t('how_it_works_page.title')}
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-foreground/60 leading-relaxed font-light">
                        {t('how_it_works_page.subtitle')}
                    </p>
                </motion.div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1.5 rounded-full border border-border/30 bg-secondary/20 backdrop-blur-md">
                        <div className="absolute inset-y-1.5 left-1.5 right-1.5 pointer-events-none">
                            <motion.div
                                className="h-full rounded-full bg-background shadow-md border border-border/10"
                                initial={false}
                                animate={{
                                    x: activeTab === 'student' ? 0 : '100%',
                                    width: '50%'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        </div>

                        {/* Student Tab Button */}
                        <button
                            onClick={() => setActiveTab('student')}
                            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
                                activeTab === 'student' ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
                            }`}
                            style={{ width: '170px', justifyContent: 'center' }}
                        >
                            <User className="h-4 w-4" />
                            {t('how_it_works_page.tab_student')}
                        </button>

                        {/* Trainer Tab Button */}
                        <button
                            onClick={() => setActiveTab('trainer')}
                            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
                                activeTab === 'trainer' ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
                            }`}
                            style={{ width: '170px', justifyContent: 'center' }}
                        >
                            <Briefcase className="h-4 w-4" />
                            {t('how_it_works_page.tab_trainer')}
                        </button>
                    </div>
                </div>

                {/* Split-Screen Interactive Flow Canvas */}
                <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] items-start border-b border-border/20 pb-20">
                    
                    {/* Left Column: Fixed Vision Frame */}
                    <div className="lg:sticky lg:top-28 space-y-6">
                        <div className="rounded-[2rem] border border-border/30 bg-background/50 p-8 md:p-10 backdrop-blur-md relative overflow-hidden shadow-xl">
                            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-sky-400/5 blur-2xl" />
                            
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-serif mb-4">
                                {activeTab === 'student' 
                                    ? t('how_it_works_page.student_frame_title') 
                                    : t('how_it_works_page.trainer_frame_title')
                                }
                            </h2>
                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                                {activeTab === 'student'
                                    ? t('how_it_works_page.student_frame_desc')
                                    : t('how_it_works_page.trainer_frame_desc')
                                }
                            </p>
                            
                            <div className="pt-6 border-t border-border/20 mt-6 space-y-3">
                                <div className="flex items-center gap-2.5 text-xs text-foreground/70">
                                    <Check className="h-4 w-4 text-sky-400" />
                                    {t('how_it_works_page.feature_lifetime')}
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-foreground/70">
                                    <Check className="h-4 w-4 text-sky-400" />
                                    {t('how_it_works_page.feature_support')}
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-foreground/70">
                                    <Check className="h-4 w-4 text-sky-400" />
                                    {activeTab === 'student' ? t('how_it_works_page.feature_certif') : t('how_it_works_page.feature_stripe')}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Luminous Steps Timeline */}
                    <div className="relative border-l border-border/30 pl-8 ml-4 space-y-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-12"
                            >
                                {(activeTab === 'student' ? studentSteps : trainerSteps).map((step) => (
                                    <div key={step.number} className="relative group">
                                        <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-sky-400 group-hover:border-sky-400" />
                                        
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">{t('how_it_works_page.step_prefix')} {step.number}</span>
                                            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-sky-400">{step.title}</h3>
                                            <p className="text-sm text-foreground/60 leading-relaxed font-light">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Bottom CTA section */}
                <section className="py-20 text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif tracking-tight">
                        {t('how_it_works_page.cta_title')}
                    </h2>
                    <p className="mx-auto max-w-xl text-base text-foreground/60 font-light leading-relaxed">
                        {t('how_it_works_page.cta_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12 gap-2 group" asChild>
                            <Link href="/courses">
                                {t('how_it_works_page.btn_explore')}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-full h-12 border border-border/40" asChild>
                            <Link href="/become-trainer">{t('how_it_works_page.btn_become_trainer')}</Link>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    </>
);
}
