import { WHY_CHOOSE_US } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyChooseUs() {
  return (
    <section
      className="bg-surface py-20 md:py-28"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="why-choose-heading"
          eyebrow="Why Mathi's Nest"
          title="Built Around Your Safety & Comfort"
          subtitle="What makes us the preferred ladies hostel in Trichy for students, nurses, and working professionals."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((card) => (
            <li
              key={card.title}
              className="group rounded-2xl border border-border bg-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft-lg"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                aria-hidden="true"
              >
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-text">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
