import { FACILITIES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function Facilities() {
  return (
    <section
      id="facilities"
      className="py-20 md:py-28"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="facilities-heading"
          title="Our Facilities"
          subtitle="Modern amenities designed for comfort, safety, and convenience at our girls hostel in Trichy."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FACILITIES.map((facility) => (
            <li
              key={facility.title}
              className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-105"
                aria-hidden="true"
              >
                <facility.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-text">{facility.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {facility.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
