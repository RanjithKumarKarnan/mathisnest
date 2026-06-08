import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: SITE.emailHref,
  },
  {
    icon: MapPin,
    label: "Address",
    value: SITE.address.full,
  },
  {
    icon: Clock,
    label: "Hours",
    value: SITE.hours.weekdays,
    description: SITE.hours.description,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          title="Contact & Visit Us"
          subtitle="Schedule a visit or get in touch to book your room at the best ladies hostel in Trichy."
        />

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 md:p-8 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-text">
              Get in Touch
            </h3>

            <div className="mt-6 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-text-muted">
                        {item.label}
                      </p>

                      <p className="font-medium text-text break-words">
                        {item.value}
                      </p>

                      {item.description && (
                        <p className="mt-1 text-sm text-text-muted">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl p-3 transition-colors hover:bg-background"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-xl p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button href={SITE.phoneHref} className="w-full">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>

              <Button
                href={SITE.emailHref}
                variant="outline"
                className="w-full"
              >
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}