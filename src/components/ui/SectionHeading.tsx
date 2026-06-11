interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const alignClass = isCenter ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <header className={`mb-12 flex max-w-3xl flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-soft">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-bold text-text text-balance md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-text-muted text-balance md:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  )
}
