import { Link } from '@inertiajs/react';
import { motion  } from 'framer-motion';
import type {Variants} from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Heart,
    Eye,
    Award,
    TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const timeline = [
    {
        annee: '2021',
        titre: 'La Genèse : FormationSession',
        description: 'Fondée par des professionnels passionnés du geste et du numérique. Naissance de notre vision : décloisonner la transmission des savoir-faire et des pratiques de terrain.',
    },
    {
        annee: '2022 - 2023',
        titre: 'Ancrage dans le Bien-être',
        description: 'Lancement de nos premières sessions certifiantes de Radiesthésie, de Pendule et d\'Énergétique en Normandie. Plus de 5 000 étudiants nous rejoignent.',
    },
    {
        annee: '2024 - 2025',
        titre: 'Ouverture vers l\'Artisanat',
        description: 'La plateforme s\'ouvre aux métiers de la création (Bougies artisanales, senteurs) et de l\'esthétique, démontrant notre modèle d\'apprentissage évolutif.',
    },
    {
        annee: '2026',
        titre: 'L\'Académie globale des Métiers',
        description: 'FormationSession devient le portail de référence pour tous les savoir-faire pratiques : du bien-être holistique aux technologies numériques (IA) et techniques de terrain.',
    },
];

const equipe = [
    {
        nom: 'Marie Lefebvre',
        role: 'Co-fondatrice & Directrice Académique',
        bio: 'Praticienne certifiée depuis 14 ans. Marie veille à la rigueur pédagogique et scientifique de nos programmes bien-être.',
        avatar: '/assets/images/service_chakras_lux.jpg'
    },
    {
        nom: 'Thomas Durand',
        role: 'Co-fondateur & Directeur Produit',
        bio: 'Designer digital et passionné d\'apprentissage en ligne. Thomas conçoit une interface épurée et sans friction.',
        avatar: '/assets/images/service_ia_lux.jpg'
    },
    {
        nom: 'Sarah Chakroun',
        role: 'Responsable Qualité Formateurs',
        bio: 'Praticienne et coach certifiée. Sarah accompagne chaque expert pour structurer et sublimer ses cours en ligne.',
        avatar: '/assets/images/service_certif_lux.jpg'
    },
    {
        nom: 'Antoine Bonneau',
        role: 'Responsable Communauté',
        bio: 'Animateur passionné, Antoine veille à l\'entraide entre les étudiants et à la réussite de leur apprentissage.',
        avatar: '/assets/images/service_acces_lux.jpg'
    },
];

const valeurs = [
    {
        icon: Heart,
        titre: 'Bienveillance',
        description: 'L\'apprentissage requiert un espace sécurisé. Nous favorisons le respect, l\'écoute et l\'entraide au sein de notre communauté.',
    },
    {
        icon: ShieldCheck,
        titre: 'Authenticité',
        description: 'Nos formateurs sont des professionnels actifs. Ce qu\'ils enseignent, ils le vivent au quotidien dans leur activité.',
    },
    {
        icon: Eye,
        titre: 'Accessibilité',
        description: 'Le savoir-faire ne doit pas être un luxe. Nos formations sont claires, structurées et accessibles sur tous vos écrans.',
    },
    {
        icon: Award,
        titre: 'Transformation',
        description: 'Notre but n\'est pas seulement de délivrer de l\'information, mais de vous aider à acquérir de réelles compétences professionnelles.',
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: 'easeOut' },
    },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
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
                        Notre Histoire & Vision
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-serif">
                        Qui sommes-nous ?
                    </h1>
                </motion.div>

                {/* Split-Screen Section: Vision and Mission */}
                <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] items-start border-b border-border/20 pb-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground font-serif leading-tight">
                            Une plateforme d'apprentissage dynamique et ouverte.
                        </h2>
                        <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light">
                            FormationSession a débuté avec une ambition claire : connecter les passionnés de pratiques énergétiques et de bien-être à des formateurs d'expérience. 
                        </p>
                        <p className="text-base text-foreground/60 leading-relaxed font-light">
                            Mais notre vision va plus loin. Nous pensons que tout savoir-faire de terrain mérite d'être partagé. C'est pourquoi la plateforme s'ouvre progressivement à l'artisanat, aux techniques de création et aux métiers d'avenir.
                        </p>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 p-8 rounded-3xl border border-border/20 bg-secondary/10">
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">10K+</span>
                            <span className="text-xs text-foreground/50">Étudiants formés</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">200+</span>
                            <span className="text-xs text-foreground/50">Mentors certifiés</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">30+</span>
                            <span className="text-xs text-foreground/50">Pays représentés</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-extrabold text-foreground">2021</span>
                            <span className="text-xs text-foreground/50">Lancement de la Session</span>
                        </div>
                    </div>
                </div>

                {/* Timeline / Notre Cheminement (Minimalist vertical track) */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-16 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            Évolution
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-serif">
                            Notre parcours
                        </h2>
                    </div>

                    <div className="relative border-l border-border/30 pl-8 ml-4 space-y-12">
                        {timeline.map((item) => (
                            <div key={item.annee} className="relative group">
                                {/* Bullet indicator on the line */}
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

                {/* Équipe Section with Circular avatars */}
                <section className="py-20 border-b border-border/20">
                    <div className="max-w-2xl mb-16 space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-3 py-1 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                            L'Équipe
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-serif">
                            Les visages derrière FormationSession
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
                            Valeurs
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-serif">
                            Ce qui nous guide
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
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif tracking-tight">
                        Rejoignez l'aventure FormationSession
                    </h2>
                    <p className="mx-auto max-w-xl text-base text-foreground/60 font-light leading-relaxed">
                        Que vous souhaitiez apprendre, partager votre expertise ou simplement en savoir plus, notre équipe est là pour vous accompagner.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8 text-sm tracking-wider uppercase font-semibold h-12" asChild>
                            <Link href="/contact">Nous contacter</Link>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-full h-12 border border-border/40" asChild>
                            <Link href="/courses">Voir les formations</Link>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    );
}
