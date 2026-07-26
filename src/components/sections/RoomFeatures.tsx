import { Check } from 'lucide-react'
import { ROOM_TYPES } from '../../data/content'

export function RoomFeatures() {
  return (
    <section
      id="rooms"
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-labelledby="rooms-heading"
    >
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[800px] rounded-full bg-primary/5 blur-[100px]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Custom Luxury Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Accommodation
            </h2>
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </div>

          <h3
            id="rooms-heading"
            className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Signature Suites & Rooms.
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Choose from double or four sharing rooms — meticulously furnished for your utmost comfort, privacy, and peace of mind.
          </p>
        </div>

        {/* Premium Grid Layout */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {ROOM_TYPES.map((room) => (
            <article
              key={room.title}
              className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 sm:p-12 ${room.popular
                  ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-surface to-surface ring-1 ring-primary/30'
                  : 'bg-surface ring-1 ring-border/50 hover:ring-primary/20'
                }`}
            >
              {/* Luxury 'Most Popular' Badge */}
              {room.popular && (
                <div className="absolute right-0 top-0 rounded-bl-[2rem] bg-primary/10 px-6 py-3 backdrop-blur-md sm:px-8 sm:py-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                    Signature Choice
                  </span>
                </div>
              )}

              {/* Room Header */}
              <div className="mb-8 md:mb-10 lg:pr-32">
                <h3 className="font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
                  {room.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                  {room.subtitle}
                </p>
              </div>

              <hr className="mb-8 border-border/50 md:mb-10" aria-hidden="true" />

              {/* Refined Features List */}
              <ul className="flex-1 space-y-5" aria-label={`${room.title} features`}>
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Check className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-text/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Custom High-End CTA Button */}
              <a
                href="#contact"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 active:scale-[0.98] md:mt-12 ${room.popular
                    ? 'bg-primary text-white shadow-md hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20'
                    : 'bg-primary text-white ring-1 ring-inset ring-border/80 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary-dark'
                  }`}
              >
                Reserve This Room
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}