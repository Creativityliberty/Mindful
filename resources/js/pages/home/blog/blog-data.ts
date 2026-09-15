export type FAQItem = {
  question: string;
  answer: string;
};

export type TableBlock = {
  headers: string[];
  rows: string[][];
};

export type ArticleSection = {
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  table?: TableBlock;
  callout?: {
    type: 'warning' | 'tip' | 'info';
    title: string;
    text: string;
  };
};

export type RelatedCourseCTA = {
  badge: string;
  title: string;
  description: string;
  href: string;
  price?: string;
};

export type Article = {
  id: number;
  slug: string;
  image: string;
  categories: string[];
  titre: string;
  description: string;
  duree: string;
  date: string;
  dateIso?: string;
  keywords?: string[];
  articleSection?: string;
  summaryAnswer?: string;
  sections?: ArticleSection[];
  faq?: FAQItem[];
  relatedCourse?: RelatedCourseCTA;
  author?: {
    name: string;
    role: string;
  };
  featured?: boolean;
};

export const allArticles: Article[] = [
  {
    id: 10,
    slug: 'guide-complet-lithotherapie-mineraux-chakras',
    image: '/assets/images/blog_lithotherapie_chakras.webp',
    categories: ['Lithothérapie', 'Chakras', 'Minéraux'],
    titre: 'Guide Complet de la Lithothérapie : Pouvoir des Minéraux & Réharmonisation des Chakras',
    description: 'Explorez les fondements de la lithothérapie consciente : comment reconnaître les pierres brutes et polies, les purifier par l\'eau ou la fumigation, les recharger à la lune et équilibrer vos 7 chakras.',
    duree: '15 min',
    date: '15 sept. 2026',
    dateIso: '2026-09-15T09:00:00+02:00',
    keywords: [
      'lithothérapie',
      'pouvoir des minéraux',
      'purification des cristaux',
      'rechargement des pierres',
      'harmonisation des chakras',
      'améthyste vertus',
      'quartz rose bienfaits',
      'bracelet chemin de vie',
      'formation lithothérapie certifiante'
    ],
    articleSection: 'Lithothérapie & Énergétique',
    summaryAnswer: 'La lithothérapie repose sur trois piliers fondamentaux : la purification énergétique (fumigation de sauge blanche ou eau déminéralisée selon la pierre), le rechargement vibratoire (lumière lunaire, amas de quartz ou Fleur de Vie) et l\'alignement avec les 7 chakras. Pour débuter en toute sécurité, privilégiez le Quartz Rose (cœur), l\'Améthyste (intuition/apaisement) et le Jaspe Rouge (ancrage).',
    author: {
      name: 'Fabienne Dizy-Olliveaud',
      role: 'Formatrice en Lithothérapie & Énergétique'
    },
    featured: true,
    sections: [
      {
        title: "1. Qu'est-ce que la Lithothérapie et Comment Agissent les Cristaux ?",
        paragraphs: [
          "La lithothérapie est une pratique holistique millénaire qui utilise l'énergie subtile et la fréquence vibratoire des minéraux pour accompagner l'harmonie du corps, du mental et des corps énergétiques. Chaque minéral possède une structure cristalline unique (cubique, hexagonale, rhomboédrique...) et une composition chimique précise qui génère une résonance vibratoire constante.",
          "Lorsque nous entrons en contact avec une pierre — en méditation, en bijou ou en apposition directe sur les chakras — un phénomène de bio-résonance s'opère entre le champ électromagnétique du cristal et nos propres centres énergétiques."
        ],
        callout: {
          type: 'info',
          title: 'Déontologie & Pratique Consciente',
          text: 'La lithothérapie est une méthode d\'accompagnement au bien-être énergétique et ne remplace en aucun cas un diagnostic ou un traitement médical conventionnel.'
        }
      },
      {
        title: "2. Correspondance des 7 Chakras et Minéraux Essentiels",
        paragraphs: [
          "Le système énergétique humain s'articule autour de sept centres majeurs (chakras). La couleur et la fréquence de chaque pierre entrent en résonance naturelle avec le centre correspondant :"
        ],
        table: {
          headers: ["Chakra", "Couleur & Fréquence", "Minéraux Clés", "Propriétés & Actions"],
          rows: [
            ["Chakra Racine (Muladhara)", "Rouge / Noir (Ancrage)", "Jaspe Rouge, Tourmaline Noire, Hématite", "Sécurité intérieure, lien à la terre, protection électromagnétique"],
            ["Chakra Sacré (Svadhisthana)", "Orange (Créativité & Sensualité)", "Cornaline, Pierre de Soleil, Calcite Orange", "Émotions fluides, force créatrice, joie de vivre"],
            ["Plexus Solaire (Manipura)", "Jaune / Doré (Volonté & Pouvoir)", "Citrine naturelle, Œil de Tigre, Pyrite", "Confiance en soi, passage à l'action, estime personnelle"],
            ["Chakra du Cœur (Anahata)", "Vert / Rose (Amour & Guérison)", "Quartz Rose, Aventurine Verte, Malachite", "Compassion, ouverture du cœur, apaisement des blessures affectives"],
            ["Chakra de la Gorge (Vishuddha)", "Bleu Ciel (Expression & Vérité)", "Aigue-Marine, Calcédoine Bleue, Sodalite", "Communication fluide, écoute bienveillante, affirmation de soi"],
            ["Troisième Œil (Ajna)", "Indigo (Intuition & Clarté)", "Lapis-Lazuli, Labradorite, Fluorite Bleue", "Vision intérieure, discernement spirituel, connexion intuitive"],
            ["Chakra Couronne (Sahasrara)", "Violet / Blanc (Conscience Universelle)", "Améthyste, Cristal de Roche, Sélénite", "Élévation spirituelle, paix profonde, reliance cosmique"]
          ]
        }
      },
      {
        title: "3. Purification des Minéraux : Quelles Pierres Peuvent Aller dans l'Eau ?",
        paragraphs: [
          "Dès l'acquisition d'une nouvelle pierre ou après un travail énergétique intense, la pierre a emmagasiné des charges résiduelles. Il est impératif de la purifier pour restaurer sa neutralité originelle.",
          "Attention aux erreurs fréquentes : certaines pierres ne supportent absolument pas l'eau sous peine de dissolution, d'oxydation ou d'altération irréversible !"
        ],
        bulletPoints: [
          "Méthode universelle (100% sécurisée pour toutes les pierres) : Fumigation douce à la sauge blanche ou au bois de Palo Santo pendant 30 à 60 secondes.",
          "Purification à l'eau courante / déminéralisée : Compatible avec les Quartz, Jaspes, Agates, Obsidiennes.",
          "Pierres formellement INTERDITES d'eau : Sélénite (se dissout), Malachite (poreuse et toxique dans l'eau), Pyrite & Hématite (rouillent), Azurite et Turquoise."
        ],
        callout: {
          type: 'warning',
          title: 'Attention aux Pierres Fragiles',
          text: 'En cas de doute sur la dureté ou la composition chimique d\'une pierre (échelle de Mohs), privilégiez TOUJOURS la fumigation ou le son (bol chantant tibétain).'
        }
      },
      {
        title: "4. Protocoles de Rechargement : Lune, Soleil ou Fleur de Vie ?",
        paragraphs: [
          "Une fois purifiée, la pierre est 'vide' et doit être rechargée pour diffuser à nouveau son plein potentiel vibratoire :"
        ],
        bulletPoints: [
          "Rechargement Lunaire (Recommandé) : Exposez vos pierres toute la nuit sous la lumière de la Pleine Lune ou en lune montante. Idéal pour les pierres d'intuition, d'apaisement et féminines (Pierre de Lune, Améthyste, Quartz Rose, Labradorite).",
          "Rechargement Solaire : 1 à 2 heures au soleil doux du matin. Idéal pour les pierres solaires (Citrine, Cornaline, Pierre de Soleil, Œil de Tigre). Attention : le soleil direct brûlant peut décolorer l'améthyste et le quartz rose.",
          "Ondes de Forme & Géométrie Sacrée : Posez vos minéraux 3 à 4 heures sur un plateau gravé d'une Fleur de Vie ou dans une géode de Cristal de Roche."
        ]
      },
      {
        title: "5. Concevoir son Bracelet Chemin de Vie Personnalisé",
        paragraphs: [
          "Le Bracelet Chemin de Vie est un outil vibratoire unique calculé à partir de vos prénoms, de votre nom de famille et de votre date de naissance. Il combine 8 pierres fondamentales : Pierre de Base, Pierre de Sommet, Pierre de Chemin de Vie, Pierre d'Appel, Pierre de Personnalité, Pierre d'Expression, Pierre de Touche et Pierre de Vœu.",
          "Ce mariage minéral crée un bouclier et un catalyseur d'évolution parfaitement aligné sur votre signature karmique."
        ]
      }
    ],
    faq: [
      {
        question: "Quelle est la pierre la plus recommandée pour débuter en lithothérapie ?",
        answer: "Le Quartz Rose et le Cristal de Roche sont les deux pierres incontournables. Le Quartz Rose apporte douceur, réconfort et apaisement émotionnel, tandis que le Cristal de Roche est un amplificateur neutre qui s'adapte à toutes les intentions."
      },
      {
        question: "À quelle fréquence faut-il purifier et recharger ses minéraux ?",
        answer: "Pour un bijou ou une pierre portée quotidiennement, une purification et un rechargement hebdomadaire sont conseillés. Si vous venez de traverser un moment de stress intense ou une séance de soin, purifiez-la immédiatement le soir même."
      },
      {
        question: "Peut-on associer plusieurs pierres différentes sur un même bijou ?",
        answer: "Oui, à condition de ne pas mélanger des énergies contradictoires. Par exemple, évitez d'associer une pierre très stimulante et tonique (comme la Cornaline ou la Pyrite) avec une pierre dédiée au sommeil profond (comme l'Améthyste ou l'Howlite)."
      },
      {
        question: "Pourquoi ne faut-il jamais plonger la Sélénite ou la Malachite dans l'eau ?",
        answer: "La Sélénite est une variété de gypse soluble qui se désagrège et perd son poli au contact prolongé de l'eau. La Malachite contient du cuivre et est poreuse ; l'eau peut altérer sa surface et libérer des micro-particules toxiques."
      }
    ],
    relatedCourse: {
      badge: "Formation Certifiante Complète",
      title: "Lithothérapie : Utilisation Consciente des Minéraux & Chakras",
      description: "Apprenez pas à pas l'art de la lithothérapie, les protocoles sécurisés de purification, l'harmonisation des 7 chakras et la création de votre bracelet chemin de vie.",
      href: "/courses/10",
      price: "89 €"
    }
  },
  {
    id: 9,
    slug: 'comment-choisir-premier-pendule-divinatoire',
    image: '/assets/images/blog_pendule_radiesthesie.webp',
    categories: ['Radiesthésie', 'Pendule', 'Arts Divinatoires'],
    titre: 'Comment Choisir et Utiliser son Premier Pendule Divinatoire ? Guide Pratique du Débutant',
    description: 'Découvrez comment choisir votre premier pendule divinatoire (laiton, bois ou cristal), l\'activer en 4 étapes, définir votre convention Oui/Non et mesurer le taux vibratoire sur cadran de Bovis sans tomber dans le piège de l\'effet idéomoteur.',
    duree: '12 min',
    date: '18 août 2026',
    dateIso: '2026-08-18T10:00:00+02:00',
    keywords: [
      'radiesthésie débutant',
      'choisir premier pendule divinatoire',
      'pendule en laiton goutte d eau',
      'convention oui non pendule',
      'échelle de bovis cadran',
      'taux vibratoire bovis',
      'effet idéomoteur radiesthésie',
      'formation radiesthésie en ligne'
    ],
    articleSection: 'Radiesthésie & Arts Divinatoires',
    summaryAnswer: 'Pour débuter sereinement en radiesthésie, le pendule en laiton de 15 à 25g (forme goutte d\'eau ou cône) est la référence absolue. Neutre énergétiquement et d\'une réactivité exemplaire, il permet d\'amplifier avec précision vos micro-mouvements neuromusculaires inconscients (effet idéomoteur). Établissez toujours votre convention mentale (Oui / Non / Neutre) avant toute séance de mesure sur cadran de Bovis.',
    author: {
      name: 'Fabienne Dizy-Olliveaud',
      role: 'Praticienne en Radiesthésie'
    },
    featured: false,
    sections: [
      {
        title: "1. Qu'est-ce que la Radiesthésie et Comment Fonctionne le Pendule ?",
        paragraphs: [
          "La radiesthésie (du latin *radius*, rayon, et du grec *aisthêsis*, sensibilité) est l'art de percevoir et d'interpréter des rayonnements et fréquences vibratoires invisibles à l'aide d'un amplificateur mécanique tel que le pendule ou les baguettes de sourcier.",
          "Contrairement à une croyance populaire, le pendule ne possède pas de pouvoir magique autonome. Son oscillation est déclenchée par l'effet idéomoteur : votre subconscient capte une information subtile et la traduit instantanément en micro-contractions musculaires imperceptibles dans vos doigts, que le pendule amplifie visuellement."
        ],
        callout: {
          type: 'info',
          title: 'L\'Effet Idéomoteur en Science',
          text: 'Théorisé par le médecin Michel-Eugène Chevreul en 1833, l\'effet idéomoteur prouve que la pensée inconsciente génère un mouvement musculaire réflexe. La radiesthésie est donc un entraînement de votre sensibilité neuro-intuitive.'
        }
      },
      {
        title: "2. Bois, Laiton ou Cristal : Quel Matériau Choisir pour Débuter ?",
        paragraphs: [
          "Le matériau et le poids déterminent l'inertie, la sensibilité et l'entretien de votre pendule :"
        ],
        table: {
          headers: ["Matériau", "Poids Recommandé", "Sensibilité Vibratoire", "Entretien & Mémoire", "Idéal Pour"],
          rows: [
            ["Laiton (Métal doré)", "15g - 25g", "Très Réactif & Précis ⭐⭐⭐⭐⭐", "Neutre (Ne retient pas les mémoires)", "Débutants, cadrans et recherches générales (#1)"],
            ["Bois (Buis, Ébène)", "8g - 15g", "Doux & Léger ⭐⭐⭐", "Dépoussiérage simple", "Géobiologie, extérieur et sensibilité au vent"],
            ["Cristal de Roche / Améthyste", "15g - 30g", "Amplificateur & Émetteur ⭐⭐⭐⭐", "Purification eau & sauge requise", "Soins énergétiques, harmonisation des chakras"],
            ["Pendule Égyptien (Thot, Karnak)", "25g - 40g", "Émetteur-Récepteur Puissant ⭐⭐⭐⭐⭐", "Auto-déchargeant", "Praticiens confirmés et travail à distance"]
          ]
        }
      },
      {
        title: "3. Protocole Pas-à-Pas : Activer et Calibrer son Pendule en 4 Étapes",
        paragraphs: [
          "Pour obtenir des réponses fiables et reproductibles, suivez ce rituel de cadrage avant chaque utilisation :"
        ],
        bulletPoints: [
          "Étape 1 : Centrage et purification : Passez quelques secondes le pendule dans la fumée de sauge ou de Palo Santo pour réinitialiser son ambiance vibratoire.",
          "Étape 2 : Posture d'ancrage : Asseyez-vous le dos droit, les pieds posés à plat au sol sans croiser les jambes. Tenez la chaînette entre le pouce et l'index à environ 5 à 7 cm au-dessus de la masse.",
          "Étape 3 : Établissement de la convention mentale : Demandez intérieurement ou à voix haute : 'Montre-moi un OUI'. Observez le sens de rotation (souvent horaire). Puis demandez : 'Montre-moi un NON' (souvent anti-horaire), et 'Montre-moi un NEUTRE' (oscillation linéaire d'attente).",
          "Étape 4 : Test de vérification : Posez 3 questions simples dont vous connaissez la réponse exacte (ex: 'Est-ce que je m'appelle [Mon Prénom] ?', 'Sommes-nous en journée ?'). Si les réponses concordent, votre calibration est validée."
        ]
      },
      {
        title: "4. Comprendre le Cadran et l'Échelle de Bovis",
        paragraphs: [
          "L'Échelle de Bovis est un cadran semi-circulaire gradué en Unités Bovis (UB), inventé par le physicien français André Bovis pour mesurer le taux vibratoire des êtres vivants, des aliments, des lieux et des cristaux :",
          "- 0 à 6 500 UB : Taux bas / sous-vitalité (fatigue, aliment dévitalisé ou lieu géopathogène).",
          "- 6 500 à 10 000 UB : Équilibre physique standard d'une personne en bonne santé.",
          "- 10 000 à 18 000+ UB : Haut niveau spirituel, lieu sacré ou cristal purifié à fort potentiel vibratoire."
        ],
        callout: {
          type: 'tip',
          title: 'Méthode de Mesure sur Cadran',
          text: 'Positionnez la pointe du pendule au centre de la base du cadran. Formulez votre demande avec précision : \'Quel est le taux vibratoire de cette pierre ?\'. Laissez le pendule osciller vers le chiffre exact.'
        }
      },
      {
        title: "5. Les 4 Erreurs Classiques qui Faussent vos Réponses",
        bulletPoints: [
          "L'auto-suggestion : Avoir envie d'un résultat précis oriente inconsciemment le pendule. Adoptez une posture de totale neutralité émotionnelle (lâcher-prise).",
          "La fatigue physique ou psychique : Ne pratiquez jamais après une journée épuisante ou en état de stress émotionnel.",
          "Les questions ambiguës ou ouvertes : Ne demandez jamais 'Devrais-je déménager ?', mais plutôt 'Est-il bénéfique pour mon équilibre de déménager dans cet appartement ?'.",
          "Le manque d'ancrage : Si vous vous sentez dispersé, prenez 3 grandes respirations ventrales avant de commencer."
        ]
      }
    ],
    faq: [
      {
        question: "Quel est le meilleur pendule pour un débutant absolu ?",
        answer: "Le pendule en laiton de forme goutte d'eau (pesant entre 15 et 25 grammes) est le modèle idéal. Il est insensible aux charges résiduelles, ne nécessite pas de purification complexe et offre un équilibre parfait entre stabilité et réactivité."
      },
      {
        question: "Pourquoi mon pendule tourne-t-il dans tous les sens sans répondre ?",
        answer: "Cela arrive souvent lorsque la question est mal formulée (trop vague ou à choix multiple), lorsque vous manquez d'ancrage ou lorsque vous êtes fatigué. Posez votre pendule, respirez calmement, reformulez une question fermée et recommencez."
      },
      {
        question: "Ma convention Oui/Non peut-elle changer dans le temps ?",
        answer: "Généralement, la convention reste stable pour un individu donné. Cependant, lors d'un changement d'état émotionnel, de fatigue ou selon le pendule utilisé, il est toujours recommandé de revérifier son code Oui/Non au début de chaque séance."
      },
      {
        question: "Faut-il avoir un don particulier pour pratiquer la radiesthésie ?",
        answer: "Non, la radiesthésie n'est pas un don réservé à une élite. C'est une faculté humaine naturelle basée sur la perception intuitive et l'amplification neuromusculaire, qui se développe avec une méthode rigoureuse et de la pratique régulière."
      },
      {
        question: "Comment purifier un pendule divinatoire ?",
        answer: "Pour un pendule en laiton ou en bois, une simple fumigation à la sauge blanche ou un passage dans la fumée de Palo Santo suffit. Pour un pendule en cristal, purifiez-le à l'eau ou sur une plaque de sélénite selon la nature de la pierre."
      },
      {
        question: "Peut-on utiliser le pendule pour mesurer l'énergie d'une personne à distance ?",
        answer: "Oui, la radiesthésie médicale ou de bien-être utilise des planches anatomiques ou des témoins (photo, date de naissance, mèche de cheveux) pour effectuer des bilans énergétiques à distance."
      }
    ],
    relatedCourse: {
      badge: "Atelier Pratique & Initiation",
      title: "Atelier Découverte de la Radiesthésie",
      description: "Maîtrisez votre premier pendule, apprenez à établir des conventions fiables et mesurez les cadrans de Bovis avec une formatrice expérimentée.",
      href: "/courses/4",
      price: "50 €"
    }
  },
  {
    id: 11,
    slug: 'initiation-lahochi-frequence-soin-energetique',
    image: '/assets/images/blog_lahochi_energie.webp',
    categories: ['LaHoChi', 'Énergie', 'Soins', 'Transmission'],
    titre: 'Initiation au LaHoChi : Comprendre cette Haute Fréquence de Guérison Énergétique',
    description: 'Qu\'est-ce que le LaHoChi ? Comment se déroule l\'initiation en visioconférence ou en présentiel, le cycle indispensable des 21 jours d\'auto-soins et la maîtrise des 5 positions sacrées des mains pour canaliser l\'énergie universelle.',
    duree: '14 min',
    date: '10 sept. 2026',
    dateIso: '2026-09-10T14:00:00+02:00',
    keywords: [
      'lahochi',
      'initiation lahochi en ligne',
      'soin énergétique lahochi',
      '21 jours auto soins lahochi',
      'positions des mains lahochi',
      'formation praticien lahochi certifiante',
      'reiki vs lahochi differences',
      'sceau de protection lahochi'
    ],
    articleSection: 'Soins Énergétiques & LaHoChi',
    summaryAnswer: 'Le LaHoChi est une méthode de soin énergétique par apposition des mains qui canalise l\'une des plus hautes fréquences de lumière spirituelle actuellement disponibles. Composé des sons sacrés \'La\' (Lumière/Amour), \'Ho\' (Mouvement) et \'Chi\' (Énergie vitale universelle), le LaHoChi s\'apprend en une seule initiation complète. Il s\'accompagne d\'un cycle fondamental de 21 jours d\'auto-soins pour ancrer la fréquence dans ses corps subtils avant de pratiquer sur autrui.',
    author: {
      name: 'Fabienne Dizy-Olliveaud',
      role: 'Praticienne & Enseignante LaHoChi'
    },
    featured: false,
    sections: [
      {
        title: "1. La Signification et la Puissance Vibratoire du LaHoChi",
        paragraphs: [
          "Le LaHoChi est une technique énergétique d'une grande pureté et d'une remarquable simplicité d'accès. Chaque syllabe porte une vibration cosmologique précise :",
          "- 'La' fait référence à la lumière, à l'amour et à la sagesse venant des fréquences les plus élevées du cosmos.",
          "- 'Ho' symbolise le mouvement et la circulation fluide de cette énergie à travers tous les niveaux de l'être.",
          "- 'Chi' représente la force de vie universelle primordiale (le Prana ou Ki).",
          "Contrairement à d'autres disciplines énergétiques qui nécessitent de mémoriser de nombreux symboles complexes, le LaHoChi repose sur l'ouverture du canal du praticien et la pose d'un 'Sceau de Protection' énergétique inaltérable."
        ],
        callout: {
          type: 'info',
          title: 'Auto-Régulation Énergétique',
          text: 'Pendant un soin LaHoChi, le praticien ne donne jamais sa propre énergie vitale : il agit uniquement comme un canal récepteur-transmetteur bienveillant. L\'énergie se dirige d\'elle-même là où le receveur en a le plus besoin.'
        }
      },
      {
        title: "2. Déroulement d'une Initiation Complète au LaHoChi",
        paragraphs: [
          "L'initiation au LaHoChi est un passage initiatique qui ouvre et syntonise vos chakras supérieurs (couronne, 3ème œil, cœur et paumes des mains) à cette fréquence vibratoire. Elle se déroule en plusieurs étapes clés :"
        ],
        bulletPoints: [
          "Étude théorique détaillée : Origine de l'énergie, éthique du praticien, prière d'invocation sacrée et explications anatomiques des corps subtils.",
          "Transmission énergétique de l'Enseignant : Cérémonie d'ouverture du canal et activation du sceau de protection de Maître LaHoChi.",
          "Pratique supervisée des positions : Apprentissage du placement exact des mains sur soi-même et sur le receveur.",
          "Remise du manuel pédagogique complet et de l'attestation certifiante de praticien/enseignant."
        ]
      },
      {
        title: "3. Le Cycle d'Intégration des 21 Jours d'Auto-Soins",
        paragraphs: [
          "Après l'initiation, une étape cruciale commence : les 21 jours consécutifs d'auto-traitement. Ce cycle n'est pas une simple révision, c'est une alchimie biologique et vibratoire indispensable :",
          "- Nettoyage des mémoires cellulaires et élimination des toxines énergétiques accumulées.",
          "- Stabilisation du taux vibratoire à un niveau supérieur durable.",
          "- Renforcement de votre propre canal énergétique pour pratiquer ultérieurement sans fatigue ni interférence extérieure."
        ],
        callout: {
          type: 'warning',
          title: 'L\'Importance de l\'Hydratation',
          text: 'Pendant vos 21 jours d\'auto-soins et après chaque séance, buvez au moins 1,5L d\'eau par jour pour soutenir l\'élimination physique des toxines drainées par le soin.'
        }
      },
      {
        title: "4. Les 5 Positions Sacrées du Soin LaHoChi",
        paragraphs: [
          "Une séance complète dure entre 45 et 60 minutes sur une personne vêtue et allongée confortablement. Elle s'articule autour de 5 postures manuelles :"
        ],
        table: {
          headers: ["Position", "Localisation des Mains", "Chakras Concernés", "Effets & Bienfaits Thérapeutiques"],
          rows: [
            ["Position 1 : La Tête", "Mains enveloppant l'arrière du crâne et le sommet", "Couronne & 3ème Œil", "Apaisement du mental, clarté psychologique, régulation du sommeil"],
            ["Position 2 : Le Torse Supérieur", "Mains posées doucement sur les clavicules et le thymus", "Chakra Gorge & Thymus", "Renforcement du système immunitaire, libération des non-dits"],
            ["Position 3 : Les Épaules & Cœur", "Mains sur les épaules et la zone haute du dos", "Chakra du Cœur & Bras", "Décharge des fardeaux émotionnels, pardon, ouverture à l'amour de soi"],
            ["Position 4 : Le Plexus & Hanches", "Mains sur les hanches et les crêtes iliaques", "Plexus Solaire & Sacré", "Libération du stress viscéral, reconnection aux émotions fluides"],
            ["Position 5 : Le Bassin & Ancrage", "Mains sur le bas-ventre et les cuisses", "Chakra Racine & Méridiens", "Enracinement profond à la terre, sécurité intérieure, vitalité globale"]
          ]
        }
      },
      {
        title: "5. Pratiquer le LaHoChi sur Autrui et à Distance",
        paragraphs: [
          "L'énergie de vie ne connaissant aucune frontière spatiale ni temporelle, le soin LaHoChi s'applique avec une efficacité équivalente en présentiel ou à distance.",
          "À l'aide d'une visualisation claire, de la prière d'intention et d'un support témoin (photo, mannequin ou représentation mentale), vous pouvez canaliser le soin pour une personne située à l'autre bout du monde, ainsi que pour des animaux ou des plantes."
        ]
      }
    ],
    faq: [
      {
        question: "Quelle est la principale différence entre le Reiki et le LaHoChi ?",
        answer: "Le Reiki Usui comporte généralement 4 niveaux d'apprentissage distincts avec plusieurs symboles géométriques, tandis que le LaHoChi est une transmission complète en un seul niveau avec une fréquence vibratoire particulièrement élevée et sans aucun symbole à mémoriser."
      },
      {
        question: "Une initiation au LaHoChi à distance est-elle aussi puissante qu'en présentiel ?",
        answer: "Oui, absolument. Dans les plans énergétiques subtils, l'espace et la distance physique n'existent pas. L'initiation à distance en visioconférence individuelle avec un enseignant qualifié transmet la même fréquence vibratoire et la même intégration."
      },
      {
        question: "Faut-il avoir des dons particuliers de magnétiseur pour apprendre le LaHoChi ?",
        answer: "Aucun prérequis ni don de naissance n'est nécessaire. Le LaHoChi est accessible à toute personne animée par le désir de prendre soin d'elle-même et de son entourage."
      },
      {
        question: "Que ressent-on pendant une séance de LaHoChi ?",
        answer: "Les ressentis les plus fréquents sont une douce chaleur enveloppante dans les mains ou le corps, des picotements agréables, une sensation de légèreté flottante et un état de profonde relaxation méditative."
      },
      {
        question: "Que se passe-t-il si j'oublie un jour pendant les 21 jours d'auto-soins ?",
        answer: "Si vous sautez un jour exceptionnellement, reprenez simplement dès le lendemain en prolongeant d'un jour la période pour totaliser vos 21 auto-traitements complets."
      },
      {
        question: "Le LaHoChi peut-il provoquer une crise de guérison ?",
        answer: "Dans de rares cas, une légère fatigue, une soif accrue ou une libération émotionnelle passagère peuvent survenir dans les 24 à 48h. C'est le signe naturel que le corps libère ses blocages. Buvez beaucoup d'eau et reposez-vous."
      }
    ],
    relatedCourse: {
      badge: "Formation & Transmission Complète",
      title: "Initiation Complète au LaHoChi",
      description: "Formation individuelle en visioconférence avec livret pédagogique PDF original, transmission énergétique et suivi personnalisé durant vos 21 jours d'auto-soins.",
      href: "/courses/2",
      price: "150 €"
    }
  },
  {
    id: 1,
    slug: 'benefices-prouves-meditation-pleine-conscience',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
    categories: ['Mindfulness', 'Science'],
    titre: 'Les 8 bénéfices prouvés de la méditation de pleine conscience',
    description: 'Revue des études scientifiques récentes sur les effets du mindfulness sur le stress, l\'anxiété, la concentration et la qualité du sommeil.',
    duree: '10 min',
    date: '3 juin 2025',
    dateIso: '2025-06-03T10:00:00+02:00',
    keywords: ['méditation pleine conscience', 'mindfulness bienfaits', 'neurosciences méditation', 'réduction stress'],
    articleSection: 'Mindfulness & Science',
    featured: false,
  },
  {
    id: 2,
    slug: 'comment-equilibrer-chakra-racine',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    categories: ['Chakras', 'Énergie'],
    titre: 'Comment équilibrer le chakra racine quand vous vous sentez déstabilisé',
    description: 'Signes d\'un chakra racine déséquilibré, causes fréquentes et pratiques concrètes pour retrouver l\'ancrage et la stabilité intérieure.',
    duree: '8 min',
    date: '28 mai 2025',
    dateIso: '2025-05-28T09:00:00+02:00',
    keywords: ['chakra racine', 'muladhara', 'ancrage énergétique', 'peurs et insécurité', 'jaspe rouge'],
    articleSection: 'Chakras & Énergie',
    featured: false,
  }
];

