<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use App\Enums\CourseStatus;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::all();

        // 1. Trouver ou créer des formateurs pour ces formations
        // Sophie Lefèvre (Mindfulness, Pendule)
        $sophie = User::where('email', 'sophie@mindful.com')->first();
        if (!$sophie) {
            $sophie = User::factory()->create([
                'name' => 'Sophie Lefèvre',
                'email' => 'sophie@mindful.com',
                'password' => bcrypt('password'),
            ]);
            $sophie->syncRoles([RoleEnum::Trainer->value]);
        }

        // Kiran Mehta (Chakras, Lahochi)
        $kiran = User::where('email', 'kiran@mindful.com')->first();
        if (!$kiran) {
            $kiran = User::factory()->create([
                'name' => 'Kiran Mehta',
                'email' => 'kiran@mindful.com',
                'password' => bcrypt('password'),
            ]);
            $kiran->syncRoles([RoleEnum::Trainer->value]);
        }

        // Valérie Renaud (Lumière Intérieure)
        $valerie = User::where('email', 'valerie@mindful.com')->first();
        if (!$valerie) {
            $valerie = User::factory()->create([
                'name' => 'Valérie Renaud',
                'email' => 'valerie@mindful.com',
                'password' => bcrypt('password'),
            ]);
            $valerie->syncRoles([RoleEnum::Trainer->value]);
        }

        // Catégories correspondantes
        $mindfulnessCategory = Category::where('slug', 'mindfulness')->first() ?? $categories->first();
        $chakrasCategory = Category::where('slug', 'chakras')->first() ?? $categories->first();
        $sophrologieCategory = Category::where('slug', 'sophrologie')->first() ?? $categories->first();
        $spirituelCategory = Category::where('slug', 'developpement-spirituel')->first() ?? $categories->first();
        $bienEtreCategory = Category::where('slug', 'nutrition-holiste')->first() ?? $categories->first();

        // 1. Initiation au Pendule & Radiesthésie
        Course::create([
            'trainer_id' => $sophie->id,
            'category_id' => $spirituelCategory->id,
            'title' => 'Initiation au Pendule & Radiesthésie',
            'slug' => Str::slug('Initiation au Pendule & Radiesthésie'),
            'description' => 'Apprenez à utiliser le pendule divinatoire pour purifier vos énergies, harmoniser vos chakras et obtenir des réponses précises à vos questionnements profonds.',
            'price' => 49.00,
            'duration' => 240, // 4 heures
            'image' => '/assets/images/course_pendule.jpg',
            'featured' => true,
            'benefits' => ['Accès à vie', 'Attestation de complétion', 'Cadrans de radiesthésie PDF imprimables', 'Exercices pratiques de connexion'],
            'status' => CourseStatus::Published->value,
            'published_at' => now(),
        ]);

        // 2. Méditation Pleine Conscience
        Course::create([
            'trainer_id' => $sophie->id,
            'category_id' => $mindfulnessCategory->id,
            'title' => 'Méditation Pleine Conscience',
            'slug' => Str::slug('Méditation Pleine Conscience'),
            'description' => 'Un programme complet pour apprendre à méditer, réduire le stress au quotidien et cultiver une présence attentive et bienveillante à chaque instant.',
            'price' => 39.00,
            'duration' => 180, // 3 heures
            'image' => '/assets/images/course_pleine_conscience.jpg',
            'featured' => true,
            'benefits' => ['Accès à vie', 'Attestation de complétion', 'Support audio de méditation guidée', 'Guide de respiration consciente'],
            'status' => CourseStatus::Published->value,
            'published_at' => now(),
        ]);

        // 3. Lumière Intérieure & Soin de Soi
        Course::create([
            'trainer_id' => $valerie->id,
            'category_id' => $bienEtreCategory->id,
            'title' => 'Lumière Intérieure & Soin de Soi',
            'slug' => Str::slug('Lumière Intérieure & Soin de Soi'),
            'description' => 'Reconnectez-vous à votre essence profonde, apprenez à vous libérer de vos peurs et rayonnez votre véritable lumière au quotidien.',
            'price' => 45.00,
            'duration' => 200, // 3h20
            'image' => '/assets/images/course_lumiere_interieure.jpg',
            'featured' => true,
            'benefits' => ['Accès à vie', 'Fiches d\'auto-analyse', 'Méditations de visualisation positive'],
            'status' => CourseStatus::Published->value,
            'published_at' => now(),
        ]);

        // 4. Harmonisation du Chakra Racine
        Course::create([
            'trainer_id' => $kiran->id,
            'category_id' => $chakrasCategory->id,
            'title' => 'Harmonisation du Chakra Racine',
            'slug' => Str::slug('Harmonisation du Chakra Racine'),
            'description' => 'Ancrez-vous et retrouvez sécurité et confiance. Un programme complet pour équilibrer Muladhara, votre premier centre énergétique.',
            'price' => 35.00,
            'duration' => 150, // 2h30
            'image' => '/assets/images/course_chakra_racine.jpg',
            'featured' => true,
            'benefits' => ['Accès à vie', 'Postures d\'ancrage détaillées', 'Méditations guidées d\'enracinement'],
            'status' => CourseStatus::Published->value,
            'published_at' => now(),
        ]);

        // 5. Initiation au Soin Énergétique Lahochi
        Course::create([
            'trainer_id' => $kiran->id,
            'category_id' => $chakrasCategory->id,
            'title' => 'Soin Énergétique Lahochi',
            'slug' => Str::slug('Soin Énergétique Lahochi'),
            'description' => 'Découvrez le Lahochi, une fréquence élevée de guérison par les mains. Apprenez à canaliser et transmettre l\'énergie pour vous-même et pour autrui.',
            'price' => 59.00,
            'duration' => 300, // 5 heures
            'image' => '/assets/images/course_lahochi.jpg',
            'featured' => true,
            'benefits' => ['Accès à vie', 'Livret de formation complet PDF', 'Vidéos de démonstration des positions de mains'],
            'status' => CourseStatus::Published->value,
            'published_at' => now(),
        ]);
    }
}
