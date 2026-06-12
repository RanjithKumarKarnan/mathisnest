import { FACILITIES } from '../../data/content'

export function Facilities() {
  return (
    <section
      id="facilities"
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-labelledby="facilities-heading"
    >
      {/* Custom Keyframes for the Infinite Marquee */}
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -50% of the total width minus half the gap */
        }
        .animate-marquee-horizontal {
          display: flex;
          width: max-content;
          animation: marquee-horizontal 45s linear infinite;
        }
      `}</style>

      {/* Subtle Top Gradient Line */}
      <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />

      {/* Header Container (Constrained Width) */}
      <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8 md:mb-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-primary" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Premium Amenities
            </h2>
          </div>

          <h3
            id="facilities-heading"
            className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Everything you need, thoughtfully provided.
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Modern amenities designed for comfort, safety, and convenience at our premier ladies hostel in Trichy.
          </p>
        </div>
      </div>

      {/* Full-Width Marquee Container */}
      <div className="relative flex w-full overflow-hidden">

        {/* Left/Right Fade Gradients for smooth entrance/exit */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-32" />

        {/* Marquee Track - Pauses on Hover */}
        <div className="animate-marquee-horizontal gap-8 px-4 hover:[animation-play-state:paused]">

          {/* We duplicate the FACILITIES array to create the seamless loop */}
          {[...FACILITIES, ...FACILITIES].map((facility, index) => {
            // Determine if this is a duplicate for accessibility purposes
            const isDuplicate = index >= FACILITIES.length

            return (
              <div
                key={`${facility.title}-${index}`}
                aria-hidden={isDuplicate}
                className="group relative flex w-[320px] shrink-0 flex-col overflow-hidden rounded-[32px] border border-border/40 bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-background hover:shadow-2xl hover:shadow-primary/5 sm:w-[380px]"
              >
                {/* Delicate Icon Treatment */}
                <div
                  className="mb-8 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:ring-primary/20"
                  aria-hidden="true"
                >
                  <facility.icon className="h-6 w-6" strokeWidth={1.2} />
                </div>

                {/* Card Content */}
                <h4 className="mb-3 font-display text-xl font-bold tracking-tight text-text">
                  {facility.title}
                </h4>

                <p className="mb-8 flex-1 text-sm leading-relaxed text-text-muted">
                  {facility.description}
                </p>

                {/* Refined Quote Section */}
                <div className="mt-auto border-t border-border/50 pt-6 transition-colors duration-500 group-hover:border-primary/20">
                  <p className="font-display text-[13px] italic leading-relaxed text-text/80">
                    &ldquo;{facility.quote}&rdquo;
                  </p>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                    &mdash; {facility.quoteSource}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}