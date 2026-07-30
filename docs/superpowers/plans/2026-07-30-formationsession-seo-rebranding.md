# FormationSession SEO Rebranding — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand Mindful → FormationSession with full SEO infrastructure (meta tags, JSON-LD, OG/Twitter) and rewrite the homepage with people-first content.

**Architecture:** PHP ValueObject (`SeoData`) generates JSON-LD server-side → passed to Inertia page → consumed by reusable React `<SEOHead>` component that renders `<title>`, meta desc, OG, Twitter, canonical, JSON-LD. Homepage partials are rewritten one-by-one.

**Tech Stack:** PHP 8.4, Laravel 13, React 19, Inertia v3, Tailwind CSS v4, TypeScript

## Global Constraints

- No new PHP or npm dependencies
- JSON-LD must render server-side (SSR), not client-side
- All copy follows the FormationSession spec v2 ("Référencement de la page")
- No fake stats, testimonials, or unverifiable claims
- H1 must be exactly: "Découvrez, pratiquez et avancez à votre rythme"
- Canonical URL: `https://formationsession.com/`
- Run `vendor/bin/pint --format agent` after every PHP change
- Run `npm run lint` after every frontend change
- Run `php artisan test --compact --filter=SeoData` after Task 1

---

### Task 1: SEO Config + SeoData Value Object + Tests

**Files:**
- Create: `config/seo.php`
- Create: `app/Values/SeoData.php`
- Create: `tests/Unit/Values/SeoDataTest.php`

**Interfaces:**
- Produces: `SeoData` class with `toArray(): array`, `toJsonLdHtml(): string`
- Produces: `config('seo.*')` with site-wide defaults

- [ ] **Step 1: Create `config/seo.php`**

```php
<?php

declare(strict_types=1);

return [
    'site_name' => 'FormationSession',
    'alternate_name' => 'FormationSession.com',
    'locale' => 'fr_FR',
    'url' => env('APP_URL', 'https://formationsession.com'),
    'default_title' => 'Formations bien-être en ligne et ateliers | FormationSession',
    'default_description' => 'Découvrez des formations en ligne et des ateliers en radiesthésie, pendule, chakras et bien-être, accessibles aux débutants et à votre rythme.',
    'logo' => '/images/logo-formationsession.png',
    'social_image' => '/images/formation-bien-etre-accueil.jpg',
];
```

- [ ] **Step 2: Create `app/Values/SeoData.php`**

```php
<?php

declare(strict_types=1);

namespace App\Values;

use Illuminate\Support\Facades\Config;

final readonly class SeoData
{
    /**
     * @param  array<int, array{name: string, description: string, url: string}>  $courses
     */
    public function __construct(
        public string $title,
        public string $description,
        public string $canonical,
        public ?string $ogImage = null,
        public array $courses = [],
    ) {}

    public static function forHomepage(array $courses = []): self
    {
        return new self(
            title: Config::string('seo.default_title'),
            description: Config::string('seo.default_description'),
            canonical: Config::string('seo.url'),
            ogImage: Config::string('seo.social_image'),
            courses: $courses,
        );
    }

    /**
     * @return array{title: string, description: string, canonical: string, ogImage: ?string, jsonLd: string}
     */
    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'description' => $this->description,
            'canonical' => $this->canonical,
            'ogImage' => $this->ogImage,
            'jsonLd' => $this->toJsonLdHtml(),
        ];
    }

    public function toJsonLdHtml(): string
    {
        $graph = $this->buildGraph();

        return sprintf(
            '<script type="application/ld+json">%s</script>',
            json_encode(['@context' => 'https://schema.org', '@graph' => $graph], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
        );
    }

    /**
     * @return array<int, mixed>
     */
    private function buildGraph(): array
    {
        $url = $this->canonical;
        $name = Config::string('seo.site_name');
        $altName = Config::string('seo.alternate_name');
        $logo = Config::string('seo.logo');
        $locale = Config::string('seo.locale');

        $graph = [];

        $graph[] = [
            '@type' => 'Organization',
            '@id' => "{$url}#organization",
            'name' => $name,
            'alternateName' => $altName,
            'url' => $url,
            'logo' => [
                '@type' => 'ImageObject',
                '@id' => "{$url}#logo",
                'url' => "{$url}{$logo}",
                'contentUrl' => "{$url}{$logo}",
                'caption' => $name,
            ],
        ];

        $graph[] = [
            '@type' => 'WebSite',
            '@id' => "{$url}#website",
            'url' => $url,
            'name' => $name,
            'alternateName' => $altName,
            'inLanguage' => $locale,
            'publisher' => ['@id' => "{$url}#organization"],
        ];

        $graph[] = [
            '@type' => 'WebPage',
            '@id' => "{$url}#webpage",
            'url' => $url,
            'name' => $this->title,
            'description' => $this->description,
            'isPartOf' => ['@id' => "{$url}#website"],
            'about' => ['@id' => "{$url}#organization"],
            'primaryImageOfPage' => [
                '@type' => 'ImageObject',
                'url' => $this->ogImage ? "{$url}{$this->ogImage}" : null,
            ],
            'inLanguage' => $locale,
        ];

        if ($this->courses !== []) {
            $items = [];
            foreach ($this->courses as $i => $course) {
                $position = $i + 1;
                $items[] = [
                    '@type' => 'ListItem',
                    'position' => $position,
                    'url' => $course['url'],
                    'item' => [
                        '@type' => 'Course',
                        'name' => $course['name'],
                        'description' => $course['description'],
                        'url' => $course['url'],
                        'provider' => ['@id' => "{$url}#organization"],
                    ],
                ];
            }

            $graph[] = [
                '@type' => 'ItemList',
                '@id' => "{$url}#formations",
                'name' => 'Formations bien-être proposées par FormationSession',
                'numberOfItems' => count($items),
                'itemListOrder' => 'https://schema.org/ItemListOrderAscending',
                'itemListElement' => $items,
            ];
        }

        return $graph;
    }
}
```

