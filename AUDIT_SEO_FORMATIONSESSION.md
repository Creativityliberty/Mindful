# Audit SEO complet — FormationSession

**Site audité :** [formationsession.com](https://formationsession.com/)
**Date :** 17 octobre 2026
**Périmètre :** audit technique, indexation, métadonnées, contenu, données structurées, performance de premier niveau, concurrence organique française et plan d'action.
**Limite :** aucun accès Google Search Console, GA4, logs serveur, données de backlinks ou CrUX n'a été fourni. Les positions, impressions, clics, indexations exactes et Core Web Vitals terrain restent donc à confirmer dans ces outils.

## Correctifs implémentés le 17 octobre 2026

Les correctifs P0/P1 suivants sont présents dans le code local et attendent le prochain déploiement : URL numériques redirigées vers les slugs, normalisation des slash finaux et du sous-domaine en production, JSON-LD de l'accueil rendu en JSON valide, images sociales et logos remplacés par des ressources disponibles, sitemap nettoyé et complété avec le catalogue, retrait des faux hreflang, français par défaut côté serveur, descriptions meta limitées, et pages communautaires passées en `noindex,follow`.

## Verdict

Le socle applicatif est proprement accessible (HTTPS, robots.txt, sitemap XML, HTML rendu et balises principales). Mais plusieurs défauts critiques empêchent le site de consolider son SEO : les URL de formations existent sous plusieurs formes, les pages de langue ne sont pas réellement distinctes, les images Open Graph et logos déclarés sont en 404, et le JSON-LD de l'accueil est invalide.

La priorité n'est pas de publier davantage de contenu immédiatement. Il faut d'abord rendre **une version unique, indexable, francophone et techniquement cohérente** de chaque page commerciale. Ensuite, la croissance se jouera sur deux silos : **radiesthésie / pendule** et **LaHoChi / chakras / lithothérapie**, avec des pages de formation reliées à des guides experts.

### Score de maturité estimé

| Pilier | Note | Lecture |
|---|---:|---|
| Exploration / indexabilité | 4/10 | Sitemap et robots présents, mais canonicals, slugs, langues et couverture de sitemap posent problème. |
| Technique on-page | 4/10 | Balises de base présentes, mais erreurs de duplication, images sociales 404 et JSON-LD invalide sur l'accueil. |
| Contenu / intention | 5/10 | Bon angle éditorial et formations réelles, mais pages piliers et maillage commercial insuffisants. |
| Autorité / E-E-A-T | 3/10 | Auteurs et formateurs visibles, mais preuves, sources, politique éditoriale et signaux de confiance restent à structurer. |
| Performance | 5/10 | Serveur correct, mais HTML lourd et trop de préchargements JavaScript. |
| SEO international | 1/10 | `hreflang` déclaré sans versions serveur distinctes ; les variantes FR/EN produisent le même HTML anglais. |

## Faits vérifiés

| Contrôle | Résultat |
|---|---|
| HTTPS | `http://formationsession.com/` redirige en 308 vers HTTPS. |
| Domaine `www` | `https://www.formationsession.com/` répond en 200 au lieu d'une redirection serveur vers le domaine canonique non-www. |
| robots.txt | Disponible, bloque bien admin, dashboard, trainer, student et checkouts ; référence le sitemap. |
| Sitemap | Disponible en 200, contient **25 URL** : 9 statiques, 7 formations publiées et 9 articles. |
| Réponse accueil | 200 ; TTFB observé : **0,78 s** ; HTML : **222 Ko**. Mesure ponctuelle, pas une donnée terrain. |
| Ressources critiques déclarées | 46 `modulepreload`, 2 préchargements CSS, 7 préchargements images sur l'accueil. |
| HTML de l'accueil | `lang="en"` et `og:locale=en_US`, alors que le titre et la proposition sont en français. |
| `?lng=fr` / `?lng=en` | Les deux variantes servent le même `lang="en"`, le même `og:locale=en_US` et le même titre côté serveur. |

## Correctifs prioritaires

| Priorité | Problème confirmé | Impact | Correctif attendu |
|---|---|---|---|
| P0 | Les images de partage et logos déclarés renvoient 404 : `/images/formation-bien-etre-accueil.jpg`, `/images/logo-formationsession.png`, `/assets/images/logo.png`. | Partages sociaux cassés ; données structurées moins fiables ; image Google indisponible. | Déployer les vrais fichiers, ou remplacer toutes les références par des URL HTTPS 200. Vérifier OG, Twitter et Schema avec les validateurs après déploiement. |
| P0 | Les URL numériques de formation sont accessibles (`/courses/2`, `/courses/3`) en plus des slugs, et chacune s'auto-canonise. `/courses/2` affiche le même LaHoChi que `/courses/initiation-au-lahochi`. | Duplication, dilution des signaux et liens internes / JSON-LD incohérents. | Conserver exclusivement `/courses/{slug}` ; faire une 301 de chaque ID vers son slug ; générer tous les liens via `slug`. |
| P0 | La variante avec slash final répond 200 et s'auto-canonise : `/courses/reveille-ton-chakra-racine/` n'est ni redirigée ni canonisée vers la version sans slash. | Une même page possède au moins deux URL indexables. | Normaliser au niveau Caddy/Laravel : une seule convention (ici sans slash), avec 301 ; produire toujours la même canonical. |
| P0 | JSON-LD de l'accueil invalide : `SeoData::toJsonLdHtml()` retourne déjà une balise `<script>`, puis `SEOHead` l'insère dans une seconde balise JSON-LD. Le contenu rendu commence donc par `<script type="application/ld+json">…`. | Google ne peut pas lire de façon fiable Organization, WebSite, WebPage et ItemList de l'accueil. | Faire retourner à `SeoData` du JSON pur, pas du HTML ; laisser `SEOHead` être le seul composant qui crée la balise script. Ajouter un test de JSON valide. |
| P0 | Les `hreflang` FR/EN pointent vers des paramètres `?lng=` qui ne changent pas le HTML serveur, la langue du document ou les métadonnées. | Hreflang invalide / ignoré ; mauvaise version linguistique possible dans les résultats. | Soit créer de vraies URL traduites rendues côté serveur (`/fr/...`, `/en/...`) avec contenus traduits et `lang` correct ; soit retirer provisoirement les hreflang et cibler le français uniquement. |
| P1 | L'accueil titre : `Formations bien-être… | FormationSession | FormationSession`. | Extrait SERP moins propre ; perte d'espace utile. | Passer un titre sans marque au composant, ou empêcher `SEOHead` d'ajouter une marque déjà présente. |
| P1 | La page catalogue `/courses`, pourtant commerciale, est absente du sitemap. À l'inverse, des pages publiques (`/realisations`, forum, événements) ne sont ni dans le sitemap ni équipées de `SEOHead`. | Couverture incohérente : une page clé peut être sous-explorée et des pages faibles restent indexables. | Ajouter `/courses` au sitemap ; donner un statut explicite à chaque route publique : indexable + métadonnées, ou `noindex,follow`. |
| P1 | Le sitemap met la date du jour comme `lastmod` pour toutes les pages statiques et tous les articles à chaque génération. | Signal de fraîcheur non fiable. | Alimenter `lastmod` par le vrai `updated_at` ou la date de modification du contenu ; omettre la balise quand elle n'est pas fiable. |
| P1 | Le meta description LaHoChi observé est une longue reprise du contenu de cours, très au-delà d'un extrait exploitable. | Snippet tronqué, message commercial dilué. | Définir un `seo_title`, un `seo_description` (environ 140–160 caractères) et une image OG pour chaque formation. |

## Détail technique

### Architecture des URL et canonicals

Le routage accepte un identifiant ou un slug. Or le sitemap utilise les slugs, tandis que l'accueil construit ses URL Schema.org par `route('courses.show', $c->id)`. C'est l'origine directe des URL numériques. La page `/courses/1` répond actuellement 404, tandis que `/courses/2` et `/courses/3` répondent 200 : le comportement n'est donc pas seulement dupliqué, il est aussi fragile pour les liens créés par le site.

À mettre en place :

1. Identifier le cours par slug seulement pour les routes publiques.
2. Résoudre un ancien ID puis retourner une **301** vers le slug ; ne jamais afficher le contenu sur l'URL ID.
3. Construire les URL du JSON-LD, des cartes, des CTA et du sitemap depuis une fonction unique `coursePublicUrl($course)`.
4. Forcer le non-www, HTTPS et la convention sans slash au serveur, avant Laravel.

### Internationalisation

Le sélecteur de langue fonctionne côté navigateur via `i18next-browser-languagedetector` (querystring, cookie, localStorage, navigateur). Ce mécanisme est utile à l'UX, mais insuffisant pour le référencement multilingue : Google reçoit une ressource qui ne varie pas réellement selon `?lng=`. Le `<html lang>` est rendu côté Blade depuis la locale Laravel et reste `en` dans les pages testées.

Deux stratégies possibles :

| Choix | Recommandation |
|---|---|
| Le marché est français pour les 6–12 prochains mois | Retirer `hreflang` EN/FR, rendre `lang="fr"`, `og:locale=fr_FR` et maintenir une seule URL canonique française. C'est la voie recommandée maintenant. |
| Une offre anglaise complète est réellement prévue | Créer une locale serveur, deux URL stables par contenu, contenus et métadonnées traduits, `canonical` auto-référente et paires `hreflang` réciproques. |

### Robots, sitemap et pages à indexer

`robots.txt` est sain pour les espaces privés. Il manque toutefois une politique d'indexation claire : les pages légales, pages de succès, communauté vide ou réalisations doivent être soit enrichies, soit `noindex,follow`. La présence d'une page dans le sitemap n'est pas une garantie d'indexation, et son absence ne protège pas une page des robots.

Proposition de politique initiale :

| Ensemble | Action |
|---|---|
| Accueil, catalogue, pages formations, guides experts, glossaire utile, blog, à propos, contact | `index,follow`, sitemap, données structurées adaptées. |
| Tarifs et devenir formateur | `index,follow` si ces offres sont actives et assez détaillées. |
| CGU, confidentialité, cookies, mentions légales | `noindex,follow`, hors sitemap. |
| Checkout, succès, connexion, espace élève / formateur / admin | `noindex,nofollow` et authentification quand nécessaire. |
| Forum, événements, réalisations | Indexer uniquement après contenu éditorial substantiel ; sinon `noindex,follow`. |

### Données structurées

Points positifs : les modèles `Course`, `BlogPosting`, `FAQPage`, `BreadcrumbList`, `Organization` et `WebSite` sont envisagés dans le code. Les pages cours ont aussi prix et fournisseur.

À corriger :

- rendre le JSON-LD de l'accueil valide (P0) ;
- utiliser le même `@id` Organization et le même logo 200 sur toutes les pages ;
- aligner les URL `Course` avec les slugs canoniques ;
- ajouter `url`, `availability`, `image` 200 et, si exact, une offre avec date de validité sur les formations ;
- ne déclarer `AggregateRating` que si les avis sont réels, accessibles et conformes aux règles de Google ;
- conserver `FAQPage` uniquement lorsque les questions/réponses sont visibles dans le contenu de la page ;
- valider après chaque mise à jour avec Rich Results Test et Schema Markup Validator.

### Métadonnées, partage et images

Les descriptions et canonical sont rendues dans le HTML initial, ce qui est positif. En revanche les assets déclarés pour le partage de l'accueil et les logos Schema sont indisponibles (404). Cela affecte directement les aperçus WhatsApp, LinkedIn, Facebook, X et la capacité de Google à exploiter les images.

Spécification recommandée :

- une image sociale **1200 × 630 px**, WebP ou JPG, légère et avec marque lisible ;
- une image OG spécifique pour chaque formation et pour les articles clés ;
- un logo carré 512 × 512 px minimum, accessible publiquement et déclaré une seule fois ;
- des `alt` descriptifs pour les images porteuses de contenu ; les images décoratives restent avec `alt=""`.

## Audit des pages et contenu

### État des pages principales

| Type | Constats | Action |
|---|---|---|
| Accueil | Un H1, une proposition française, mais title doublé, `lang` anglais, OG image 404 et Schema invalide. | Traiter les P0 avant toute campagne de liens. |
| Catalogue `/courses` | 200, un H1, Schema ItemList ; title/description anglais au rendu serveur, absent du sitemap. | Localiser en FR, intégrer au sitemap et renforcer en page hub. |
| Formations | Un H1 et un Schema Course par page ; contenu produit riche, mais descriptions meta trop longues et doublons ID/slug/slash. | Mettre une couche SEO dédiée par formation et normaliser les URL. |
| Blog | Contenus longue traîne utiles ; deux H1 observés sur l'index blog. | Un seul H1 de page ; l'article vedette doit devenir H2 ou simple carte. |
| Article pendule | Très bon potentiel pour l'intention débutant, effet idéomoteur, choix et cadrans Bovis. | Lier vers une **vraie** page formation pendule en slug ; consolider les sources et le cadre bien-être. |
| Glossaire / guides | Bon levier informationnel, notamment pour mailler vers les formations. | Créer une URL par guide important et renforcer chaque définition avec liens contextuels. |

### Problèmes de maillage interne

Les CTA éditoriaux utilisent des URL numériques (`/courses/2`, `/courses/4`, `/courses/10`) et un fichier Markdown contient aussi un lien vers `/courses/1`, actuellement 404. Même lorsqu'une URL numérique affiche un cours, elle n'est pas l'URL sitemap / cible à promouvoir.

Règle : tous les liens internes vers une formation doivent pointer vers le slug final. Mettre en place un test automatisé qui vérifie, pour chaque CTA et chaque URL du sitemap, une réponse 200 et une canonical auto-référente.

### E-E-A-T et sujet sensible

Radiesthésie, LaHoChi, chakras et lithothérapie se situent au croisement du bien-être et de sujets de santé perçus. Le site doit éviter les promesses de guérison, diagnostics ou substitutions à une prise en charge médicale.

À ajouter sur chaque formation / article sensible :

- auteur, qualification, expérience, date de mise à jour et contact vérifiables ;
- encadré explicite « pratique de bien-être / ne remplace pas un avis ou traitement médical » ;
- sources primaires ou institutionnelles quand un article évoque un effet sur le stress, le sommeil, l'anxiété ou le corps ;
- politique éditoriale, page équipe / formateurs détaillée, témoignages dont la collecte et le contexte sont transparents ;
- vocabulaire prudent : « explorer », « pratique personnelle », « ressenti », plutôt que « soigne », « guérit », « prouve » sans source solide.

Cette ligne est aussi une différenciation : plusieurs concurrents promettent beaucoup ; FormationSession peut gagner en confiance en étant nettement plus rigoureux.

## Stratégie mots-clés et architecture cible

Le site ne doit pas viser un générique vague « formations bien-être ». Il doit gagner des groupes d'intention où il peut apporter une offre et une preuve concrètes.

| Intention | Page cible à créer ou renforcer | Contenu indispensable | Conversion |
|---|---|---|---|
| Formation radiesthésie en ligne | `/formations/radiesthesie-en-ligne` ou page produit existante renommée | programme, durée, format, formateur, prix, exercices, FAQ, cadre responsable | inscription / demande d'information |
| Formation pendule débutant | `/formations/pendule-radiesthesie` | choix du pendule, conventions, effet idéomoteur, exercices, ressources PDF | inscription |
| Apprendre à utiliser un pendule | guide pilier | tutoriel, erreurs, vidéo, FAQ, liens vers formation | CTA doux puis formation |
| Formation LaHoChi en ligne | renforcer la page actuelle en slug | déroulé visio, manuel, prérequis, attestation, précautions | réservation |
| Formation chakra racine / chakras | pages cours + guide pilier « chakras » | approche pratique, limites, programme, formateur | inscription |
| Formation lithothérapie en ligne | renforcer la page existante | minéraux, sécurité, programme, modalités, certificat si exact | inscription |
| Méditation pleine conscience débutant | guide distinct, sourcé | exercices, bénéfices nuancés, références | newsletter / formation |

Architecture proposée :

```text
/formations/                          (hub commercial)
├── /formations/radiesthesie-en-ligne
│   ├── /guides/choisir-pendule
│   ├── /guides/utiliser-pendule-debutant
│   ├── /guides/effet-ideomoteur-pendule
│   └── /glossaire/radiesthesie
├── /formations/initiation-lahochi
│   ├── /guides/lahochi-definition
│   └── /guides/lahochi-auto-soin
├── /formations/chakras
│   ├── /guides/chakra-racine
│   └── /guides/chakra-sacre
└── /formations/lithotherapie
    ├── /guides/purifier-recharger-pierres
    └── /glossaire/lithotherapie
```

Chaque guide doit comporter une réponse courte en haut, un sommaire, du contenu démonstratif, une FAQ visible, des liens vers le cours pertinent et des sources si une affirmation dépasse le témoignage ou la pratique personnelle.

## Concurrents organiques à surveiller

La concurrence est fragmentée mais agressive sur les promesses commerciales : accès à vie, certification, QCM, manuels PDF, avis, grands volumes d'élèves et accompagnement. La liste ci-dessous est issue des résultats observés pour les requêtes radiesthésie, pendule, chakras, LaHoChi et lithothérapie ; elle n'est pas une mesure exhaustive de parts de marché.

### Concurrents directs — radiesthésie et pendule

| Concurrent | Positionnement visible | Ce qu'il faut surveiller |
|---|---|---|
| [France Radiesthésie](https://france-radiesthesie.fr/formation-radiesthesie-en-ligne/) | Parcours à 3 niveaux, accès à vie, manuels PDF, QCM et attestation ; prix d'appel 39 €. | Page commerciale très orientée intention d'achat, offre immédiatement lisible. |
| [Académie Madelrieux](https://www.academiemadelrieux.com/formation/formation-radiesthesie) | Parcours 5 modules, nombreux supports, promesse de méthode structurée, preuve sociale importante. | Densité de contenu, preuves et profondeur de programme. |
| [Douce Énergie des Mains](https://www.douceenergiedesmains.com/formation-pendule-a-distance) | Visio individuelle, approche personnalisée, certificats et avis. | Différenciation par accompagnement humain. |
| [LM Thérapies](https://www.lm-therapies.fr/centre-de-formations/initiation-%C3%A0-la-radiesth%C3%A9sie-100-en-ligne) | Initiation courte, livret, vidéos, audios, accès immédiat. | Offre débutant très explicite. |
| [Vibratis](https://vibratis.fr/formation-pendule/) | Approche simple et pratique pour choisir et utiliser le pendule. | Captation des requêtes « comment utiliser un pendule ». |
| [L'Onde Cristalline](https://www.londecristalline.com/atelier-pendule) | Atelier pendule et radiesthésie avec vidéos, PDF, accès à vie. | Vocabulaire « pendule + chakras + géobiologie » et maillage thématique. |
| [Centre de l'Ermitage](https://www.bien-etre-et-formation-ermitage.com/formation-distancielle/formation-en-ligne-%E2%80%93-radiesth%C3%A9sie-%28pendule%29) | Formation à distance avec accompagnement individuel / visio. | Argument de suivi humain à forte valeur perçue. |

### Concurrents de portefeuille — LaHoChi, chakras, lithothérapie

| Concurrent | Segment | Signal concurrentiel visible |
|---|---|---|
| [SpiriVie — LaHoChi](https://www.spirivie.com/lahochi-formation-en-ligne/) | LaHoChi | Marque-école, accréditation affichée, accès illimité, volumes d'avis et d'élèves. |
| [Lahochi.fr](https://www.lahochi.fr/stages/) | LaHoChi | Autorité de niche, formation directe / e-learning, manuel et certificat. |
| [Atelier LaHoChi](https://atelier-lahochi.fr/formation-lahochi/) | LaHoChi | Offre courte à distance, vidéos, manuel, rendez-vous et précautions affichées. |
| [SpiriVie — chakras](https://www.spirivie-formations.com/yoga-des-chakras-formation-en-ligne/) | Chakras | Certification, avis, preuve sociale et programme très détaillé. |
| [Siddhi Yoga](https://www.siddhiyoga.com/fr/courses-online/chakra-certification-course) | Chakras | Offre longue et certifiée orientée praticiens / yoga. |
| [Formation Lithothérapie](https://www.formation-lithotherapie.fr/) | Lithothérapie | Positionnement « certifiante », 10 modules, accès à vie, garanties et accréditations. |
| [LearnyZen](https://learnyzen.fr/products/formation-lithotherapie-en-ligne) | Lithothérapie | 45 vidéos, QCM, PDF, forum, avis et parcours très concret. |
| [Ketshaya](https://www.ketshaya.fr/formations) | Holistique | Parcours premium, rendez-vous personnalisés et accès à vie. |

### Positionnement à prendre

FormationSession ne gagnera pas en copiant les superlatifs ou les certifications d'autrui. Le créneau défendable est : **des formations holistiques structurées, accessibles et transparentes, avec une pratique guidée et un cadre responsable**.

Les éléments à rendre très visibles sur chaque page produit sont : nom et parcours du formateur, ce qui est inclus, temps réel à prévoir, format, prix, conditions d'accès, accompagnement, exemples de leçons / ressources, politique de remboursement si elle existe, et ce que la formation ne prétend pas faire.

## Plan de déploiement

### Jours 1 à 7 — débloquer l'indexation

1. Corriger les trois familles d'URL : ID, slash final, www.
2. Corriger les images OG / logos 404 et le JSON-LD de l'accueil.
3. Mettre le site en français technique réel : `html lang`, `og:locale`, title / descriptions ; retirer les hreflang tant que les pages anglaises ne sont pas rendues côté serveur.
4. Ajouter `/courses` au sitemap et fiabiliser les `lastmod`.
5. Passer les pages légales et les pages faibles en `noindex,follow`.
6. Vérifier manuellement : 200/301, canonical, title, description, H1, image OG, JSON-LD pour accueil, catalogue, trois formations et trois articles.

### Semaines 2 à 4 — rendre l'offre trouvable

1. Créer ou consolider la vraie landing page « Formation radiesthésie / pendule en ligne » avec un slug définitif.
2. Réécrire les title et descriptions de chaque cours ; limiter les descriptions meta, sans dupliquer le titre.
3. Normaliser tous les CTA du blog vers les slugs canoniques.
4. Renforcer le guide pendule et publier deux guides satellites : conventions Oui/Non, effet idéomoteur / questions fiables.
5. Ajouter pages formateurs, politique éditoriale, avertissements bien-être et sources sur les articles scientifiques.
6. Réduire les préchargements : ne précharger que le CSS, le JS critique et l'image LCP ; charger les composants hors écran à la demande.

### Mois 2 et 3 — autorité et conversion

1. Publier 2 contenus experts par mois par silo, chacun relié à une page formation.
2. Obtenir des liens éditoriaux pertinents : podcasts bien-être, annuaires professionnels de formateurs, partenaires, interviews d'experts ; éviter les fermes de liens.
3. Mettre en place Search Console, GA4 et suivi des conversions (vue formation, début checkout, achat, inscription newsletter).
4. Suivre une liste de 30 à 50 requêtes par intention, non seulement une « position moyenne » globale.
5. Tous les mois : corriger les pages exclues / erreurs d'indexation, enrichir les requêtes avec impressions sans clic, et mettre à jour les contenus à forte intention.

## Indicateurs de succès

| Horizon | Indicateur | Cible opérationnelle |
|---|---|---|
| 7 jours | URL canoniques, OG images, JSON-LD et langue | 0 erreur critique sur les 10 URL prioritaires. |
| 30 jours | Indexation | Catalogue, pages de formations et guides piliers indexables sans doublon ID/slash/langue. |
| 60 jours | Visibilité | Impressions Search Console en hausse sur pendule, radiesthésie, LaHoChi, chakras et lithothérapie. |
| 90 jours | Acquisition | Premiers clics non-marque vers les pages formations et amélioration du taux clic → inscription. |
| En continu | Qualité | Aucun lien interne vers 404 ; sitemap fiable ; Core Web Vitals mesurés en données de terrain. |

## Checklist de recette avant mise en ligne

- [ ] Une seule version 200 pour chaque contenu ; toutes les autres variantes font une 301.
- [ ] Canonical absolue, auto-référente et identique à l'URL sitemap.
- [ ] Une seule langue réellement rendue par URL ; `lang`, `og:locale` et hreflang cohérents.
- [ ] Title unique, description concise et un seul H1.
- [ ] Image OG et logo en 200, avec URL absolue.
- [ ] JSON-LD valide, sans balise `<script>` imbriquée ; URLs Schema canoniques.
- [ ] Chaque page commerciale est dans le sitemap ; les pages faibles / privées sont `noindex`.
- [ ] Les CTA blog et les cartes cours utilisent seulement des slugs.
- [ ] Mesures Search Console / GA4 configurées avant les prochains contenus et campagnes.
