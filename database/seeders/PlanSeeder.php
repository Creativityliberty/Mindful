<?php

namespace Database\Seeders;

use App\Enums\PlanCurrencyEnum;
use App\Enums\PlanIntervalEnum;
use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            // Plans Mensuels
            [
                'name' => 'Formule Solo',
                'slug' => 'formule-solo-mensuel',
                'price' => 1500, // 15,00 €
                'currency' => PlanCurrencyEnum::Eur,
                'interval' => PlanIntervalEnum::Month,
                'features' => [
                    '1 formation active au catalogue',
                    '0 % de commission sur vos ventes',
                    'Hébergement vidéo HD illimité & sécurisé',
                    'Paiements directs via Stripe Connect',
                    'Tableau de bord formateur standard',
                    'Support par email sous 48h',
                ],
                'highlight' => false,
                'is_active' => true,
                'order' => 1,
            ],
            [
                'name' => 'Formule Multi',
                'slug' => 'formule-multi-mensuel',
                'price' => 2900, // 29,00 €
                'currency' => PlanCurrencyEnum::Eur,
                'interval' => PlanIntervalEnum::Month,
                'features' => [
                    'Jusqu\'à 5 formations au catalogue',
                    '0 % de commission sur vos ventes',
                    'Mise en avant mensuelle dans la newsletter',
                    'Statistiques apprenants & taux de complétion',
                    'Documents & fiches PDF téléchargeables illimités',
                    'Support prioritaire 7j/7',
                ],
                'highlight' => true,
                'is_active' => true,
                'order' => 2,
            ],
            [
                'name' => 'Formule Pro',
                'slug' => 'formule-pro-mensuel',
                'price' => 4900, // 49,00 €
                'currency' => PlanCurrencyEnum::Eur,
                'interval' => PlanIntervalEnum::Month,
                'features' => [
                    'Formations illimitées',
                    '0 % de commission sur vos ventes',
                    'Mise en avant en tête de catégorie & accueil',
                    'Outils d\'emails & annonces directes aux élèves',
                    'Badge officiel "Formateur Vérifié"',
                    'Accompagnement pédagogique & technique dédié',
                ],
                'highlight' => false,
                'is_active' => true,
                'order' => 3,
            ],

            // Plans Annuels (2 mois offerts)
            [
                'name' => 'Formule Solo (Annuel)',
                'slug' => 'formule-solo-annuel',
                'price' => 15000, // 150,00 € (au lieu de 180 €)
                'currency' => PlanCurrencyEnum::Eur,
                'interval' => PlanIntervalEnum::Year,
                'features' => [
                    '1 formation active au catalogue',
                    '0 % de commission sur vos ventes',
                    '2 mois d\'abonnement offerts',
                    'Hébergement vidéo HD illimité & sécurisé',
                    'Paiements directs via Stripe Connect',
                    'Support par email sous 48h',
                ],
                'highlight' => false,
                'is_active' => true,
                'order' => 4,
            ],
            [
                'name' => 'Formule Multi (Annuel)',
                'slug' => 'formule-multi-annuel',
                'price' => 29000, // 290,00 € (au lieu de 348 €)
                'currency' => PlanCurrencyEnum::Eur,
                'interval' => PlanIntervalEnum::Year,
                'features' => [
                    'Jusqu\'à 5 formations au catalogue',
                    '0 % de commission sur vos ventes',
                    '2 mois d\'abonnement offerts',
                    'Mise en avant mensuelle dans la newsletter',
                    'Statistiques apprenants & taux de complétion',
                    'Support prioritaire 7j/7',
                ],
                'highlight' => true,
                'is_active' => true,
                'order' => 5,
            ],
            [
                'name' => 'Formule Pro (Annuel)',
                'slug' => 'formule-pro-annuel',
                'price' => 49000, // 490,00 € (au lieu de 588 €)
                'currency' => PlanCurrencyEnum::Eur,
                'interval' => PlanIntervalEnum::Year,
                'features' => [
                    'Formations illimitées',
                    '0 % de commission sur vos ventes',
                    '2 mois d\'abonnement offerts',
                    'Mise en avant en tête de catégorie & accueil',
                    'Badge officiel "Formateur Vérifié"',
                    'Accompagnement pédagogique & technique dédié',
                ],
                'highlight' => false,
                'is_active' => true,
                'order' => 6,
            ],
        ];

        foreach ($plans as $planData) {
            Plan::updateOrCreate(
                ['slug' => $planData['slug']],
                $planData
            );
        }
    }
}