- [ ] **Step 3: Create `tests/Unit/Values/SeoDataTest.php`**

```php
<?php

declare(strict_types=1);

namespace Tests\Unit\Values;

use App\Values\SeoData;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

final class SeoDataTest extends TestCase
{
    #[Test]
    public function it_generates_correct_defaults_for_homepage(): void
    {
        $seo = SeoData::forHomepage();
        $data = $seo->toArray();

        $this->assertSame('Formations bien-être en ligne et ateliers | FormationSession', $data['title']);
        $this->assertStringContainsString('radiesthésie', $data['description']);
        $this->assertSame('https://formationsession.com/', $data['canonical']);
        $this->assertStringContainsString('application/ld+json', $data['jsonLd']);
        $this->assertStringContainsString('Organization', $data['jsonLd']);
        $this->assertStringContainsString('WebSite', $data['jsonLd']);
        $this->assertStringContainsString('WebPage', $data['jsonLd']);
        $this->assertStringNotContainsString('ItemList', $data['jsonLd']);
    }

    #[Test]
    public function it_includes_courses_in_json_ld_when_provided(): void
    {
        $courses = [
            ['name' => 'Atelier découverte', 'description' => 'Bases du pendule', 'url' => 'https://formationsession.com/formations/atelier'],
            ['name' => 'Initiation radiesthésie', 'description' => 'Pendule et baguettes', 'url' => 'https://formationsession.com/formations/initiation'],
        ];

        $seo = SeoData::forHomepage($courses);
        $data = $seo->toArray();

        $this->assertStringContainsString('ItemList', $data['jsonLd']);
        $this->assertStringContainsString('Atelier découverte', $data['jsonLd']);
        $this->assertStringContainsString('ListItem', $data['jsonLd']);
        $this->assertStringContainsString('"numberOfItems":2', $data['jsonLd']);
    }

    #[Test]
    public function json_ld_is_valid_json(): void
    {
        $seo = SeoData::forHomepage();
        $html = $seo->toJsonLdHtml();

        preg_match('/<script[^>]*>(.*?)<\/script>/s', $html, $matches);
        $decoded = json_decode($matches[1], true, 512, JSON_THROW_ON_ERROR);

        $this->assertArrayHasKey('@context', $decoded);
        $this->assertArrayHasKey('@graph', $decoded);
        $this->assertIsArray($decoded['@graph']);
    }

    #[Test]
    public function it_generates_items_in_correct_order(): void
    {
        $courses = [
            ['name' => 'A', 'description' => 'Desc A', 'url' => 'https://formationsession.com/a'],
            ['name' => 'B', 'description' => 'Desc B', 'url' => 'https://formationsession.com/b'],
        ];

        $seo = SeoData::forHomepage($courses);
        $html = $seo->toJsonLdHtml();

        $this->assertStringContainsString('"position":1', $html);
        $this->assertStringContainsString('"position":2', $html);
    }
}
```

