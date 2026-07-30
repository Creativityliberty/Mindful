import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, UserCheck, GraduationCap, Video, Users, CheckCircle, ShieldCheck } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

const studentSteps = [
    {
        icon: UserCheck,
        title: "1. Créez votre compte",
        desc: "Inscrivez-vous gratuitement et accédez immédiatement à notre mode aperçu pour essayer les premières leçons gratuitement."
    },
    {
        icon: BookOpen,
        title: "2. Choisissez vos cours",
        desc: "Explorez nos cours thématiques (méditation, chakras, sophrologie, yoga) et sélectionnez celui qui résonne avec vos besoins actuels."
    },
    {
        icon: Video,
        title: "3. Apprenez à votre rythme",
        desc: "Suivez des leçons vidéo HD, téléchargez des guides de pratique et suivez des exercices audio conçus pour s'intégrer dans votre quotidien."
    },
    {
        icon: GraduationCap,
        title: "4. Validez vos connaissances",
        desc: "Validez chaque étape de votre progression et recevez une attestation officielle de complétion signée par votre enseignant."
    }
];

const trainerSteps = [
    {
        icon: Sparkles,
        title: "1. Postulez en ligne",
        desc: "Soumettez votre candidature avec vos certifications. Une fois validé, vous accédez à votre plan de formateur dédié."
    },
    {
        icon: Users,
        title: "2. Créez vos programmes",
        desc: "Ajoutez vos cours, organisez vos leçons par modules clairs, intégrez des quiz et uploadez vos supports audios ou PDF."
    },
    {
        icon: CheckCircle,
        title: "3. Animez votre communauté",
        desc: "Répondez aux questions des étudiants, proposez des ateliers en direct et suivez la progression de vos apprenants."
    },
    {
        icon: ShieldCheck,
        title: "4. Soyez rémunéré équitablement",
        desc: "Bénéficiez d'un système de redistribution transparent et percevez directement vos gains via notre intégration Stripe sécurisée."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

export default function HowItWorks() {
    return (
        <>
            <Head title="Comment ça marche - Mindfulness & Bien-être Studio" />
            
            <div className="relative min-h-screen pt-20">
                {/* Background Decor */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[130px] dark:bg-primary/[0.05]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            Le concept
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6">
                            Comment fonctionne notre studio ?
                        </h1>
                        <p className="text-lg text-foreground/60">
                            Mindfulness & Bien-être Studio est une plateforme de transmission qui connecte des formateurs qualifiés et passionnés avec des personnes en quête d'harmonie et de développement personnel.
                        </p>
                    </div>

                    {/* Student Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Vous êtes apprenant</h2>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                        >
                            {studentSteps.map((step, idx) => (
                                <motion.div 
                                    key={idx}
                                    variants={itemVariants}
                                    className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:shadow-md dark:border-border/50 dark:bg-background/40"
                                >
                                    <div>
                                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <step.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-sm leading-relaxed text-foreground/60">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Trainer Section */}
                    <div className="mb-24">
                        <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Vous êtes formateur / praticien</h2>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                        >
                            {trainerSteps.map((step, idx) => (
                                <motion.div 
                                    key={idx}
                                    variants={itemVariants}
                                    className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:shadow-md dark:border-border/50 dark:bg-background/40"
                                >
                                    <div>
                                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-primary">
                                            <step.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-sm leading-relaxed text-foreground/60">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <div className="rounded-3xl border border-border/40 bg-background/60 p-8 md:p-12 text-center backdrop-blur-sm max-w-4xl mx-auto shadow-md">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Prêt à commencer votre voyage ?</h3>
                        <p className="text-foreground/60 max-w-xl mx-auto mb-8">
                            Rejoignez dès aujourd'hui des milliers d'étudiants engagés sur la voie du bien-être et de l'harmonie quotidienne.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="rounded-full px-8" asChild>
                                <Link href="/courses">Découvrir les cours</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 border-border/40 bg-background/60" asChild>
                                <Link href="/become-trainer">Devenir formateur</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
