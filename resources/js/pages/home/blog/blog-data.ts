export type FAQItem = {
  question: string;
  answer: string;
};

export type TableRow = {
  [key: string]: string;
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
    image: '/assets/images/blog_lithotherapie_chakras.jpg',
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
    image: '/assets/images/course_radiesthesie_decouverte.png',
    categories: ['Radiesthésie', 'Pendule'],
    titre: 'Comment Choisir et Utiliser son Premier Pendule Divinatoire ?',
    description: 'Découvrez comment choisir votre premier pendule divinatoire (bois, laiton ou cristal), l\'activer en 4 étapes et éviter les pièges grâce à l\'effet idéomoteur.',
    duree: '12 min',
    date: '18 août 2026',
    dateIso: '2026-08-18T10:00:00+02:00',
    keywords: [
      'radiesthésie',
      'pendule divinatoire débutant',
      'choisir son pendule',
      'convention oui non pendule',
      'cadrans de radiesthésie',
      'taux vibratoire bovis',
      'initiation radiesthésie'
    ],
    articleSection: 'Radiesthésie & Arts Divinatoires',
    summaryAnswer: 'Pour débuter en radiesthésie, le pendule en laiton de 15 à 25g (goutte d\'eau ou cône) est le choix numéro 1. Il est neutre énergétiquement et offre une excellente réactivité. Le pendule amplifie les micro-mouvements musculaires inconscients guidés par votre système nerveux (effet idéomoteur).',
    author: {
      name: 'Fabienne Dizy-Olliveaud',
      role: 'Praticienne en Radiesthésie'
    },
    featured: false,
    sections: [
      {
        title: "1. Qu'est-ce qu'un Pendule Divinatoire et Comment Fonctionne-t-il ?",
        paragraphs: [
          "Un pendule divinatoire est un objet pesant suspendu à un fil ou une chaîne, utilisé en radiesthésie pour traduire les réponses de l'inconscient. En science et en radiesthésie moderne, son mouvement s'explique par la réponse idéomotrice.",
          "Lorsque vous posez une question dont votre subconscient ou votre intuition perçoit la vibration, votre système neuromusculaire produit d'infimes oscillations invisibles. Le pendule agit alors comme un amplificateur visuel instantané."
        ]
      },
      {
        title: "2. Bois, Métal ou Cristal : Quel Matériau Choisir pour Débuter ?",
        paragraphs: [
          "Le choix de la matière influence la sensibilité et l'inertie du pendule lors de vos mesures :"
        ],
        table: {
          headers: ["Matériau", "Poids Moyen", "Sensibilité", "Entretien", "Recommandation"],
          rows: [
            ["Laiton (Métal)", "15g - 30g", "Très Réactif ⭐⭐⭐⭐⭐", "Aucun (Neutre)", "Idéal Débutants & Praticiens (#1)"],
            ["Bois (Buis, Ébène)", "8g - 15g", "Doux ⭐⭐⭐", "Dépoussiérage", "Géobiologie & Extérieur"],
            ["Cristal de Roche", "15g - 25g", "Amplificateur ⭐⭐⭐⭐", "Purification Eau / Sauge", "Soins des chakras & Énergétique"]
          ]
        }
      },
      {
        title: "3. Protocole Pas-à-Pas : Activer et Calibrer son Pendule en 4 Étapes",
        bulletPoints: [
          "Étape 1 : Purification & Centrage : Passez le pendule dans la fumée de sauge blanche ou de palo santo.",
          "Étape 2 : Posture et prise en main : Asseyez-vous, pieds à plat au sol. Tenez la chaîne entre pouce et index à 5-7 cm de la masse.",
          "Étape 3 : Définir sa convention mentale : Demandez 'Montre-moi un OUI', observez le sens de rotation, puis demandez 'Montre-moi un NON'.",
          "Étape 4 : Première séance de calibration : Commencez par des questions fermées dont vous connaissez la réponse avec certitude."
        ]
      }
    ],
    faq: [
      {
        question: "Est-ce que le pendule peut se tromper ?",
        answer: "Le pendule lui-même ne se trompe pas, mais l'opérateur peut influencer les résultats si l'état émotionnel est perturbé ou s'il y a une attente forte sur la réponse (effet d'autosuggestion)."
      },
      {
        question: "Faut-il nettoyer un pendule en laiton ?",
        answer: "Le laiton est un métal neutre qui ne retient pas la mémoire vibratoire comme un cristal. Un simple essuyage avec un chiffon doux suffit."
      }
    ],
    relatedCourse: {
      badge: "Formation Pratique",
      title: "Atelier Découverte de la Radiesthésie",
      description: "Apprenez à utiliser votre pendule, établissez vos conventions et maîtrisez les cadrans de mesure vibratoire en 3 heures d'initiation.",
      href: "/courses/4",
      price: "50 €"
    }
  },
  {
    id: 11,
    slug: 'initiation-lahochi-frequence-soin-energetique',
    image: '/assets/images/course_lahochi.png',
    categories: ['LaHoChi', 'Énergie', 'Soins'],
    titre: 'Initiation au LaHoChi : Comprendre cette Haute Fréquence de Guérison Énergétique',
    description: 'Qu\'est-ce que le LaHoChi ? Comment se déroule l\'initiation en visioconférence, les 21 jours d\'auto-soins et la transmission des positions sacrées des mains.',
    duree: '14 min',
    date: '10 sept. 2026',
    dateIso: '2026-09-10T14:00:00+02:00',
    keywords: [
      'lahochi',
      'initiation lahochi',
      'soin énergétique lahochi',
      '21 jours auto soins',
      'apposer les mains lahochi',
      'formation lahochi certifiante',
      'taux vibratoire'
    ],
    articleSection: 'Soins Énergétiques & LaHoChi',
    summaryAnswer: 'Le LaHoChi est une technique énergétique de très haute fréquence spirituelle transmise par imposition des mains. Composé de "La" (lumière et amour), "Ho" (mouvement) et "Chi" (force vitale), il permet de dissoudre les blocages émotionnels et de restructurer le corps éthérique en seulement 5 positions sacrées.',
    author: {
      name: 'Fabienne Dizy-Olliveaud',
      role: 'Praticienne & Enseignante LaHoChi'
    },
    featured: false,
    sections: [
      {
        title: "1. La Signification et les Origines du LaHoChi",
        paragraphs: [
          "Le LaHoChi est considéré comme l'une des plus hautes fréquences de guérison par imposition des mains actuellement accessibles. Le son 'La' fait référence à la lumière, à l'amour et à la sagesse venant des fréquences les plus élevées. Le son 'Ho' évoque le mouvement de cette énergie dans les corps subtils, et le son 'Chi' est la force de vie universelle présente en tout être vivant.",
          "Cette technique se distingue par sa simplicité et sa puissance d'action sur les méridiens et le système nerveux autonome."
        ]
      },
      {
        title: "2. Les 5 Positions Sacrées et les 21 Jours d'Auto-Soins",
        paragraphs: [
          "L'initiation au LaHoChi comprend une transmission énergétique directe suivie d'une période d'intégration de 21 jours :"
        ],
        bulletPoints: [
          "Position 1 : Tête et chakra coronal (clarification mentale et connexion spirituelle).",
          "Position 2 : Yeux et tempes (apaisement du système nerveux et intuition).",
          "Position 3 : Gorge et thymus (libération de l'expression et renforcement immunitaire).",
          "Position 4 : Épaules et cœur (décharge du poids émotionnel et ouverture affective).",
          "Position 5 : Hanches et bas-ventre (ancrage et harmonisation des chakras inférieurs)."
        ]
      }
    ],
    faq: [
      {
        question: "Quelle est la différence entre le Reiki et le LaHoChi ?",
        answer: "Le Reiki utilise des symboles et comporte généralement 3 à 4 niveaux d'apprentissage, tandis que le LaHoChi se transmet en une seule initiation complète avec 5 positions fondamentales et utilise une fréquence vibratoire particulièrement élevée."
      },
      {
        question: "Peut-on pratiquer le LaHoChi sur soi-même et à distance ?",
        answer: "Absolument. Dès l'initiation, vous êtes autonome pour réaliser des auto-soins complets et des séances à distance sur autrui grâce à la prière d'activation et la visualisation."
      }
    ],
    relatedCourse: {
      badge: "Transmission Énergétique",
      title: "Initiation Complète au LaHoChi",
      description: "Formation en visioconférence individuelle avec livret PDF complet, transmission énergétique et accompagnement durant les 21 jours d'auto-soins.",
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
