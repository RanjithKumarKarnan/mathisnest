import { FACILITIES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-background py-20 md:py-28"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="facilities-heading"
          eyebrow="Amenities"
          title="Everything You Need, Thoughtfully Provided"
          subtitle="Modern amenities designed for comfort, safety, and convenience at our girls hostel in Trichy."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FACILITIES.map((facility) => (
            <li
              key={facility.title}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft-lg"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                aria-hidden="true"
              >
                <facility.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-text">{facility.title}</h3>
              <p className="mt-1 border-l-2 border-primary/30 pl-3 text-sm italic text-text-muted">
                &ldquo;{facility.quote}&rdquo;
                <span className="mt-0.5 block text-xs not-italic text-primary">
                  &mdash; {facility.quoteSource}
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {facility.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
