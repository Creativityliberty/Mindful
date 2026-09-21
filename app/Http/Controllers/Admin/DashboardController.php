<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Carbon;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $monthStart = Carbon::now()->startOfMonth();
        $trainerStats = User::trainers()
            ->withCount([
                'courses',
                'courses as published_courses_count' => fn ($q) => $q->where('status', 'published'),
            ])
            ->get()
            ->map(fn (User $t) => [
                'id'             => $t->id,
                'name'           => $t->name,
                'email'          => $t->email,
                'coursesCount'   => $t->courses_count,
                'publishedCount' => $t->published_courses_count,
                'studentsCount'  => Enrollment::whereIn('course_id', $t->courses()->pluck('id'))
                    ->distinct('user_id')
                    ->count('user_id'),
            ]);

        return Inertia::render('admin/dashboard', [
            'stats' => [
                'totalCourses'     => Course::count(),
                'totalTrainers'    => User::trainers()->count(),
                'totalStudents'    => User::students()->count(),
                'totalEnrollments' => Enrollment::count(),
                'publishedCourses' => Course::where('status', 'published')->count(),
                'draftCourses' => Course::where('status', 'draft')->count(),
                'newEnrollmentsThisMonth' => Enrollment::where('enrolled_at', '>=', $monthStart)->count(),
                'newStudentsThisMonth' => User::students()->where('created_at', '>=', $monthStart)->count(),
            ],
            'trainerStats' => $trainerStats,
            'recentActivity' => [
                'coursesThisMonth' => Course::where('created_at', '>=', $monthStart)->count(),
                'enrollmentsThisMonth' => Enrollment::where('enrolled_at', '>=', $monthStart)->count(),
            ],
        ]);
    }
}
