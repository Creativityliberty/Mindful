<?php

declare(strict_types=1);

namespace App\Repositories\Public\Courses;

use App\Models\Course;
use Illuminate\Database\Eloquent\Collection;

class EloquentCourseRepository implements CourseRepository
{
    public function allPublished(): Collection
    {
        return Course::query()
            ->published()
            ->with(['category', 'trainer'])
            ->withCount('modules')
            ->orderByDesc('featured')
            ->orderBy('title')
            ->get();
    }

    public function allPublishedWithModules(): Collection
    {
        return Course::query()
            ->published()
            ->with(['category', 'trainer', 'modules.lessons'])
            ->withCount('modules')
            ->orderByDesc('featured')
            ->orderBy('title')
            ->get();
    }

    public function findPublishedWithRelations(string|int $identifier): Course
    {
        return Course::query()
            ->published()
            ->with(['category', 'trainer', 'modules.lessons', 'reviews.user'])
            ->withCount('modules')
            ->where(function ($query) use ($identifier) {
                if (is_numeric($identifier)) {
                    $query->where('id', (int) $identifier)->orWhere('slug', (string) $identifier);
                } else {
                    $query->where('slug', $identifier);
                }
            })
            ->firstOrFail();
    }

    public function featuredPublished(int $limit = 4): Collection
    {
        return Course::query()
            ->published()
            ->with(['category', 'trainer'])
            ->withCount('modules')
            ->orderByDesc('featured')
            ->limit($limit)
            ->get();
    }
}
