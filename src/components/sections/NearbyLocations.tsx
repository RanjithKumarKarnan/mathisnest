import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Stethoscope, Landmark, Bus, MapPin, Navigation } from 'lucide-react'
import { NEARBY_LOCATIONS } from '../../data/content'

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Educational: GraduationCap,
  Healthcare: Stethoscope,
  'Tourist & Cultural': Landmark,
  Transport: Bus,
}

/** Distances ending in "m" (metres) are walking distance — highlighted. */
function isWalkable(distance: string) {
  return /\bm\b/.test(distance) && !/km/.test(distance)
}

export function NearbyLocations() {
  return (
    <section
      id="nearby"
      className="relative overflow-hidden bg-surface py-24 md:py-32"
      aria-labelledby="nearby-heading"
    >
      {/* Soft brand glow for depth */}
      <div className="pointer-events-none absolute right-0 top-0 -translate-y-1/3 translate-x-1/3" aria-hidden="true">
        <div className="h-[520px] w-[520px] rounded-full bg-primary/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Prime Location
            </h2>
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </div>

          <h3
            id="nearby-heading"
            className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Everything Close to Home
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Colleges, hospitals, temples, and transport hubs are all just minutes from
            Mathi&rsquo;s Nest on Race Course Road — saving you commute time every single day.
          </p>
        </div>

        {/* Category grid */}
        <ul className="grid gap-6 md:grid-cols-2 xl:gap-8">
          {NEARBY_LOCATIONS.map((group) => {
            const Icon = CATEGORY_ICONS[group.category] ?? MapPin
            return (
              <li
                key={group.category}
                className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-background to-surface p-8 ring-1 ring-border/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 sm:p-10"
              >
                {/* Category header */}
                <div className="mb-8 flex items-center gap-4">
                  <span
                    className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:ring-primary/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
                      {group.category}
                    </h4>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
                      {group.places.length} nearby
                    </p>
                  </div>
                </div>

                {/* Places */}
                <ul className="space-y-1.5">
                  {group.places.map((place) => {
                    const walkable = isWalkable(place.distance)
                    return (
                      <li
                        key={place.name}
                        className="flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-primary/5"
                      >
                        <span className="flex items-center gap-3 text-sm font-medium text-text">
                          <MapPin
                            className="h-4 w-4 shrink-0 text-primary/70"
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                          {place.name}
                        </span>
                        <span
                          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold tabular-nums ${
                            walkable
                              ? 'bg-primary text-white shadow-sm'
                              : 'bg-primary/5 text-primary ring-1 ring-primary/10'
                          }`}
                        >
                          {walkable && (
                            <Navigation className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
                          )}
                          {place.distance}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                {/* Animated bottom accent */}
                <div className="absolute bottom-0 left-10 h-1 w-0 bg-primary opacity-80 transition-all duration-500 ease-out group-hover:w-1/3" aria-hidden="true" />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
