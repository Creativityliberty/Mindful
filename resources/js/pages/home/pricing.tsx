import { Head, Link } from '@inertiajs/react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
    const { t } = useTranslation();

    const pricingPlans = [
        {
            name: t('pricing_page.plan1_name'),
            price: t('pricing_page.plan1_price'),
            period: t('pricing_page.plan1_period'),
            description: t('pricing_page.plan1_desc'),
            ctaText: t('pricing_page.plan1_cta'),
            ctaHref: "/courses",
            popular: false,
            features: [
                t('pricing_page.plan1_f1'),
                t('pricing_page.plan1_f2'),
                t('pricing_page.plan1_f3'),
                t('pricing_page.plan1_f4'),
                t('pricing_page.plan1_f5'),
                t('pricing_page.plan1_f6'),
            ]
        },
        {
            name: t('pricing_page.plan2_name'),
            price: t('pricing_page.plan2_price'),
            period: t('pricing_page.plan2_period'),
            description: t('pricing_page.plan2_desc'),
            ctaText: t('pricing_page.plan2_cta'),
            ctaHref: "/become-trainer",
            popular: true,
            features: [
                t('pricing_page.plan2_f1'),
                t('pricing_page.plan2_f2'),
                t('pricing_page.plan2_f3'),
                t('pricing_page.plan2_f4'),
                t('pricing_page.plan2_f5'),
                t('pricing_page.plan2_f6'),
            ]
        },
        {
            name: t('pricing_page.plan3_name'),
            price: t('pricing_page.plan3_price'),
            period: t('pricing_page.plan3_period'),
            description: t('pricing_page.plan3_desc'),
            ctaText: t('pricing_page.plan3_cta'),
            ctaHref: "/become-trainer",
            popular: false,
            features: [
                t('pricing_page.plan3_f1'),
                t('pricing_page.plan3_f2'),
                t('pricing_page.plan3_f3'),
                t('pricing_page.plan3_f4'),
                t('pricing_page.plan3_f5'),
                t('pricing_page.plan3_f6'),
            ]
        }
    ];

    const faqs = [
        {
            q: t('pricing_page.faq1_q'),
            a: t('pricing_page.faq1_a'),
        },
        {
            q: t('pricing_page.faq2_q'),
            a: t('pricing_page.faq2_a'),
        },
        {
            q: t('pricing_page.faq3_q'),
            a: t('pricing_page.faq3_a'),
        },
        {
            q: t('pricing_page.faq4_q'),
            a: t('pricing_page.faq4_a'),
        }
    ];

    return (
        <>
            <Head title={`${t('pricing_page.badge')} - FormationSession`} />
            
            <div className="relative min-h-screen pt-20">
                {/* Background Decor */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 left-1/3 h-[420px] w-[420px] rounded-full bg-primary/[0.025] blur-[140px] dark:bg-primary/[0.05]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            {t('pricing_page.badge')}
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6">
                            {t('pricing_page.title')}
                        </h1>
                        <p className="text-lg text-foreground/60">
                            {t('pricing_page.subtitle')}
                        </p>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-24">
                        {pricingPlans.map((plan, idx) => (
                            <Card 
                                key={idx} 
                                className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border ${plan.popular ? 'border-primary bg-primary/[0.02] shadow-lg dark:bg-primary/[0.03]' : 'border-border/40 bg-background/50'} p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-4 right-4">
                                        <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-primary-foreground uppercase">
                                            {t('pricing_page.recommended')}
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                                    <div className="mb-4 flex items-baseline gap-1">
                                        <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                                        <span className="text-sm font-medium text-foreground/50"> / {plan.period}</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-foreground/60 mb-6">{plan.description}</p>
                                    <hr className="border-border/30 mb-6" />
                                    <ul className="space-y-3.5 mb-8">
                                        {plan.features.map((feat, fidx) => (
                                            <li key={fidx} className="flex items-start gap-2.5 text-sm text-foreground/75">
                                                <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button 
                                    className={`w-full rounded-full ${plan.popular ? '' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
                                    asChild
                                >
                                    <Link href={plan.ctaHref}>
                                        {plan.ctaText}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </Card>
                        ))}
                    </div>

                    {/* FAQ section */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold text-foreground text-center mb-12 flex items-center justify-center gap-2">
                            <HelpCircle className="h-7 w-7 text-primary" /> {t('pricing_page.faq_title')}
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm dark:bg-background/40">
                                    <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                                    <p className="text-sm leading-relaxed text-foreground/60">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
