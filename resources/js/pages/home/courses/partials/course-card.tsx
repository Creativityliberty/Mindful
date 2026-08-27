import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { Star, Clock, Users, ArrowRight } from 'lucide-react'
import { useState, useRef, MouseEvent } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Course } from '../types'
import { useTranslation } from 'react-i18next'

export type { Course }

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'fill-foreground/10 text-foreground/10'}`}
                />
            ))}
            <span className="ml-1 text-xs font-semibold text-foreground/70">{rating.toFixed(1)}</span>
        </div>
    )
}

export function CourseCard({ course, index }: { course: Course; index: number }) {
    const { t } = useTranslation()
    const minPrice = course.price
    const cardRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98], delay: index * 0.05 }}
            className="h-full"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 dark:border-border/50 dark:bg-background/40"
            >
                {/* Spotlight cursor glow */}
                <div
                    className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 80%)`,
                    }}
                />

                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 z-30">
                        <Badge variant="secondary" className="border-white/20 bg-background/85 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md shadow-sm whitespace-nowrap">
                            {course.category}
                        </Badge>
                    </div>

                    {course.trainer && (
                        <div className="absolute bottom-3 left-4 z-30 flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-sky-400 text-[11px] font-bold text-white shadow-sm">
                                {course.trainer.initials}
                            </div>
                            <span className="text-xs font-semibold text-white drop-shadow-md">{course.trainer.name}</span>
                        </div>
                    )}
                </div>

                {/* Card Body */}
                <div className="relative z-10 flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {course.title}
                    </h3>
                    <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {course.description.length > 140 ? course.description.slice(0, 140) + '...' : course.description}
                    </p>

                    <div className="mb-5 space-y-2.5 rounded-xl border border-border/30 bg-muted/20 p-3 backdrop-blur-xs">
                        <StarRating rating={course.rating} />
                        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
                                {course.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Users className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
                                {t('featured_courses.students', { count: course.studentCount })}
                            </span>
                        </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                        {minPrice ? (
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">{t('featured_courses.from_price')}</p>
                                <p className="text-base font-bold text-foreground tracking-tight">{minPrice}</p>
                            </div>
                        ) : (
                            <span className="text-sm font-semibold text-emerald-500">Gratuit</span>
                        )}
                        <Button variant="secondary" size="sm" className="rounded-full gap-1.5 font-medium transition-all group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                            <Link href={`/courses/${course.slug}`}>
                                {t('featured_courses.view_btn')}
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
