import { Head } from '@inertiajs/react';
import { Calendar, Clock, Video, MapPin, Users, ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const events = [
    {
        id: 1,
        title: "Méditation collective de Nouvelle Lune",
        type: "En ligne (Zoom)",
        date: "Dimanche 19 Juillet 2026",
        time: "20:00 - 21:00",
        trainer: "Sophie Lefèvre",
        price: "Gratuit",
        description: "Profitez de l'énergie de la nouvelle lune pour poser vos intentions de renouveau et vous connecter à l'énergie collective.",
        limit: "100 participants max",
        spotsLeft: 12
    },
    {
        id: 2,
        title: "Atelier d'alignement postures de Yoga (Asanas)",
        type: "En ligne (Zoom)",
        date: "Mercredi 22 Juillet 2026",
        time: "18:30 - 20:00",
        trainer: "Marie-Laure Dubois",
        price: "15 €",
        description: "Décortiquez et ajustez vos postures fondamentales pour pratiquer en toute sécurité chez vous.",
        limit: "30 participants max",
        spotsLeft: 5
    },
    {
        id: 3,
        title: "Cercle de reconnexion & Sophronisation collective",
        type: "En ligne (Zoom)",
        date: "Samedi 25 Juillet 2026",
        time: "10:00 - 11:30",
        trainer: "Valérie Renaud",
        price: "Gratuit",
        description: "Une session collective de sophrologie pour relâcher les tensions musculaires et mentales accumulées pendant la semaine.",
        limit: "50 participants max",
        spotsLeft: 22
    },
    {
        id: 4,
        title: "Introduction pratique au Lahochi et soins énergétiques",
        type: "En ligne (Zoom)",
        date: "Mardi 28 Juillet 2026",
        time: "19:00 - 20:30",
        trainer: "Kiran Mehta",
        price: "20 €",
        description: "Une introduction théorique et pratique sur la canalisation de l'énergie Lahochi pour les thérapeutes et débutants.",
        limit: "40 participants max",
        spotsLeft: 8
    }
];

export default function Events() {
    return (
        <>
            <Head title="Ateliers en direct & Retraites - Mindfulness & Bien-être Studio" />
            
            <div className="relative min-h-screen pt-20">
                {/* Background Decor */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/3 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-[140px] dark:bg-primary/[0.04]" />
                </div>

                <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-2 text-xs font-semibold tracking-[0.25em] text-secondary-foreground uppercase backdrop-blur">
                            Événements & Ateliers
                        </div>
                        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl mb-6">
                            Nos prochains ateliers collectifs en direct
                        </h1>
                        <p className="text-lg text-foreground/60">
                            Prenez rendez-vous avec vous-même. Connectez-vous en direct avec nos formateurs et la communauté lors de sessions thématiques interactives.
                        </p>
                    </div>

                    {/* Events Grid */}
                    <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                        {events.map((event) => (
                            <Card 
                                key={event.id}
                                className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-border/60 hover:shadow-md dark:border-border/50 dark:bg-background/40"
                            >
                                <div>
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                            <Video className="h-3 w-3" /> {event.type}
                                        </span>
                                        <span className="text-sm font-semibold text-primary">{event.price}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-4 leading-snug">{event.title}</h3>
                                    
                                    <p className="text-sm leading-relaxed text-foreground/60 mb-6">{event.description}</p>
                                    
                                    <hr className="border-border/30 mb-6" />
                                    
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2.5 text-sm text-foreground/75">
                                            <Calendar className="h-4 w-4 text-primary shrink-0" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-sm text-foreground/75">
                                            <Clock className="h-4 w-4 text-primary shrink-0" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5 text-sm text-foreground/75">
                                            <Users className="h-4 w-4 text-primary shrink-0" />
                                            <span>Formateur : <strong className="text-foreground">{event.trainer}</strong></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-4 mt-auto">
                                    <span className="text-xs font-semibold text-amber-600 dark:text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                                        {event.spotsLeft} places restantes
                                    </span>
                                    <Button className="rounded-full gap-1.5" size="sm">
                                        S'inscrire <ArrowRight className="h-3.5 w-3.5" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
