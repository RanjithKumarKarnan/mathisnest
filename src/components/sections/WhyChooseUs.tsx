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
          title="Why Choose Mathi's Nest?"
          subtitle="Discover what makes us the preferred ladies hostel in Trichy for students, nurses, and working professionals."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((card) => (
            <li
              key={card.title}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                aria-hidden="true"
              >
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-text">
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
