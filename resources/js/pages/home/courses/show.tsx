import { usePage } from '@inertiajs/react'
import { CourseDetail } from './partials/course-detail'
import type { Course } from './types'
import { SEOHead } from '@/components/seo-head'

export default function CourseShowPage() {
    const { course } = usePage<{ course: Course }>().props

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://formationsession.com';
    const numericPrice = course.price ? parseFloat(course.price.replace(/[^0-9,.]/g, '').replace(',', '.')) : 0;
    
    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": `${origin}/courses/${course.slug}#course`,
        "name": course.title,
        "description": course.description,
        "provider": {
            "@type": "Organization",
            "name": "FormationSession",
            "url": origin
        },
        "offers": {
            "@type": "Offer",
            "price": numericPrice,
            "priceCurrency": "EUR",
            "category": "Education"
        },
        "aggregateRating": course.rating ? {
            "@type": "AggregateRating",
            "ratingValue": course.rating,
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": course.studentCount || 10
        } : undefined
    });

    return (
        <>
            <SEOHead
                title={course.title}
                description={course.description}
                ogImage={course.image}
                jsonLd={jsonLd}
            />
            <CourseDetail course={course} />
        </>
    );
}
