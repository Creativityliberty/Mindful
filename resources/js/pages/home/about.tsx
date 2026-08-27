import { Link } from '@inertiajs/react';
import { motion, type Variants } from 'framer-motion';
import {
    Sparkles,
    ShieldCheck,
    Heart,
    Eye,
    Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    const timeline = [
        {
            annee: t('about_page.step1_year'),
            titre: t('about_page.step1_title'),
            description: t('about_page.step1_desc'),
        },
        {
            annee: t('about_page.step2_year'),
            titre: t('about_page.step2_title'),
            description: t('about_page.step2_desc'),
        },
        {
            annee: t('about_page.step3_year'),
            titre: t('about_page.step3_title'),
            description: t('about_page.step3_desc'),
        },
        {
            annee: t('about_page.step4_year'),
            titre: t('about_page.step4_title'),
            description: t('about_page.step4_desc'),
        },
        {
            annee: t('about_page.step5_year'),
            titre: t('about_page.step5_title'),
            description: t('about_page.step5_desc'),
        },
    ];

    const equipe = [
        {
            nom: t('about_page.team1_name'),
            role: t('about_page.team1_role'),
            bio: t('about_page.team1_bio'),
            avatar: '/assets/images/service_chakras_lux.jpg'
        },
        {
            nom: t('about_page.team2_name'),
            role: t('about_page.team2_role'),
            bio: t('about_page.team2_bio'),
            avatar: '/assets/images/service_ia_lux.jpg'
        },
        {
            nom: t('about_page.team3_name'),
            role: t('about_page.team3_role'),
            bio: t('about_page.team3_bio'),
            avatar: '/assets/images/service_certif_lux.jpg'
        },
        {
            nom: t('about_page.team4_name'),
            role: t('about_page.team4_role'),
            bio: t('about_page.team4_bio'),
            avatar: '/assets/images/service_acces_lux.jpg'
        },
    ];

    const valeurs = [
        {
            icon: Heart,
            titre: t('about_page.val1_title'),
            description: t('about_page.val1_desc'),
        },
        {
            icon: ShieldCheck,
            titre: t('about_page.val2_title'),
            description: t('about_page.val2_desc'),
        },
        {
            icon: Eye,
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
        <div className="relative min-h-screen bg-background">
            {/* Background Halo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[150px]" />
            </div>

            <div className="relative w-full px-6 py-12 md:px-10 lg:px-16 max-w-7xl mx-auto">
                
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center space-y-4"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3.5 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                        <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                        {t('about_page.badge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-sans">
                        {t('about_page.title')}
                    </h1>
                </motion.div>

                {/* Split-Screen Section: Vision and Mission */}
                <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] items-start border-b border-border/20 pb-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground font-sans leading-tight">
                            {t('about_page.main_heading')}
                        </h2>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">
                            {t('about_page.intro_p1')}
                        </p>
                        <p className="text-base text-foreground/60 leading-relaxed font-light">
                            {t('about_page.intro_p2')}
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 p-8 rounded-3xl border border-border/20 bg-secondary/10">
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">{t('about_page.stat1_val')}</span>
                            <span className="text-xs text-foreground/50">{t('about_page.stat1_lbl')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">{t('about_page.stat2_val')}</span>
                            <span className="text-xs text-foreground/50">{t('about_page.stat2_lbl')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">{t('about_page.stat3_val')}</span>
                            <span className="text-xs text-foreground/50">{t('about_page.stat3_lbl')}</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">{t('about_page.stat4_val')}</span>
                            <span className="text-xs text-foreground/50">{t('about_page.stat4_lbl')}</span>
                        </div>
                    </div>
                </div>

                {/* Timeline / Notre Cheminement */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-16 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            {t('about_page.evolution_badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                            {t('about_page.evolution_title')}
                        </h2>
                    </div>

                    <div className="relative border-l border-border/30 pl-8 ml-4 space-y-12">
                        {timeline.map((item) => (
                            <div key={item.annee} className="relative group">
                                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-sky-400 group-hover:border-sky-400" />
                                
                                <div className="space-y-1.5">
                                    <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">{item.annee}</span>
                                    <h3 className="text-lg font-bold text-foreground">{item.titre}</h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-3xl">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Équipe Section */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-16 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            {t('about_page.team_badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-sans">
                            {t('about_page.team_title')}
                        </h2>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {equipe.map((membre) => (
                            <div key={membre.nom} className="space-y-4 text-center sm:text-left">
                                <div className="relative h-20 w-20 rounded-full border border-border/30 overflow-hidden mx-auto sm:mx-0 shadow-sm">
                                    <img src={membre.avatar} alt={membre.nom} className="h-full w-full object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-foreground">{membre.nom}</h3>
                                    <span className="text-xs text-sky-400 font-semibold block">{membre.role}</span>
                                    <p className="text-xs text-foreground/50 leading-relaxed font-light pt-2">{membre.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Valeurs Section */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-16 space-y-3">
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
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-bold text-foreground">{val.titre}</h3>
                                    <p className="text-xs md:text-sm text-foreground/60 leading-relaxed font-light">{val.description}</p>
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
                            <Link href="/contact">{t('about_page.cta_contact')}</Link>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-full h-12 border border-border/40" asChild>
                            <Link href="/courses">{t('about_page.cta_courses')}</Link>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    );
}
