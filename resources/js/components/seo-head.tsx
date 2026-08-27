import { Head, usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SITE_NAME, DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo'

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
  const { i18n } = useTranslation()
  const { url: relativeUrl } = usePage()
  
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr'
  const locale = currentLang === 'en' ? 'en_US' : 'fr_FR'

  // Update HTML element lang attribute dynamically
  useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  // Compute clean URLs: default canonical dynamically to absolute current URL path without query params
  const cleanPath = relativeUrl.split('?')[0]
  const absolutePath = `${SITE_URL}${cleanPath}`
  const baseUrl = canonical || absolutePath
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={baseUrl} />

      {/* Multilingual Hreflang Alternates */}
      <link rel="alternate" hrefLang="fr" href={`${cleanBaseUrl}?lng=fr`} />
      <link rel="alternate" hrefLang="en" href={`${cleanBaseUrl}?lng=en`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`} />

      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
    </Head>
  )
}
