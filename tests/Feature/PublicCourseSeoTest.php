<?php

use App\Http\Middleware\CanonicalizePublicUrl;
use App\Models\Course;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

test('numeric course URLs permanently redirect to their canonical slug', function () {
    $course = Course::factory()->published()->create([
        'slug' => 'formation-seo-canonique',
    ]);

    $this->get("/courses/{$course->id}")
        ->assertStatus(301)
        ->assertRedirect(route('courses.show', $course->slug));
});

test('public URLs with a trailing slash permanently redirect to the canonical URL', function () {
    $course = Course::factory()->published()->create([
        'slug' => 'formation-sans-slash',
    ]);

    $request = Request::create("/courses/{$course->slug}/");
    $response = app(CanonicalizePublicUrl::class)->handle($request, fn () => new Response());

    expect($response->getStatusCode())->toBe(301)
        ->and($response->headers->get('Location'))->toBe(route('courses.show', $course->slug));
});
