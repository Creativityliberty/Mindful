import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from '@inertiajs/react'

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const points = [
  'Des programmes progressifs, avec des bases expliquées simplement.',
  'Choisissez le format qui correspond à vos besoins et à votre rythme.',
  'Expérimentez par vous-même grâce à des mises en situation et des supports pédagogiques.',
  'Accédez à votre espace personnel et avancez selon vos disponibilités.',
] as const

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-background pt-16"
      role="region"
      aria-label="Hero plateforme formations bien-être"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px] dark:bg-foreground/[0.06]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px] dark:bg-foreground/[0.05]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px] dark:bg-primary/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 text-xs font-semibold tracking-[0.25em] text-foreground/70 uppercase"
          >
            Formations en ligne et ateliers de bien-être
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Découvrez, pratiquez
            <br />
            et avancez à votre rythme
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-foreground/70 md:text-2xl"
          >
            FormationSession vous propose des formations accessibles pour découvrir la radiesthésie,
            apprendre à utiliser un pendule, explorer les chakras et approfondir différentes
            pratiques de bien-être.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base text-foreground/60"
          >
            Suivez un parcours en ligne depuis chez vous ou participez à un atelier en présentiel.
            Chaque programme vous apporte des explications claires, des exercices guidés et
            des repères concrets pour progresser pas à pas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" className="group gap-2 rounded-full px-8 text-base tracking-[0.2em] uppercase" asChild>
              <Link href="/courses">
                Découvrir les formations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="rounded-full" asChild>
              <Link href="/become-trainer">
                Devenir formateur
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-3xl rounded-2xl border border-border/30 bg-background/60 p-6 text-left backdrop-blur-sm dark:border-border/60 dark:bg-background/70"
          >
            <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
              Les points essentiels
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
