import { LOCAL_SEO_CONTENT } from '../../data/content'

export function LocalSEO() {
  return (
    <section
      className="border-t border-border bg-background py-16 md:py-20"
      aria-labelledby="local-seo-heading"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <h2
          id="local-seo-heading"
          className="font-display text-2xl font-bold text-text md:text-3xl"
        >
          {LOCAL_SEO_CONTENT.title}
        </h2>
        <div className="mt-6 space-y-4 text-text-muted leading-relaxed">
          {LOCAL_SEO_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 50)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
