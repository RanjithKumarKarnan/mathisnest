interface SectionHeadingProps {
  id?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  id,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <header className={`mb-12 max-w-3xl ${alignClass} ${className}`}>
      <h2
        id={id}
        className="font-display text-3xl md:text-4xl font-bold text-text text-balance"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted leading-relaxed text-balance">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </header>
  )
}
