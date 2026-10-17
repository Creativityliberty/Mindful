<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Config;

test('sitemap returns valid XML for canonical public URLs', function () {
    Config::set('app.url', 'https://formationsession.com');

    $response = $this->get(route('sitemap'));
    
    $response->assertOk();
    $response->assertHeader('Content-Type', 'application/xml');
    
    $content = $response->getContent();
    
    // Core structure assertions
    expect($content)->toContain('<?xml version="1.0" encoding="UTF-8"?>')
        ->toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
        ->toContain('<loc>')
        ->toContain('https://formationsession.com/courses');

    expect($content)->not->toContain('hreflang=')
        ->not->toContain('<changefreq>')
        ->not->toContain('<priority>');
});
