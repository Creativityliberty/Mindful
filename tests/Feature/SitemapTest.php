<?php

declare(strict_types=1);

test('sitemap returns valid xml content with hreflang alternates', function () {
    $response = $this->get(route('sitemap'));
    
    $response->assertOk();
    $response->assertHeader('Content-Type', 'application/xml');
    
    $content = $response->getContent();
    
    // Core structure assertions
    expect($content)->toContain('<?xml version="1.0" encoding="UTF-8"?>')
        ->toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
        ->toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml">')
        ->toContain('<loc>')
        ->toContain('<priority>')
        ->toContain('<changefreq>');
        
    // Alternates assertions
    expect($content)->toContain('hreflang="fr"')
        ->toContain('hreflang="en"')
        ->toContain('hreflang="x-default"');
});
