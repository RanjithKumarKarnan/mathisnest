import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'

// Upgraded Luxury Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 transition-colors duration-500 ${i < rating
              ? 'fill-primary text-primary'
              : 'fill-transparent text-primary/30'
            }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-surface py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      {/* Custom Keyframes for the Infinite Marquee */}
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -50% of total width minus half gap */
        }
        .animate-marquee-horizontal {
          display: flex;
          width: max-content;
          animation: marquee-horizontal 50s linear infinite;
        }
      `}</style>

      <div className="mx-auto mb-16 max-w-7xl px-6 lg:px-8 md:mb-24">
        {/* Custom Luxury Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Resident Reviews
            </h2>
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </div>

          <h3
            id="testimonials-heading"
            className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Words from our residents.
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Real experiences from students and working women who call Mathi's Nest their home in Trichy.
          </p>
        </div>
      </div>

      {/* Full-Width Marquee Container */}
      <div className="relative flex w-full overflow-hidden">

        {/* Left/Right Fade Gradients for smooth entrance/exit */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-surface to-transparent md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-surface to-transparent md:w-32" />

        {/* Marquee Track - Pauses on Hover */}
        <div className="animate-marquee-horizontal gap-8 px-4 hover:[animation-play-state:paused]">

          {/* Duplicate the TESTIMONIALS array to create the seamless loop */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => {
            const isDuplicate = index >= TESTIMONIALS.length

            return (
              <div
                key={`${testimonial.name}-${index}`}
                aria-hidden={isDuplicate}
                className="group relative flex w-[320px] shrink-0 flex-col overflow-hidden rounded-[32px] border border-border/40 bg-background p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 sm:w-[400px] sm:p-10"
              >
                {/* Decorative Watermark Icon */}
                <Quote
                  className="absolute -right-4 -top-4 h-32 w-32 text-primary/5 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Rating */}
                  <div className="mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-8 flex-1">
                    <p className="font-display text-[14px] italic leading-relaxed text-text/90">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <footer className="mt-auto flex items-center gap-4 border-t border-border/50 pt-6 transition-colors duration-500 group-hover:border-primary/20">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-lg font-bold text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-display text-base font-bold tracking-tight text-text">
                        {testimonial.name}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}