- [ ] **Step 4: Run tests to verify they fail (SeoData doesn't exist yet)**

Run: `php artisan test --compact --filter=SeoData`
Expected: FAIL with "Class not found"

- [ ] **Step 5: Create the files above and copy the exact code from steps 2-3**

- [ ] **Step 6: Run tests to verify they pass**

Run: `php artisan test --compact --filter=SeoData`
Expected: 4 PASS

- [ ] **Step 7: Run Pint**

Run: `vendor/bin/pint --format agent`

- [ ] **Step 8: Commit**

```bash
git add config/seo.php app/Values/SeoData.php tests/Unit/Values/SeoDataTest.php
git commit -m "feat(seo): add SeoData value object with JSON-LD generation"
```

---

### Task 2: Frontend SEO Infrastructure

**Files:**
- Create: `resources/js/lib/seo.ts`
- Create: `resources/js/components/seo-head.tsx`
- Modify: `resources/views/app.blade.php`
- Modify: `resources/js/app.tsx`

**Interfaces:**
- Consumes: `SeoData.toArray()` returns `{title, description, canonical, ogImage, jsonLd}`
- Produces: `<SEOHead>` component accepting `SEOHeadProps`

- [ ] **Step 1: Create `resources/js/lib/seo.ts`**

```typescript
export const SITE_NAME = 'FormationSession'
export const SITE_URL = import.meta.env.VITE_APP_URL ?? 'https://formationsession.com'
export const DEFAULT_OG_IMAGE = '/images/formation-bien-etre-accueil.jpg'
export const LOCALE = 'fr_FR'
```

- [ ] **Step 2: Create `resources/js/components/seo-head.tsx`**

```typescript
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
```

- [ ] **Step 3: Update `resources/views/app.blade.php`** — remove the `<title>` inside `<x-inertia::head>` (our SEOHead component handles it now), keep everything else

```blade
        <x-inertia::head />
```

- [ ] **Step 4: Update `resources/js/app.tsx`** — set title callback to identity

Find: `title: (title) => (title ? `${title} - ${appName}` : appName),`
Replace with: `title: (title) => title,`

Also change `const appName` line: keep it but it won't be used for titles anymore.

- [ ] **Step 5: Run linter**

Run: `npm run lint`
Expected: PASS (no errors)

- [ ] **Step 6: Commit**

```bash
git add resources/js/lib/seo.ts resources/js/components/seo-head.tsx resources/views/app.blade.php resources/js/app.tsx
git commit -m "feat(seo): add SEOHead component and frontend SEO infrastructure"
```

---

### Task 3: Wire SEO Data Through Controller + Homepage Index

**Files:**
- Modify: `app/Http/Controllers/Public/Home/HomeController.php`
- Modify: `resources/js/pages/home/index.tsx`

**Interfaces:**
- Consumes: `SeoData::forHomepage($courses)` + `$seo->toArray()`
- Produces: `{ seo: SeoData.toArray(), featuredCourses, canRegister }` passed to page

- [ ] **Step 1: Update `HomeController` to build SeoData with courses**

```php
use App\Values\SeoData;

public function index(): Response
{
    $courses = $this->courses->featuredPublished(4);
    $courseEntries = $courses->map(fn ($c) => [
        'name' => $c->title,
        'description' => $c->description,
        'url' => route('courses.show', $c->id),
    ])->values()->toArray();

    return Inertia::render('home/index', [
        'canRegister' => Features::enabled(Features::registration()),
        'featuredCourses' => CourseResource::collection($courses)->resolve(),
        'seo' => SeoData::forHomepage($courseEntries)->toArray(),
    ]);
}
```

- [ ] **Step 2: Rewrite `home/index.tsx` with SEOHead and new section order**

```typescript
import { SEOHead } from '@/components/seo-head'
import { Hero } from './partials/hero'
import { Services } from './partials/services'
import { Process } from './partials/process'
import { Courses } from './partials/courses'
import { Themes } from './partials/themes'
import { Trainers } from './partials/trainers'
import { Engagements } from './partials/engagements'
import { FAQ } from './partials/faq'
import { Cta } from './partials/cta'
import { Newsletter } from './partials/newsletter'

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
```

- [ ] **Step 3: Run Pint + lint**

Run: `vendor/bin/pint --format agent && npm run lint`
Expected: PASS

- [ ] **Step 4: Run tests**

Run: `php artisan test --compact`
Expected: PASS (no test covers this yet but existing tests must not break)

- [ ] **Step 5: Commit**

```bash
git add app/Http/Controllers/Public/Home/HomeController.php resources/js/pages/home/index.tsx
git commit -m "feat(home): wire SEO data through controller and index page"
```

---

### Task 4: Header + Hero Rebranding

**Files:**
- Modify: `resources/js/pages/home/partials/header.tsx`
- Modify: `resources/js/pages/home/partials/hero.tsx`

- [ ] **Step 1: Rewrite `header.tsx`**

```typescript
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, GraduationCap } from 'lucide-react'

const navLinks = [
  { href: '/courses', label: 'Nos formations' },
  { href: '/become-trainer', label: 'Devenir formateur' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Mon espace' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <GraduationCap className="h-6 w-6 text-primary" />
          FormationSession
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="default" size="sm" asChild className="rounded-full">
            <Link href="/courses">Explorer les formations</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-foreground/70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" asChild className="mt-2 rounded-full">
              <Link href="/courses">Explorer les formations</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Rewrite `hero.tsx`** — FormationSession hero (remove canvas animation, remove fake stats, remove highlight pills)

```typescript
import { Button } from '@/components/ui/button'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from '@inertiajs/react'

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const points = [
  'Des programmes progressifs, avec des bases expliquées simplement.',
  'Choisissez le format qui correspond à vos besoins et à votre rythme.',
  'Expérimentez par vous-même grâce à des mises en situation et des supports pédagogiques.',
  'Accédez à votre espace personnel et avancez selon vos disponibilités.',
] as const

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-background pt-16"
      role="region"
      aria-label="Hero plateforme formations bien-être"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.035] blur-[140px] dark:bg-foreground/[0.06]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-foreground/[0.025] blur-[120px] dark:bg-foreground/[0.05]" />
        <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px] dark:bg-primary/[0.05]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 text-xs font-semibold tracking-[0.25em] text-foreground/70 uppercase"
          >
            Formations en ligne et ateliers de bien-être
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Découvrez, pratiquez
            <br />
            et avancez à votre rythme
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-foreground/70 md:text-2xl"
          >
            FormationSession vous propose des formations accessibles pour découvrir la radiesthésie,
            apprendre à utiliser un pendule, explorer les chakras et approfondir différentes
            pratiques de bien-être.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base text-foreground/60"
          >
            Suivez un parcours en ligne depuis chez vous ou participez à un atelier en présentiel.
            Chaque programme vous apporte des explications claires, des exercices guidés et
            des repères concrets pour progresser pas à pas.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" className="group gap-2 rounded-full px-8 text-base tracking-[0.2em] uppercase" asChild>
              <Link href="/courses">
                Découvrir les formations
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="rounded-full" asChild>
              <Link href="/become-trainer">
                Devenir formateur
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-3xl rounded-2xl border border-border/30 bg-background/60 p-6 text-left backdrop-blur-sm dark:border-border/60 dark:bg-background/70"
          >
            <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
              Les points essentiels
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add resources/js/pages/home/partials/header.tsx resources/js/pages/home/partials/hero.tsx
git commit -m "feat(home): rebrand header and hero for FormationSession"
```

---

### Task 5: Services + Process Sections

**Files:**
- Modify: `resources/js/pages/home/partials/services.tsx`
- Modify: `resources/js/pages/home/partials/process.tsx`

- [ ] **Step 1: Rewrite `services.tsx`** — "Des formations pour apprendre par la pratique"

```typescript
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { BookOpen, HelpCircle, ListChecks, Laptop, Target, GraduationCap } from 'lucide-react'

