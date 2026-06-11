import {
  Phone,
  Shield,
  Camera,
  Wifi,
  UtensilsCrossed,
  Shirt,
  MapPin,
  Star,
} from "lucide-react";
import { SITE } from "../../data/site";
import { HERO_TRUST_ITEMS } from "../../data/content";
import { Button } from "../ui/Button";

const trustIcons = [Shield, Camera, Wifi, UtensilsCrossed, Shirt, MapPin];

const stats = [
  { value: "39+", label: "Resident Reviews" },
  { value: "4.5★", label: "Average Rating" },
  { value: "24/7", label: "Security & Support" },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background pt-28 md:pt-32"
    >
      {/* Soft ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(60rem 40rem at 85% -10%, rgba(232, 98, 14, 0.10), transparent 60%),
            radial-gradient(50rem 40rem at -10% 20%, rgba(245, 158, 11, 0.08), transparent 55%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary shadow-soft">
              <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
              Trusted Ladies Hostel in Trichy
            </p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
              Race Course Road · Khaja Nagar · Trichy
            </p>

            <h1
              id="hero-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-text sm:text-5xl lg:text-6xl"
            >
              A Safe, Comfortable Home for Women in Trichy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Mathi's Nest offers well-maintained rooms, homely food, high-speed
              WiFi, 24/7 CCTV security, and a peaceful environment designed for
              students, nurses, and working women.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact" size="lg" className="sm:min-w-[180px]">
                Book a Room
              </Button>

              <Button
                href={SITE.phoneHref}
                variant="outline"
                size="lg"
                className="sm:min-w-[180px]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </Button>
            </div>

            {/* Statistics */}
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-bold text-text">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft-lg">
              <img
                src="/images/hero-mathis-nest-ladies-hostel-trichy.svg"
                alt="Mathi's Nest Ladies Hostel Trichy with safe accommodation and modern facilities for women"
                width={640}
                height={480}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Floating Trust Card */}
            <div
              className="absolute -bottom-5 left-5 rounded-2xl border border-border bg-surface px-5 py-4 shadow-soft-lg"
              role="status"
              aria-label="Rated 4.5 out of 5 by residents"
            >
              <p className="text-base font-bold tracking-tight text-primary" aria-hidden="true">
                ★★★★★
              </p>
              <p className="mt-1 text-sm font-semibold text-text">
                Rated 4.5 / 5
              </p>
              <p className="text-xs text-text-muted">by 39+ residents</p>
            </div>
          </div>
        </div>

        {/* Trust Features */}
        <ul
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Key trust indicators"
        >
          {HERO_TRUST_ITEMS.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-3 text-sm font-medium text-text shadow-soft"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
