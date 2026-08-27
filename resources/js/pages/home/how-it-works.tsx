import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, GraduationCap, Check, Plus, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const studentSteps = [
    {
        number: '01',
        title: 'Créez votre compte',
        description: 'Inscrivez-vous gratuitement en quelques clics et accédez immédiatement à notre mode aperçu pour essayer les premières leçons sans frais.',
    },
    {
        number: '02',
        title: 'Choisissez vos cours',
        description: 'Explorez nos différents univers (pratiques énergétiques, bougies artisanales, onglerie) et sélectionnez celui qui résonne avec votre cheminement.',
    },
    {
        number: '03',
        title: 'Apprenez à votre rythme',
        description: 'Suivez des leçons vidéo HD claires, téléchargez vos fiches de pratique et intégrez les exercices dans votre quotidien.',
    },
    {
        number: '04',
        title: 'Validez vos connaissances',
        description: 'Validez chaque étape de votre progression et recevez une attestation officielle de complétion signée par votre formateur.',
    },
];

const trainerSteps = [
    {
        number: '01',
        title: 'Postulez en ligne',
        description: 'Soumettez votre candidature avec vos certifications en moins de 5 minutes. Une fois votre profil validé, accédez à votre espace dédié.',
    },
    {
        number: '02',
        title: 'Créez vos programmes',
        description: 'Ajoutez vos cours, organisez vos leçons par modules clairs, configurez vos tarifs et uploadez vos supports audios ou PDF.',
    },
    {
        number: '03',
        title: 'Animez votre communauté',
        description: 'Répondez aux questions des étudiants sous vos cours, proposez des ateliers en direct et suivez la progression de vos apprenants.',
    },
    {
        number: '04',
        title: 'Soyez rémunéré équitablement',
        description: 'Bénéficiez d\'un système de redistribution transparent et percevez directement vos gains via notre intégration Stripe sécurisée.',
    },
];

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState<'student' | 'trainer'>('student');

    return (
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
                        Le Concept
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif">
                        Comment fonctionne le studio ?
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-foreground/60 leading-relaxed font-light">
                        Mindfulness & Bien-être Studio est une plateforme de transmission qui connecte des formateurs qualifiés et passionnés avec des personnes en quête d'apprentissage et de développement personnel.
                    </p>
                </motion.div>

                {/* Tab Switcher - Rounded Framer-like pill */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1.5 rounded-full border border-border/30 bg-secondary/20 backdrop-blur-md">
                        {/* Slide background indicator */}
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
                            style={{ width: '160px', justifyContent: 'center' }}
                        >
                            <User className="h-4 w-4" />
                            Je suis apprenant
                        </button>

                        {/* Trainer Tab Button */}
                        <button
                            onClick={() => setActiveTab('trainer')}
                            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
                                activeTab === 'trainer' ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
                            }`}
                            style={{ width: '160px', justifyContent: 'center' }}
                        >
                            <Briefcase className="h-4 w-4" />
                            Je suis formateur
                        </button>
                    </div>
                </div>

                {/* Split-Screen Interactive Flow Canvas */}
                <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] items-start border-b border-border/20 pb-20">
                    
                    {/* Left Column: Fixed Vision Frame with Rounded card */}
                    <div className="lg:sticky lg:top-28 space-y-6">
                        <div className="rounded-[2rem] border border-border/30 bg-background/50 p-8 md:p-10 backdrop-blur-md relative overflow-hidden shadow-xl">
                            {/* Decorative soft cyan aura inside card */}
                            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-sky-400/5 blur-2xl" />
                            
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-serif mb-4">
                                {activeTab === 'student' 
                                    ? 'Un apprentissage à votre rythme, sans contrainte.' 
                                    : 'Transmettez votre expertise en toute liberté.'
                                }
                            </h2>
                            <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">
                                {activeTab === 'student'
                                    ? 'Conçu pour s\'intégrer harmonieusement dans votre vie quotidienne. Accédez à vos modules sur ordinateur, tablette ou mobile, 24h/24 et 7j/7.'
                                    : 'Bénéficiez d\'une infrastructure complète pour héberger vos vidéos, distribuer vos PDF et facturer vos apprenants de manière automatique et sécurisée.'
                                }
                            </p>
                            
                            <div className="pt-6 border-t border-border/20 mt-6 space-y-3">
                                <div className="flex items-center gap-2.5 text-xs text-foreground/70">
                                    <Check className="h-4 w-4 text-sky-400" />
                                    Accès illimité et à vie
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-foreground/70">
                                    <Check className="h-4 w-4 text-sky-400" />
                                    Support de l'équipe pédagogique
                                </div>
                                <div className="flex items-center gap-2.5 text-xs text-foreground/70">
                                    <Check className="h-4 w-4 text-sky-400" />
                                    {activeTab === 'student' ? 'Attestation nominative de réussite' : 'Paiements Stripe directs et sécurisés'}
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
                                {(activeTab === 'student' ? studentSteps : trainerSteps).map((step, idx) => (
                                    <div key={step.number} className="relative group">
                                        {/* Timeline bullet indicator */}
                                        <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-sky-400 group-hover:border-sky-400" />
                                        
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">Étape {step.number}</span>
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
                        Prêt à commencer votre voyage ?
                    </h2>
                    <p className="mx-auto max-w-xl text-base text-foreground/60 font-light leading-relaxed">
                        Rejoignez dès aujourd'hui des milliers d'étudiants engagés sur la voie du bien-être et de l'harmonie quotidienne.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12 gap-2 group" asChild>
                            <Link href="/courses">
                                Découvrir les cours
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-full h-12 border border-border/40" asChild>
                            <Link href="/become-trainer">Devenir formateur</Link>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    );
}
