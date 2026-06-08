import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { SITE, NAV_LINKS } from '../../data/site'
import { Button } from '../ui/Button'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''))

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 shadow-md backdrop-blur-md' : 'bg-surface/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`${SITE.shortName} - Home`}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white"
            aria-hidden="true"
          >
            M
          </span>
          <div className="leading-tight">
            <span className="block font-display text-lg font-bold text-text">
              {SITE.shortName}
            </span>
            <span className="block text-xs text-text-muted">Ladies Hostel Trichy</span>
          </div>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary"
            aria-label={`Call us at ${SITE.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xl:inline">{SITE.phone}</span>
          </a>
          <Button href="#contact" size="sm">
            Book a Room
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-text hover:bg-background lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}
        aria-label="Mobile navigation"
      >
        <div className="border-t border-border bg-surface px-4 py-4 shadow-lg">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-text hover:bg-background hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-3 border-t border-border pt-4">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 px-4 text-sm font-medium text-text-muted"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
            <Button href="#contact" className="w-full" onClick={closeMenu}>
              Book a Room
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
