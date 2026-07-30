import { Button } from '@/components/ui/button'
import { Link, usePage } from '@inertiajs/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import type { Course } from '../courses/types'

export function Courses() {
  const { featuredCourses } = usePage<{ featuredCourses: Course[] }>().props

  if (!featuredCourses?.length) return null

  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Nos formations à découvrir
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {featuredCourses.slice(0, 3).map((course) => {
            const tagParts = [course.category]
            if (course.duration) tagParts.push(`${course.duration} min`)

            return (
              <article
                key={course.id}
                className="flex flex-col rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm transition-shadow hover:shadow-md dark:border-border/60 dark:bg-background/70"
              >
                <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {course.category}
                </div>

                <h3 className="mb-3 text-xl font-semibold">{course.title}</h3>

                <p className="mb-4 text-sm leading-relaxed text-foreground/70 line-clamp-3">
                  {course.description}
                </p>

                {course.benefits && course.benefits.length > 0 && (
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/50">
                      Au programme :
                    </p>
                    <ul className="space-y-1">
                      {course.benefits.slice(0, 4).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {course.price && (
                  <div className="mb-4">
                    <span className="text-xs tracking-wider text-foreground/50 uppercase">À partir de </span>
                    <span className="font-semibold">{course.price}</span>
                  </div>
                )}

                <div className="mt-auto">
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={`/courses/${course.id}`}>
                      Découvrir la formation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
