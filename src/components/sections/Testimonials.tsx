import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

function StarRating({ rating }: { rating: number }) {
  return (
    <div role="img" aria-label={`${rating} out of 5 stars`}>
      <span className="text-primary" aria-hidden="true">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="testimonials-heading"
          title="What Our Residents Say"
          subtitle="Real experiences from students and working women who call Mathi's Nest their home in Trichy."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <li
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <Quote
                className="h-8 w-8 text-primary/30"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                <p>"{testimonial.content}"</p>
              </blockquote>
              <footer className="mt-6 border-t border-border pt-4">
                <StarRating rating={testimonial.rating} />
                <cite className="mt-2 block not-italic">
                  <span className="font-semibold text-text">{testimonial.name}</span>
                  <span className="mt-0.5 block text-xs text-text-muted">
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
