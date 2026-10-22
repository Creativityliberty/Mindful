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
        "@graph": [
            {
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
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${origin}/courses/${course.slug}#breadcrumbs`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": origin
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Formations",
                        "item": `${origin}/courses`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": course.title,
                        "item": `${origin}/courses/${course.slug}`
                    }
                ]
            }
        ]
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
