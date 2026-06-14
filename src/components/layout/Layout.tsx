import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

// NOTE: JSON-LD structured data (LocalBusiness + FAQPage + Reviews) is now served
// statically from index.html so it is present in the raw page source for all crawlers,
// rather than injected client-side after hydration. See index.html <head>.

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
