import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type GlossaryTerm = {
    term: string;
    category: string;
    definition: string;
    relatedCourse?: string;
    courseUrl?: string;
};

const terms: GlossaryTerm[] = [
    {
        term: 'Radiesthésie',
        category: 'Pratique Énergétique',
        definition: "Art et technique de détection des radiations et énergies émises par les corps, objets, êtres vivants ou lieux, principalement à l'aide d'un pendule divinatoire ou d'une baguette.",
        relatedCourse: 'Initiation au Pendule & Radiesthésie',
        courseUrl: '/courses',
    },
    {
        term: 'Pendule Divinatoire',
        category: 'Outil de Radiesthésie',
        definition: 'Masse suspendue à un cordon ou une chaîne, utilisée en radiesthésie pour amplifier les réflexes micro-mouvements neuromusculaires inconscients et obtenir des réponses ou mesures.',
        relatedCourse: 'Initiation au Pendule & Radiesthésie',
        courseUrl: '/courses',
    },
    {
        term: 'Chakra Racine (Muladhara)',
        category: 'Chakras',
        definition: 'Premier centre énergétique situé à la base de la colonne vertébrale (périnée). Associé à la couleur rouge, à l\'élément Terre et au sentiment de sécurité, d\'ancrage et de stabilité.',
        relatedCourse: 'Les Fondations Énergétiques : Chakra Racine',
        courseUrl: '/courses',
    },
    {
        term: 'Échelle de Bovis',
        category: 'Radiesthésie',
        definition: 'Cadran gradué créé par Alfred Bovis permettant de mesurer le taux vibratoire d\'un lieu, d\'une personne, d\'un aliment ou d\'un objet en Unités Bovis (UB).',
        relatedCourse: 'Initiation au Pendule & Radiesthésie',
        courseUrl: '/courses',
    },
    {
        term: 'Effet Idéomoteur',
        category: 'Science & Réflexe',
        definition: 'Phénomène psychophysiologique par lequel une idée ou une pensée inconsciente produit une réaction musculaire ou un micro-mouvement involontaire, principe scientifique expliquant le mouvement du pendule.',
    },
    {
        term: 'Convention Mentale',
        category: 'Pratique du Pendule',
        definition: 'Code prédéfini entre l\'opérateur et son pendule fixant le sens des mouvements pour interpréter le "OUI", le "NON" ou le "RECHERCHE".',
    },
    {
        term: 'Ancrage Énergétique',
        category: 'Bien-être',
        definition: 'Pratique visant à connecter sa conscience et son énergie à la Terre pour favoriser la stabilité émotionnelle, réduire le stress et demeurer présent.',
        relatedCourse: 'Les Fondations Énergétiques : Chakra Racine',
        courseUrl: '/courses',
    },
    {
        term: 'Lahochi',
        category: 'Soin Énergétique',
        definition: 'Technique de soin énergétique par apposition des mains canalisant une énergie à haute fréquence vibratoire pour rééquilibrer les corps subtils.',
    },
    {
        term: 'Mindfulness (Pleine Conscience)',
        category: 'Méditation',
        definition: 'État de conscience résultant du fait de porter son attention, intentionnellement et sans jugement, sur l\'expérience qui se déploie moment après moment.',
        relatedCourse: 'Méditation Pleine Conscience',
        courseUrl: '/courses',
    },
    {
        term: 'Taux Vibratoire',
        category: 'Énergétique',
        definition: 'Niveau de fréquence énergétique mesuré en radiesthésie exprimant l\'état de vitalité ou d\'harmonisation d\'un être vivant ou d\'un espace.',
    },
];

export default function Glossary() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');

    const filteredTerms = useMemo(() => {
        if (!search.trim()) return terms;
        const q = search.toLowerCase();
        return terms.filter(
            (t) =>
                t.term.toLowerCase().includes(q) ||
                t.definition.toLowerCase().includes(q) ||
                t.category.toLowerCase().includes(q)
        );
    }, [search]);

    return (
        <>
            <Head>
                <title>{`${t('glossary_page.title')} | FormationSession`}</title>
            </Head>

            <div className="relative min-h-screen">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[150px] dark:bg-primary/[0.06]" />
                </div>

                <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            <BookOpen className="h-3.5 w-3.5 text-primary" />
                            {t('glossary_page.badge')}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {t('glossary_page.title')}
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                            {t('glossary_page.subtitle')}
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <div className="mb-12 relative max-w-xl mx-auto">
                        <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder={t('glossary_page.search_placeholder')}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="h-12 border-border/50 bg-background/60 pl-11 text-base backdrop-blur-md shadow-sm"
                        />
                    </div>

                    {/* Terms Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {filteredTerms.map((item) => (
                            <motion.div
                                key={item.term}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="group relative flex flex-col justify-between rounded-2xl border border-border/40 bg-background/60 p-6 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-lg"
                            >
                                <div>
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                            {item.term}
                                        </h3>
                                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-semibold border-primary/30 text-primary">
                                            {item.category}
                                        </Badge>
                                    </div>
                                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                                        {item.definition}
                                    </p>
                                </div>

                                {item.relatedCourse && item.courseUrl && (
                                    <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                                        <span className="text-xs text-muted-foreground font-medium">{t('glossary_page.discover_course')} :</span>
                                        <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs text-primary font-semibold hover:bg-primary/10" asChild>
                                            <Link href={item.courseUrl}>
                                                {item.relatedCourse}
                                                <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </Button>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
