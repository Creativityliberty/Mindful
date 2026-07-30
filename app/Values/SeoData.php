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
            canonical: Config::string('seo.url').'/',
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
        $url = rtrim($this->canonical, '/');
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

        $webPage = [
            '@type' => 'WebPage',
            '@id' => "{$url}#webpage",
            'url' => $url,
            'name' => $this->title,
            'description' => $this->description,
            'isPartOf' => ['@id' => "{$url}#website"],
            'about' => ['@id' => "{$url}#organization"],
            'inLanguage' => $locale,
        ];

        if ($this->ogImage) {
            $webPage['primaryImageOfPage'] = [
                '@type' => 'ImageObject',
                'url' => "{$url}{$this->ogImage}",
            ];
        }

        $graph[] = $webPage;

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
