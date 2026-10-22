import { motion } from 'framer-motion';
import {
    BookOpen,
    Users,
    GraduationCap,
    CreditCard,
    TrendingUp,
    Sparkles,
    CheckCircle2,
    Play,
    Eye,
    ArrowUpRight,
} from 'lucide-react';

export function HeroDashboardMockup() {
    return (
        <div className="relative w-full max-w-[620px] select-none perspective-[1200px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/20 via-primary/10 to-transparent blur-3xl opacity-70 pointer-events-none" />

            {/* Main Isometric / Floating Dashboard Container */}
            <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 6, rotateY: -8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                whileHover={{ rotateY: -2, rotateX: 2, scale: 1.01 }}
                className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-2xl shadow-sky-500/10 backdrop-blur-xl dark:border-border/50 dark:bg-card/75"
            >
                {/* Window Chrome / Bar */}
                <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-rose-500/70" />
                        <div className="h-3 w-3 rounded-full bg-amber-500/70" />
                        <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
                        <span className="ml-3 text-[11px] font-mono font-medium text-foreground/40">
                            studio.formationsession.com / atelier-live
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        En direct
                    </div>
                </div>

                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500">
                            Studio Formateur
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-foreground font-sans">
                            Atelier & Tableau de bord
                        </h3>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-border/40 bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-foreground">
                        <Sparkles className="h-3.5 w-3.5 text-sky-500" />
                        Commission : 0 %
                    </div>
                </div>

                {/* 4 Stats Cards (identical to your screenshot) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm space-y-1"
                    >
                        <div className="flex items-center justify-between text-foreground/40">
                            <span className="text-[10px] font-medium uppercase tracking-wider">Formations</span>
                            <BookOpen className="h-3.5 w-3.5 text-sky-500" />
                        </div>
                        <div className="text-2xl font-extrabold text-foreground tracking-tight">12</div>
                        <span className="text-[10px] text-emerald-500 font-medium">100% actives</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm space-y-1"
                    >
                        <div className="flex items-center justify-between text-foreground/40">
                            <span className="text-[10px] font-medium uppercase tracking-wider">Formateurs</span>
                            <Users className="h-3.5 w-3.5 text-sky-500" />
                        </div>
                        <div className="text-2xl font-extrabold text-foreground tracking-tight">80+</div>
                        <span className="text-[10px] text-foreground/40">Experts certifiés</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm space-y-1"
                    >
                        <div className="flex items-center justify-between text-foreground/40">
                            <span className="text-[10px] font-medium uppercase tracking-wider">Étudiants</span>
                            <GraduationCap className="h-3.5 w-3.5 text-sky-500" />
                        </div>
                        <div className="text-2xl font-extrabold text-foreground tracking-tight">1 240</div>
                        <span className="text-[10px] text-emerald-500 font-medium">+142 ce mois</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm space-y-1"
                    >
                        <div className="flex items-center justify-between text-foreground/40">
                            <span className="text-[10px] font-medium uppercase tracking-wider">Revenus</span>
                            <CreditCard className="h-3.5 w-3.5 text-sky-500" />
                        </div>
                        <div className="text-2xl font-extrabold text-foreground tracking-tight">100%</div>
                        <span className="text-[10px] text-emerald-500 font-medium">Reversés directs</span>
                    </motion.div>
                </div>

                {/* Live Training Session Preview Card */}
                <div className="rounded-2xl border border-border/50 bg-secondary/30 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 text-sky-500">
                                <Play className="h-3.5 w-3.5 fill-sky-500" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-foreground">
                                    Tournage sur Grès & Émaillage
                                </h4>
                                <p className="text-[10px] text-foreground/50">Marc Valin · 4h30 de cours HD</p>
                            </div>
                        </div>
                        <span className="rounded-full bg-secondary border border-border/40 px-2.5 py-1 text-[10px] font-bold text-foreground">
                            59 €
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-1">
                        <div className="flex justify-between text-[10px] text-foreground/60 font-medium">
                            <span>Taux de satisfaction élèves</span>
                            <span className="text-sky-500 font-bold">4.9 / 5 (128 avis)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-border/40">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '94%' }}
                                transition={{ duration: 1.2, delay: 0.3 }}
                                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Floating Notification Badge 1 (Stripe Payout) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3 rounded-2xl border border-border/50 bg-background/95 p-3.5 shadow-xl shadow-black/10 backdrop-blur-xl"
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-foreground">+59,00 € reçus</div>
                        <div className="text-[10px] text-foreground/50">Stripe Connect · Paiement direct</div>
                    </div>
                </motion.div>

                {/* Floating Notification Badge 2 (New Student) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -top-4 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-border/50 bg-background/95 p-3 shadow-xl shadow-black/10 backdrop-blur-xl"
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500">
                        <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-foreground">Nouvel apprenant inscrit</div>
                        <div className="text-[10px] text-foreground/50">Atelier Fermentation & Levain</div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
