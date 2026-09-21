<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class CourseOverviewController extends Controller
{
    public function show(Request $request, Course $course): Response
    {
        Gate::authorize('update', $course);
        $scope = $request->routeIs('admin.*') ? 'admin' : 'trainer';

        $course->load(['trainer:id,name,email', 'category:id,name'])
            ->loadCount(['modules', 'enrollments']);

        $students = $course->enrollments()
            ->with('user:id,name,email')
            ->orderByDesc('enrolled_at')
            ->paginate(15)
            ->through(fn ($enrollment) => [
                'id' => $enrollment->id,
                'name' => $enrollment->user?->name ?? 'Compte supprimé',
                'email' => $enrollment->user?->email,
                'enrolledAt' => $enrollment->enrolled_at?->format('d/m/Y'),
            ]);

        return Inertia::render('courses/overview', [
            'course' => [
                'id' => $course->id,
                'title' => $course->title,
                'status' => $course->status->value,
                'price' => (float) $course->price,
                'trainer' => $course->trainer?->name,
                'category' => $course->category?->name,
                'modulesCount' => $course->modules_count,
                'enrollmentsCount' => $course->enrollments_count,
            ],
            'students' => $students,
            'scope' => $scope,
            'courseNavigation' => Course::query()
                ->when($scope === 'trainer', fn ($query) => $query->where('trainer_id', $request->user()->id))
                ->with('trainer:id,name')
                ->orderBy('title')
                ->get(['id', 'title', 'trainer_id'])
                ->map(fn (Course $item) => [
                    'id' => $item->id,
                    'title' => $item->title,
                    'trainer' => $item->trainer?->name,
                ]),
        ]);
    }
}
