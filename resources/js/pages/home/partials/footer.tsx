import { Link } from '@inertiajs/react'
import { GraduationCap } from 'lucide-react'

const footerLinks = {
  formations: {
    title: 'Formations',
    links: [
      { href: '/courses', label: 'Toutes les formations' },
      { href: '/courses?theme=radiesthesie', label: 'Radiesthésie et pendule' },
      { href: '/courses?theme=chakras', label: 'Chakras et pratiques énergétiques' },
      { href: '/courses?theme=meditation', label: 'Méditation et relaxation' },
      { href: '/courses?theme=developpement-personnel', label: 'Développement personnel' },
    ],
  },
  platform: {
    title: 'FormationSession',
    links: [
      { href: '/how-it-works', label: 'Comment ça marche' },
      { href: '/about', label: 'À propos' },
      { href: '/become-trainer', label: 'Devenir formateur' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  account: {
    title: 'Mon compte',
    links: [
      { href: '/register', label: 'Créer un compte' },
      { href: '/login', label: 'Se connecter' },
      { href: '/student/dashboard', label: 'Mon espace' },
      { href: '/student/courses', label: 'Mes formations' },
    ],
  },
  legal: {
    title: 'Informations légales',
    links: [
      { href: '/legal/mentions-legales', label: 'Mentions légales' },
      { href: '/legal/cgu', label: "Conditions générales d'utilisation" },
      { href: '/legal/terms', label: 'Conditions générales de vente' },
      { href: '/legal/privacy', label: 'Politique de confidentialité' },
      { href: '/legal/cookies', label: 'Gestion des cookies' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border/30 bg-background dark:border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 flex items-center gap-2 border-t border-border/20 pt-8 dark:border-border/40">
          <GraduationCap className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold">FormationSession</span>
          <span className="text-sm text-foreground/50">
            — Des formations en ligne et des ateliers pour découvrir la radiesthésie,
            le pendule, les chakras et différentes pratiques de bien-être.
          </span>
        </div>

        <div className="mb-6 text-center text-sm text-foreground/60">
          <p>contact@formationsession.com — Paris, France</p>
        </div>

        <div className="mb-6 rounded-xl border border-border/20 bg-muted/20 p-4 text-center text-xs leading-relaxed text-foreground/50 dark:border-border/40">
          Les formations et contenus proposés sur FormationSession relèvent du bien-être
          et du développement personnel. Ils ne remplacent pas les conseils, les diagnostics
          ou les traitements d&apos;un professionnel de santé.
        </div>

        <div className="text-center text-xs text-foreground/40">
          &copy; {new Date().getFullYear()} FormationSession. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
