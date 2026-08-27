import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Clock,
    HelpCircle,
    Share2,
    Sparkles,
    Star,
    ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { allArticles } from './blog-data';
import { SEOHead } from '@/components/seo-head';

type Props = {
    slug: string;
};

export default function BlogShow() {
    const { slug } = usePage<Props>().props;

    const article = allArticles.find((a) => a.slug === slug) ?? allArticles[0];

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://formationsession.com';
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${origin}/blog/${article.slug}#post`,
        "headline": article.titre,
        "description": article.description,
        "datePublished": article.date,
        "url": `${origin}/blog/${article.slug}`,
        "image": article.image.startsWith('http') ? article.image : `${origin}${article.image}`,
        "author": {
            "@type": "Organization",
            "name": "FormationSession",
            "url": origin
        },
        "publisher": {
            "@type": "Organization",
            "name": "FormationSession",
            "url": origin
        }
    });

    return (
        <>
            <SEOHead
                title={article.titre}
                description={article.description}
                ogImage={article.image.startsWith('http') ? article.image : undefined}
                jsonLd={jsonLd}
            />

            <div className="relative min-h-screen">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-[180px] dark:bg-primary/[0.06]" />
                </div>

                <article className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                    {/* Back link */}
                    <div className="mb-8">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2 rounded-full text-muted-foreground hover:text-foreground"
                            asChild
                        >
                            <Link href="/blog">
                                <ArrowLeft className="h-4 w-4" />
                                Retour aux articles
                            </Link>
                        </Button>
                    </div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 text-center"
                    >
                        <div className="mb-4 flex items-center justify-center gap-2">
                            {article.categories.map((cat) => (
                                <Badge
                                    key={cat}
                                    variant="secondary"
                                    className="border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                                >
                                    {cat}
                                </Badge>
                            ))}
                        </div>

                        <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            {article.titre}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                                Par Sophie Lefèvre
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-primary" />
                                {article.duree} de lecture
                            </span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                    </motion.header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-2xl"
                    >
                        <img
                            src={article.image}
                            alt={article.titre}
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    {/* Article Content */}
                    <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground leading-relaxed">
                        {/* Direct Answer AEO Box */}
                        <div className="my-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm">
                            <div className="mb-3 flex items-center gap-2 font-bold uppercase tracking-wider text-primary text-xs">
                                <Sparkles className="h-4 w-4" />
                                En résumé — Réponse directe
                            </div>
                            <p className="m-0 text-base font-medium leading-relaxed text-foreground">
                                {article.description} Pour un débutant, le pendule en laiton (métal) de 15 à 25g est le choix numéro 1 pour sa réactivité et sa neutralité. Le pendule amplifie vos propres réflexes inconscients (l'effet idéomoteur).
                            </p>
                        </div>

                        <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-foreground">
                            Qu'est-ce qu'un Pendule Divinatoire et Comment Fonctionne-t-il ?
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Un pendule divinatoire est un objet pesant suspendu à un fil ou une chaîne, utilisé en radiesthésie pour traduire les réponses de l'inconscient. Contrairement aux idées reçues, le pendule n'est pas un objet magique doté d'une conscience propre. En science et en radiesthésie moderne, son mouvement s'explique par la <strong>réponse idéomotrice</strong>.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Lorsque vous posez une question dont votre subconscient ou votre intuition connaît la réponse, votre système nerveux périphérique génère des oscillations musculaires imperceptibles à l'œil nu. Le pendule agit simplement comme un <strong>amplificateur visuel de votre propre sensibilité vibratoire</strong>.
                        </p>

                        <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-foreground">
                            Bois, Métal ou Pierre : Quel Matériau Choisir pour Débuter ?
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Pour un débutant, le laiton (métal) est le matériau idéal en raison de sa neutralité énergétique et de sa masse équilibrée. Les pendules en cristal de roche conviennent aux personnes sensibles aux minéraux, tandis que le bois est recommandé pour une utilisation en extérieur ou en géobiologie.
                        </p>

                        {/* Comparative Table */}
                        <div className="my-8 overflow-x-auto rounded-xl border border-border/40 bg-card p-4">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-border/40 text-foreground font-semibold">
                                        <th className="pb-3">Matériau</th>
                                        <th className="pb-3">Poids</th>
                                        <th className="pb-3">Sensibilité</th>
                                        <th className="pb-3">Entretien</th>
                                        <th className="pb-3">Utilisation Recommandée</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/20 text-muted-foreground">
                                    <tr>
                                        <td className="py-3 font-semibold text-foreground">Laiton (Métal)</td>
                                        <td className="py-3">15g - 30g</td>
                                        <td className="py-3 text-emerald-500 font-semibold">Très Réactif ⭐⭐⭐⭐⭐</td>
                                        <td className="py-3">Aucun (Neutre)</td>
                                        <td className="py-3 font-semibold text-primary">Débutants & Praticiens (#1)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-foreground">Bois (Buis)</td>
                                        <td className="py-3">8g - 15g</td>
                                        <td className="py-3">Doux ⭐⭐⭐</td>
                                        <td className="py-3">Dépoussiérage</td>
                                        <td className="py-3">Géobiologie, extérieur</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 font-semibold text-foreground">Cristal de Roche</td>
                                        <td className="py-3">15g - 25g</td>
                                        <td className="py-3">Amplificateur ⭐⭐⭐⭐</td>
                                        <td className="py-3">Eau / Sauge</td>
                                        <td className="py-3">Soin des chakras, énergie</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-foreground">
                            Protocole Pas-à-Pas : Activer et Calibrer son Pendule en 4 Étapes
                        </h2>
                        <ul className="space-y-3 my-6">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span><strong>Étape 1 : Purification & Remise à zéro :</strong> Passez votre pendule quelques secondes au-dessus de la fumée de sauge blanche ou de palo santo.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span><strong>Étape 2 : Posture et prise en main :</strong> Asseyez-vous, pieds à plat au sol. Tenez la chaîne entre pouce et index à 5-7 cm de la masse.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span><strong>Étape 3 : Convention mentale (Code OUI / NON) :</strong> Demandez *"Montre-moi un OUI"*, puis *"Montre-moi un NON"*, et notez le sens de rotation.</span>
                            </li>
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span><strong>Étape 4 : Première séance :</strong> Commencez par des questions fermées simples dont vous connaissez la réponse.</span>
                            </li>
                        </ul>

                        {/* Formation CTA Card */}
                        <Card className="my-12 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/20 shadow-xl">
                            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                                        <ShieldCheck className="h-4 w-4" />
                                        Formation Certifiante
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        Initiation au Pendule & Radiesthésie
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-lg mb-0">
                                        Maîtrisez l'utilisation du pendule, apprenez à lire les cadrans de Bovis et équilibrez les énergies avec 4h de cours vidéo et fiches PDF imprimables.
                                    </p>
                                </div>
                                <Button size="lg" className="rounded-full shrink-0 gap-2 font-semibold shadow-lg" asChild>
                                    <Link href="/courses/1">
                                        Découvrir la Formation
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Back link bottom */}
                    <div className="mt-12 flex justify-between items-center border-t border-border/40 pt-8">
                        <Button variant="outline" className="rounded-full gap-2" asChild>
                            <Link href="/blog">
                                <ArrowLeft className="h-4 w-4" />
                                Tous les articles
                            </Link>
                        </Button>
                        <Button variant="outline" className="rounded-full gap-2" asChild>
                            <Link href="/courses">
                                Catalogue Formations
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </article>
            </div>
        </>
    );
}
