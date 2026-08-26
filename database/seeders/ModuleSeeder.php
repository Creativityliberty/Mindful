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
                    '1. Présentation de l’Orisugi',
                    '2. Le rôle du Tisseur du Fil d’Or',
                    '3. Les fondements de l’Orisugi',
                    '4. L’Orisugi en pratique individuelle et en cercle',
                    '5. L’ouverture d’un atelier Orisugi',
                    '6. Le rituel de création Orisugi',
                    '7. Accompagner les participants',
                    '8. Organiser ses ateliers Orisugi',
                    '9. Transmettre l’esprit de l’Orisugi',
                    '10. Les mots de la fin',
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
                    'Module 1 : Introduction et bases',
                    'Module 2 : Pratique et exercices',
                    'Module 3 : Approfondissement et conclusion',
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
