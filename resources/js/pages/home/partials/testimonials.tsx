import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
    const { t } = useTranslation();

    const avis = [
        {
            initiales: 'FD',
            nom: t('testimonials.rev1_name'),
            role: t('testimonials.rev1_role'),
            entreprise: '',
            contenu: t('testimonials.rev1_content'),
        },
        {
            initiales: 'JR',
            nom: t('testimonials.rev2_name'),
            role: t('testimonials.rev2_role'),
            entreprise: '',
            contenu: t('testimonials.rev2_content'),
        },
        {
            initiales: 'AL',
            nom: t('testimonials.rev3_name'),
            role: t('testimonials.rev3_role'),
            entreprise: '',
            contenu: t('testimonials.rev3_content'),
        },
        {
            initiales: 'SM',
            nom: t('testimonials.rev4_name'),
            role: t('testimonials.rev4_role'),
            entreprise: '',
            contenu: t('testimonials.rev4_content'),
        },
    ];

    const avisLoop = [...avis, ...avis];

    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[140px] dark:bg-primary/[0.05]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mb-16 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        {t('testimonials.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('testimonials.title')}
                    </h2>

                    <p className="mx-auto max-w-xl text-lg text-foreground/60">
                        {t('testimonials.subtitle')}
                    </p>
                </div>
            </div>

            <div className="relative overflow-hidden">
                <motion.div
                    className="flex w-max gap-5 px-6 md:px-8 lg:px-12"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 30,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {avisLoop.map((temoignage, index) => (
                        <div
                            key={`${temoignage.nom}-${index}`}
                            className="flex min-h-[260px] w-[320px] shrink-0 flex-col gap-5 rounded-2xl border border-border/40 bg-background/60 p-7 backdrop-blur-sm dark:border-border/50 dark:bg-background/50"
                        >
                            <Quote
                                className="h-7 w-7 text-primary/40"
                                aria-hidden="true"
                            />

                            <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                                {temoignage.contenu}
                            </p>

                            <div className="flex items-center gap-3 border-t border-border/30 pt-5">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                    {temoignage.initiales}
                                </div>

                                <div>
                                    <div className="text-sm font-semibold text-foreground">
                                        {temoignage.nom}
                                    </div>

                                    <div className="text-xs text-foreground/50">
                                        {temoignage.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
