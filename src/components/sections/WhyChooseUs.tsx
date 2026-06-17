import { WHY_CHOOSE_US } from '../../data/content'

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-surface py-24 md:py-32"
      aria-labelledby="why-choose-heading"
    >
      {/* Subtle Background Glow for added depth */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3" aria-hidden="true">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Custom Luxury Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Why Mathi's Nest
            </h2>
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </div>

          <h3
            id="why-choose-heading"
            className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Built Around Your Safety & Comfort
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Discover what makes us the preferred ladies hostel in Trichy for students, nurses, and working professionals.
          </p>
        </div>

        {/* Editorial Magazine Grid */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {WHY_CHOOSE_US.map((card, index) => {
            const padIndex = String(index + 1).padStart(2, '0')

            return (
              <li
                key={card.title}
                className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-background to-surface p-8 sm:p-10 ring-1 ring-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Watermark Index Number */}
                <div
                  className="absolute right-6 top-4 select-none text-7xl font-bold tracking-tighter text-text-muted/5 transition-colors duration-500 group-hover:text-primary/5"
                  aria-hidden="true"
                >
                  {padIndex}
                </div>

                <div className="relative z-10">
                  {/* Floating Icon */}
                  <div
                    className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:ring-primary/20"
                    aria-hidden="true"
                  >
                    <card.icon className="h-7 w-7" strokeWidth={1.2} />
                  </div>

                  <h4 className="mb-4 font-display italic text-xl font-bold tracking-tight text-text sm:text-2xl">
                    {card.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-text-muted">
                    {card.description}
                  </p>
                </div>

                {/* Animated Bottom Accent Line */}
                <div className="absolute bottom-0 left-10 h-1 w-0 bg-primary opacity-80 transition-all duration-500 ease-out group-hover:w-1/3" />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}