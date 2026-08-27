import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Chiffres() {
    const { t } = useTranslation();

    const items = [
        {
            title: t('chiffres.item1_title'),
            eyebrow: t('chiffres.item1_eyebrow'),
            description: t('chiffres.item1_desc'),
            href: '/courses?category=radiesthesie',
            image: '/assets/images/service_radiesthesie_lux.jpg',
        },
        {
            title: t('chiffres.item2_title'),
            eyebrow: t('chiffres.item2_eyebrow'),
            description: t('chiffres.item2_desc'),
            href: '/courses?category=chakras',
            image: '/assets/images/service_chakras_lux.jpg',
        },
        {
            title: t('chiffres.item3_title'),
            eyebrow: t('chiffres.item3_eyebrow'),
            description: t('chiffres.item3_desc'),
            href: '/courses',
            image: '/assets/images/service_bougies_lux.jpg',
        },
        {
            title: t('chiffres.item4_title'),
            eyebrow: t('chiffres.item4_eyebrow'),
            description: t('chiffres.item4_desc'),
            href: '/courses',
            image: '/assets/images/service_ongles_lux.jpg',
        },
        {
            title: t('chiffres.item5_title'),
            eyebrow: t('chiffres.item5_eyebrow'),
            description: t('chiffres.item5_desc'),
            href: '/courses',
            image: '/assets/images/service_ia_lux.jpg',
        },
        {
            title: t('chiffres.item6_title'),
            eyebrow: t('chiffres.item6_eyebrow'),
            description: t('chiffres.item6_desc'),
            href: '/courses',
            image: '/assets/images/service_aroma_lux.jpg',
        },
        {
            title: t('chiffres.item7_title'),
            eyebrow: t('chiffres.item7_eyebrow'),
            description: t('chiffres.item7_desc'),
            href: '/courses',
            image: '/assets/images/service_massage_lux.jpg',
        },
        {
            title: t('chiffres.item8_title'),
            eyebrow: t('chiffres.item8_eyebrow'),
            description: t('chiffres.item8_desc'),
            href: '/courses',
            image: '/assets/images/service_bois_lux.jpg',
        },
    ];

    const trustPoints = [
        {
            title: t('chiffres.feat1_title'),
            subtitle: t('chiffres.feat1_desc'),
            iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        },
        {
            title: t('chiffres.feat2_title'),
            subtitle: t('chiffres.feat2_desc'),
            iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
        },
        {
            title: t('chiffres.feat3_title'),
            subtitle: t('chiffres.feat3_desc'),
            iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
        },
        {
            title: t('chiffres.feat4_title'),
            subtitle: t('chiffres.feat4_desc'),
            iconPath: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-1.414-1.414M8.464 15.536a5 5 0 010-7.072m0 0L9.878 9.88M5.636 18.364a9 9 0 010-12.728m0 0L8.465 8.465',
        },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">
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
                        {t('chiffres.title_part1')}
                    </div>

                    <h2 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        {t('chiffres.title_part2')}
                    </h2>

                    <p className="mx-auto max-w-2xl text-base md:text-lg text-foreground/60 font-light leading-relaxed">
                        {t('chiffres.subtitle')}
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
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-10" />

                                        <div className="relative z-20 flex justify-between items-start">
                                            <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                                                {item.eyebrow}
                                            </span>
                                            <Link
                                                href={item.href}
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
                                            >
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Link>
                                        </div>

                                        <div className="relative z-20 space-y-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* 4 Trust Feature Points */}
                <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border/40">
                    {trustPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary border border-border/40 text-primary">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d={point.iconPath} />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground">{point.title}</h4>
                                <p className="text-xs text-foreground/50">{point.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
