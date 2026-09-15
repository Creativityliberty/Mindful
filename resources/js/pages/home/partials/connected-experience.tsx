import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Play, 
    Pause, 
    Volume2, 
    FileText, 
    Award, 
    CheckCircle2, 
    Download, 
    Sparkles, 
    Maximize2, 
    Share2, 
    Bookmark,
    Activity,
    ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

export function ConnectedExperience() {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(true);
    const [activeTab, setActiveTab] = useState<'video' | 'notes' | 'discussion' | 'attestation'>('video');
    const [bookmarked, setBookmarked] = useState(false);

    const questions = [
        { name: 'Camille R.', time: 'il y a 2 min', text: 'Est-ce qu\'on peut revoir ce geste à vitesse réduite ?' },
        { name: 'Louise (Formatrice)', time: 'il y a 1 min', text: 'Oui Camille, la vidéo dispose du ralenti 0.5x et des fiches mémos téléchargeables.' },
        { name: 'Antoine M.', time: 'À l\'instant', text: 'Excellente démonstration sur la régularité du mouvement !' }
    ];

    return (
        <section className="relative overflow-hidden bg-muted/30 py-24 md:py-32 dark:bg-foreground/[0.015]">
            {/* Arrière-plan flouté de luxe */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/3 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/[0.02] blur-[150px]" />
                <div className="absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-primary/[0.02] blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header de section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur dark:border-border/60">
                        <Sparkles className="h-4 w-4 text-sky-400" />
                        {t('connected_experience.badge')}
                    </div>

                    <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                        {t('connected_experience.title')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-base text-foreground/60 md:text-lg">
                        {t('connected_experience.subtitle')}
                    </p>
                </motion.div>

                {/* Interface du Lecteur de Cours Connecté */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/80 shadow-2xl backdrop-blur-xl dark:border-border/60 dark:bg-card/80"
                >
                    {/* Barre supérieure du lecteur */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 bg-muted/40 px-6 py-4 dark:bg-muted/20">
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-foreground/80 uppercase">
                                {t('connected_experience.live_indicator')}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="gap-1 bg-background/60 text-xs font-normal backdrop-blur">
                                <Activity className="h-3 w-3 text-sky-400" /> HD 4K 60fps
                            </Badge>
                            <Badge variant="outline" className="gap-1 bg-background/60 text-xs font-normal backdrop-blur">
                                <ShieldCheck className="h-3 w-3 text-emerald-500" /> Attestation Incluses
                            </Badge>
                        </div>
                    </div>

                    {/* Grille principale : Vidéo / Interface & Panneau latéral */}
                    <div className="grid gap-0 lg:grid-cols-[1fr_360px]">
                        {/* Zone Vidéo & Player */}
                        <div className="relative flex flex-col bg-black/95">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <img
                                    src="/assets/images/hero_savoir_faire_8k.jpg"
                                    alt="Session de cours en direct"
                                    className="h-full w-full object-cover opacity-90 transition-opacity duration-300"
                                />

                                {/* Dark overlay mask */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                                {/* Overlay central Bouton Play/Pause */}
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="group absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/25"
                                    aria-label={isPlaying ? 'Mettre en pause' : 'Lancer la vidéo'}
                                >
                                    {isPlaying ? (
                                        <Pause className="h-8 w-8 text-white fill-white transition-transform group-hover:scale-105" />
                                    ) : (
                                        <Play className="h-8 w-8 text-white fill-white translate-x-0.5 transition-transform group-hover:scale-105" />
                                    )}
                                </button>

                                {/* Badge Titre de Leçon en Overlay supérieur */}
                                <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white">
                                    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium backdrop-blur-md">
                                        <div className="text-white/60 text-[10px] uppercase tracking-widest">
                                            {t('connected_experience.module_title')}
                                        </div>
                                        <div className="font-semibold text-white">
                                            {t('connected_experience.lesson_active')}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => setBookmarked(!bookmarked)}
                                            className={`rounded-full border border-white/10 bg-black/40 p-2.5 text-white backdrop-blur-md transition-colors ${
                                                bookmarked ? 'text-amber-400 fill-amber-400' : 'hover:bg-white/20'
                                            }`}
                                        >
                                            <Bookmark className="h-4 w-4" />
                                        </button>
                                        <button className="rounded-full border border-white/10 bg-black/40 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white/20">
                                            <Share2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Controls bar au bas de la vidéo */}
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                    {/* Progress bar */}
                                    <div className="relative mb-4 h-1.5 w-full overflow-hidden rounded-full bg-white/20 cursor-pointer">
                                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-amber-300" />
                                    </div>

                                    <div className="flex items-center justify-between text-white">
                                        <div className="flex items-center gap-4">
                                            <button 
                                                onClick={() => setIsPlaying(!isPlaying)}
                                                className="text-white hover:text-sky-300 transition-colors"
                                            >
                                                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                                            </button>
                                            <Volume2 className="h-5 w-5 text-white/80" />
                                            <span className="text-xs font-mono tracking-wider text-white/80">
                                                {t('connected_experience.duration')}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white">
                                                1080p HD
                                            </span>
                                            <Maximize2 className="h-4 w-4 text-white/80 hover:text-white cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Panneau latéral connecté : Onglets & Interaction */}
                        <div className="flex flex-col border-l border-border/40 bg-background/50 backdrop-blur dark:bg-card/40">
                            {/* Navigation Onglets */}
                            <div className="flex border-b border-border/40 p-2 gap-1 bg-muted/20">
                                <button
                                    onClick={() => setActiveTab('video')}
                                    className={`flex-1 rounded-xl py-2 px-3 text-xs font-semibold transition-all ${
                                        activeTab === 'video'
                                            ? 'bg-background text-foreground shadow-xs'
                                            : 'text-foreground/60 hover:text-foreground'
                                    }`}
                                >
                                    {t('connected_experience.tab_video')}
                                </button>
                                <button
                                    onClick={() => setActiveTab('notes')}
                                    className={`flex-1 rounded-xl py-2 px-3 text-xs font-semibold transition-all ${
                                        activeTab === 'notes'
                                            ? 'bg-background text-foreground shadow-xs'
                                            : 'text-foreground/60 hover:text-foreground'
                                    }`}
                                >
                                    {t('connected_experience.tab_notes')}
                                </button>
                                <button
                                    onClick={() => setActiveTab('discussion')}
                                    className={`flex-1 rounded-xl py-2 px-3 text-xs font-semibold transition-all ${
                                        activeTab === 'discussion'
                                            ? 'bg-background text-foreground shadow-xs'
                                            : 'text-foreground/60 hover:text-foreground'
                                    }`}
                                >
                                    {t('connected_experience.tab_discussion')}
                                </button>
                            </div>

                            {/* Contenu de l'onglet actif */}
                            <div className="flex-1 p-6">
                                <AnimatePresence mode="wait">
                                    {activeTab === 'video' && (
                                        <motion.div
                                            key="video-tab"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            className="space-y-4"
                                        >
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-semibold text-foreground">
                                                    Formateur Référent
                                                </h3>
                                                <div className="flex items-center gap-3 pt-2">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                                                        L
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-semibold text-foreground">Louise</div>
                                                        <div className="text-[11px] text-foreground/60">Maître Artisan & Formatrice</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="rounded-2xl border border-border/40 bg-muted/30 p-4 space-y-2">
                                                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                                    Objectifs validés
                                                </div>
                                                <ul className="text-xs text-foreground/70 space-y-1.5 pl-6 list-disc">
                                                    <li>Maîtrise des gestes de précision</li>
                                                    <li>Application des fiches de sécurité</li>
                                                    <li>Validation des jalons pratiques</li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'notes' && (
                                        <motion.div
                                            key="notes-tab"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            className="space-y-4"
                                        >
                                            <div className="rounded-2xl border border-border/40 bg-amber-500/5 p-4 space-y-2">
                                                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
                                                    <FileText className="h-4 w-4" /> Notes de session
                                                </div>
                                                <p className="text-xs leading-relaxed text-foreground/70">
                                                    {t('connected_experience.note1')}
                                                </p>
                                            </div>

                                            <Button variant="outline" className="w-full gap-2 rounded-xl text-xs">
                                                <Download className="h-4 w-4 text-sky-400" />
                                                {t('connected_experience.download_pdf')}
                                            </Button>
                                        </motion.div>
                                    )}

                                    {activeTab === 'discussion' && (
                                        <motion.div
                                            key="discussion-tab"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            className="space-y-3"
                                        >
                                            {questions.map((q, idx) => (
                                                <div key={idx} className="rounded-xl border border-border/30 bg-muted/20 p-3 space-y-1">
                                                    <div className="flex justify-between items-center text-[11px]">
                                                        <span className="font-semibold text-foreground">{q.name}</span>
                                                        <span className="text-foreground/40">{q.time}</span>
                                                    </div>
                                                    <p className="text-xs text-foreground/70 leading-relaxed">{q.text}</p>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Pied du panneau : Attestation de complétion */}
                            <div className="border-t border-border/40 p-4 bg-muted/30">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                        <Award className="h-5 w-5" />
                                    </div>
                                    <div className="text-[11px] leading-tight text-foreground/70">
                                        {t('connected_experience.certified_badge')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
