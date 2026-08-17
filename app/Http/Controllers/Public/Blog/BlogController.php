<?php

declare(strict_types=1);

namespace App\Http\Controllers\Public\Blog;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('home/blog/index');
    }

    public function show(string $slug): Response
    {
        return Inertia::render('home/blog/show', [
            'slug' => $slug,
        ]);
    }
}
