import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
    const { t } = useTranslation();
    const [ouvert, setOuvert] = useState<number | null>(null);

    const questions = [
        {
            question: t('faq.q1'),
            reponse: t('faq.a1'),
        },
        {
            question: t('faq.q2'),
            reponse: t('faq.a2'),
        },
        {
            question: t('faq.q3'),
            reponse: t('faq.a3'),
        },
        {
            question: t('faq.q4'),
            reponse: t('faq.a4'),
        },
        {
            question: t('faq.q5'),
            reponse: t('faq.a5'),
        },
        {
            question: t('faq.q6'),
            reponse: t('faq.a6'),
        },
        {
            question: t('faq.q7'),
            reponse: t('faq.a7'),
        },
        {
            question: t('faq.q8'),
            reponse: t('faq.a8'),
        },
    ];

    return (
        <section className="relative bg-muted/30 py-24 md:py-32 dark:bg-foreground/[0.02]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-foreground/[0.02] blur-[130px] dark:bg-foreground/[0.04]" />
            </div>

            <div className="relative mx-auto max-w-3xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60 dark:bg-secondary">
                        {t('faq.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('faq.title')}
                    </h2>

                    <p className="mx-auto max-w-xl text-lg text-foreground/60">
                        {t('faq.subtitle')}
                    </p>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-col gap-3"
                >
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm dark:border-border/50 dark:bg-background/50"
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    setOuvert(ouvert === index ? null : index)
                                }
                                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                                aria-expanded={ouvert === index}
                            >
                                <span className="text-sm font-semibold text-foreground md:text-base">
                                    {item.question}
                                </span>

                                <span
                                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/40 bg-background/60 text-foreground/60 transition-transform duration-300 dark:border-border/50 dark:bg-background/40 ${
                                        ouvert === index ? 'rotate-45' : ''
                                    }`}
                                    aria-hidden="true"
                                >
                                    <Plus className="h-4 w-4" />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {ouvert === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <div className="border-t border-border/30 px-6 pt-4 pb-5 text-sm leading-relaxed text-foreground/60">
                                            {item.reponse}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
