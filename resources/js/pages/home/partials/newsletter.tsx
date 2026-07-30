import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  return (
    <section className="relative bg-muted/30 py-24 md:py-32 dark:bg-foreground/[0.02]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[160px] dark:bg-primary/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto max-w-2xl rounded-3xl border border-border/40 bg-background/60 px-8 py-16 text-center backdrop-blur-sm md:px-16 dark:border-border/50 dark:bg-background/50"
        >
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
            Newsletter
          </div>

          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Recevez les prochaines formations et dates d&apos;ateliers
          </h2>

          <p className="mx-auto mb-8 max-w-md text-sm text-foreground/60">
            Inscrivez-vous pour découvrir les nouveaux programmes, les prochaines sessions
            et les articles publiés sur FormationSession.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Votre adresse e-mail"
              required
              className="h-10 rounded-full border-border/60 bg-background/60 placeholder:text-muted-foreground"
            />
            <Button type="submit" className="gap-2 rounded-full shrink-0">
              Je m&apos;inscris
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>

          <p className="mt-4 text-xs text-foreground/50">
            En vous inscrivant, vous acceptez de recevoir les actualités de FormationSession.
            Vous pourrez vous désinscrire à tout moment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}