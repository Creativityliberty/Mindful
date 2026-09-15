<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Module;
use Illuminate\Database\Seeder;

class ModuleSeeder extends Seeder
{
    public function run(): void
    {
        Module::query()->delete();

        Course::all()->each(function (Course $course): void {
            if ($course->slug === 'initiation-au-lahochi') {
                $modules = [
                    'Découvrir le LaHoChi',
                    'Préparer une séance',
                    'Prière, intention et ouverture',
                    'Auto-pratique',
                    'Pratique sur une autre personne',
                    'Retour après séance',
                    'Pratique à distance',
                    'Éthique et cadre',
                    '21 jours d’auto-soins',
                    'Pratique supervisée avec Louise',
                ];

                foreach ($modules as $index => $title) {
                    Module::create([
                        'course_id' => $course->id,
                        'title' => $title,
                        'duration' => 30,
                        'order' => $index + 1,
                    ]);
                }
            } elseif ($course->slug === 'formation-orisugi-devenir-tisseur-du-fil-dor') {
                $modules = [
                    'Présentation de l’Orisugi',
                    'Le rôle du Tisseur du Fil d’Or',
                    'Les fondements de l’Orisugi',
                    'L’Orisugi en pratique individuelle et en cercle',
                    'L’ouverture d’un atelier Orisugi',
                    'Le rituel de création Orisugi',
                    'Accompagner les participants',
                    'Organiser ses ateliers Orisugi',
                    'Transmettre l’esprit de l’Orisugi',
                    'Les mots de la fin',
                ];

                foreach ($modules as $index => $title) {
                    Module::create([
                        'course_id' => $course->id,
                        'title' => $title,
                        'duration' => 24,
                        'order' => $index + 1,
                    ]);
                }
            } else {
                // Modules standards pour les autres cours
                $modules = [
                    'Introduction et bases',
                    'Pratique et exercices',
                    'Approfondissement et conclusion',
                ];

                foreach ($modules as $index => $title) {
                    Module::create([
                        'course_id' => $course->id,
                        'title' => $title,
                        'duration' => 30,
                        'order' => $index + 1,
                    ]);
                }
            }
        });
    }
}
