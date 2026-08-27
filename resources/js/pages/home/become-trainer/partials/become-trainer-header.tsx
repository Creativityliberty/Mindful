import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BecomeTrainerHeader() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
        >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-foreground/70 uppercase backdrop-blur dark:border-border/60 dark:bg-background/70">
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {t('become_trainer_page.badge')}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                {t('become_trainer_page.title')}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/60">
                {t('become_trainer_page.subtitle')}
            </p>
        </motion.div>
    );
}
