import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '@/components/seo-head';

type Guide = {
    id: number;
    title: string;
    category: string;
    description: string;
    readTime: string;
    slug: string;
    featured?: boolean;
};

const guides: Guide[] = [
    {
        id: 1,
        title: "Guide Complet de la Radiesthésie et du Pendule pour Débutants",
        category: "Radiesthésie & Pendule",
        description: "Apprenez les bases fondamentales du pendule divinatoire : choisir son matériel, purifier l'outil, établir le code OUI/NON et éviter les pièges du mental.",
        readTime: "12 min",
        slug: "comment-choisir-premier-pendule-divinatoire",
        featured: true,
    },
    {
        id: 2,
        title: "Manuel Pratique d'Ancrage et Rééquilibrage du Chakra Racine",
        category: "Chakras & Énergie",
        description: "Exercices de yoga, lithothérapie et rituels quotidiens de 5 minutes pour retrouver une sécurité intérieure et une stabilité profonde.",
        readTime: "10 min",
        slug: "comment-equilibrer-chakra-racine",
    },
    {
        id: 3,
        title: "Guide d'Utilisation des Cadrans et Planches de Bovis",
        category: "Mesure Énergétique",
        description: "Comment imprimer et utiliser les cadrans gradués de Bovis pour mesurer le taux vibratoire des lieux, aliments et minéraux.",
        readTime: "8 min",
        slug: "comment-choisir-premier-pendule-divinatoire",
    },
];

export default function Guides() {
    const { t } = useTranslation();

    return (
        <>
            <SEOHead
                title={t('seo.guides_title')}
                description={t('seo.guides_description')}
            />

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
                        className="mb-14 text-center"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            <FileText className="h-3.5 w-3.5 text-primary" />
                            {t('guides_page.badge')}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {t('guides_page.title')}
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                            {t('guides_page.subtitle')}
                        </p>
                    </motion.div>

                    {/* Guides List */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {guides.map((guide) => (
                            <motion.div
                                key={guide.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="group h-full overflow-hidden border-border/40 bg-background/60 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-xl">
                                    <CardContent className="p-8 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="mb-4 flex items-center justify-between">
                                                <Badge variant="secondary" className="border-primary/20 bg-primary/10 text-primary font-semibold text-xs">
                                                    {guide.category}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                                                    <BookOpen className="h-3.5 w-3.5" />
                                                    {guide.readTime}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                                                {guide.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                                                {guide.description}
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                                            <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                Gratuit
                                            </span>
                                            <Button size="sm" className="rounded-full gap-1.5 font-semibold" asChild>
                                                <Link href={`/blog/${guide.slug}`}>
                                                    {t('guides_page.view_guide')}
                                                    <ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
