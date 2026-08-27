import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from '@inertiajs/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const items = [
    {
        title: 'Radiesthésie',
        eyebrow: 'Pratique vibratoire',
        description: 'Pendule, baguettes et mesure des énergies',
        href: '/courses?category=radiesthesie',
        image: '/assets/images/service_radiesthesie_lux.jpg',
    },
    {
        title: 'Chakras',
        eyebrow: 'Soins & Harmonisation',
        description: 'LaHoChi, Reiki et 7 centres vitaux',
        href: '/courses?category=chakras',
        image: '/assets/images/service_chakras_lux.jpg',
    },
    {
        title: 'Bougies Artisanales',
        eyebrow: 'Artisanat & Senteurs',
        description: 'Cire végétale, fleurs séchées et cristaux',
        href: '/courses',
        image: '/assets/images/service_bougies_lux.jpg',
    },
    {
        title: 'Prothésie Ongulaire',
        eyebrow: 'Stylisme de l\'ongle',
        description: 'Nail art, pose gel et soins esthétiques',
        href: '/courses',
        image: '/assets/images/service_ongles_lux.jpg',
    },
    {
        title: 'IA & Digital',
        eyebrow: 'Nouvelles Technologies',
        description: 'Maîtriser l\'IA pour booster son activité',
        href: '/courses',
        image: '/assets/images/service_ia_lux.jpg',
    },
    {
        title: 'Aromathérapie',
        eyebrow: 'Santé naturelle & Plantes',
        description: 'Huiles essentielles et herbalisme',
        href: '/courses',
        image: '/assets/images/service_aroma_lux.jpg',
    },
    {
        title: 'Massages & Réflexologie',
        eyebrow: 'Thérapies corporelles',
        description: 'Soins du corps et points de pression',
        href: '/courses',
        image: '/assets/images/service_massage_lux.jpg',
    },
    {
        title: 'Artisanat & Bois',
        eyebrow: 'Savoir-faire & Création',
        description: 'Métiers manuels et noblesse du geste',
        href: '/courses',
        image: '/assets/images/service_bois_lux.jpg',
    },
    {
        title: 'Formations Certifiantes',
        eyebrow: 'Parcours professionnels',
        description: 'Cursus complets avec attestation',
        href: '/courses',
        image: '/assets/images/service_certif_lux.jpg',
    },
    {
        title: 'Accès à Vie',
        eyebrow: 'Apprentissage autonome',
        description: 'Accès illimité aux contenus en ligne',
        href: '/courses',
        image: '/assets/images/service_acces_lux.jpg',
    },
] as const;

const trustPoints = [
    {
        title: 'Formateurs passionnés',
        subtitle: 'Experts dans leur domaine',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
        title: 'Apprenants motivés',
        subtitle: 'Une communauté bienveillante',
        iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    },
    {
        title: 'Contenus de qualité',
        subtitle: 'Formations complètes et à jour',
        iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
        title: 'Accès à vie',
        subtitle: 'Apprenez à votre rythme',
        iconPath: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-1.414-1.414M8.464 15.536a5 5 0 010-7.072m0 0L9.878 9.88M5.636 18.364a9 9 0 010-12.728m0 0L8.465 8.465',
    },
];

export function Chiffres() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[160px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center relative z-10"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-secondary-foreground uppercase backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        Une plateforme dédiée aux
                    </div>

                    <h2 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        pratiques & savoir-faire
                    </h2>

                    <p className="mx-auto max-w-2xl text-base md:text-lg text-foreground/60 font-light leading-relaxed">
                        Des formateurs passionnés, des apprenants motivés et des contenus de qualité réunis sur une seule plateforme dédiée au bien-être, à l'artisanat et au savoir-faire.
                    </p>
                </motion.div>

                {/* Swiper 3D Coverflow Section */}
                <div className="relative py-4 z-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={1}
                        coverflowEffect={{
                            rotate: 8,
                            stretch: -10,
                            depth: 90,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="w-full !py-8 !px-4"
                    >
                        {items.map((item, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="!w-[280px] sm:!w-[320px] md:!w-[350px] !h-[440px] sm:!h-[480px] md:!h-[520px] transition-all duration-500"
                            >
                                {({ isActive }) => (
                                    <div
                                        className={`group relative h-full w-full overflow-hidden rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between p-7 md:p-8 ${
                                            isActive
                                                ? 'border-primary/40 bg-background/90 shadow-2xl shadow-primary/10 scale-105 backdrop-blur-xl'
                                                : 'border-border/20 bg-background/20 opacity-80 scale-95 backdrop-blur-md'
                                        }`}
                                    >
                                        {/* Artwork Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Gradient Overlay for Text Legibility - Lightened */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent z-0 pointer-events-none" />

                                        {/* Top Emblem */}
                                        <div className="relative z-10 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/90 backdrop-blur-md">
                                                <Sparkles className="h-3.5 w-3.5" />
                                            </div>
                                        </div>

                                        {/* Card Text Content */}
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <h3 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-white font-serif">
                                                {item.title}
                                            </h3>

                                            <div className="mb-3 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md">
                                                {item.eyebrow}
                                            </div>

                                            <p className="mb-6 text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-[240px]">
                                                {item.description}
                                            </p>

                                            {/* Circular CTA Arrow */}
                                            <Link
                                                href={item.href}
                                                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                                                    isActive
                                                        ? 'border-white/30 bg-white/10 text-white hover:bg-primary hover:border-primary hover:scale-110 shadow-lg'
                                                        : 'border-white/20 bg-white/5 text-white/60'
                                                }`}
                                            >
                                                <ArrowUpRight className="h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Bottom Trust/Features Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-16 rounded-3xl border border-border/40 bg-background/60 p-6 md:p-8 backdrop-blur-md shadow-xl dark:border-border/50 dark:bg-background/40"
                >
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/30">
                        {trustPoints.map((tp, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-4 ${
                                    idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                                }`}
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d={tp.iconPath}
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground">
                                        {tp.title}
                                    </h4>
                                    <p className="text-xs text-foreground/50">
                                        {tp.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
