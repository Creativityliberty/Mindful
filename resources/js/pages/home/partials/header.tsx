import { Link } from '@inertiajs/react'
import { Menu, X, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/courses', label: 'Nos formations' },
  { href: '/become-trainer', label: 'Devenir formateur' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Mon espace' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <GraduationCap className="h-6 w-6 text-primary" />
          FormationSession
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="default" size="sm" asChild className="rounded-full">
            <Link href="/courses">Explorer les formations</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-foreground/70"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" asChild className="mt-2 rounded-full">
              <Link href="/courses">Explorer les formations</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
