import { SEOHead } from '@/components/seo-head'
import { Courses } from './partials/courses'
import { Cta } from './partials/cta'
import { Engagements } from './partials/engagements'
import FAQ from './partials/faq'
import { Hero } from './partials/hero'
import { Newsletter } from './partials/newsletter'
import { Process } from './partials/process'
import { Services } from './partials/services'
import { Themes } from './partials/themes'
import { Trainers } from './partials/trainers'

interface HomeProps {
  seo: {
    title: string
    description: string
    canonical: string
    ogImage: string | null
    jsonLd: string
  }
  featuredCourses: unknown[]
  canRegister: boolean
}

export default function Home({ seo }: HomeProps) {
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        ogImage={seo.ogImage ?? undefined}
        jsonLd={seo.jsonLd}
      />
      <Hero />
      <Services />
      <Process />
      <Courses />
      <Themes />
      <Trainers />
      <Engagements />
      <FAQ />
      <Cta />
      <Newsletter />
    </>
  )
}
