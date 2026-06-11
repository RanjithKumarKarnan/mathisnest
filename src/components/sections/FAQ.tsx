import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ_ITEMS } from '../../data/content'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="bg-background py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about staying at Mathi's Nest Ladies Hostel Trichy."
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <article
                key={item.question}
                className={`overflow-hidden rounded-xl border bg-surface transition-colors ${
                  isOpen ? 'border-primary/40 shadow-soft' : 'border-border'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-text transition-colors hover:text-primary"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <p className="text-sm leading-relaxed text-text-muted">{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
