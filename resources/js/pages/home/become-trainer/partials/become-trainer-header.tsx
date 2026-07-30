import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function BecomeTrainerHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
        >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-foreground/70 uppercase backdrop-blur dark:border-border/60 dark:bg-background/70">
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Programme formateur
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Devenez formateur sur FormationSession
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-foreground/60">
                Partagez votre expertise en radiesthésie, pendule ou équilibrage
                des chakras avec une communauté engagée. Publiez vos formations,
                développez votre activité et rejoignez nos formateurs experts.
            </p>
        </motion.div>
    )
}
