<?php

declare(strict_types=1);

namespace App\Http\Controllers\Public\Courses;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FreeEnrollController extends Controller
{
    public function store(Request $request, int $courseId): RedirectResponse
    {
        $course = Course::published()->findOrFail($courseId);

        // Sécurité : ne fonctionne que pour les cours gratuits
        if ((float) $course->price > 0) {
            return redirect()->route('courses.show', $course->id)
                ->with('error', 'Ce cours n\'est pas gratuit. Veuillez procéder au paiement.');
        }

        $user = $request->user();

        // Inscription directe sans paiement
        Enrollment::firstOrCreate([
            'user_id' => $user->id,
            'course_id' => $course->id,
        ]);

        return redirect()->route('student.courses.show', $course->id)
            ->with('success', 'Bienvenue ! Vous êtes maintenant inscrit à cette formation gratuite.');
    }
}
