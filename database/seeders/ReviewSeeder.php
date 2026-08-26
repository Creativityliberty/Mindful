<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Review;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ReviewSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Créer des utilisateurs étudiants pour laisser des avis
        $studentsData = [
            [
                'name' => 'Marie Dubois',
                'email' => 'marie.dubois@test.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => '/assets/images/trainer_marie.jpg', // Avatar de test
            ],
            [
                'name' => 'Jean Dupuis',
                'email' => 'jean.dupuis@test.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => null,
            ],
            [
                'name' => 'Pierre Martin',
                'email' => 'pierre.martin@test.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => null,
            ],
            [
                'name' => 'Sandrine Bernard',
                'email' => 'sandrine.bernard@test.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => null,
            ],
            [
                'name' => 'Alain Laurent',
                'email' => 'alain.laurent@test.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => null,
            ],
        ];

        $students = [];
        foreach ($studentsData as $data) {
            $user = User::firstOrCreate(
                ['email' => $data['email']],
                [
                    'name' => $data['name'],
                    'password' => Hash::make('password'),
                    'email_verified_at' => now(),
                    'trainer_avatar' => $data['trainer_avatar'],
                ]
            );
            $user->syncRoles([RoleEnum::Student->value]);
            $students[] = $user;
        }

        // 2. Définir des avis réalistes
        $reviewsByCourse = [
            'initiation-au-lahochi' => [
                [
                    'rating' => 5,
                    'comment' => 'Une expérience extraordinaire. La transmission avec Louise est très puissante, et l\'auto-traitement de 21 jours a profondément changé mon niveau d\'énergie. Je me sens beaucoup plus sereine au quotidien.',
                ],
                [
                    'rating' => 5,
                    'comment' => 'Le manuel est très complet et clair. L\'accompagnement en visioconférence avec Louise m\'a permis de me sentir en sécurité et de bien comprendre toutes les positions des mains.',
                ],
                [
                    'rating' => 4,
                    'comment' => 'Très belle initiation. Louise est extrêmement bienveillante et à l\'écoute. Le suivi sur les 21 jours est un vrai plus.',
                ],
            ],
            'formation-orisugi-devenir-tisseur-du-fil-dor' => [
                [
                    'rating' => 5,
                    'comment' => 'L\'Orisugi est une magnifique découverte. Cette création contemplative m\'aide à me recentrer au quotidien. Le concept du Fil d\'Or et des trames est magique.',
                ],
                [
                    'rating' => 5,
                    'comment' => 'Une méthode douce et profonde. Les ateliers collectifs de Tisseurs de fil d\'Or que j\'anime désormais dans mon cabinet de thérapeute plaisent énormément à mes consultants.',
                ],
            ],
            'atelier-decouverte-de-la-radiesthesie' => [
                [
                    'rating' => 5,
                    'comment' => 'Excellent atelier découverte. J\'ai enfin compris comment utiliser mon pendule et comment poser les bonnes questions pour obtenir des réponses fiables. Merci Louise !',
                ],
                [
                    'rating' => 4,
                    'comment' => 'Idéal pour débuter. Les fiches de cadrans fournies sont très pratiques pour s\'entraîner à la maison.',
                ],
            ],
            'initiation-complete-a-la-radiesthesie' => [
                [
                    'rating' => 5,
                    'comment' => 'Formation complète et très pédagogique. Les exercices avec les baguettes de sourcier et l\'introduction à la géobiologie m\'ont passionnée.',
                ],
            ],
        ];

        // 3. Associer les avis et les inscriptions aux cours
        foreach ($reviewsByCourse as $slug => $reviews) {
            $course = Course::where('slug', $slug)->first();
            if (! $course) {
                continue;
            }

            foreach ($reviews as $index => $rData) {
                // Choisir un étudiant différent pour chaque avis
                $student = $students[$index % count($students)];

                // Créer l'inscription (Enrollment) si elle n'existe pas
                Enrollment::firstOrCreate([
                    'user_id' => $student->id,
                    'course_id' => $course->id,
                ], [
                    'enrolled_at' => now()->subDays(rand(5, 30)),
                ]);

                // Créer l'avis (Review)
                Review::updateOrCreate(
                    [
                        'course_id' => $course->id,
                        'user_id' => $student->id,
                    ],
                    [
                        'rating' => $rData['rating'],
                        'comment' => $rData['comment'],
                    ]
                );
            }

            // Ajouter quelques inscriptions supplémentaires pour le compteur d'étudiants
            for ($i = count($reviews); $i < count($students) + 3; $i++) {
                $extraStudent = $students[($i + rand(0, 10)) % count($students)];
                Enrollment::firstOrCreate([
                    'user_id' => $extraStudent->id,
                    'course_id' => $course->id,
                ], [
                    'enrolled_at' => now()->subDays(rand(1, 40)),
                ]);
            }
        }
    }
}
