import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, FileText, Scale, HeartHandshake, Timer } from 'lucide-react';

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

export function Engagements() {
  return (
    <section className="relative bg-muted/30 py-24 md:py-32 dark:bg-foreground/[0.02]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[140px] dark:bg-primary/[0.06]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[130px] dark:bg-foreground/[0.04]" />
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
            Notre approche
          </div>

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Nos engagements
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Comment nous concevons FormationSession : transparence, honnêteté
            et respect de chacun.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {engagements.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group rounded-2xl border border-border/40 bg-background/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border/60 hover:shadow-lg dark:border-border/50 dark:bg-background/50"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}