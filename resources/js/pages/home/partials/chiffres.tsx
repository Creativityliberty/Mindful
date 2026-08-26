import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
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
        eyebrow: 'Formations disponibles',
        description: 'Pendule, baguettes, géobiologie',
        href: '/courses?category=radiesthesie',
        image: '/assets/images/theme_radiesthesie.jpg',
    },
    {
        title: 'Pendule',
        eyebrow: 'Pratique divinatoire',
        description: 'Techniques expertes et avancées',
        href: '/courses?category=pendule',
        image: '/assets/images/service_pendule.jpg',
    },
    {
        title: 'Chakras',
        eyebrow: 'Équilibrage énergétique',
        description: '7 centres, harmonisation complète',
        href: '/courses?category=chakras',
        image: '/assets/images/theme_chakras.jpg',
    },
    {
        title: 'Pratique',
        eyebrow: 'Approche pédagogique',
        description: 'Vidéos, exercices, mises en situation',
        href: '/courses',
        image: '/assets/images/theme_meditation.jpg',
    },
    {
        title: 'Énergétique',
        eyebrow: 'Domaines couverts',
        description: 'Soins à distance, nettoyage vibratoire',
        href: '/courses?category=energetique',
        image: '/assets/images/service_energetique.jpg',
    },
    {
        title: 'À vie',
        eyebrow: 'Accès aux formations',
        description: 'Après inscription, accès illimité',
        href: '/courses',
        image: '/assets/images/theme_developpement.jpg',
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#09070D]">
            {/* Background Halo */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/20 blur-[160px]" />
                <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[130px]" />
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
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-[11px] font-medium text-amber-300 backdrop-blur-md">
                        <Sparkles className="h-3 w-3 text-amber-400" />
                        Une plateforme dédiée aux
                    </div>

                    <h2 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight text-white font-serif">
                        pratiques énergétiques
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm md:text-base text-white/60 font-light leading-relaxed">
                        Des formateurs passionnés, des apprenants motivés et des contenus de qualité réunis sur une seule plateforme dédiée à la radiesthésie et à l'énergétique.
                    </p>
                </motion.div>

                {/* Swiper 3D Coverflow Section */}
                <div className="relative py-4 z-10">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={2} // Center on Chakras
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 4000,
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
                                        className={`group relative h-full w-full overflow-hidden rounded-[2rem] border transition-all duration-500 flex flex-col justify-between p-7 md:p-8 ${
                                            isActive
                                                ? 'border-amber-400/40 bg-gradient-to-b from-white/10 to-black/90 shadow-2xl shadow-purple-950/50 scale-105'
                                                : 'border-white/10 bg-black/60 opacity-65 scale-95'
                                        }`}
                                    >
                                        {/* Artwork Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Gradient Overlay for Text Visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-0" />

                                        {/* Top Emblem */}
                                        <div className="relative z-10 flex justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/30 bg-black/40 text-amber-300 backdrop-blur-md">
                                                <Sparkles className="h-4 w-4" />
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
                                                        ? 'border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-black hover:scale-110'
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
                    className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md"
                >
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                        {trustPoints.map((tp, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-4 ${
                                    idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/5 text-amber-300">
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
                                    <h4 className="text-sm font-semibold text-white">
                                        {tp.title}
                                    </h4>
                                    <p className="text-xs text-white/50">
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
