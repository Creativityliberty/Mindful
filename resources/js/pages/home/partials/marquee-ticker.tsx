import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function MarqueeTicker() {
    const { t } = useTranslation();

    const items = [
        t('marquee.item1'),
        t('marquee.item2'),
        t('marquee.item3'),
        t('marquee.item4'),
        t('marquee.item5'),
        t('marquee.item6'),
        t('marquee.item7'),
    ];

    const repeatedItems = [...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden border-y border-border/40 bg-secondary/30 py-4.5 backdrop-blur-sm dark:border-border/50 dark:bg-secondary/15 select-none">
            {/* Subtle edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

            <motion.div
                className="flex w-max items-center gap-8 whitespace-nowrap"
                animate={{ x: ['0%', '-33.333%'] }}
                transition={{
                    duration: 35,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {repeatedItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-8 text-xs font-semibold tracking-[0.28em] text-foreground/80 uppercase dark:text-foreground/75"
                    >
                        <span>{item}</span>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60 dark:bg-primary/70" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
