import { Link } from '@inertiajs/react'
import { ArrowRight, Gem, Sun, Moon, Compass } from 'lucide-react'

const themes = [
  {
    icon: Gem,
    title: 'Radiesthésie et pendule',
    description:
      "Découvrez les principes de la radiesthésie et apprenez à utiliser un pendule avec méthode. Les formations vous accompagnent dans la prise en main de l'outil, l'observation de ses mouvements, la définition de vos conventions et la formulation de questions plus précises.",
    href: '/courses?theme=radiesthesie',
    linkLabel: 'Voir les formations en radiesthésie',
  },
  {
    icon: Sun,
    title: 'Chakras et pratiques énergétiques',
    description:
      "Explorez les sept chakras, leurs symboles et les pratiques traditionnellement utilisées pour travailler l'attention, les ressentis et l'équilibre personnel.",
    href: '/courses?theme=chakras',
    linkLabel: 'Découvrir les formations sur les chakras',
  },
  {
    icon: Moon,
    title: 'Méditation et relaxation',
    description:
      'Apprenez à ralentir, à porter votre attention sur le moment présent et à intégrer des pratiques simples de méditation ou de relaxation dans votre quotidien.',
    href: '/courses?theme=meditation',
    linkLabel: 'Voir les formations de méditation',
  },
  {
    icon: Compass,
    title: 'Développement personnel',
    description:
      "Découvrez des outils pour mieux vous connaître, observer vos ressentis, développer votre intuition et avancer avec davantage de confiance dans votre pratique.",
    href: '/courses?theme=developpement-personnel',
    linkLabel: 'Explorer les formations',
  },
]

export function Themes() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Explorez les différentes thématiques
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm dark:border-border/60 dark:bg-background/70"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <theme.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{theme.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                {theme.description}
              </p>
              <Link
                href={theme.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {theme.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
