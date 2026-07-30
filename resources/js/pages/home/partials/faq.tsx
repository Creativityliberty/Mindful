import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "Qu'est-ce que FormationSession ?",
    a: "FormationSession est une plateforme francophone consacrée aux formations dans les domaines du bien-être et du développement personnel. Elle propose des formations en ligne et des ateliers en présentiel animés par des formateurs et des praticiens identifiés.",
  },
  {
    q: 'Quelles formations sont disponibles ?',
    a: "Les premières formations portent notamment sur la radiesthésie, l'utilisation du pendule et l'exploration des chakras. D'autres thèmes pourront être proposés progressivement par les formateurs présents sur la plateforme.",
  },
  {
    q: 'Les formations sont-elles accessibles aux débutants ?',
    a: "Oui, plusieurs programmes sont spécialement conçus pour les personnes qui découvrent une pratique. Le niveau recommandé et les éventuels prérequis sont indiqués sur chaque page de formation.",
  },
  {
    q: 'Comment accéder à une formation en ligne ?',
    a: "Après votre inscription et la validation de votre commande, la formation apparaît dans votre espace personnel. Vous pouvez alors consulter les cours et les ressources incluses selon les modalités indiquées sur la page du programme.",
  },
  {
    q: "Quelle est la différence entre un atelier et une formation en ligne ?",
    a: "Un atelier se déroule à une date et dans un lieu définis, en présence du formateur. Une formation en ligne est accessible depuis votre espace personnel et peut généralement être suivie selon vos disponibilités.",
  },
  {
    q: "Que contient une formation ?",
    a: "Le contenu dépend du programme choisi. Une formation peut comprendre des vidéos, des textes, des exercices, des méditations guidées, des documents téléchargeables ou des sessions en direct. Les éléments inclus sont précisés sur chaque page.",
  },
  {
    q: "Les formations sont-elles certifiantes ?",
    a: "Une formation est présentée comme certifiante uniquement lorsqu'elle mène à une certification officielle clairement identifiée. Une attestation de participation ou de suivi ne constitue pas nécessairement une certification professionnelle.",
  },
  {
    q: "Les formations peuvent-elles remplacer un suivi médical ?",
    a: "Non. Les formations proposées sur FormationSession relèvent du bien-être et du développement personnel. Elles ne permettent pas d'établir un diagnostic et ne remplacent pas les conseils ou les traitements d'un professionnel de santé.",
  },
  {
    q: "Puis-je poser des questions au formateur ?",
    a: "Les possibilités d'échange dépendent de la formation choisie. La page du programme précise si un espace de discussion, une messagerie, une session en direct ou un accompagnement est inclus.",
  },
  {
    q: "Comment devenir formateur ?",
    a: "Consultez la page « Devenir formateur » et présentez votre parcours ainsi que votre projet de formation. Votre candidature sera étudiée avant la publication de votre profil et de vos contenus.",
  },
  {
    q: "Comment demander un remboursement ?",
    a: "Les conditions d'annulation et de remboursement dépendent du type de programme et de la date d'accès aux contenus. Elles sont précisées dans les conditions générales de vente et rappelées avant la validation de la commande.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-border/30 dark:border-border/60"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-base font-medium">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-foreground/50 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="pb-5 text-sm leading-relaxed text-foreground/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
