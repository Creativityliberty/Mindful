import { motion, type Variants } from 'framer-motion';
import { Gem, Sun, Moon, Compass, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

const themes = [
  {
    icon: Gem,
    title: 'Radiesthésie et pendule',
    description:
      "Découvrez les principes de la radiesthésie et apprenez à utiliser un pendule avec méthode. Les formations vous accompagnent dans la prise en main de l'outil, l'observation de ses mouvements, la définition de vos conventions et la formulation de questions précises.",
    href: '/courses?theme=radiesthesie',
  },
  {
    icon: Sun,
    title: 'Chakras et pratiques énergétiques',
    description:
      "Explorez les sept chakras, leurs symboles et les pratiques traditionnellement utilisées pour travailler l'attention, les ressentis et l'équilibre personnel.",
    href: '/courses?theme=chakras',
  },
  {
    icon: Moon,
    title: 'Méditation et relaxation',
    description:
      'Apprenez à ralentir, à porter votre attention sur le moment présent et à intégrer des pratiques simples de méditation ou de relaxation dans votre quotidien.',
    href: '/courses?theme=meditation',
  },
  {
    icon: Compass,
    title: 'Développement personnel',
    description:
      "Découvrez des outils pour mieux vous connaître, observer vos ressentis, développer votre intuition et avancer avec davantage de confiance dans votre pratique.",
    href: '/courses?theme=developpement-personnel',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function Themes() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[140px] dark:bg-primary/[0.06]" />
        <div className="absolute right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[130px] dark:bg-foreground/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
            Thématiques
          </div>

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Explorez les différentes thématiques
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Radiesthésie, pendule, chakras — choisissez le domaine qui vous
            correspond et commencez votre apprentissage.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <motion.div
                key={theme.title}
                variants={itemVariants}
                className="group rounded-2xl border border-border/40 bg-background/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-lg dark:border-border/50 dark:bg-background/50"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {theme.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-foreground/60">
                  {theme.description}
                </p>

                <Link
                  href={theme.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Découvrir
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}