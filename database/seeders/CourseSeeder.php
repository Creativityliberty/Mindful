<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\CourseStatus;
use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Récupérer l'utilisatrice Louise (renommée en Fabienne Dizy-Olliveaud)
        $louise = User::where('email', 'louise@formationsession.com')->first();
        if (! $louise) {
            $this->command->error("L'utilisatrice Louise est introuvable. Veuillez d'abord exécuter UsersSeeder.");

            return;
        }

        // 2. Récupérer les catégories
        $chakrasCategory = Category::where('slug', 'chakras')->first();
        $spirituelCategory = Category::where('slug', 'developpement-spirituel')->first();
        $creativityCategory = Category::where('slug', 'creativite-et-bien-etre')->first();

        // 3. Définir le catalogue réel
        $courses = [
            [
                'title' => 'Initiation au LaHoChi',
                'category_id' => $chakrasCategory->id,
                'description' => "Formation LaHoChi en ligne : comment se déroule-t-elle ?\n\nLa formation LaHoChi en ligne se déroule en visioconférence afin de vous permettre d’apprendre dans les meilleures conditions, depuis chez vous et à votre rythme.\n\nDès votre inscription, vous recevez un livret pédagogique au format PDF. Celui-ci présente les origines du LaHoChi, ses principes énergétiques, le protocole complet ainsi que les différentes positions des mains utilisées lors des séances.\n\nNous convenons ensuite ensemble d’un rendez-vous pour votre initiation. Lors de cette rencontre, nous prenons le temps d’étudier le contenu du livret en détail. J’y apporte également mon expérience personnelle, des connaissances complémentaires et des conseils pratiques issus de mon parcours de praticienne.\n\nLa formation comprend :\n- un temps d’enseignement théorique et pratique ;\n- Une séance énergétique à la fin de la formation afin de vous transmettre l'énergie du LaHoChi\n\nAprès la période traditionnelle des 21 jours d’auto-soins, vous réaliserez à votre tour une séance LaHoChi sur moi. Cette étape permet de valider votre pratique, de répondre à vos dernières questions et de renforcer votre confiance dans l’utilisation de cette méthode énergétique.\n\nÀ l’issue de la formation, vous disposerez de tous les outils nécessaires pour pratiquer le LaHoChi sur vous-même et sur vos proches en toute autonomie.",
                'price' => 150.00,
                'duration' => 300, // 5 heures
                'image' => '/assets/images/course_lahochi.png',
                'featured' => true,
                'benefits' => [
                    'Accompagnement individuel en visioconférence avec Louise',
                    'Manuel pédagogique PDF original fourni',
                    'Transmission énergétique à distance incluse',
                    '21 jours d\'auto-soins intégrés',
                    'Séance finale supervisée sur Louise pour validation',
                ],
            ],
            [
                'title' => 'Formation Orisugi — Devenir Tisseur du Fil d’Or',
                'category_id' => $creativityCategory->id,
                'description' => 'Découvrez la méthode originale de création contemplative conçue par Louise. Apprenez à animer des cercles et des ateliers autour du Galet, du Fil d\'Or, des Trames, de l\'Ombre et de la Lisière des Mots.',
                'price' => 99.00, // Tarif d'attente à confirmer
                'duration' => 240, // 4 heures
                'image' => '/assets/images/course_orisugi.png',
                'featured' => true,
                'benefits' => [
                    'Devenir Tisseur du Fil d\'Or et ouvrir des cercles de création',
                    'Apprendre à guider la méditation "Le Fil de Soi"',
                    'Charte éthique et livret de transmission inclus',
                    'Validation par attestation de suivi de formation',
                ],
            ],
            [
                'title' => 'Atelier découverte de la radiesthésie',
                'category_id' => $spirituelCategory->id,
                'description' => 'Un atelier d\'initiation pratique de 3 heures en présentiel pour apprendre à utiliser votre premier pendule, établir vos conventions oui/non et maîtriser les bases des cadrans de radiesthésie.',
                'price' => 50.00,
                'duration' => 180, // 3 heures
                'image' => '/assets/images/course_radiesthesie_decouverte.png',
                'featured' => true,
                'benefits' => [
                    'Séance pratique de 3 heures en présentiel',
                    'Prêt de pendule et de matériel pour la séance',
                    'Cadrans de radiesthésie de base imprimables',
                    'Boissons offertes',
                ],
            ],
            [
                'title' => 'Atelier pendule et radiesthésie',
                'category_id' => $spirituelCategory->id,
                'description' => 'Développez votre sensibilité énergétique lors de cet atelier complet d\'une demi-journée. Apprenez à formuler des questions précises et à utiliser des cadrans complexes en visioconférence ou en présentiel.',
                'price' => 70.00,
                'duration' => 240, // 4 heures
                'image' => '/assets/images/course_pendule_radiesthesie.png',
                'featured' => false,
                'benefits' => [
                    'Atelier approfondi d\'une demi-journée',
                    'Techniques de formulation de questions',
                    'Cadrans complexes de mesure énergétique',
                ],
            ],
            [
                'title' => 'Initiation complète à la radiesthésie',
                'category_id' => $spirituelCategory->id,
                'description' => 'Une formation approfondie pour maîtriser l\'art du pendule, l\'usage des baguettes de sourcier et les premiers repères de la géobiologie (réseaux Hartmann, Curry et ressentis de l\'aura).',
                'price' => 120.00, // Tarif d'attente à confirmer
                'duration' => 360, // 6 heures
                'image' => '/assets/images/course_radiesthesie_complete.png',
                'featured' => false,
                'benefits' => [
                    'Prise en main des baguettes de sourcier',
                    'Introduction aux réseaux Hartmann et Curry',
                    'Techniques de mesure de l\'aura et du taux vibratoire',
                ],
            ],
            [
                'title' => 'Harmonisez vos chakras',
                'category_id' => $chakrasCategory->id,
                'description' => 'Un programme complet en 7 modules pour comprendre, purifier et équilibrer vos sept centres énergétiques principaux à l\'aide de méditations guidées, de la lithothérapie et des huiles essentielles.',
                'price' => 89.00, // Tarif d'attente à confirmer
                'duration' => 420, // 7 heures
                'image' => '/assets/images/course_chakras.png',
                'featured' => false,
                'benefits' => [
                    '7 modules théoriques et pratiques',
                    'Méditations guidées audio incluses',
                    'Fiches pratiques d\'aromathérapie et de lithothérapie',
                ],
            ],
            [
                'title' => 'Réveille ton chakra sacré — Svadhisthana',
                'category_id' => $chakrasCategory->id,
                'description' => 'Libérez votre force créatrice, apprivoisez vos émotions et retrouvez un rapport sain à votre corps physique et votre sensualité. Un parcours de 21 séquences d\'exploration personnelle.',
                'price' => 29.00, // Tarif d'attente à confirmer
                'duration' => 150, // 2.5 heures
                'image' => '/assets/images/course_chakra_racine.png',
                'featured' => false,
                'benefits' => [
                    '21 séquences d\'exercices quotidiens',
                    'Journal d\'introspection et de suivi',
                    'Pratiques douces de yoga et de nutrition adaptées',
                ],
            ],
            [
                'title' => 'Le plexus solaire : pouvoir, confiance et transformation',
                'category_id' => $chakrasCategory->id,
                'description' => 'Retrouvez votre confiance personnelle, votre pouvoir d\'action et votre juste volonté. Un programme complet de 20 jours pour équilibrer Manipura.',
                'price' => 29.00, // Tarif d'attente à confirmer
                'duration' => 150, // 2.5 heures
                'image' => '/assets/images/course_plexus_solaire.png',
                'featured' => false,
                'benefits' => [
                    '20 jours d\'exercices guidés',
                    'Techniques de respiration (Pranayama) dynamisantes',
                    'Méditations de confiance en soi',
                ],
            ],
            [
                'title' => 'Atelier création d’élixirs vibratoires',
                'category_id' => $creativityCategory->id,
                'description' => 'Apprenez à co-créer vos propres élixirs de cristaux et de fleurs lors de cet atelier présentiel d\'une demi-journée. Repartez avec votre élixir personnalisé et le protocole complet de solarisation.',
                'price' => 80.00,
                'duration' => 240, // 4 heures
                'image' => '/assets/images/course_elixirs_vibratoires.png',
                'featured' => false,
                'benefits' => [
                    'Atelier pratique de 4 heures en présentiel',
                    'Flacons et matières premières fournis',
                    'Protocole de solarisation pas à pas',
                    'Boissons offertes',
                ],
            ],
            [
                'title' => 'Initiation à l\'aromathérapie — Soigner en douceur avec les huiles essentielles',
                'category_id' => $creativityCategory->id,
                'description' => "Découvrez le pouvoir des huiles essentielles pour prendre soin de vous naturellement. Dans cette formation d'introduction entièrement gratuite, Louise vous guide pas à pas dans les bases de l'aromathérapie : comprendre les huiles essentielles, les choisir, les utiliser en toute sécurité et créer vos premières synergies bien-être.\n\nUne première étape accessible à tous, en complément parfait de vos pratiques énergétiques.",
                'price' => 0.00,
                'duration' => 70, // ~70 min
                'image' => '/assets/images/course_elixirs_vibratoires.png',
                'featured' => false,
                'benefits' => [
                    'Formation 100% gratuite — accès immédiat sans paiement',
                    'Comprendre ce qu\'est une huile essentielle et comment elle agit',
                    'Les 5 huiles essentielles indispensables pour débuter',
                    'Créer vos premières synergies de bien-être à la maison',
                    'Utiliser l\'aromathérapie en complément de vos pratiques énergétiques',
                ],
            ],
        ];

        foreach ($courses as $c) {
            Course::updateOrCreate(
                ['slug' => Str::slug($c['title'])],
                [
                    'trainer_id' => $louise->id,
                    'category_id' => $c['category_id'],
                    'title' => $c['title'],
                    'description' => $c['description'],
                    'price' => $c['price'],
                    'duration' => $c['duration'],
                    'image' => $c['image'],
                    'featured' => $c['featured'],
                    'benefits' => $c['benefits'],
                    'status' => CourseStatus::Published->value,
                    'published_at' => now(),
                ]
            );
        }
    }
}