const items = [
  { icon: BookOpen, text: 'le sujet abordé' },
  { icon: Target, text: 'le niveau recommandé' },
  { icon: Laptop, text: 'le format de la formation' },
  { icon: ListChecks, text: 'les objectifs pédagogiques' },
  { icon: GraduationCap, text: 'les exercices proposés' },
  { icon: HelpCircle, text: 'le matériel éventuellement nécessaire' },
]

export function Services() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Des formations pour apprendre par la pratique
          </h2>
          <p className="text-lg text-foreground/70">
            Commencer une nouvelle pratique soulève souvent de nombreuses questions.
            FormationSession rassemble des formations structurées pour vous aider à
            acquérir des bases solides, expérimenter progressivement et gagner en autonomie.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-4xl">
          <p className="mb-8 text-center text-base text-foreground/60">
            Chaque programme présente clairement :
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-xl border border-border/30 bg-background/60 p-4 backdrop-blur-sm dark:border-border/60 dark:bg-background/70">
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild className="rounded-full">
            <Link href="/courses">Voir toutes les formations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Rewrite `process.tsx`** — "Comment fonctionne FormationSession ?"

```typescript
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { Search, ClipboardList, UserPlus, Play } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Explorez les formations',
    description:
      'Parcourez le catalogue et recherchez une formation selon son thème, son niveau ou son format. Chaque page vous présente le programme, les objectifs, le formateur et les conditions d\'accès.',
  },
  {
    icon: ClipboardList,
    title: 'Choisissez votre programme',
    description:
      'Prenez le temps de consulter le contenu de la formation et de vérifier qu\'il correspond à vos attentes. Vous trouverez les informations essentielles avant votre inscription.',
  },
  {
    icon: UserPlus,
    title: 'Créez votre compte',
    description:
      'Inscrivez-vous et retrouvez les formations que vous avez choisies depuis votre espace personnel.',
  },
  {
    icon: Play,
    title: 'Progressez à votre rythme',
    description:
      'Suivez les cours, réalisez les exercices proposés et revenez sur les ressources lorsque vous en ressentez le besoin.',
  },
]

export function Process() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Comment fonctionne FormationSession ?
          </h2>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">
                  {i + 1}. {step.title}
                </h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="rounded-full">
            <Link href="/courses">Découvrir les formations disponibles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add resources/js/pages/home/partials/services.tsx resources/js/pages/home/partials/process.tsx
git commit -m "feat(home): rewrite services and process sections for FormationSession"
```

