import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Newsletter() {
  return (
    <section className="w-full border-t border-border/30 bg-muted/20 py-16 dark:border-border/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            Recevez les prochaines formations et dates d&apos;ateliers
          </h2>
          <p className="mb-8 text-sm text-foreground/70">
            Inscrivez-vous pour découvrir les nouveaux programmes, les prochaines sessions
            et les articles publiés sur FormationSession.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              required
              className="flex h-10 w-full rounded-full border border-border/50 bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none dark:border-border/60"
            />
            <Button type="submit" className="shrink-0 rounded-full">
              Je m&apos;inscris
            </Button>
          </form>
          <p className="mt-4 text-xs text-foreground/50">
            En vous inscrivant, vous acceptez de recevoir les actualités de FormationSession.
            Vous pourrez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}
