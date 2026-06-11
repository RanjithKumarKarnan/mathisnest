import { ABOUT_CONTENT } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section
      id="about"
      className="bg-surface py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              id="about-heading"
              eyebrow="About Us"
              title={ABOUT_CONTENT.title}
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 leading-relaxed text-text-muted">
              {ABOUT_CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft-lg">
              <img
                src="/images/about-mathis-nest-ladies-hostel-trichy.svg"
                alt="Comfortable rooms at Mathi's Nest ladies hostel in Trichy with safe environment for students and working women"
                width={600}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
