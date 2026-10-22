import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Eye,
    Heart,
    Award,
    Users,
    Sparkles,
    CheckCircle2,
    Compass,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';

export default function About() {
    const { t } = useTranslation();

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://formationsession.com';
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${origin}/about#webpage`,
        "url": `${origin}/about`,
        "name": `${t('seo.about_title')} | FormationSession`,
        "description": t('seo.about_description'),
        "isPartOf": {
            "@type": "WebSite",
            "@id": `${origin}/#website`,
            "url": origin,
            "name": "FormationSession"
        }
    });

    const pillars = [
        {
            badge: t('about_page.step1_year'),
            title: t('about_page.step1_title'),
            description: t('about_page.step1_desc'),
        },
        {
            badge: t('about_page.step2_year'),
            title: t('about_page.step2_title'),
            description: t('about_page.step2_desc'),
        },
        {
            badge: t('about_page.step3_year'),
            title: t('about_page.step3_title'),
            description: t('about_page.step3_desc'),
        },
        {
            badge: t('about_page.step4_year'),
            title: t('about_page.step4_title'),
            description: t('about_page.step4_desc'),
        },
    ];

    const equipe = [
        {
            nom: t('about_page.team1_name'),
            role: t('about_page.team1_role'),
            initials: 'FD',
            bio: t('about_page.team1_bio'),
        },
        {
            nom: t('about_page.team2_name'),
            role: t('about_page.team2_role'),
            initials: 'LT',
            bio: t('about_page.team2_bio'),
        },
    ];

    const valeurs = [
        {
            icon: ShieldCheck,
            titre: t('about_page.val1_title'),
            description: t('about_page.val1_desc'),
        },
        {
            icon: Eye,
            titre: t('about_page.val2_title'),
            description: t('about_page.val2_desc'),
        },
        {
            icon: Heart,
            titre: t('about_page.val3_title'),
            description: t('about_page.val3_desc'),
        },
        {
            icon: Award,
            titre: t('about_page.val4_title'),
            description: t('about_page.val4_desc'),
        },
    ];

    return (
        <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/20">
            <SEOHead
                title={`${t('seo.about_title')} | FormationSession`}
                description={t('seo.about_description')}
                canonical={`${origin}/about`}
                jsonLd={jsonLd}
            />

            {/* Subtle Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[150px]" />
            </div>

            <div className="relative w-full px-6 py-12 md:px-10 lg:px-16 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center space-y-4 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                        {t('about_page.badge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-sans">
                        {t('about_page.title')}
                    </h1>
                    <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed">
                        {t('about_page.subtitle')}
                    </p>
                </motion.div>

                {/* Split-Screen Section: Vision and Mission */}
                <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] items-start border-b border-border/20 pb-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground font-sans leading-tight">
                            {t('about_page.main_heading')}
                        </h2>
                        <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                            {t('about_page.intro_p1')}
                        </p>
                        <p className="text-base text-foreground/60 leading-relaxed font-light">
                            {t('about_page.intro_p2')}
                        </p>
                    </div>

                    {/* Quick Stats Bento Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:bg-card/40">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="rounded-full border border-border/40 bg-secondary/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-secondary-foreground uppercase">
                                    (01)
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                                    <Users className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-sans">
                                    {t('about_page.stat1_val')}
                                </span>
                                <span className="text-xs font-medium text-foreground/70 tracking-wide">
                                    {t('about_page.stat1_lbl')}
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:bg-card/40">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="rounded-full border border-border/40 bg-secondary/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-secondary-foreground uppercase">
                                    (02)
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                                    <Award className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-sans">
                                    {t('about_page.stat2_val')}
                                </span>
                                <span className="text-xs font-medium text-foreground/70 tracking-wide">
                                    {t('about_page.stat2_lbl')}
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:bg-card/40">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="rounded-full border border-border/40 bg-secondary/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-secondary-foreground uppercase">
                                    (03)
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 transition-transform group-hover:scale-110">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-3xl md:text-4xl font-extrabold tracking-tight text-sky-500 font-sans">
                                    {t('about_page.stat3_val')}
                                </span>
                                <span className="text-xs font-medium text-foreground/70 tracking-wide">
                                    {t('about_page.stat3_lbl')}
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:bg-card/40">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="rounded-full border border-border/40 bg-secondary/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold tracking-wider text-secondary-foreground uppercase">
                                    (04)
                                </span>
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <span className="block text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-sans">
                                    {t('about_page.stat4_val')}
                                </span>
                                <span className="text-xs font-medium text-foreground/70 tracking-wide">
                                    {t('about_page.stat4_lbl')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Les Piliers Fondateurs */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-14 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            <Compass className="h-3.5 w-3.5 text-sky-500" />
                            {t('about_page.evolution_badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                            {t('about_page.evolution_title')}
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {pillars.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-3xl border border-border/20 bg-background/60 backdrop-blur-sm space-y-3 hover:border-sky-400/40 transition-colors"
                            >
                                <span className="text-xs font-bold text-sky-500 tracking-widest uppercase block">
                                    {item.badge}
                                </span>
                                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Équipe Fondatrice Section */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-14 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            {t('about_page.team_badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                            {t('about_page.team_title')}
                        </h2>
                    </div>

                    <div className="grid max-w-4xl gap-8 sm:grid-cols-2">
                        {equipe.map((membre) => (
                            <div
                                key={membre.nom}
                                className="p-8 rounded-3xl border border-border/20 bg-background/50 backdrop-blur-sm space-y-5 hover:border-sky-400/30 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-500 text-lg font-bold">
                                        {membre.initials}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{membre.nom}</h3>
                                        <span className="text-xs text-sky-500 font-semibold block leading-snug">
                                            {membre.role}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-foreground/65 leading-relaxed font-light pt-1">
                                    {membre.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Valeurs Section */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-14 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            {t('about_page.values_badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                            {t('about_page.values_title')}
                        </h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {valeurs.map((val) => {
                            const Icon = val.icon;
                            return (
                                <div key={val.titre} className="space-y-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-bold text-foreground text-base">{val.titre}</h3>
                                    <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">
                                        {val.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA section */}
                <section className="py-20 text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground font-sans tracking-tight">
                        {t('about_page.cta_title')}
                    </h2>
                    <p className="mx-auto max-w-xl text-base text-foreground/60 font-light leading-relaxed">
                        {t('about_page.cta_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12" asChild>
                            <Link href="/courses">{t('about_page.cta_courses')}</Link>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-full h-12 border border-border/40" asChild>
                            <Link href="/become-trainer">{t('about_page.cta_become_trainer')}</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
