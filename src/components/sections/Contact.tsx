import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { SITE } from "../../data/site";

const contactItems = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
  { icon: MapPin, label: "Location", value: SITE.address.full, href: SITE.mapsUrl },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Subtle Background Glow for light background */}
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/2 translate-x-1/3">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Custom Luxury Header (Restored for Light BG) */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Get in Touch
            </h2>
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </div>

          <h3
            id="contact-heading"
            className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            We'd love to hear from you.
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Schedule a visit or reach out to secure your room at the premier ladies hostel in Trichy.
          </p>
        </div>

        {/* Architectural Split Card */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-surface ring-1 ring-border/50 shadow-2xl lg:grid lg:grid-cols-5">

          {/* Left Column: Contact Methods (Takes up 2/5 of the grid) */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-2">
            <h4 className="mb-8 font-display text-2xl font-bold tracking-tight text-text">
              Direct Contact
            </h4>

            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Location' ? '_blank' : '_self'}
                    rel={item.label === 'Location' ? 'noopener noreferrer' : ''}
                    className="group relative flex items-start gap-5 rounded-2xl p-4 transition-all duration-500 hover:bg-background hover:shadow-sm ring-1 ring-transparent hover:ring-border/50"
                  >
                    {/* Delicate Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:ring-primary/30">
                      <Icon className="h-6 w-6" strokeWidth={1.2} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted transition-colors duration-300 group-hover:text-primary">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-relaxed text-text md:text-base">
                        {item.value}
                      </p>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 hidden sm:block">
                      <ArrowUpRight className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Custom High-End CTA Button */}
            <div className="mt-10 border-t border-border/50 pt-8">
              <a
                href={SITE.phoneHref}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-md transition-all duration-300 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Now to Book
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map & Hours (Takes up 3/5 of the grid) */}
          <div className="relative min-h-[400px] lg:col-span-3">
            {/* Dummy Image Placeholder for Map - Change path later */}
            <img
              src="/images/hero/2.png"
              alt="Map location of Mathi's Nest"
              className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-1000 hover:scale-105 hover:grayscale-0"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Glassmorphism Hours Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 lg:left-auto lg:w-80">
              <div className="rounded-2xl border border-white/20 bg-surface/85 p-6 backdrop-blur-md shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h4 className="font-display text-lg font-bold tracking-tight text-text">
                    Operating Hours
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Days</span>
                    <span className="text-sm font-medium text-text">{SITE.hours.weekdays}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Reception</span>
                    <span className="mt-1 block text-sm font-medium text-text-muted">{SITE.hours.description}</span>
                  </div>
                </div>

                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-background px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-text transition-colors hover:bg-primary hover:text-white hover:border-primary"
                >
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}