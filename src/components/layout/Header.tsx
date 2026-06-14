import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { SITE, NAV_LINKS } from '../../data/site'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import Logo from '../../assets/logo.svg'

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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled
            ? 'border-b border-border/50 bg-surface/85 py-3 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-5'
          }`}
        role="banner"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">

          {/* Logo Section */}
          <a
            href="#home"
            className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`${SITE.shortName} - Home`}
          >
            {/* <span
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              M
            </span> */}
            <img src={Logo} alt={`${SITE.shortName} logo`} width={30}/> 
            <div className="leading-tight">
              <span className="block font-display text-lg font-bold tracking-wide text-text transition-colors group-hover:text-primary">
                {SITE.shortName}
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                Ladies Hostel Trichy
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-primary' : 'text-text-muted hover:text-text'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 rounded-t-full bg-primary transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
                      }`}
                  />
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-2 px-2 py-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
              aria-label={`Call us at ${SITE.phone}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background transition-colors group-hover:bg-primary/10">
                <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
              </span>
              <span className="hidden xl:inline tracking-wide">{SITE.phone}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg active:scale-95"
            >
              Book a Room
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="relative rounded-full p-2.5 text-text transition-colors hover:bg-background lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Sliding Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-surface shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Drawer Header (Contains Close Button) */}
          <div className="flex h-[88px] items-center justify-between border-b border-border/50 px-6 pt-2">
            <span className="font-display text-lg font-bold tracking-wide text-text">
              Menu
            </span>
            <button
              type="button"
              className="rounded-full p-2 -mr-2 text-text transition-colors hover:bg-background"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-2xl px-5 py-4 text-base font-medium tracking-wide transition-all ${isActive
                          ? 'bg-primary/5 text-primary'
                          : 'text-text hover:bg-background hover:text-primary'
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Drawer Footer */}
          <div className="space-y-4 border-t border-border/50 bg-background/50 p-6">
            <a
              href={SITE.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-surface px-4 py-3.5 text-sm font-medium text-text shadow-sm transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" strokeWidth={1.5} />
              {SITE.phone}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full rounded-full bg-primary px-4 py-3.5 text-center text-sm font-semibold tracking-wide text-white shadow-md transition-transform active:scale-[0.98]"
            >
              Book a Room
            </a>
          </div>
        </div>
      </div>
    </>
  )
}