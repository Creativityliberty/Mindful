<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\LessonType;
use App\Models\Lesson;
use App\Models\Module;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    public function run(): void
    {
        Lesson::query()->delete();

        Module::with('course')->get()->each(function (Module $module): void {
            $courseSlug = $module->course->slug;

            if ($courseSlug === 'initiation-au-lahochi') {
                $lessons = $this->getLahochiLessons($module->title);
            } elseif ($courseSlug === 'formation-orisugi-devenir-tisseur-du-fil-dor') {
                $lessons = $this->getOrisugiLessons($module->title);
            } else {
                // Leçons génériques pour les autres cours
                $lessons = [
                    [
                        'title' => 'Introduction et bases théoriques',
                        'duration' => 15,
                        'type' => LessonType::Pdf,
                        'pdf_url' => '/assets/docs/intro.pdf',
                    ],
                    [
                        'title' => 'Pratique guidée et exercices',
                        'duration' => 15,
                        'type' => LessonType::VideoUrl,
                        'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    ],
                ];
            }

            foreach ($lessons as $index => $l) {
                Lesson::create([
                    'module_id' => $module->id,
                    'title' => $l['title'],
                    'duration' => $l['duration'],
                    'type' => $l['type']->value,
                    'video_url' => $l['video_url'] ?? null,
                    'audio_url' => $l['audio_url'] ?? null,
                    'pdf_url' => $l['pdf_url'] ?? null,
                    'is_free' => $index === 0, // La première leçon est gratuite
                    'order' => $index + 1,
                ]);
            }
        });
    }

    private function getLahochiLessons(string $moduleTitle): array
    {
        return match ($moduleTitle) {
            'Découvrir le LaHoChi' => [
                ['title' => 'Message d\'introduction d\'Elisabeth Chandler', 'duration' => 10, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'La signification du mot LaHoChi et la structure énergétique', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Les 15 bienfaits multidimensionnels sur le corps et l\'esprit', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Préparer une séance' => [
                ['title' => 'Aménager l\'espace sacré de soin (Musique, silence, table de massage)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'L\'attitude du canal : ne jamais forcer le flux d\'énergie', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Prière, intention et ouverture' => [
                ['title' => 'La prière officielle du Maître LaHoChi et sa variante laïque', 'duration' => 10, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'L\'importance du sceau de protection et les invocations clés', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Auto-pratique' => [
                ['title' => 'Guide pratique de l\'auto-traitement quotidien (20 à 40 min)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Les 4 positions d\'auto-traitement de mains (Tête, Épaules, Hanches, Cœur)', 'duration' => 25, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Pratique sur une autre personne' => [
                ['title' => 'Déroulé et règles d\'une session courante sur autrui', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Les 5 positions de mains détaillées (de la Tête au Cœur)', 'duration' => 30, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Le Bâton de Feu (Position finale d\'unification)', 'duration' => 10, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Retour après séance' => [
                ['title' => 'La technique de réancrage : le compte à rebours de 1 à 5', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Recommandations post-séance et réactivation sur 3 jours', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Pratique à distance' => [
                ['title' => 'Protocoles de soin à distance (Photos, peluches et Moi Supérieur)', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'La méthode par intérim (Remplacement)', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Éthique et cadre' => [
                ['title' => 'Le respect du libre-arbitre et du karma (Demande d\'autorisation)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Déconnexion et coupure des liens éthériques (Prière, geste tranchant, flamme)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            '21 jours d’auto-soins' => [
                ['title' => 'Réaliser son nettoyage cellulaire profond de 21 jours après initiation', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Astuces pratiques (Musique avec gongs, conventions avec sa guidance)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
            ],
            'Pratique supervisée avec Louise' => [
                ['title' => 'Le protocole complet d\'initiation et de transmission', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Le LaHoChi de la 13ème octave (Linda Dillon) et l\'évolution naturelle', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/lahochi_manuel.pdf'],
                ['title' => 'Préparer votre séance de validation en visioconférence avec Louise', 'duration' => 60, 'type' => LessonType::VideoUrl, 'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ'],
            ],
            default => [
                ['title' => 'Introduction', 'duration' => 15, 'type' => LessonType::Pdf],
            ],
        };
    }

    private function getOrisugiLessons(string $moduleTitle): array
    {
        return match ($moduleTitle) {
            'Présentation de l’Orisugi' => [
                ['title' => 'La naissance de la méthode', 'duration' => 10, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'L’intention de création', 'duration' => 10, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'La philosophie générale', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Ce que l’Orisugi n’est pas', 'duration' => 10, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Le rôle du Tisseur du Fil d’Or' => [
                ['title' => 'Sa posture', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Sa mission', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Sa charte de transmission', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Le Regard du Tisseur (posture d\'ouverture)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Les fondements de l’Orisugi' => [
                ['title' => 'Le Galet', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Le Fil d’Or', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Les Trames', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'L’Ombre', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'La Lisière des Mots', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'L’Orisugi en pratique individuelle et en cercle' => [
                ['title' => 'L’Orisugi en Séance Individuelle : Accompagner le Consultant', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'L’Orisugi en Cercle Éphémère ou Communautaire', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'L’ouverture d’un atelier Orisugi' => [
                ['title' => 'La préparation de l’environnement', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'L’accueil des participants', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Le passage entre le quotidien et la création', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'La méditation d’ancrage « Le Fil de Soi »', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Le rituel de création Orisugi' => [
                ['title' => 'Façonner son Galet', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Révéler le Fil d\'Or', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Tisser les Trames (Le Répertoire Visuel des Motifs)', 'duration' => 25, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Donner du relief avec l\'Ombre', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'La Lisière des Mots (Le Rendu Final Attendu)', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Contempler le rendu', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Le Regard du Tisseur (l\'importance du silence)', 'duration' => 15, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Accompagner les participants' => [
                ['title' => 'La posture pendant la création', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Les mots à utiliser (et ceux à éviter)', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'L’accueil des ressentis (Larmes et Émotions)', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Organiser ses ateliers Orisugi' => [
                ['title' => 'Le modèle économique et la tarification', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Le matériel nécessaire (Le Kit de l\'Animateur)', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
                ['title' => 'Les formats possibles et la durée', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Transmettre l’esprit de l’Orisugi' => [
                ['title' => 'Protection et Confidentialité de la Méthode', 'duration' => 20, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            'Les mots de la fin' => [
                ['title' => 'Intégration et préparation du premier atelier', 'duration' => 30, 'type' => LessonType::Pdf, 'pdf_url' => '/assets/docs/orisugi_manuel.pdf'],
            ],
            default => [
                ['title' => 'Introduction', 'duration' => 15, 'type' => LessonType::Pdf],
            ],
        };
    }
}
