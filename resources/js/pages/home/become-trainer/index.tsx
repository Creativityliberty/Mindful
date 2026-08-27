import { Link, router, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Plan } from '@/types';
import { BecomeTrainerHeader } from './partials/become-trainer-header';
import { TrainerCard  } from './partials/trainer-card';
import type {TrainerProfile} from './partials/trainer-card';

const benefits = [
    {
        title: 'Développez votre activité',
        description: 'Publiez vos cours et touchez des milliers d\'apprenants motivés partout dans le monde francophone.',
    },
    {
        title: 'Une communauté engagée',
        description: 'Rejoignez une plateforme dédiée aux pratiques énergétiques avec des étudiants investis.',
    },
    {
        title: 'Outils simples et puissants',
        description: 'Créez et gérez vos formations facilement depuis votre dashboard dédié, sans technique.',
    },
    {
        title: 'Support dédié',
        description: 'Notre équipe vous accompagne à chaque étape : onboarding, création et développement.',
    },
];

const steps = [
    {
        number: '01',
        title: 'Choisissez votre plan',
        description: 'Sélectionnez l\'abonnement qui correspond à votre activité.',
    },
    {
        number: '02',
        title: 'Paiement sécurisé Stripe',
        description: 'Vous êtes redirigé sur Stripe pour régler en toute sécurité.',
    },
    {
        number: '03',
        title: 'Accès instantané',
        description: 'Dès le paiement validé, recevez vos identifiants.',
    },
    {
        number: '04',
        title: 'Publiez & Transmettez',
        description: 'Publiez vos cours et accueillez vos premiers élèves.',
    },
];

const featuredTrainers: TrainerProfile[] = [
    {
        initials: 'L',
        name: 'Louise',
        specialty: 'Radiesthésie & Énergétique',
        bio: 'Fondatrice de la plateforme, Louise vous transmet les protocoles fondamentaux et avancés du pendule et des chakras.',
        courseCount: 6,
        studentCount: '2 400+',
        rating: 4.9,
        avatar: '/assets/images/service_chakras_lux.jpg',
    },
    {
        initials: 'FD',
        name: 'Fabienne D.',
        specialty: 'Radiesthésie & Géobiologie',
        bio: 'Spécialiste de la détection vibratoire et de l\'harmonisation des lieux de vie en Normandie.',
        courseCount: 3,
        studentCount: '850+',
        rating: 4.9,
        avatar: '/assets/images/service_radiesthesie_lux.jpg',
    },
    {
        initials: 'JR',
        name: 'Julien R.',
        specialty: 'Pratique du Pendule & Cadrans',
        bio: 'Formateur certifié, expert en recherche au pendule et en conception de cadrans de mesure.',
        courseCount: 4,
        studentCount: '1 100+',
        rating: 4.8,
        avatar: '/assets/images/service_pendule.jpg',
    },
];

export default function BecomeTrainer() {
    const { auth, plans } = usePage<{ plans: Plan[] }>().props;

    function handleCheckout(slug: string) {
        if (!auth.user) {
            router.visit(`/become-trainer/checkout/${slug}`);
            return;
        }
        router.post('/become-trainer/checkout', { plan_slug: slug });
    }

    return (
        <div className="relative min-h-screen bg-background">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-[150px]" />
            </div>

            <div className="relative w-full px-6 py-12 md:px-10 lg:px-16 max-w-7xl mx-auto">
                {/* Header */}
                <BecomeTrainerHeader />

                {/* Split-Screen Canvas Layout */}
                <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start border-b border-border/30 pb-20">
                    
                    {/* Left Column: Fixed Stature & Info */}
                    <div className="lg:sticky lg:top-28 space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            Rejoindre l'académie
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif leading-tight">
                            Partagez votre savoir-faire.
                        </h2>
                        
                        <p className="text-lg text-foreground/60 leading-relaxed font-light">
                            Que vous soyez expert en bien-être, créateur de bougies artisanales ou formateur technique, transmettez vos compétences à des étudiants engagés.
                        </p>

                        {/* Minimalist Stats Counters */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/20">
                            <div>
                                <span className="block text-3xl font-extrabold text-foreground">10K+</span>
                                <span className="text-xs text-foreground/50">Étudiants actifs</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-extrabold text-foreground">200+</span>
                                <span className="text-xs text-foreground/50">Mentors certifiés</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-extrabold text-foreground">4.8/5</span>
                                <span className="text-xs text-foreground/50">Note moyenne</span>
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
                                Commencer maintenant
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Luminous Canvas (Benefits & Steps) */}
                    <div className="space-y-16">
                        
                        {/* Benefits list separated by ultra-fine lines */}
                        <div className="space-y-8">
                            <h3 className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Pourquoi enseigner ici ?</h3>
                            <div className="divide-y divide-border/20">
                                {benefits.map((b) => (
                                    <div key={b.title} className="py-6 first:pt-0 last:pb-0">
                                        <h4 className="text-lg font-bold text-foreground mb-2">{b.title}</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">{b.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Steps Timeline canvas */}
                        <div className="space-y-8 pt-8 border-t border-border/20">
                            <h3 className="text-xs font-bold tracking-widest text-foreground/40 uppercase">Le parcours en 4 étapes</h3>
                            <div className="grid gap-6 sm:grid-cols-2">
                                {steps.map((s) => (
                                    <div key={s.number} className="p-6 rounded-2xl border border-border/20 bg-secondary/10 hover:border-primary/30 transition-colors">
                                        <span className="text-sm font-bold text-primary block mb-2">{s.number}</span>
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
                    <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            Tarifs transparents
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
                            Choisissez votre plan
                        </h2>
                        <p className="text-base text-foreground/60 font-light leading-relaxed">
                            Accédez à l'ensemble de nos outils de création de cours, d'hébergement vidéo et à notre support dédié. Sans engagement.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative h-full rounded-[2rem] border transition-all duration-300 p-8 flex flex-col justify-between bg-background/50 backdrop-blur-md ${
                                    plan.highlight
                                        ? 'border-primary shadow-xl shadow-primary/5 scale-105 z-10'
                                        : 'border-border/30 hover:border-primary/40'
                                }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                        <span className="rounded-full bg-primary px-4 py-1 text-[10px] font-bold tracking-widest text-primary-foreground uppercase shadow-sm">
                                            Conseillé
                                        </span>
                                    </div>
                                )}
                                <div>
                                    <p className="mb-2 text-xs font-bold tracking-wider text-foreground uppercase opacity-60">
                                        {plan.name}
                                    </p>
                                    <div className="mb-6 flex items-end gap-1">
                                        <span className="text-4xl font-extrabold text-foreground tracking-tight">
                                            {plan.formatted_price}
                                        </span>
                                        <span className="mb-1 text-sm text-foreground/50">
                                            / {plan.interval_label.toLowerCase()}
                                        </span>
                                    </div>
                                    <ul className="mb-8 space-y-3.5 border-t border-border/20 pt-6">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed font-light"
                                            >
                                                <Check className="h-4.5 w-4.5 shrink-0 text-primary mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    className="w-full rounded-full h-11 tracking-wider font-semibold"
                                    variant={plan.highlight ? 'default' : 'outline'}
                                    onClick={() => handleCheckout(plan.slug)}
                                >
                                    Choisir ce plan
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Formateurs / Mentors Section */}
                <section className="py-20">
                    <div className="max-w-2xl mb-12 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            Communauté
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
                            Ils ont rejoint FormationSession
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
            </div>
        </div>
    );
}
