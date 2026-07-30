import { ShieldCheck, FileText, Scale, HeartHandshake, Timer } from 'lucide-react'

const engagements = [
    {
        icon: ShieldCheck,
        title: 'Des informations honnêtes',
        description:
            "Nous ne publions pas de chiffres, de témoignages, de certifications ou de résultats qui ne peuvent pas être vérifiés.",
    },
    {
        icon: FileText,
        title: 'Des programmes clairement présentés',
        description:
            "Chaque page de formation explique ce que vous allez apprendre, le déroulement du programme et les ressources incluses.",
    },
    {
        icon: Scale,
        title: 'Des promesses raisonnables',
        description:
            "Les formations vous permettent d'apprendre, d'expérimenter et de développer votre pratique. Elles ne garantissent pas un résultat personnel, énergétique ou thérapeutique.",
    },
    {
        icon: HeartHandshake,
        title: 'Une distinction claire entre bien-être et santé',
        description:
            "Les contenus disponibles sur FormationSession relèvent du bien-être, de la transmission et du développement personnel. Ils ne remplacent pas un diagnostic, un traitement ou l'accompagnement d'un professionnel de santé.",
    },
    {
        icon: Timer,
        title: 'Le respect du rythme de chacun',
        description:
            "Vous restez libre de pratiquer selon vos besoins, vos convictions et vos propres limites.",
    },
]

export function Engagements() {
    return (
        <section className="w-full py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
                        Nos engagements
                    </h2>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {engagements.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm dark:border-border/60 dark:bg-background/70"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="mb-2 font-semibold">{item.title}</h3>
                            <p className="text-sm leading-relaxed text-foreground/70">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
