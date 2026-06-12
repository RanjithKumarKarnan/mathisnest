import { useEffect, useState, useRef } from 'react'
import { TRUST_INDICATORS } from '../../data/site'

// --- Custom Animated Counter Component ---
const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  // Extract numbers, prefixes, and suffixes (e.g., "4.5★" -> num: 4.5, suffix: "★")
  const numMatch = value.match(/[\d.]+/)
  const num = numMatch ? parseFloat(numMatch[0]) : 0
  const prefix = numMatch ? value.substring(0, value.indexOf(numMatch[0])) : ''
  const suffix = numMatch ? value.substring(value.indexOf(numMatch[0]) + numMatch[0].length) : value
  const isFloat = value.includes('.')

  useEffect(() => {
    const element = ref.current
    if (!element || num === 0) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number
          const duration = 2000 // 2 seconds animation

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease-out exponential function for smooth deceleration
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(num * easeProgress)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
          observer.disconnect() // Only animate once
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [num])

  // Fallback for non-numeric strings
  if (!numMatch) return <span>{value}</span>

  return (
    <span ref={ref}>
      {prefix}
      {isFloat ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  )
}

// --- Main Component ---
export function TrustIndicators() {
  return (
    <section
      className="bg-surface py-16 sm:py-24 border-y border-border/40"
      aria-label="Hostel Statistics"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Clean, perfectly spaced grid: 2 columns on mobile/tablet, 4 on desktop */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0">
          {TRUST_INDICATORS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-1"
              >
                {/* Pure, borderless icon */}
                <Icon
                  className="mb-5 h-8 w-8 text-primary opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                {/* Clean, solid high-contrast number */}
                <h3 className="mb-3 font-display text-4xl font-bold tracking-tight text-text md:text-5xl lg:text-6xl">
                  <AnimatedCounter value={item.value} />
                </h3>

                {/* Subdued, elegant typography for labels */}
                <p className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {item.label}
                </p>

                {/* Minimalist description */}
                <p className="max-w-[180px] text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}