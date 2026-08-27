import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export function Cta() {
    return (
        <section className="relative py-24 md:py-32">
            {/* blobs décoratifs - Soft sky blue theme */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 h-[440px] w-[440px] rounded-full bg-sky-400/[0.03] blur-[150px]" />
                <div className="absolute right-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-primary/[0.015] blur-[130px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75 }}
                    className="mx-auto max-w-3xl rounded-[2.5rem] border border-border/40 bg-background/50 px-8 py-16 text-center backdrop-blur-md md:px-16 dark:border-border/50"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase">
                        Commencez dès aujourd’hui
                    </div>

                    <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl font-serif">
                        Révélez et transmettez votre savoir-faire.
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-base md:text-lg text-foreground/60 font-light leading-relaxed">
                        Que vous souhaitiez vous initier aux pratiques énergétiques, maîtriser la création de bougies artisanales, le stylisme de l'ongle, ou automatiser votre activité avec l'IA, accédez à des formations de qualité dispensées par des professionnels passionnés.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="group gap-2 rounded-full px-8 text-sm font-semibold tracking-wider uppercase h-12"
                            asChild
                        >
                            <Link href="/courses" preserveState prefetch>
                                Explorer les formations
                                <ArrowRight
                                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="secondary"
                            className="gap-2 rounded-full h-12 border border-border/40"
                            asChild
                        >
                            <Link href="/become-trainer" preserveState prefetch>
                                Devenir formateur
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
