import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { Search, ClipboardList, UserPlus, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: Search,
    title: 'Explorez les formations',
    description:
      'Parcourez le catalogue et recherchez une formation selon son thème, son niveau ou son format. Chaque page vous présente le programme, les objectifs, le formateur et les conditions d\'accès.',
  },
  {
    icon: ClipboardList,
    title: 'Choisissez votre programme',
    description:
      'Prenez le temps de consulter le contenu de la formation et de vérifier qu\'il correspond à vos attentes. Vous trouverez les informations essentielles avant votre inscription.',
  },
  {
    icon: UserPlus,
    title: 'Créez votre compte',
    description:
      'Inscrivez-vous et retrouvez les formations que vous avez choisies depuis votre espace personnel.',
  },
  {
    icon: Play,
    title: 'Progressez à votre rythme',
    description:
      'Suivez les cours, réalisez les exercices proposés et revenez sur les ressources lorsque vous en ressentez le besoin.',
  },
]

export function Process() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Comment fonctionne FormationSession ?
          </h2>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="rounded-full">
            <Link href="/courses">Découvrir les formations disponibles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
