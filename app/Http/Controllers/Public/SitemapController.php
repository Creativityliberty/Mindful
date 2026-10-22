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
        $baseUrl = rtrim(config('app.url', 'https://formationsession.com'), '/');

        // Static routes with priority and change frequency
        $staticRoutes = [
            ['path' => '/', 'priority' => '1.0', 'changefreq' => 'weekly'],
            ['path' => '/courses', 'priority' => '0.9', 'changefreq' => 'daily'],
            ['path' => '/become-trainer', 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['path' => '/blog', 'priority' => '0.8', 'changefreq' => 'daily'],
            ['path' => '/comment-ca-marche', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['path' => '/tarifs', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['path' => '/about', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['path' => '/guides', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['path' => '/glossaire', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['path' => '/contact', 'priority' => '0.6', 'changefreq' => 'monthly'],
            // Legal pages
            ['path' => '/legal/cgu', 'priority' => '0.3', 'changefreq' => 'yearly'],
            ['path' => '/legal/confidentialite', 'priority' => '0.3', 'changefreq' => 'yearly'],
            ['path' => '/legal/cookies', 'priority' => '0.3', 'changefreq' => 'yearly'],
            ['path' => '/legal/mentions-legales', 'priority' => '0.3', 'changefreq' => 'yearly'],
        ];

        // Real active blog posts from blog-data.ts
        $blogPosts = [
            ['slug' => 'guide-complet-lithotherapie-mineraux-chakras', 'lastmod' => '2026-10-15', 'priority' => '0.8'],
            ['slug' => 'comment-choisir-premier-pendule-divinatoire', 'lastmod' => '2026-10-10', 'priority' => '0.8'],
            ['slug' => 'initiation-lahochi-frequence-soin-energetique', 'lastmod' => '2026-10-05', 'priority' => '0.8'],
            ['slug' => 'benefices-prouves-meditation-pleine-conscience', 'lastmod' => '2026-09-28', 'priority' => '0.7'],
            ['slug' => 'comment-equilibrer-chakra-racine', 'lastmod' => '2026-09-20', 'priority' => '0.7'],
        ];

        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ';
        $xml .= 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';

        // 1. Static pages
        foreach ($staticRoutes as $route) {
            $xml .= '<url>';
            $xml .= '<loc>'.htmlspecialchars($baseUrl.$route['path']).'</loc>';
            $xml .= '<changefreq>'.$route['changefreq'].'</changefreq>';
            $xml .= '<priority>'.$route['priority'].'</priority>';
            $xml .= '</url>';
        }

        // 2. Published courses
        $courses = Course::published()->get();
        foreach ($courses as $course) {
            $xml .= '<url>';
            $xml .= '<loc>'.htmlspecialchars($baseUrl.'/courses/'.$course->slug).'</loc>';
            if ($course->updated_at) {
                $xml .= '<lastmod>'.$course->updated_at->format('Y-m-d').'</lastmod>';
            }
            $xml .= '<changefreq>weekly</changefreq>';
            $xml .= '<priority>0.9</priority>';

            if (!empty($course->image)) {
                $imageUrl = str_starts_with($course->image, 'http') ? $course->image : $baseUrl.$course->image;
                $xml .= '<image:image>';
                $xml .= '<image:loc>'.htmlspecialchars($imageUrl).'</image:loc>';
                $xml .= '<image:title>'.htmlspecialchars($course->title).'</image:title>';
                $xml .= '</image:image>';
            }

            $xml .= '</url>';
        }

        // 3. Blog posts
        foreach ($blogPosts as $post) {
            $xml .= '<url>';
            $xml .= '<loc>'.htmlspecialchars($baseUrl.'/blog/'.$post['slug']).'</loc>';
            $xml .= '<lastmod>'.$post['lastmod'].'</lastmod>';
            $xml .= '<changefreq>monthly</changefreq>';
            $xml .= '<priority>'.$post['priority'].'</priority>';
            $xml .= '</url>';
        }

        $xml .= '</urlset>';

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=utf-8',
            'Cache-Control' => 'public, max-age=3600',
        ]);
    }
}
