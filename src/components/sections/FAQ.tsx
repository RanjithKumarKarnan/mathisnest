import { useState } from 'react'
import { FAQ_ITEMS } from '../../data/content'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-surface py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      {/* Subtle background gradient to add depth */}
      <div className="absolute left-0 top-0 h-[500px] w-full bg-gradient-to-b from-background to-transparent opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Custom Luxury Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
              Common Questions
            </h2>
            <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
          </div>

          <h3
            id="faq-heading"
            className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl"
          >
            Everything you need to know.
          </h3>

          <p className="text-base font-medium leading-relaxed text-text-muted sm:text-lg">
            Clear, upfront answers about living at Mathi's Nest Ladies Hostel in Trichy.
          </p>
        </div>

        {/* Minimalist Editorial Accordion */}
        <div className="mx-auto max-w-5xl divide-y divide-border/50 border-y border-border/50">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <article
                key={item.question}
                className="group relative transition-colors duration-300"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left outline-none md:py-8"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className={`text-lg font-bold tracking-tight transition-colors duration-300 md:text-xl ${isOpen ? 'text-primary' : 'text-text group-hover:text-primary'
                        }`}
                    >
                      {item.question}
                    </span>

                    {/* Custom Premium Animated Icon */}
                    <div
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen
                          ? 'border-primary/30 bg-primary/5'
                          : 'border-border/60 bg-transparent group-hover:border-primary/30 group-hover:bg-primary/5'
                        }`}
                      aria-hidden="true"
                    >
                      {/* Horizontal Line */}
                      <span
                        className={`absolute h-[1.5px] w-3.5 transition-all duration-300 ${isOpen ? 'bg-primary' : 'bg-text-muted group-hover:bg-primary'
                          }`}
                      />
                      {/* Vertical Line */}
                      <span
                        className={`absolute h-3.5 w-[1.5px] transition-all duration-300 ${isOpen ? 'rotate-90 scale-0 bg-primary' : 'rotate-0 scale-100 bg-text-muted group-hover:bg-primary'
                          }`}
                      />
                    </div>
                  </button>
                </h3>

                {/* Modern CSS Grid Animation for butter-smooth height transition */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="pr-12 text-sm leading-relaxed text-text-muted sm:text-base md:pr-16">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}