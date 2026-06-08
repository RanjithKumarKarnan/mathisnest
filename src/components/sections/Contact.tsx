import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          title="Contact & Visit Us"
          subtitle="Schedule a visit or get in touch to book your room at the best ladies hostel in Trichy."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-text">
                Get in Touch
              </h3>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-background"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text-muted">Phone</p>
                      <p className="font-semibold text-text">{SITE.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.emailHref}
                    className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-background"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text-muted">Email</p>
                      <p className="font-semibold text-text">{SITE.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 p-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Address</p>
                    <address className="not-italic font-semibold text-text leading-relaxed">
                      {SITE.address.full}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-text-muted">Hours</p>
                    <p className="font-semibold text-text">{SITE.hours.weekdays}</p>
                    <p className="text-sm text-text-muted">{SITE.hours.description}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={SITE.phoneHref} className="flex-1">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </Button>
                <Button href={SITE.emailHref} variant="outline" className="flex-1">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="Mathi's Nest Ladies Hostel Trichy location on Google Maps"
              src={SITE.mapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