---

### Task 6: Courses + Themes Sections

**IMPORTANT — Backend data:** Les formations viennent du backend via `featuredCourses` (prop Inertia passée par `HomeController` via `CourseResource`). Type défini dans `resources/js/pages/home/courses/types.ts` (interface `Course` avec champs: `id`, `title`, `slug`, `description`, `price`, `duration`, `image`, `category`, `benefits`, `objectives`, `prerequisites`, `trainer`). Le composant utilise `usePage()` pour les récupérer.

**Files:**
- Modify: `resources/js/pages/home/partials/courses.tsx`
- Create: `resources/js/pages/home/partials/themes.tsx`

- [ ] **Step 1: Rewrite `courses.tsx`** — utilise `featuredCourses` du backend, pas de données hardcodées

```typescript
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
```

- [ ] **Step 2: Create `themes.tsx`** — "Explorez les différentes thématiques"

```typescript
import { Link } from '@inertiajs/react'
import { ArrowRight, Crystal, Sun, Moon, Compass } from 'lucide-react'

const themes = [
  {
    icon: Crystal,
    title: 'Radiesthésie et pendule',
    description:
      "Découvrez les principes de la radiesthésie et apprenez à utiliser un pendule avec méthode. Les formations vous accompagnent dans la prise en main de l'outil, l'observation de ses mouvements, la définition de vos conventions et la formulation de questions plus précises.",
    href: '/courses?theme=radiesthesie',
    linkLabel: 'Voir les formations en radiesthésie',
  },
  {
    icon: Sun,
    title: 'Chakras et pratiques énergétiques',
    description:
      "Explorez les sept chakras, leurs symboles et les pratiques traditionnellement utilisées pour travailler l'attention, les ressentis et l'équilibre personnel.",
    href: '/courses?theme=chakras',
    linkLabel: 'Découvrir les formations sur les chakras',
  },
  {
    icon: Moon,
    title: 'Méditation et relaxation',
    description:
      "Apprenez à ralentir, à porter votre attention sur le moment présent et à intégrer des pratiques simples de méditation ou de relaxation dans votre quotidien.",
    href: '/courses?theme=meditation',
    linkLabel: 'Voir les formations de méditation',
  },
  {
    icon: Compass,
    title: 'Développement personnel',
    description:
      "Découvrez des outils pour mieux vous connaître, observer vos ressentis, développer votre intuition et avancer avec davantage de confiance dans votre pratique.",
    href: '/courses?theme=developpement-personnel',
    linkLabel: 'Explorer les formations',
  },
]

export function Themes() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Explorez les différentes thématiques
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm dark:border-border/60 dark:bg-background/70"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <theme.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{theme.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                {theme.description}
              </p>
              <Link
                href={theme.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {theme.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add resources/js/pages/home/partials/courses.tsx resources/js/pages/home/partials/themes.tsx
git commit -m "feat(home): add courses and themes sections for FormationSession"
```

---

### Task 7: Trainer + Engagements Sections

**Files:**
- Modify: `resources/js/pages/home/partials/trainers.tsx`
- Create: `resources/js/pages/home/partials/engagements.tsx`

- [ ] **Step 1: Rewrite `trainers.tsx`** — "À l'origine de FormationSession" (Fabienne Dizy-Olliveaud)

