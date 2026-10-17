<?php

declare(strict_types=1);

namespace Tests\Unit\Values;

use App\Values\SeoData;
use Illuminate\Support\Facades\Config;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

final class SeoDataTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        Config::set('seo.url', 'https://formationsession.com');
    }

    #[Test]
    public function it_generates_correct_defaults_for_homepage(): void
    {
        $seo = SeoData::forHomepage();
        $data = $seo->toArray();

        $this->assertSame('Formations bien-être en ligne et ateliers', $data['title']);
        $this->assertStringContainsString('radiesthésie', $data['description']);
        $this->assertSame('https://formationsession.com/', $data['canonical']);
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
        $decoded = json_decode($seo->toJsonLd(), true, 512, JSON_THROW_ON_ERROR);

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
        $json = $seo->toJsonLd();

        $this->assertStringContainsString('"position":1', $json);
        $this->assertStringContainsString('"position":2', $json);
    }
}
