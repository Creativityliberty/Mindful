<?php

declare(strict_types=1);

namespace App\Http\Controllers\Student\Courses;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Review;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request, Course $course): RedirectResponse
    {
        $user = $request->user();

        // 1. S'assurer que l'étudiant est bien inscrit à ce cours
        $enrolled = Enrollment::where('user_id', $user->id)
            ->where('course_id', $course->id)
            ->exists();

        abort_unless($enrolled, 403);

        // 2. Valider l'évaluation
        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        // 3. Créer ou mettre à jour l'avis
        Review::updateOrCreate(
            [
                'user_id' => $user->id,
                'course_id' => $course->id,
            ],
            [
                'rating' => $validated['rating'],
                'comment' => $validated['comment'] ?? null,
            ]
        );

        return back()->with('success', 'Votre avis a été enregistré avec succès !');
    }
}
