import {
  Phone,
  Shield,
  Camera,
  Wifi,
  UtensilsCrossed,
  Shirt,
  MapPin,
} from "lucide-react";
import { SITE } from "../../data/site";
import { HERO_TRUST_ITEMS } from "../../data/content";
import { Button } from "../ui/Button";

const trustIcons = [
  Shield,
  Camera,
  Wifi,
  UtensilsCrossed,
  Shirt,
  MapPin,
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-background pt-24 md:pt-28"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #F57C00 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #FF9800 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 md:py-4 lg:px-8 lg:py-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-primary shadow-sm">
              Premium Ladies Hostel in Trichy
            </p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Girls Hostel Near Race Course Road • Trichy
            </p>

            <h1
              id="hero-heading"
              className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl"
            >
              Safe & Comfortable Ladies Hostel in Trichy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Looking for a secure and comfortable ladies hostel in Trichy?
              Mathi's Nest offers well-maintained rooms, homely food, high-speed
              WiFi, CCTV surveillance, and a peaceful environment designed for
              students and working women.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href="#contact"
                size="lg"
                className="sm:min-w-[180px]"
              >
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
            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-text-muted">
                  Happy Residents
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-text-muted">
                  Security & Support
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-primary">5★</p>
                <p className="text-sm text-text-muted">
                  Resident Rating
                </p>
              </div>
            </div>

            {/* Trust Features */}
            <ul
              className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3"
              aria-label="Key trust indicators"
            >
              {HERO_TRUST_ITEMS.map((item, index) => {
                const Icon = trustIcons[index];

                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-border bg-white/70 px-4 py-3 text-sm font-medium text-text shadow-sm backdrop-blur"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-primary/10">
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
              className="absolute bottom-4 left-4 rounded-2xl border border-border bg-white/95 px-5 py-4 shadow-xl backdrop-blur"
              role="status"
              aria-label="Trusted by residents"
            >
              <p
                className="text-xl font-bold text-primary"
                aria-hidden="true"
              >
                ★★★★★
              </p>

              <p className="mt-1 text-sm font-medium text-text">
                Trusted by 100+ Residents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}