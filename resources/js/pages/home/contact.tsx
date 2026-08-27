'use client';
import { motion, type Variants } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    BookOpen,
    Building2,
    Handshake,
    ArrowRight,
    Send,
    CheckCircle2,
    MessageSquare
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

/* ── données ─────────────────────────────────────────────── */

const infos = [
    {
        icon: MapPin,
        label: 'Adresse',
        value: 'Paris, France\nCommunauté internationale',
    },
    { icon: Phone, label: 'Téléphone', value: '+33 1 00 00 00 00' },
    { icon: Mail, label: 'Email', value: 'contact@formationsession.com' },
    {
        icon: Clock,
        label: 'Disponibilité',
        value: 'Lun – Ven : 9h00 – 18h00\nRéponse sous 24h',
    },
];

const quickCards = [
    {
        icon: BookOpen,
        titre: 'Nos formations',
        description:
            'Questions sur nos cours de bien-être, artisanat, sophrologie ou création.',
        cta: 'Voir les formations',
        href: '/courses',
    },
    {
        icon: Building2,
        titre: 'Devenir formateur',
        description:
            'Vous êtes professionnel ou artisan et souhaitez publier vos cours sur FormationSession.',
        cta: 'Déposer ma candidature',
        href: '/become-trainer',
    },
    {
        icon: Handshake,
        titre: 'Partenariat',
        description:
            'Entreprise, institution ou association ? Discutons d\'une collaboration.',
        cta: 'Nous écrire',
        href: '#contact-form',
    },
];

const subjects = [
    'Renseignement formation',
    'Devenir formateur',
    'Problème technique',
    'Partenariat',
    'Autre',
];

/* ── variants ────────────────────────────────────────────── */

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

export default function Contact() {
    const [form, setForm] = useState({
        nom: '',
        email: '',
        objet: '',
        message: '',
    });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="relative min-h-screen bg-background">
            {/* Soft ambient background aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sky-400/[0.025] blur-[160px]" />
                <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.015] blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20 lg:px-16">
                {/* ── En-tête ──────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="mb-16 text-center space-y-4"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-secondary-foreground uppercase backdrop-blur">
                        <MessageSquare className="h-3.5 w-3.5 text-sky-400" />
                        Parlons-nous
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl font-sans">
                        Contactez-nous
                    </h1>
                    <p className="mx-auto max-w-xl text-base md:text-lg text-foreground/60 font-light leading-relaxed">
                        Une question sur nos formations, votre candidature formateur ou un projet de partenariat ? Notre équipe vous répond sous 24h.
                    </p>
                </motion.div>

                {/* ── Cartes rapides ───────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="mb-20 grid gap-6 sm:grid-cols-3"
                >
                    {quickCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <motion.div key={card.titre} variants={fadeUp}>
                                <div className="group h-full rounded-[2rem] border border-border/30 bg-background/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-xl hover:shadow-sky-400/5 flex flex-col justify-between">
                                    <div>
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-foreground font-sans">
                                            {card.titre}
                                        </h3>
                                        <p className="mb-6 text-sm text-foreground/60 leading-relaxed font-light">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div>
                                        {card.href.startsWith('#') ? (
                                            <a
                                                href={card.href}
                                                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-sky-400 uppercase transition-all group-hover:gap-3"
                                            >
                                                {card.cta}
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </a>
                                        ) : (
                                            <Link
                                                href={card.href}
                                                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-sky-400 uppercase transition-all group-hover:gap-3"
                                            >
                                                {card.cta}
                                                <ArrowRight className="h-3.5 w-3.5" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* ── Formulaire + Coordonnées (Split-Screen) ───────────────────────────── */}
                <div id="contact-form" className="grid gap-12 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] items-start">
                    {/* Formulaire Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="rounded-[2.5rem] border border-border/30 bg-background/50 p-8 md:p-12 backdrop-blur-md shadow-xl"
                    >
                        {!sent ? (
                            <>
                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-foreground font-sans">
                                        Envoyer un message
                                    </h2>
                                    <p className="text-sm text-foreground/50 font-light mt-1">
                                        Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                                    </p>
                                </div>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Nom + Email */}
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold tracking-wider text-foreground/50 uppercase">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={form.nom}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        nom: e.target.value,
                                                    })
                                                }
                                                placeholder="Jean Dupont"
                                                className="w-full rounded-2xl border border-border/40 bg-background/80 px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-foreground/30 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold tracking-wider text-foreground/50 uppercase">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="vous@email.com"
                                                className="w-full rounded-2xl border border-border/40 bg-background/80 px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-foreground/30 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Objet */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-wider text-foreground/50 uppercase">
                                            Objet
                                        </label>
                                        <select
                                            required
                                            value={form.objet}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    objet: e.target.value,
                                                })
                                            }
                                            className="w-full rounded-2xl border border-border/40 bg-background/80 px-4 py-3.5 text-sm text-foreground transition-colors focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                        >
                                            <option value="" disabled>
                                                Sélectionner un objet
                                            </option>
                                            {subjects.map((s) => (
                                                <option
                                                    key={s}
                                                    value={s}
                                                >
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-wider text-foreground/50 uppercase">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    message: e.target.value,
                                                })
                                            }
                                            placeholder="Décrivez votre demande, question ou projet..."
                                            className="w-full resize-none rounded-2xl border border-border/40 bg-background/80 px-4 py-3.5 text-sm text-foreground transition-colors placeholder:text-foreground/30 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 focus:outline-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full gap-2 rounded-full h-12 font-semibold tracking-wider uppercase text-sm"
                                    >
                                        <Send className="h-4 w-4" />
                                        Envoyer le message
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                                    <CheckCircle2 className="h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-foreground font-sans">
                                    Message envoyé !
                                </h3>
                                <p className="text-sm text-foreground/60 font-light max-w-md">
                                    Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8 rounded-full border-border/40 px-8"
                                    onClick={() => {
                                        setSent(false);
                                        setForm({
                                            nom: '',
                                            email: '',
                                            objet: '',
                                            message: '',
                                        });
                                    }}
                                >
                                    Envoyer un autre message
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Infos Pratiques & Localisation (Right Sticky Column) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="space-y-6 lg:sticky lg:top-28"
                    >
                        {/* Coordonnées Card */}
                        <div className="rounded-[2.5rem] border border-border/30 bg-background/50 p-8 backdrop-blur-md shadow-xl space-y-6">
                            <h3 className="text-xs font-bold tracking-widest text-foreground/40 uppercase">
                                Coordonnées
                            </h3>
                            <ul className="space-y-6">
                                {infos.map((info) => {
                                    const Icon = info.icon;

                                    return (
                                        <li
                                            key={info.label}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="mb-1 text-xs font-bold tracking-wider text-foreground/40 uppercase">
                                                    {info.label}
                                                </p>
                                                <p className="text-sm font-medium whitespace-pre-line text-foreground/80 leading-relaxed">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Localisation Visual Card */}
                        <div className="overflow-hidden rounded-[2.5rem] border border-border/30 bg-background/50 backdrop-blur-md shadow-xl relative group">
                            <div className="relative h-56 overflow-hidden bg-secondary/30">
                                <img
                                    src="/assets/images/contact_zen.jpg"
                                    alt="Localisation FormationSession"
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-400 text-white shadow-lg shadow-sky-400/30 animate-pulse">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <span className="rounded-full bg-background/90 border border-border/40 px-4 py-1.5 text-xs font-bold tracking-wider text-foreground shadow-md backdrop-blur uppercase">
                                        Paris · Rayonnement Mondial
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
