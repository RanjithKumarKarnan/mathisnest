import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react'
import { SITE, NAV_LINKS } from '../../data/site'
import { FACILITIES } from '../../data/content'
import Logo from '../../assets/logo.svg'


export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showTopBtn, setShowTopBtn] = useState(false)

  // Handle scroll detection for the "Scroll to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer className="relative overflow-hidden bg-[#0A0A0A] pt-24 text-white sm:pt-32" role="contentinfo">

        {/* Massive Full-Size Luxury Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
          <span className="select-none whitespace-nowrap font-display font-black leading-none text-white text-[45vw] md:text-[34vw]">
            MATHI
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

            {/* Brand Column (Spans 4 columns on desktop) */}
            <div className="lg:col-span-4 lg:pr-8">
              <div className="flex items-center gap-4">
              <img src={Logo} alt={`${SITE.shortName} logo`} width={30}/> 
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight">{SITE.shortName}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Ladies Hostel Trichy</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/60">
                A premium, safe haven for students and working women. Experience secure accommodation with homely food, modern amenities, and a vibrant community.
              </p>

              {/* Premium Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href={SITE.social.facebook}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4 fill-white/60 transition-colors group-hover:fill-primary" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={SITE.social.instagram}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-4 w-4 fill-white/60 transition-colors group-hover:fill-primary" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links Column (Spans 2 columns) */}
            <div className="lg:col-span-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">Navigation</h3>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-white/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities Column (Spans 2 columns) */}
            <div className="lg:col-span-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">Amenities</h3>
              <ul className="space-y-4">
                {FACILITIES.slice(0, 5).map((facility) => (
                  <li key={facility.title}>
                    <span className="text-sm font-medium text-white/70">{facility.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column (Spans 4 columns) */}
            <div className="lg:col-span-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 mb-6">Contact Us</h3>
              <ul className="space-y-5">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="group flex items-start gap-4 transition-colors hover:text-primary"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/10">
                      <Phone className="h-3.5 w-3.5 text-white/60 group-hover:text-primary" aria-hidden="true" />
                    </div>
                    <span className="mt-1.5 text-sm font-medium text-white/80">{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.emailHref}
                    className="group flex items-start gap-4 transition-colors hover:text-primary"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary/10">
                      <Mail className="h-3.5 w-3.5 text-white/60 group-hover:text-primary" aria-hidden="true" />
                    </div>
                    <span className="mt-1.5 text-sm font-medium text-white/80">{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5">
                      <MapPin className="h-3.5 w-3.5 text-white/60" aria-hidden="true" />
                    </div>
                    <div className="mt-1.5 flex flex-col items-start gap-2">
                      <address className="text-sm font-medium not-italic leading-relaxed text-white/80">
                        {SITE.address.full}
                      </address>
                      <a
                        href={SITE.mapsUrl}
                        className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="border-b border-primary/30 transition-colors group-hover:border-primary">View on Maps</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 border-t border-white/10 py-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-white/40 font-medium">
            <p>
              {SITE.copyright.replace('2026', String(currentYear))}
            </p>
            <p>
              Designed with care by{' '}
              <a
                href="https://rancotechnology.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-primary transition-colors"
              >
                RancoTech
              </a>.
            </p>
          </div>
        </div>
      </footer>

      {/* --- Floating Action Buttons --- */}

      {/* Chat / WhatsApp Floating Button (Lucide Icon) */}
      <a
        href={SITE.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-white/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:bg-[#20bd5a] active:scale-95 ${showTopBtn ? 'bottom-20' : 'bottom-6'
          }`}
      >
        <MessageCircle className="h-5 w-5" strokeWidth={2} />
      </a>

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-surface text-text shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-border/50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-background hover:text-primary active:scale-95 ${showTopBtn ? 'bottom-6 opacity-100' : 'bottom-6 translate-y-10 opacity-0 pointer-events-none'
          }`}
      >
        <ArrowUp className="h-5 w-5" strokeWidth={2} />
      </button>
    </>
  )
}