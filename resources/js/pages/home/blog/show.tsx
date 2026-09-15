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
    Star,
    ShieldCheck,
    AlertTriangle,
    Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { allArticles } from './blog-data';
import { SEOHead } from '@/components/seo-head';
import { generateArticleSchema } from '@/lib/seo-schema';

type Props = {
    slug: string;
};

export default function BlogShow() {
    const { slug } = usePage<Props>().props;

    const article = allArticles.find((a) => a.slug === slug) ?? allArticles[0];

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://formationsession.com';
    const jsonLd = generateArticleSchema(article, origin);

    const authorName = article.author?.name || 'Fabienne Dizy-Olliveaud';
    const authorRole = article.author?.role || 'Formatrice Holistique';

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
                        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
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

                        <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
                            {article.titre}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5 font-medium text-foreground">
                                Par {authorName}
                            </span>
                            <span>•</span>
                            <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">
                                {authorRole}
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
                            fetchPriority="high"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>

                    {/* Article Content */}
                    <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground leading-relaxed">
                        {/* Direct Answer AEO Box */}
                        <div className="my-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm">
                            <div className="mb-3 flex items-center gap-2 font-bold uppercase tracking-wider text-primary text-xs">
                                <Sparkles className="h-4 w-4" />
                                En résumé — Réponse directe AEO
                            </div>
                            <p className="m-0 text-base font-medium leading-relaxed text-foreground">
                                {article.summaryAnswer || article.description}
                            </p>
                        </div>

                        {/* Dynamic Structured Sections */}
                        {article.sections && article.sections.length > 0 ? (
                            article.sections.map((section, idx) => (
                                <div key={idx} className="my-10">
                                    {section.title && (
                                        <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-foreground">
                                            {section.title}
                                        </h2>
                                    )}

                                    {section.paragraphs?.map((p, pIdx) => (
                                        <p key={pIdx} className="text-base text-muted-foreground leading-relaxed my-4">
                                            {p}
                                        </p>
                                    ))}

                                    {section.bulletPoints && (
                                        <ul className="space-y-3 my-6 list-none p-0">
                                            {section.bulletPoints.map((bp, bpIdx) => (
                                                <li key={bpIdx} className="flex items-start gap-3 text-muted-foreground">
                                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                    <span>{bp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.table && (
                                        <div className="my-8 overflow-x-auto rounded-xl border border-border/40 bg-card p-4">
                                            <table className="w-full text-left text-sm">
                                                <thead>
                                                    <tr className="border-b border-border/40 text-foreground font-semibold">
                                                        {section.table.headers.map((h, hIdx) => (
                                                            <th key={hIdx} className="pb-3 px-3">{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-border/20 text-muted-foreground">
                                                    {section.table.rows.map((row, rIdx) => (
                                                        <tr key={rIdx}>
                                                            {row.map((cell, cIdx) => (
                                                                <td key={cIdx} className={`py-3 px-3 ${cIdx === 0 ? 'font-semibold text-foreground' : ''}`}>
                                                                    {cell}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {section.callout && (
                                        <div className={`my-6 rounded-xl border p-5 backdrop-blur-sm ${
                                            section.callout.type === 'warning'
                                                ? 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200'
                                                : 'border-primary/30 bg-primary/5 text-foreground'
                                        }`}>
                                            <div className="mb-2 flex items-center gap-2 font-bold text-sm">
                                                {section.callout.type === 'warning' ? (
                                                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                                                ) : (
                                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                                )}
                                                {section.callout.title}
                                            </div>
                                            <p className="m-0 text-sm opacity-90 leading-relaxed">
                                                {section.callout.text}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="my-8">
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {article.description}
                                </p>
                            </div>
                        )}

                        {/* People Also Ask (PAA) Section (Indexable via Schema.org FAQPage & Google Rich Snippets) */}
                        {article.faq && article.faq.length > 0 && (
                            <section className="my-14 rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/[0.04] via-background to-background p-6 md:p-10 shadow-lg backdrop-blur-md" aria-label="People Also Ask Google">
                                <div className="mb-8">
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        <span>Google People Also Ask • Réponses Directes AEO</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground m-0">
                                        People Also Ask — Questions Fréquentes des Internautes
                                    </h3>
                                    <p className="mt-2 text-sm md:text-base text-muted-foreground m-0 leading-relaxed max-w-2xl">
                                        Voici les interrogations les plus souvent posées sur Google sur ce thème, résolues de manière claire et directe par nos formatrices et formateurs certifiés.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {article.faq.map((item, fIdx) => (
                                        <div
                                            key={fIdx}
                                            className="group rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:bg-card"
                                        >
                                            <div className="mb-3 flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                                                    <HelpCircle className="h-3 w-3 text-primary" />
                                                    Requête Google #{fIdx + 1}
                                                </span>
                                                <span className="text-[11px] font-medium text-muted-foreground">
                                                    Réponse vérifiée
                                                </span>
                                            </div>

                                            <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 m-0 leading-snug">
                                                {item.question}
                                            </h4>

                                            <div className="flex items-start gap-3 rounded-xl border border-border/30 bg-muted/30 p-4">
                                                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                                <p className="text-sm md:text-base text-foreground/80 m-0 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Formation CTA Card */}
                        {article.relatedCourse ? (
                            <Card className="my-12 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/20 shadow-xl">
                                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div>
                                        <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                                            <ShieldCheck className="h-4 w-4" />
                                            {article.relatedCourse.badge}
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">
                                            {article.relatedCourse.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground max-w-lg mb-0">
                                            {article.relatedCourse.description}
                                        </p>
                                        {article.relatedCourse.price && (
                                            <p className="mt-3 text-lg font-bold text-primary">
                                                Tarif : {article.relatedCourse.price}
                                            </p>
                                        )}
                                    </div>
                                    <Button size="lg" className="rounded-full shrink-0 gap-2 font-semibold shadow-lg" asChild>
                                        <Link href={article.relatedCourse.href}>
                                            Découvrir la Formation
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ) : null}
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