```typescript
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { ArrowRight, Quote } from 'lucide-react'

export function Trainers() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
              À l&apos;origine de FormationSession
            </h2>
            <p className="text-lg text-foreground/70">
              Une plateforme créée pour apprendre et transmettre autrement.
            </p>
          </div>

          <div className="mb-12 rounded-2xl border border-border/30 bg-background/60 p-8 backdrop-blur-sm dark:border-border/60 dark:bg-background/70">
            <Quote className="mb-4 h-8 w-8 text-primary/40" aria-hidden="true" />
            <p className="mb-6 text-base leading-relaxed text-foreground/80">
              FormationSession est née d&apos;une volonté simple : rendre les formations consacrées
              au bien-être et aux pratiques personnelles plus faciles à découvrir, à comprendre et à suivre.
            </p>
            <p className="mb-6 text-base leading-relaxed text-foreground/80">
              La plateforme s&apos;adresse aux personnes qui souhaitent apprendre, mais aussi aux
              professionnels qui veulent transmettre leur expérience dans un cadre clair.
            </p>
            <p className="mb-6 text-base leading-relaxed text-foreground/80">
              Les premières formations sont proposées par Fabienne et portent notamment sur la
              radiesthésie, le pendule et les chakras.
            </p>

            <div className="mb-6 rounded-xl border border-primary/20 bg-primary/[0.03] p-6">
              <h3 className="mb-1 text-lg font-semibold">Fabienne Dizy-Olliveaud</h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                Son approche accorde une place importante à l&apos;apprentissage progressif,
                à l&apos;expérience personnelle, aux exercices pratiques, à l&apos;écoute de ses
                ressentis, à l&apos;autonomie et au respect des limites de chaque pratique.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70">
                FormationSession a vocation à accueillir progressivement d&apos;autres professionnels
                du bien-être partageant cette volonté de transmettre avec sérieux et simplicité.
              </p>
            </div>

            <Button asChild variant="outline" className="rounded-full">
              <Link href="/about">
                En savoir plus sur FormationSession
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `engagements.tsx`** — "Nos engagements" (5 commitments, people-first)

```typescript
import { ShieldCheck, FileText, Scale, HeartHandshake, Timer } from 'lucide-react'

const engagements = [
  {
    icon: ShieldCheck,
    title: 'Des informations honnêtes',
    description:
      "Nous ne publions pas de chiffres, de témoignages, de certifications ou de résultats qui ne peuvent pas être vérifiés.",
  },
  {
    icon: FileText,
    title: 'Des programmes clairement présentés',
    description:
      "Chaque page de formation explique ce que vous allez apprendre, le déroulement du programme et les ressources incluses.",
  },
  {
    icon: Scale,
    title: 'Des promesses raisonnables',
    description:
      "Les formations vous permettent d'apprendre, d'expérimenter et de développer votre pratique. Elles ne garantissent pas un résultat personnel, énergétique ou thérapeutique.",
  },
  {
    icon: HeartHandshake,
    title: 'Une distinction claire entre bien-être et santé',
    description:
      "Les contenus disponibles sur FormationSession relèvent du bien-être, de la transmission et du développement personnel. Ils ne remplacent pas un diagnostic, un traitement ou l'accompagnement d'un professionnel de santé.",
  },
  {
    icon: Timer,
    title: 'Le respect du rythme de chacun',
    description:
      "Vous restez libre de pratiquer selon vos besoins, vos convictions et vos propres limites.",
  },
]

