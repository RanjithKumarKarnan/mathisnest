import { Phone, Shield, Camera, Wifi, UtensilsCrossed, Shirt, MapPin } from 'lucide-react'
import { SITE } from '../../data/site'
import { HERO_TRUST_ITEMS } from '../../data/content'
import { Button } from '../ui/Button'

const trustIcons = [Shield, Camera, Wifi, UtensilsCrossed, Shirt, MapPin]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-background pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #F57C00 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF9800 0%, transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary">
              Premium Ladies Hostel in Trichy
            </p>

            <h1
              id="hero-heading"
              className="mt-6 font-display text-4xl font-bold leading-tight text-text text-balance md:text-5xl lg:text-[3.25rem]"
            >
              Safe & Comfortable Ladies Hostel in Trichy
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-muted md:text-xl">
              Looking for a safe ladies hostel in Trichy? Mathi's Nest provides secure
              accommodation, comfortable rooms, homely food, WiFi, and modern facilities
              for students and working women.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Book Now
              </Button>
              <Button href={SITE.phoneHref} variant="outline" size="lg">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Us
              </Button>
            </div>

            <ul
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
              aria-label="Key trust indicators"
            >
              {HERO_TRUST_ITEMS.map((item, index) => {
                const Icon = trustIcons[index]
                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-surface/80 px-3 py-2.5 text-sm font-medium text-text shadow-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <img
                src="/images/hero-mathis-nest-ladies-hostel-trichy.svg"
                alt="Mathi's Nest Ladies Hostel Trichy - safe and comfortable girls hostel with modern rooms on Race Course Road"
                width={640}
                height={480}
                className="h-auto w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 rounded-xl bg-surface px-5 py-4 shadow-lg md:-bottom-6 md:-left-6"
              role="status"
              aria-label="Rated 5 stars by residents"
            >
              <p className="text-2xl font-bold text-primary" aria-hidden="true">
                ★★★★★
              </p>
              <p className="text-sm font-medium text-text">Trusted by 100+ Residents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
