<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

final class UsersSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            [
                'roles' => [RoleEnum::Admin],
                'name' => 'Admin',
                'email' => 'admin@pmindfull.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => null,
            ],
            [
                'roles' => [RoleEnum::Trainer],
                'name' => 'Trainer',
                'email' => 'trainer@pmindfull.com',
                'trainer_title' => 'Formateur Démo',
                'trainer_bio' => 'Profil de démonstration pour les tests.',
                'trainer_avatar' => '/assets/images/trainer_marie.jpg',
            ],
            [
                'roles' => [RoleEnum::Student],
                'name' => 'Student',
                'email' => 'student@pmindfull.com',
                'trainer_title' => null,
                'trainer_bio' => null,
                'trainer_avatar' => null,
            ],
            [
                'roles' => [RoleEnum::Admin],
                'name' => 'Lionel Numtema',
                'email' => 'numtemalionel@gmail.com',
                'trainer_title' => 'Co-fondateur & Formateur IA',
                'trainer_bio' => 'Spécialiste de la transition numérique et de l\'accompagnement créatif.',
                'trainer_avatar' => '/assets/images/trainer_kiran.jpg',
            ],
            [
                'roles' => [RoleEnum::Admin, RoleEnum::Trainer],
                'name' => 'Fabie',
                'email' => 'fabieolliveaud@gmail.com',
                'trainer_title' => 'Praticienne & Enseignante Holistique',
                'trainer_bio' => 'Énergéticienne passionnée, formatrice en LaHoChi, Orisugi, Radiesthésie et Harmonisation des Chakras.',
                'trainer_avatar' => '/assets/images/trainer_valerie.jpg',
            ],
            [
                'roles' => [RoleEnum::Trainer, RoleEnum::Admin],
                'name' => 'Louise',
                'email' => 'louise@formationsession.com',
                'trainer_title' => 'Praticienne Enseignante Holistique',
                'trainer_bio' => 'Créatrice de la méthode Orisugi et enseignante en soins énergétiques LaHoChi. Accompagnement individuel et collectif vers le mieux-être.',
                'trainer_avatar' => '/assets/images/trainer_sophie.jpg',
            ],
        ];

        foreach ($users as $entry) {
            $user = User::firstOrCreate(
                ['email' => $entry['email']],
                [
                    'name' => $entry['name'],
                    'password' => Hash::make('password'),
                    'email_verified_at' => now(),
                    'trainer_title' => $entry['trainer_title'],
                    'trainer_bio' => $entry['trainer_bio'],
                    'trainer_avatar' => $entry['trainer_avatar'],
                ],
            );

            // Mettre à jour les champs s'ils ont changé
            $user->update([
                'name' => $entry['name'],
                'trainer_title' => $entry['trainer_title'],
                'trainer_bio' => $entry['trainer_bio'],
                'trainer_avatar' => $entry['trainer_avatar'],
            ]);

            $roles = array_map(fn ($role) => $role->value, $entry['roles']);
            $user->syncRoles($roles);
        }
    }
}
