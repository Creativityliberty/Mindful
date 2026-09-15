import { SEOHead } from '@/components/seo-head'
import { Courses } from './partials/courses'
import { Cta } from './partials/cta'
import { Engagements } from './partials/engagements'
import FAQ from './partials/faq'
import { Hero } from './partials/hero'
import { MarqueeTicker } from './partials/marquee-ticker'
import { Newsletter } from './partials/newsletter'
import { Process } from './partials/process'
import { Services } from './partials/services'
import { Themes } from './partials/themes'
import { Trainers } from './partials/trainers'
import { Chiffres } from './partials/chiffres'
import Testimonials from './partials/testimonials'

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
      <MarqueeTicker />
      <Services />
      <Process />
      <Courses />
      <Themes />
      <Trainers />
      <Chiffres />
      <Testimonials />
      <Engagements />
      <FAQ />
      <Cta />
      <Newsletter />
    </>
  )
}