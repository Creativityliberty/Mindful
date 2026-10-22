import { Link, router, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, HelpCircle, ShieldCheck, Sparkles, Video, Users, Zap } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { Plan } from '@/types';
import { BecomeTrainerHeader } from './partials/become-trainer-header';
import { TrainerCard, type TrainerProfile } from './partials/trainer-card';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';

export default function BecomeTrainer() {
    const { t } = useTranslation();
    const { auth, plans = [] } = usePage<{ plans: Plan[] }>().props;
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [billingCycle, setBillingCycle] = useState<'month' | 'year'>('month');

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://formationsession.com';
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": t('become_trainer_page.faq1_q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('become_trainer_page.faq1_a')
                }
            },
            {
                "@type": "Question",
                "name": t('become_trainer_page.faq2_q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('become_trainer_page.faq2_a')
                }
            },
            {
                "@type": "Question",
                "name": t('become_trainer_page.faq3_q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('become_trainer_page.faq3_a')
                }
            },
            {
                "@type": "Question",
                "name": t('become_trainer_page.faq4_q'),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t('become_trainer_page.faq4_a')
                }
            }
        ]
    });

    const benefits = [
        {
            title: t('become_trainer_page.benefit1_title'),
            description: t('become_trainer_page.benefit1_desc'),
            icon: ShieldCheck,
        },
        {
            title: t('become_trainer_page.benefit2_title'),
            description: t('become_trainer_page.benefit2_desc'),
            icon: Users,
        },
        {
            title: t('become_trainer_page.benefit3_title'),
            description: t('become_trainer_page.benefit3_desc'),
            icon: Video,
        },
        {
            title: t('become_trainer_page.benefit4_title'),
            description: t('become_trainer_page.benefit4_desc'),
            icon: Zap,
        },
    ];

    const steps = [
        {
            number: t('become_trainer_page.step1_num'),
            title: t('become_trainer_page.step1_title'),
            description: t('become_trainer_page.step1_desc'),
        },
        {
            number: t('become_trainer_page.step2_num'),
            title: t('become_trainer_page.step2_title'),
            description: t('become_trainer_page.step2_desc'),
        },
        {
            number: t('become_trainer_page.step3_num'),
            title: t('become_trainer_page.step3_title'),
            description: t('become_trainer_page.step3_desc'),
        },
        {
            number: t('become_trainer_page.step4_num'),
            title: t('become_trainer_page.step4_title'),
            description: t('become_trainer_page.step4_desc'),
        },
    ];

    const featuredTrainers: TrainerProfile[] = [
        {
            initials: 'MV',
            name: 'Marc Valin',
            specialty: t('trainers.founder_specialty'),
            bio: t('trainers.founder_bio'),
            courseCount: 8,
            studentCount: '2 400+',
            rating: 4.9,
        },
        {
            initials: 'LD',
            name: t('trainers.trainer2_name'),
            specialty: t('trainers.trainer2_specialty'),
            bio: t('trainers.trainer2_bio'),
            courseCount: 4,
            studentCount: '1 100+',
            rating: 4.8,
        },
        {
            initials: 'TB',
            name: t('trainers.trainer3_name'),
            specialty: t('trainers.trainer3_specialty'),
            bio: t('trainers.trainer3_bio'),
            courseCount: 5,
            studentCount: '1 450+',
            rating: 5.0,
        },
    ];

    const faqs = [
        {
            q: t('become_trainer_page.faq1_q'),
            a: t('become_trainer_page.faq1_a'),
        },
        {
            q: t('become_trainer_page.faq2_q'),
            a: t('become_trainer_page.faq2_a'),
        },
        {
            q: t('become_trainer_page.faq3_q'),
            a: t('become_trainer_page.faq3_a'),
        },
        {
            q: t('become_trainer_page.faq4_q'),
            a: t('become_trainer_page.faq4_a'),
        },
    ];

    // Filter plans according to selected billing cycle (fallback to month if cycle match missing)
    const displayedPlans = useMemo(() => {
        if (!plans || plans.length === 0) return [];
        const filtered = plans.filter((p) => p.interval === billingCycle);
        return filtered.length > 0 ? filtered : plans;
    }, [plans, billingCycle]);

    function handleCheckout(slug: string) {
        if (!auth?.user) {
            router.visit(`/become-trainer/checkout/${slug}`);
            return;
        }
        router.post('/become-trainer/checkout', { plan_slug: slug });
    }

    return (
        <>
            <SEOHead
                title={t('seo.become_trainer_title')}
                description={t('seo.become_trainer_description')}
                jsonLd={jsonLd}
            />
            <div className="relative min-h-screen bg-background">
                {/* Ambient Background Aura */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/[0.03] blur-[150px]" />
                    <div className="absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/[0.015] blur-[130px]" />
                </div>

                <div className="relative w-full px-6 py-12 md:px-10 lg:px-16 max-w-7xl mx-auto">
                    {/* Header */}
                    <BecomeTrainerHeader />

                    {/* Split-Screen Canvas Layout */}
                    <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start border-b border-border/30 pb-20">
                        {/* Left Column: Fixed Stature & Info */}
                        <div className="lg:sticky lg:top-28 space-y-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                                {t('become_trainer_page.join_badge')}
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-sans leading-tight">
                                {t('become_trainer_page.main_heading')}
                            </h2>

                            <p className="text-lg text-foreground/60 leading-relaxed font-light">
                                {t('become_trainer_page.main_desc')}
                            </p>

                            {/* Minimalist Stats Counters */}
                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/20">
                                <div>
                                    <span className="block text-3xl font-extrabold text-foreground">1 200+</span>
                                    <span className="text-xs text-foreground/50">{t('become_trainer_page.stat1_lbl')}</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-extrabold text-foreground">80+</span>
                                    <span className="text-xs text-foreground/50">{t('become_trainer_page.stat2_lbl')}</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-extrabold text-sky-500">0 %</span>
                                    <span className="text-xs text-foreground/50">{t('become_trainer_page.stat3_lbl')}</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12 gap-2"
                                    onClick={() =>
                                        document
                                            .getElementById('pricing')
                                            ?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    {t('become_trainer_page.btn_start')}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: Luminous Canvas (Benefits & Steps) */}
                        <div className="space-y-16">
                            {/* Benefits list */}
                            <div className="space-y-8">
                                <h3 className="text-xs font-bold tracking-widest text-foreground/40 uppercase">
                                    {t('become_trainer_page.why_title')}
                                </h3>
                                <div className="divide-y divide-border/20">
                                    {benefits.map((b) => {
                                        const Icon = b.icon;
                                        return (
                                            <div key={b.title} className="py-6 first:pt-0 last:pb-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                                                        <Icon className="h-4 w-4" />
                                                    </div>
                                                    <h4 className="text-lg font-bold text-foreground">{b.title}</h4>
                                                </div>
                                                <p className="text-sm text-foreground/60 leading-relaxed font-light pl-11">
                                                    {b.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Steps Timeline canvas */}
                            <div className="space-y-8 pt-8 border-t border-border/20">
                                <h3 className="text-xs font-bold tracking-widest text-foreground/40 uppercase">
                                    {t('become_trainer_page.steps_title')}
                                </h3>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {steps.map((s) => (
                                        <div
                                            key={s.number}
                                            className="p-6 rounded-2xl border border-border/20 bg-secondary/10 hover:border-sky-400/40 transition-colors"
                                        >
                                            <span className="text-sm font-bold text-sky-500 block mb-2">{s.number}</span>
                                            <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                                            <p className="text-xs text-foreground/60 leading-relaxed font-light">{s.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing / Tunnel Section */}
                    <section id="pricing" className="py-20 border-b border-border/30">
                        <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                                {t('become_trainer_page.pricing_badge')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans">
                                {t('become_trainer_page.pricing_title')}
                            </h2>
                            <p className="text-base text-foreground/60 font-light leading-relaxed">
                                {t('become_trainer_page.pricing_subtitle')}
                            </p>

                            {/* Billing Switch (Monthly / Yearly) */}
                            <div className="pt-4 flex items-center justify-center gap-3">
                                <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/50 p-1 backdrop-blur-sm">
                                    <button
                                        type="button"
                                        onClick={() => setBillingCycle('month')}
                                        className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                                            billingCycle === 'month'
                                                ? 'bg-background text-foreground shadow-sm'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {t('become_trainer_page.billing_monthly')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setBillingCycle('year')}
                                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                                            billingCycle === 'year'
                                                ? 'bg-background text-foreground shadow-sm'
                                                : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {t('become_trainer_page.billing_yearly')}
                                        <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] font-bold text-sky-500">
                                            {t('become_trainer_page.yearly_discount')}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto pt-6">
                            {displayedPlans.map((plan) => (
                                <div
                                    key={plan.id}
                                    className={`relative h-full rounded-[2rem] border transition-all duration-300 p-8 flex flex-col justify-between bg-background/50 backdrop-blur-md ${
                                        plan.highlight
                                            ? 'border-sky-400/50 shadow-xl shadow-sky-400/5 md:scale-105 z-10'
                                            : 'border-border/30 hover:border-sky-400/30'
                                    }`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                            <span className="rounded-full bg-sky-500 text-[10px] font-bold tracking-widest text-white uppercase px-4 py-1 shadow-sm">
                                                {t('become_trainer_page.recommended')}
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <p className="mb-2 text-xs font-bold tracking-wider text-foreground uppercase opacity-70">
                                            {plan.name}
                                        </p>
                                        <div className="mb-6 flex items-end gap-1">
                                            <span className="text-4xl font-extrabold text-foreground tracking-tight">
                                                {plan.formatted_price}
                                            </span>
                                            <span className="mb-1 text-sm text-foreground/50">
                                                / {plan.interval_label ? plan.interval_label.toLowerCase() : plan.interval === 'year' ? 'an' : 'mois'}
                                            </span>
                                        </div>
                                        <ul className="mb-8 space-y-3.5 border-t border-border/20 pt-6">
                                            {plan.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed font-light"
                                                >
                                                    <Check className="h-4.5 w-4.5 shrink-0 text-sky-500 mt-0.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4 pt-4 border-t border-border/20">
                                        <div className="flex items-start gap-2.5 text-xs text-foreground/70 leading-relaxed bg-muted/40 p-3 rounded-xl border border-border/40">
                                            <Checkbox
                                                id={`terms-${plan.id}`}
                                                checked={acceptedTerms}
                                                onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                                                className="mt-0.5"
                                            />
                                            <label
                                                htmlFor={`terms-${plan.id}`}
                                                className="cursor-pointer select-none text-[11px] leading-snug text-muted-foreground"
                                            >
                                                J'accepte les{' '}
                                                <Link href="/legal/cgu" target="_blank" className="text-primary underline font-medium hover:text-primary/80">
                                                    CGV & Conditions Formateur
                                                </Link>
                                                . Je reconnais que les forfaits d'abonnement sont sans engagement et résiliables à tout moment.
                                            </label>
                                        </div>

                                        <Button
                                            className="w-full rounded-full h-11 tracking-wider font-semibold disabled:opacity-50"
                                            variant={plan.highlight ? 'default' : 'outline'}
                                            disabled={!acceptedTerms}
                                            onClick={() => handleCheckout(plan.slug)}
                                        >
                                            {t('become_trainer_page.choose_plan')}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Formateurs / Mentors Section */}
                    <section className="py-20 border-b border-border/30">
                        <div className="max-w-2xl mb-12 space-y-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                                {t('become_trainer_page.community_badge')}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-sans">
                                {t('become_trainer_page.community_title')}
                            </h2>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredTrainers.map((trainer, i) => (
                                <TrainerCard
                                    key={trainer.name}
                                    trainer={trainer}
                                    index={i}
                                />
                            ))}
                        </div>
                    </section>

                    {/* FAQ Formateurs */}
                    <section className="py-20 border-b border-border/30">
                        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                                <HelpCircle className="h-3.5 w-3.5 text-sky-500" />
                                {t('become_trainer_page.faq_badge')}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                                {t('become_trainer_page.faq_title')}
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl border border-border/20 bg-background/60 backdrop-blur-sm space-y-2 hover:border-sky-400/30 transition-colors"
                                >
                                    <h4 className="font-bold text-foreground text-base">{faq.q}</h4>
                                    <p className="text-sm text-foreground/70 leading-relaxed font-light">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="py-20 text-center space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            {t('become_trainer_page.ready_badge')}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                            {t('become_trainer_page.ready_title')}
                        </h2>
                        <p className="mx-auto max-w-xl text-base text-foreground/60 font-light leading-relaxed">
                            {t('become_trainer_page.ready_subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button
                                size="lg"
                                className="rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12"
                                onClick={() =>
                                    document
                                        .getElementById('pricing')
                                        ?.scrollIntoView({ behavior: 'smooth' })
                                }
                            >
                                {t('become_trainer_page.btn_choose_sub')}
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="rounded-full h-12 border border-border/40"
                                asChild
                            >
                                <Link href="/contact">{t('become_trainer_page.btn_contact')}</Link>
                            </Button>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    );
}
