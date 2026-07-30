import { Link } from '@inertiajs/react'
import { ArrowRight, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Cta() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.03] to-primary/[0.08] p-12 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Commencez votre parcours
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/70">
            Vous souhaitez découvrir le pendule, approfondir la radiesthésie, explorer les
            chakras ou développer une nouvelle pratique de bien-être ?
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-foreground/60">
            Consultez les programmes disponibles et choisissez celui qui correspond à votre
            niveau, à vos centres d'intérêt et à votre manière d'apprendre.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 rounded-full px-8 text-base tracking-[0.2em] uppercase" asChild>
              <Link href="/courses">
                Explorer les formations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 rounded-full" asChild>
              <Link href="/register">
                Créer mon compte
                <UserPlus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
