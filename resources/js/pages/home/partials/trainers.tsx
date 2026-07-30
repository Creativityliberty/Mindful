import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { ArrowRight, Quote } from 'lucide-react'

export function Trainers() {
    return (
        <section className="w-full bg-muted/30 py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mx-auto max-w-4xl">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
                            À l&apos;origine de FormationSession
                        </h2>
                        <p className="text-lg text-foreground/70">
                            Une plateforme créée pour apprendre et transmettre autrement.
                        </p>
                    </div>

                    <div className="mb-12 rounded-2xl border border-border/30 bg-background/60 p-8 backdrop-blur-sm dark:border-border/60 dark:bg-background/70">
                        <Quote className="mb-4 h-8 w-8 text-primary/40" aria-hidden="true" />
                        <p className="mb-6 text-base leading-relaxed text-foreground/80">
                            FormationSession est née d&apos;une volonté simple : rendre les formations consacrées
                            au bien-être et aux pratiques personnelles plus faciles à découvrir, à comprendre et à suivre.
                        </p>
                        <p className="mb-6 text-base leading-relaxed text-foreground/80">
                            La plateforme s&apos;adresse aux personnes qui souhaitent apprendre, mais aussi aux
                            professionnels qui veulent transmettre leur expérience dans un cadre clair.
                        </p>
                        <p className="mb-6 text-base leading-relaxed text-foreground/80">
                            Les premières formations sont proposées par Fabienne et portent notamment sur la
                            radiesthésie, le pendule et les chakras.
                        </p>

                        <div className="mb-6 rounded-xl border border-primary/20 bg-primary/[0.03] p-6">
                            <h3 className="mb-1 text-lg font-semibold">Fabienne Dizy-Olliveaud</h3>
                            <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                                Son approche accorde une place importante à l&apos;apprentissage progressif,
                                à l&apos;expérience personnelle, aux exercices pratiques, à l&apos;écoute de ses
                                ressentis, à l&apos;autonomie et au respect des limites de chaque pratique.
                            </p>
                            <p className="text-sm leading-relaxed text-foreground/70">
                                FormationSession a vocation à accueillir progressivement d&apos;autres professionnels
                                du bien-être partageant cette volonté de transmettre avec sérieux et simplicité.
                            </p>
                        </div>

                        <Button asChild variant="outline" className="rounded-full">
                            <Link href="/about">
                                En savoir plus sur FormationSession
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
