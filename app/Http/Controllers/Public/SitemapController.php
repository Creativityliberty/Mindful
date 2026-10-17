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
            '/courses',
        ];

        foreach ($staticRoutes as $route) {
            $urls[] = [
                'loc' => $baseUrl.$route,
            ];
        }

        // Dynamic courses
        $courses = Course::published()->get();
        foreach ($courses as $course) {
            $urls[] = [
                'loc' => $baseUrl.'/courses/'.$course->slug,
                'lastmod' => $course->updated_at->format('Y-m-d'),
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
            ];
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        foreach ($urls as $url) {
            $xml .= '<url>';
            $xml .= '<loc>'.htmlspecialchars($url['loc']).'</loc>';
            if (isset($url['lastmod'])) {
                $xml .= '<lastmod>'.$url['lastmod'].'</lastmod>';
            }
            $xml .= '</url>';
        }

        $xml .= '</urlset>';

        return response($xml, 200, [
            'Content-Type' => 'application/xml',
            'Cache-Control' => 'public, max-age=3600',
        ]);
    }
}
