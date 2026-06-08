import { Check } from 'lucide-react'
import { ROOM_TYPES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function RoomFeatures() {
  return (
    <section
      className="bg-surface py-20 md:py-28"
      aria-labelledby="rooms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="rooms-heading"
          title="Room Features & Sharing Options"
          subtitle="Choose from single, double, or triple sharing rooms — all fully furnished with attached washrooms."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {ROOM_TYPES.map((room, index) => (
            <article
              key={room.title}
              className={`rounded-2xl border-2 p-6 md:p-8 ${
                index === 1
                  ? 'border-primary bg-background shadow-lg'
                  : 'border-border bg-surface'
              }`}
            >
              {index === 1 && (
                <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-text">{room.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{room.subtitle}</p>

              <ul className="mt-6 space-y-3" aria-label={`${room.title} features`}>
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-text">
                    <Check
                      className="h-4 w-4 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-block w-full rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Enquire Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
