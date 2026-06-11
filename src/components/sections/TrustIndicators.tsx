import { Shield, Star, Users, MapPin } from 'lucide-react'

const indicators = [
  {
    icon: Shield,
    value: '24/7',
    label: 'Security & CCTV',
    description: 'Round-the-clock protection',
  },
  {
    icon: Star,
    value: '4.5★',
    label: 'Resident Rating',
    description: 'From 39+ verified reviews',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Happy Residents',
    description: 'Students & working women',
  },
  {
    icon: MapPin,
    value: '0.5 km',
    label: 'Prime Location',
    description: 'Race Course Road, Trichy',
  },
]

export function TrustIndicators() {
  return (
    <section className="border-y border-border bg-surface py-10" aria-label="Trust indicators">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-border">
          {indicators.map((item) => (
            <li key={item.label} className="px-2 text-center md:px-6">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <p className="mt-3 font-display text-2xl font-bold text-text md:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-text">{item.label}</p>
              <p className="mt-0.5 text-xs text-text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