export const trendingArticles = [
  { id: 10, titre: 'Guide Complet de la Lithothérapie : Minéraux & Chakras', categorie: 'Lithothérapie' },
  { id: 9, titre: 'Comment Choisir et Utiliser son Premier Pendule ?', categorie: 'Radiesthésie' },
  { id: 11, titre: 'Initiation au LaHoChi : Soin & Haute Fréquence', categorie: 'LaHoChi' },
];

export type SidebarSection =
  | { type: 'item'; label: string; value: string }
  | { type: 'group'; label: string; items: { label: string; value: string }[] };

export const sidebarSections: SidebarSection[] = [
  { type: 'item', label: 'Lithothérapie',     value: 'Lithothérapie' },
  { type: 'item', label: 'Radiesthésie',      value: 'Radiesthésie' },
  { type: 'item', label: 'LaHoChi',           value: 'LaHoChi' },
  { type: 'item', label: 'Chakras',           value: 'Chakras' },
  { type: 'item', label: 'Mindfulness',       value: 'Mindfulness' },
  {
    type: 'group',
    label: 'Pratiques & Soins',
    items: [
      { label: 'Minéraux & Cristaux', value: 'Minéraux' },
      { label: 'Pendule Divinatoire', value: 'Pendule' },
      { label: 'Soins Énergétiques',  value: 'Soins' },
      { label: 'Énergie Vitale',      value: 'Énergie' },
    ],
  },
  {
    type: 'group',
    label: 'Développement & Science',
    items: [
      { label: 'Science & Méditation', value: 'Science' },
      { label: 'Bien-être Holistique',  value: 'Bien-être' },
    ],
  },
];
