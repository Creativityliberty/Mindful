# FormationSession SEO Rebranding — Design Doc

## Goal

Transform the existing "Mindfulness & Bien-être Studio" Laravel + React app into **FormationSession** — a people-first, SEO-optimized training platform for well-being practices (radiesthésie, pendule, chakras, etc.).

**Phase 1 scope:** Global SEO infrastructure + homepage rebranding.

## Architecture

### 1. SEO Infrastructure (global, reusable across all pages)

#### 1a. `config/seo.php`

Centralized site-wide SEO defaults consumed by both PHP and frontend:

```php
<?php

return [
    'site_name' => 'FormationSession',
    'alternate_name' => 'FormationSession.com',
    'locale' => 'fr_FR',
    'url' => env('APP_URL', 'https://formationsession.com'),
    'default_title' => 'Formations bien-être en ligne et ateliers | FormationSession',
    'default_description' => 'Découvrez des formations en ligne et des ateliers en radiesthésie, pendule, chakras et bien-être, accessibles aux débutants et à votre rythme.',
    'logo' => '/images/logo-formationsession.png',
    'social_image' => '/images/formation-bien-etre-accueil.jpg',
    'twitter_handle' => null,
];
```

#### 1b. `app/Values/SeoData.php`

Value Object that encapsulates all SEO metadata for a page. Methods:

- `__construct(string $title, string $description, ?string $canonical, ?string $ogImage, ?array $extraJsonLd)`
- `toArray(): array` — serialized for Inertia
- `buildJsonLd(): array` — generates the full `@graph` array containing:
  - `Organization` (site-wide, referenced by `@id`)
  - `WebSite` (site-wide)
  - `WebPage` (per-page, with `isPartOf` + `about` + `primaryImageOfPage`)
  - `ItemList` + `Course[]` (homepage only, listing 3 formations)
  - `BreadcrumbList` (future pages)
- `toHtml(): string` — renders the `<script type="application/ld+json">` block

Design decision: JSON-LD is generated server-side (PHP) to guarantee presence in SSR output. The rendered HTML string is passed to the frontend via Inertia `Head` as a `children` slot.

#### 1c. `resources/js/components/seo-head.tsx`

Reusable React component wrapping Inertia's `<Head>`:

```tsx
interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: string; // pre-rendered JSON-LD HTML from PHP
  robots?: string;
  noIndex?: boolean;
}

// Renders:
// <Head>
//   <title>{title} | FormationSession</title>
//   <meta name="description" content={description} />
//   <meta name="robots" content={robots} />
//   <link rel="canonical" href={canonical} />
//   <meta property="og:type" content="website" />
//   <meta property="og:locale" content="fr_FR" />
//   <meta property="og:site_name" content="FormationSession" />
//   <meta property="og:title" content={title} />
//   <meta property="og:description" content={description} />
//   <meta property="og:url" content={canonical} />
//   <meta property="og:image" content={ogImage} />
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:title" content={title} />
//   <meta name="twitter:description" content={description} />
//   <meta name="twitter:image" content={ogImage} />
//   {jsonLd && <div data-jsonld dangerouslySetInnerHTML={{ __html: jsonLd }} />}
// </Head>
```

The JSON-LD is rendered via `dangerouslySetInnerHTML` inside a `<div>` hidden from visual rendering. Inertia's SSR will include it in the initial HTML for search engines.

#### 1d. `resources/js/lib/seo.ts`

Frontend defaults:

```ts
export const SITE_NAME = 'FormationSession'
export const SITE_URL = import.meta.env.VITE_APP_URL || 'https://formationsession.com'
export const DEFAULT_OG_IMAGE = '/images/formation-bien-etre-accueil.jpg'
export const LOCALE = 'fr_FR'
```

### 2. Homepage Rebranding

#### 2a. Controller changes

`HomeController@index` passes a `SeoData` object to the view with the homepage JSON-LD graph.

#### 2b. Page sections mapping

| Current file | Action | New content reference |
|---|---|---|
| `hero.tsx` | Rewrite | Hero section: "Découvrez, pratiquez et avancez à votre rythme" |
| `header.tsx` | Rewrite | Nav: Nos formations, Devenir formateur, Blog, À propos, Contact, Mon espace |
| `services.tsx` | Rewrite | Section: "Des formations pour apprendre par la pratique" |
| `courses.tsx` | Rewrite | 3 formation cards (atelier radiesthésie, initiation, chakras) |
| `process.tsx` | Rewrite | "Comment fonctionne FormationSession ?" — 4 étapes |
| `trainers.tsx` | Rewrite | "À l'origine de FormationSession" — Fabienne Dizy-Olliveaud |
| `chiffres.tsx` | **Delete** | Fake stats not compatible with people-first approach |
| `testimonials.tsx` | **Delete** | No invented social proof |
| `faq.tsx` | Rewrite | 11 FAQ questions |
| `cta.tsx` | Rewrite | "Commencez votre parcours" CTA |
| `footer.tsx` | Rewrite | Full footer with formations, account, legal links |
| _(new)_ `themes.tsx` | **New** | "Explorez les thèmes" — 4 cards linked to category pages |
| _(new)_ `engagements.tsx` | **New** | "Nos engagements" — 5 honest commitments |
| _(new)_ `newsletter.tsx` | **New** | Newsletter signup form |

#### 2c. Content principles

All copy follows the FormationSession spec (version 2, "Référencement de la page"):
- H1: "Découvrez, pratiquez et avancez à votre rythme"
- No fake stats, testimonials, or unverifiable claims
- Clear distinction between bien-être and santé
- Transparent pricing, level, and prerequisites
- Real trainer bio (Fabienne Dizy-Olliveaud)

### 3. Dependencies

**No new dependencies.**
- Uses existing `@inertiajs/react` `<Head>` component
- Uses existing Tailwind CSS v4 for styling
- JSON-LD rendering via PHP's native `json_encode`

### 4. Testing

- Existing tests must still pass
- New tests for `SeoData` value object (unit)
- Visual verification via `php artisan serve` + browser

### Important: `app.tsx` title callback conflict

The current `app.tsx` has:
```ts
title: (title) => (title ? `${title} - ${appName}` : appName),
```

This auto-appends to any `<Head title="...">` prop, but our `<SEOHead>` sets `<title>` as a child of `<Head>` (bypassing the callback). To avoid confusion, update the callback to identity:
```ts
title: (title) => title,
```

This ensures no double-suffix. Our SEOHead component controls the exact title string.

## Implementation order

1. `config/seo.php`
2. `app/Values/SeoData.php`
3. `resources/js/lib/seo.ts`
4. `resources/js/components/seo-head.tsx`
5. Update `resources/views/app.blade.php` with base meta tags
6. Update `resources/js/app.tsx` title callback (set to identity)
7. Update `app/Http/Controllers/Public/Home/HomeController.php`
8. Rewrite `home/index.tsx` with SEOHead
9. Rewrite header, hero, services, process, courses, trainers, faq, cta, footer
10. Delete chiffres.tsx, testimonials.tsx
11. Create themes.tsx, engagements.tsx, newsletter.tsx
12. Update `.env.example` / `.env` APP_NAME
13. Run tests & lint

## Risks

- JSON-LD via `dangerouslySetInnerHTML` works only if Inertia's SSR preserves it (it does — Head children are rendered in SSR)
- Deleting sections (testimonials, chiffres) may cause import errors if referenced elsewhere — must check
- Some images referenced in spec don't exist yet (`fabienne-atelier-pendule.jpg`, etc.) — placeholder handling needed
