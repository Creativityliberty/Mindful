<?php

declare(strict_types=1);

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Response;

final class SitemapController extends Controller
{
    public function __invoke(): Response
    {
        $baseUrl = config('app.url', 'https://formationsession.com');
        $urls = [];

        // Static routes
        $staticRoutes = [
            '/',
            '/about',
            '/become-trainer',
            '/comment-ca-marche',
            '/tarifs',
            '/guides',
            '/glossaire',
            '/contact',
            '/blog',
        ];

        foreach ($staticRoutes as $route) {
            $urls[] = [
                'loc' => $baseUrl.$route,
                'lastmod' => date('Y-m-d'),
                'changefreq' => 'weekly',
                'priority' => $route === '/' ? '1.0' : '0.8',
            ];
        }

        // Dynamic courses
        $courses = Course::published()->get();
        foreach ($courses as $course) {
            $urls[] = [
                'loc' => $baseUrl.'/courses/'.$course->slug,
                'lastmod' => $course->updated_at->format('Y-m-d'),
                'changefreq' => 'weekly',
                'priority' => '0.9',
            ];
        }

        // Dynamic static blog posts
        $blogSlugs = [
            'comment-choisir-premier-pendule-divinatoire',
            'benefices-prouves-meditation-pleine-conscience',
            'comment-equilibrer-chakra-racine',
            'yoga-du-matin-sequence-15-minutes',
            'sophrologie-et-burnout-reconstruction',
            'alimentation-et-conscience-energie-spirituelle',
            'meditation-vipassana-10-jours-silence',
            '5-micro-pratiques-pleine-conscience',
            'bols-tibetains-equilibrer-chakras',
        ];

        foreach ($blogSlugs as $slug) {
            $urls[] = [
                'loc' => $baseUrl.'/blog/'.$slug,
                'lastmod' => date('Y-m-d'),
                'changefreq' => 'monthly',
                'priority' => '0.7',
            ];
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
        $xml .= 'xmlns:xhtml="http://www.w3.org/1999/xhtml">';

        foreach ($urls as $url) {
            $xml .= '<url>';
            $xml .= '<loc>'.htmlspecialchars($url['loc']).'</loc>';
            $xml .= '<lastmod>'.$url['lastmod'].'</lastmod>';
            $xml .= '<changefreq>'.$url['changefreq'].'</changefreq>';
            $xml .= '<priority>'.$url['priority'].'</priority>';
            // Add multilingual alternates for search engines
            $xml .= '<xhtml:link rel="alternate" hreflang="fr" href="'.htmlspecialchars($url['loc']).'?lng=fr"/>';
            $xml .= '<xhtml:link rel="alternate" hreflang="en" href="'.htmlspecialchars($url['loc']).'?lng=en"/>';
            $xml .= '<xhtml:link rel="alternate" hreflang="x-default" href="'.htmlspecialchars($url['loc']).'"/>';
            $xml .= '</url>';
        }

        $xml .= '</urlset>';

        return response($xml, 200, [
            'Content-Type' => 'application/xml',
            'Cache-Control' => 'public, max-age=3600',
        ]);
    }
}
