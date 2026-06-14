import { ABOUT_CONTENT } from '../../data/content'
import { ShieldCheck } from 'lucide-react'
import Profile1 from '../../assets/profile-1.png'
import Profile2 from '../../assets/profile-2.png'
import Profile3 from '../../assets/profile-3.png'

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-24">

          {/* Left Column - Visuals (Takes up 5 columns) */}
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            {/* Delicate offset border frame */}
            <div className="absolute -inset-y-4 -inset-x-4 border border-primary/20 rounded-t-[140px] rounded-b-2xl transition-transform duration-700 hover:scale-[1.02]" aria-hidden="true" />

            <div className="relative z-10 overflow-hidden shadow-2xl rounded-t-[120px] rounded-b-xl border border-border/50 bg-surface">
              <img
                src="/images/about.jpg" // Dummy path as requested
                alt="Elegant interiors of Mathi's Nest ladies hostel"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Floating Trust Badge (Glassmorphism) */}
            <div className="absolute -bottom-8 -right-4 z-20 flex items-center gap-4 rounded-2xl border border-border/40 bg-surface/85 p-5 shadow-xl backdrop-blur-md sm:-right-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-text">
                  Safe & Secure
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                  24/7 Monitored
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content (Takes up 7 columns) */}
          <div className="relative z-10 order-1 lg:order-2 lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-2 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" aria-hidden="true" />
              <h2
                id="about-heading"
                className="text-[10px] font-bold italic uppercase tracking-[0.3em] text-primary"
              >
                Discover Mathi's Nest
              </h2>
            </div>

            {/* Main Title */}
            <h3 className="mb-4 text-4xl font-bold leading-[1.15] tracking-tight text-text md:text-5xl lg:text-6xl">
              {ABOUT_CONTENT.title}
            </h3>

            {/* Paragraphs with Editorial Styling */}
            <div className="space-y-6">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={`leading-relaxed text-text-muted ${index === 0
                      ? 'text-base sm:text-lg font-medium text-text/90' // First paragraph acts as a sophisticated lead-in
                      : 'text-sm sm:text-base font-normal'
                    }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Optional Signature / Sub-CTA area */}
            <div className="mt-12 flex items-center gap-6 border-t border-border/50 pt-8">
              <div className="flex -space-x-3">
                {/* Dummy avatars for visual social proof */}
                {[Profile1, Profile2, Profile3].map((src, idx) => (
                  <div key={idx} className="h-10 w-10 rounded-full border-2 border-background bg-surface-muted shadow-sm overflow-hidden">
                    <img src={src} alt={`Profile ${idx + 1}`} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                Trusted by <span className="font-bold text-primary">100+</span> Women
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}