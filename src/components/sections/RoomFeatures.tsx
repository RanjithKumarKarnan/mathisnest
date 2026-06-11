import { Check } from 'lucide-react'
import { ROOM_TYPES } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

export function RoomFeatures() {
  return (
    <section
      className="bg-surface py-20 md:py-28"
      aria-labelledby="rooms-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="rooms-heading"
          eyebrow="Accommodation"
          title="Room Features & Sharing Options"
          subtitle="Choose from double or four sharing rooms — all furnished with comfortable beds, storage, high-speed WiFi, and power backup."
        />

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {ROOM_TYPES.map((room) => (
            <article
              key={room.title}
              className={`relative flex flex-col rounded-2xl border bg-surface p-7 md:p-8 ${
                room.popular
                  ? 'border-primary shadow-soft-lg'
                  : 'border-border shadow-soft'
              }`}
            >
              {room.popular && (
                <span className="absolute -top-3 left-7 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-text">{room.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{room.subtitle}</p>

              <ul className="mt-6 flex-1 space-y-3" aria-label={`${room.title} features`}>
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-text">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10">
                      <Check className="h-3 w-3 text-success" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={room.popular ? 'primary' : 'outline'}
                className="mt-8 w-full"
              >
                Enquire Now
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
