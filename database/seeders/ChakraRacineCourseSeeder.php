<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\CourseStatus;
use App\Enums\LessonType;
use App\Enums\RoleEnum;
use App\Models\Category;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\Module;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

final class ChakraRacineCourseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. S'assurer que le formateur Louise existe
        $trainer = User::firstOrCreate(
            ['email' => 'louise@formationsession.com'],
            [
                'name' => 'Louise',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );
        $trainer->syncRoles([RoleEnum::Trainer->value]);

        // 2. S'assurer que la catégorie Chakras existe
        $category = Category::firstOrCreate(
            ['slug' => 'chakras'],
            [
                'name' => 'Chakras',
                'order' => 1,
            ]
        );

        // 3. Créer ou mettre à jour la formation Chakra Racine
        $course = Course::updateOrCreate(
            ['slug' => 'les-fondations-energetiques-chakra-racine'],
            [
                'trainer_id' => $trainer->id,
                'category_id' => $category->id,
                'title' => 'Les Fondations Énergétiques : Chakra Racine',
                'description' => "Bienvenue dans ce voyage vers vos fondations énergétiques. Ce guide complet vous accompagne dans la découverte et l'harmonisation de votre chakra racine (Muladhara), cette énergie vitale qui ancre votre être tout entier et constitue la base de votre équilibre personnel.\n\nÀ travers ce parcours pédagogique structuré, découvrez pourquoi ce centre énergétique est fondamental, comment repérer ses déséquilibres (sous-actif ou suractif) et maîtriser des outils concrets d'harmonisation : yoga, lithothérapie, aromathérapie, afformations, nutrition et rituels quotidiens d'enracinement.",
                'price' => 47.00,
                'duration' => 150, // 150 minutes (2h30)
                'image' => '/images/courses/chakra-racine.jpg',
                'featured' => true,
                'status' => CourseStatus::Published,
                'published_at' => now(),
                'benefits' => [
                    'Stabilité Émotionnelle : demeurez calme et centré face aux tempêtes de la vie.',
                    'Sérénité dans les Choix : prenez vos décisions avec clarté, assurance et intuition.',
                    'Connexion à la Nature : nourrissez votre vitalité et ressentez le soutien de la Terre.',
                    'Manifestation Matérielle : créez une base matérielle solide et sécurisante.',
                ],
                'objectives' => [
                    'Explorer en profondeur le chakra racine (Muladhara) et son rôle d\'ancrage vital.',
                    'Reconnaître les signes physiques et émotionnels d\'un chakra racine perturbé.',
                    'Maîtriser des outils pratiques au quotidien (yoga, cristaux, huiles essentielles, nutrition).',
                    'Intégrer des rituels puissants de 5 minutes pour stabiliser votre énergie au quotidien.',
                ],
                'prerequisites' => [
                    'Aucun prérequis artistique ou énergétique particulier.',
                    'Accessible à tous ceux qui souhaitent retrouver un ancrage profond et une sécurité intérieure.',
                ],
            ]
        );

        // 4. Définition des 8 modules et de leurs leçons avec durées en minutes (entiers)
        $curriculum = [
            [
                'title' => 'Module 1 : Comprendre le Chakra Racine (Muladhara)',
                'duration' => 25,
                'lessons' => [
                    [
                        'title' => '1.1 Introduction : Bienvenue dans vos fondations énergétiques',
                        'duration' => 8,
                        'is_free' => true,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '1.2 L\'importance fondamentale du chakra racine dans la transformation',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '1.3 Les repères essentiels : Sanskrit, localisation, élément Terre, couleur & mantra LAM',
                        'duration' => 7,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                ],
            ],
            [
                'title' => 'Module 2 : Repérer et Diagnostiquer les Déséquilibres',
                'duration' => 30,
                'lessons' => [
                    [
                        'title' => '2.1 Les signaux d\'alarme : peurs, manque de confiance et instabilité',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '2.2 La balance énergétique : Chakra sous-actif vs Chakra suractif',
                        'duration' => 12,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '2.3 Atelier d\'auto-réflexion guidée : évaluer son ancrage au quotidien',
                        'duration' => 8,
                        'is_free' => false,
                        'type' => LessonType::Pdf,
                    ],
                ],
            ],
            [
                'title' => 'Module 3 : Outils Pratiques d\'Harmonisation (Yoga, Cristaux & Aromathérapie)',
                'duration' => 35,
                'lessons' => [
                    [
                        'title' => '3.1 Postures de yoga d\'enracinement : Tadasana & Malasana pas à pas',
                        'duration' => 15,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '3.2 Cristaux d\'ancrage : Jaspe rouge et hématite comme boucliers énergétiques',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '3.3 Aromathérapie sacrée : Recette d\'onction d\'ancrage (Vétiver, Patchouli, Cèdre)',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                ],
            ],
            [
                'title' => 'Module 4 : Les Afformations de Sécurité',
                'duration' => 20,
                'lessons' => [
                    [
                        'title' => '4.1 L\'essence des afformations : reprogrammer le cerveau vers la confiance',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '4.2 Protocole pratique : votre rituel quotidien d\'afformations',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                ],
            ],
            [
                'title' => 'Module 5 : Alimentation Rouge et Racinaire',
                'duration' => 18,
                'lessons' => [
                    [
                        'title' => '5.1 L\'énergie de la Terre : Légumes-racines et aliments rouges',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '5.2 Préparations réconfortantes et recettes mijotées d\'ancrage',
                        'duration' => 8,
                        'is_free' => false,
                        'type' => LessonType::Pdf,
                    ],
                ],
            ],
            [
                'title' => 'Module 6 : Méditation Guidée d\'Enracinement',
                'duration' => 15,
                'lessons' => [
                    [
                        'title' => '6.1 Méditation audio guidée d\'ancrage profond (10 minutes)',
                        'duration' => 10,
                        'is_free' => false,
                        'type' => LessonType::Audio,
                    ],
                ],
            ],
            [
                'title' => 'Module 7 : Intégration Quotidienne & Rituels d\'Ancrage',
                'duration' => 20,
                'lessons' => [
                    [
                        'title' => '7.1 Gestes simples et bases scientifiques (système nerveux parasympathique & proprioception)',
                        'duration' => 12,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                    [
                        'title' => '7.2 Le rituel d\'ancrage de 5 minutes (matin & soir)',
                        'duration' => 8,
                        'is_free' => false,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    ],
                ],
            ],
            [
                'title' => 'Module 8 : Récapitulatif & Checklist d\'Ancrage',
                'duration' => 15,
                'lessons' => [
                    [
                        'title' => '8.1 Checklist hebdomadaire & Astuce rituelle du dimanche soir',
                        'duration' => 15,
                        'is_free' => false,
                        'type' => LessonType::Pdf,
                    ],
                ],
            ],
        ];

        // 5. Enregistrement des modules et leçons
        foreach ($curriculum as $moduleIndex => $moduleData) {
            $module = Module::updateOrCreate(
                [
                    'course_id' => $course->id,
                    'title' => $moduleData['title'],
                ],
                [
                    'duration' => $moduleData['duration'],
                    'order' => $moduleIndex + 1,
                ]
            );

            foreach ($moduleData['lessons'] as $lessonIndex => $lessonData) {
                Lesson::updateOrCreate(
                    [
                        'module_id' => $module->id,
                        'title' => $lessonData['title'],
                    ],
                    [
                        'duration' => $lessonData['duration'],
                        'is_free' => $lessonData['is_free'],
                        'type' => $lessonData['type'],
                        'video_url' => $lessonData['video_url'] ?? null,
                        'order' => $lessonIndex + 1,
                    ]
                );
            }
        }
    }
}