export function Engagements() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Nos engagements
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border/30 bg-background/60 p-6 backdrop-blur-sm dark:border-border/60 dark:bg-background/70"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add resources/js/pages/home/partials/trainers.tsx resources/js/pages/home/partials/engagements.tsx
git commit -m "feat(home): add trainer and engagements sections"
```

---

### Task 8: FAQ + CTA + Newsletter

**Files:**
- Modify: `resources/js/pages/home/partials/faq.tsx`
- Modify: `resources/js/pages/home/partials/cta.tsx`
- Create: `resources/js/pages/home/partials/newsletter.tsx`

- [ ] **Step 1: Rewrite `faq.tsx`** — 11 FormationSession FAQ questions

```typescript
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Qu'est-ce que FormationSession ?",
    a: "FormationSession est une plateforme francophone consacrée aux formations dans les domaines du bien-être et du développement personnel. Elle propose des formations en ligne et des ateliers en présentiel animés par des formateurs et des praticiens identifiés.",
  },
  {
    q: 'Quelles formations sont disponibles ?',
    a: "Les premières formations portent notamment sur la radiesthésie, l'utilisation du pendule et l'exploration des chakras. D'autres thèmes pourront être proposés progressivement par les formateurs présents sur la plateforme.",
  },
  {
    q: 'Les formations sont-elles accessibles aux débutants ?',
    a: "Oui, plusieurs programmes sont spécialement conçus pour les personnes qui découvrent une pratique. Le niveau recommandé et les éventuels prérequis sont indiqués sur chaque page de formation.",
  },
  {
    q: 'Comment accéder à une formation en ligne ?',
    a: "Après votre inscription et la validation de votre commande, la formation apparaît dans votre espace personnel. Vous pouvez alors consulter les cours et les ressources incluses selon les modalités indiquées sur la page du programme.",
  },
  {
    q: "Quelle est la différence entre un atelier et une formation en ligne ?",
    a: "Un atelier se déroule à une date et dans un lieu définis, en présence du formateur. Une formation en ligne est accessible depuis votre espace personnel et peut généralement être suivie selon vos disponibilités.",
  },
  {
    q: "Que contient une formation ?",
    a: "Le contenu dépend du programme choisi. Une formation peut comprendre des vidéos, des textes, des exercices, des méditations guidées, des documents téléchargeables ou des sessions en direct. Les éléments inclus sont précisés sur chaque page.",
  },
  {
    q: "Les formations sont-elles certifiantes ?",
    a: "Une formation est présentée comme certifiante uniquement lorsqu'elle mène à une certification officielle clairement identifiée. Une attestation de participation ou de suivi ne constitue pas nécessairement une certification professionnelle.",
  },
  {
    q: "Les formations peuvent-elles remplacer un suivi médical ?",
    a: "Non. Les formations proposées sur FormationSession relèvent du bien-être et du développement personnel. Elles ne permettent pas d'établir un diagnostic et ne remplacent pas les conseils ou les traitements d'un professionnel de santé.",
  },
  {
    q: "Puis-je poser des questions au formateur ?",
    a: "Les possibilités d'échange dépendent de la formation choisie. La page du programme précise si un espace de discussion, une messagerie, une session en direct ou un accompagnement est inclus.",
  },
  {
    q: "Comment devenir formateur ?",
    a: "Consultez la page « Devenir formateur » et présentez votre parcours ainsi que votre projet de formation. Votre candidature sera étudiée avant la publication de votre profil et de vos contenus.",
  },
  {
    q: "Comment demander un remboursement ?",
    a: "Les conditions d'annulation et de remboursement dépendent du type de programme et de la date d'accès aux contenus. Elles sont précisées dans les conditions générales de vente et rappelées avant la validation de la commande.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-border/30 dark:border-border/60"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-base font-medium">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-foreground/50 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="pb-5 text-sm leading-relaxed text-foreground/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Rewrite `cta.tsx`** — "Commencez votre parcours"

```typescript
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { ArrowRight, UserPlus } from 'lucide-react'

export function Cta() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.03] to-primary/[0.08] p-12 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Commencez votre parcours
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/70">
            Vous souhaitez découvrir le pendule, approfondir la radiesthésie, explorer les
            chakras ou développer une nouvelle pratique de bien-être ?
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-foreground/60">
            Consultez les programmes disponibles et choisissez celui qui correspond à votre
            niveau, à vos centres d'intérêt et à votre manière d'apprendre.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 rounded-full px-8 text-base tracking-[0.2em] uppercase" asChild>
              <Link href="/courses">
                Explorer les formations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2 rounded-full" asChild>
              <Link href="/register">
                Créer mon compte
                <UserPlus className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `newsletter.tsx`**

```typescript
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="w-full border-t border-border/30 bg-muted/20 py-16 dark:border-border/60">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h2 className="mb-3 text-2xl font-semibold">
            Recevez les prochaines formations et dates d&apos;ateliers
          </h2>
          <p className="mb-8 text-sm text-foreground/70">
            Inscrivez-vous pour découvrir les nouveaux programmes, les prochaines sessions
            et les articles publiés sur FormationSession.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              required
              className="flex h-10 w-full rounded-full border border-border/50 bg-background px-4 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none dark:border-border/60"
            />
            <Button type="submit" className="shrink-0 rounded-full">
              Je m&apos;inscris
            </Button>
          </form>
          <p className="mt-4 text-xs text-foreground/50">
            En vous inscrivant, vous acceptez de recevoir les actualités de FormationSession.
            Vous pourrez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add resources/js/pages/home/partials/faq.tsx resources/js/pages/home/partials/cta.tsx resources/js/pages/home/partials/newsletter.tsx
git commit -m "feat(home): rewrite FAQ, CTA and add newsletter section"
```

---

### Task 9: Footer Rebranding + Cleanup Old Sections + Env Update

**Files:**
- Modify: `resources/js/pages/home/partials/footer.tsx`
- Delete: `resources/js/pages/home/partials/chiffres.tsx`
- Delete: `resources/js/pages/home/partials/testimonials.tsx`
- Modify: `.env.example`

- [ ] **Step 1: Rewrite `footer.tsx`** — FormationSession footer with all link groups

```typescript
import { Link } from '@inertiajs/react'
import { GraduationCap } from 'lucide-react'

const footerLinks = {
  formations: {
    title: 'Formations',
    links: [
      { href: '/courses', label: 'Toutes les formations' },
      { href: '/courses?theme=radiesthesie', label: 'Radiesthésie et pendule' },
      { href: '/courses?theme=chakras', label: 'Chakras et pratiques énergétiques' },
      { href: '/courses?theme=meditation', label: 'Méditation et relaxation' },
      { href: '/courses?theme=developpement-personnel', label: 'Développement personnel' },
    ],
  },
  platform: {
    title: 'FormationSession',
    links: [
      { href: '/how-it-works', label: 'Comment ça marche' },
      { href: '/about', label: 'À propos' },
      { href: '/become-trainer', label: 'Devenir formateur' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  account: {
    title: 'Mon compte',
    links: [
      { href: '/register', label: 'Créer un compte' },
      { href: '/login', label: 'Se connecter' },
      { href: '/student/dashboard', label: 'Mon espace' },
      { href: '/student/courses', label: 'Mes formations' },
    ],
  },
  legal: {
    title: 'Informations légales',
    links: [
      { href: '/legal/mentions-legales', label: 'Mentions légales' },
      { href: '/legal/cgu', label: "Conditions générales d'utilisation" },
      { href: '/legal/terms', label: 'Conditions générales de vente' },
      { href: '/legal/privacy', label: 'Politique de confidentialité' },
      { href: '/legal/cookies', label: 'Gestion des cookies' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border/30 bg-background dark:border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 flex items-center gap-2 border-t border-border/20 pt-8 dark:border-border/40">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold">FormationSession</span>
          <span className="text-sm text-foreground/50">
            — Des formations en ligne et des ateliers pour découvrir la radiesthésie,
            le pendule, les chakras et différentes pratiques de bien-être.
          </span>
        </div>

        <div className="mb-6 text-center text-sm text-foreground/60">
          <p>contact@formationsession.com — Paris, France</p>
        </div>

        <div className="mb-6 rounded-xl border border-border/20 bg-muted/20 p-4 text-center text-xs leading-relaxed text-foreground/50 dark:border-border/40">
          Les formations et contenus proposés sur FormationSession relèvent du bien-être
          et du développement personnel. Ils ne remplacent pas les conseils, les diagnostics
          ou les traitements d&apos;un professionnel de santé.
        </div>

        <div className="text-center text-xs text-foreground/40">
          &copy; {new Date().getFullYear()} FormationSession. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Delete `chiffres.tsx` and `testimonials.tsx`**

Run: `rm resources/js/pages/home/partials/chiffres.tsx resources/js/pages/home/partials/testimonials.tsx`

- [ ] **Step 3: Update `.env.example`**

Change `APP_NAME=Laravel` to `APP_NAME=FormationSession`
And the corresponding `VITE_APP_NAME="${APP_NAME}"` will inherit.

- [ ] **Step 4: Verify TypeScript compiles** (ensure no dangling imports to deleted files)

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 5: Run full lint check**

Run: `npm run lint`
Expected: PASS

- [ ] **Step 6: Run PHP tests**

Run: `php artisan test --compact`
Expected: PASS

- [ ] **Step 7: Commit**

```bash
git rm resources/js/pages/home/partials/chiffres.tsx resources/js/pages/home/partials/testimonials.tsx
git add resources/js/pages/home/partials/footer.tsx .env.example
git commit -m "feat(home): rebrand footer, cleanup old sections, update env"
```

---

### Task 10: Final Verification + Pint + Lint

- [ ] **Step 1: Run everything**

```bash
vendor/bin/pint --format agent && npm run lint && npx tsc --noEmit && php artisan test --compact
```

Expected: ALL PASS

- [ ] **Step 2: Update `.numtemaflow/gor_state.json`** with completion status

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final verification pass"
```
