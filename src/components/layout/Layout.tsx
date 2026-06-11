import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { JsonLd } from '../seo/JsonLd'
import { getLocalBusinessSchema, getFaqSchema } from '../../data/schema'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <JsonLd data={[getLocalBusinessSchema(), getFaqSchema()]} />
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
