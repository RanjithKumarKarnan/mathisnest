import { Shield, Star, Users, Award } from 'lucide-react'

const indicators = [
  {
    icon: Shield,
    value: '24/7',
    label: 'Security & CCTV',
    description: 'Round-the-clock protection',
  },
  {
    icon: Star,
    value: '5.0',
    label: 'Resident Rating',
    description: 'Consistently top-rated hostel',
  },
  {
    icon: Users,
    value: '100+',
    label: 'Happy Residents',
    description: 'Students & working women',
  },
  {
    icon: Award,
    value: '#1',
    label: 'Prime Location',
    description: 'Race Course Road, Trichy',
  },
]

export function TrustIndicators() {
  return (
    <section className="border-y border-border bg-surface py-10" aria-label="Trust indicators">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {indicators.map((item) => (
            <li key={item.label} className="text-center">
              <item.icon
                className="mx-auto h-8 w-8 text-primary"
                aria-hidden="true"
              />
              <p className="mt-2 text-2xl font-bold text-text md:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-text">{item.label}</p>
              <p className="mt-0.5 text-xs text-text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
