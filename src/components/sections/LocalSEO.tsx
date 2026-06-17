import { MapPin } from 'lucide-react'
import { LOCAL_SEO_CONTENT } from '../../data/content'

export function LocalSEO() {
  return (
    <section
      id="location-seo"
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-labelledby="local-seo-heading"
    >
      {/* Subtle Background Glow for Depth */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Massive Architectural Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-surface px-8 py-16 shadow-2xl sm:px-16 md:py-24 lg:grid lg:grid-cols-12 lg:gap-16">

          {/* Left Column: Sticky Header Area */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-max">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Location Focus
              </h2>
            </div>

            <h3
              id="local-seo-heading"
              className="mb-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl"
            >
              {LOCAL_SEO_CONTENT.title}
            </h3>

            {/* Premium Icon Accent */}
            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-transform duration-500 hover:scale-110 lg:flex">
              <MapPin className="h-6 w-6" strokeWidth={1.2} aria-hidden="true" />
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <div className="relative space-y-8 lg:border-l lg:border-border/50 lg:pl-12">

              {/* Decorative Watermark Text */}
              <div
                className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-8xl font-bold tracking-tighter text-text-muted/5 sm:-right-8 sm:text-[10rem]"
                aria-hidden="true"
              >
                TRICHY
              </div>

              {/* Mapped Paragraphs with Editorial Styling */}
              {LOCAL_SEO_CONTENT.paragraphs.map((paragraph, index) => (
                <div key={paragraph.slice(0, 50)} className="relative z-10 group">
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${index === 0
                        ? 'text-lg font-medium text-text sm:text-xl' // Lead paragraph stands out
                        : 'text-base text-text-muted group-hover:text-text sm:text-lg' // Subsequent paragraphs subtly highlight on hover
                      }`}
                  >
                    {paragraph}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}