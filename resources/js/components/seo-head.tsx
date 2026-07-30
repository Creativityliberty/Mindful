import { Head } from '@inertiajs/react'
import { SITE_NAME, LOCALE, DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  jsonLd?: string
  noIndex?: boolean
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  noIndex = false,
}: SEOHeadProps) {
  const url = canonical || SITE_URL
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}${ogImage}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${ogImage}`} />

      {jsonLd && <div data-jsonld dangerouslySetInnerHTML={{ __html: jsonLd }} />}
    </Head>
  )
}
