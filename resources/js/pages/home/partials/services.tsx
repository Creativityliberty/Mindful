import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { BookOpen, HelpCircle, ListChecks, Laptop, Target, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const items = [
  { icon: BookOpen, text: 'le sujet abordé' },
  { icon: Target, text: 'le niveau recommandé' },
  { icon: Laptop, text: 'le format de la formation' },
  { icon: ListChecks, text: 'les objectifs pédagogiques' },
  { icon: GraduationCap, text: 'les exercices proposés' },
  { icon: HelpCircle, text: 'le matériel éventuellement nécessaire' },
]

export function Services() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Des formations pour apprendre par la pratique
          </h2>
          <p className="text-lg text-foreground/70">
            Commencer une nouvelle pratique soulève souvent de nombreuses questions.
            FormationSession rassemble des formations structurées pour vous aider à
            acquérir des bases solides, expérimenter progressivement et gagner en autonomie.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-4xl">
          <p className="mb-8 text-center text-base text-foreground/60">
            Chaque programme présente clairement :
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/60 p-4 backdrop-blur-sm dark:border-border/60 dark:bg-background/70">
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="rounded-full">
            <Link href="/courses">Voir toutes les formations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
