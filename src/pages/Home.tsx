import { lazy, Suspense } from 'react'
import { Hero } from '../components/sections/Hero'
import { TrustIndicators } from '../components/sections/TrustIndicators'
import { About } from '../components/sections/About'

const WhyChooseUs = lazy(() =>
  import('../components/sections/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs }))
)
const Facilities = lazy(() =>
  import('../components/sections/Facilities').then((m) => ({ default: m.Facilities }))
)
const RoomFeatures = lazy(() =>
  import('../components/sections/RoomFeatures').then((m) => ({ default: m.RoomFeatures }))
)
const Testimonials = lazy(() =>
  import('../components/sections/Testimonials').then((m) => ({ default: m.Testimonials }))
)
const FAQ = lazy(() =>
  import('../components/sections/FAQ').then((m) => ({ default: m.FAQ }))
)
const Contact = lazy(() =>
  import('../components/sections/Contact').then((m) => ({ default: m.Contact }))
)
const LocalSEO = lazy(() =>
  import('../components/sections/LocalSEO').then((m) => ({ default: m.LocalSEO }))
)

function SectionFallback() {
  return <div className="py-20" aria-hidden="true" />
}

export function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUs />
        <Facilities />
        <RoomFeatures />
        <Testimonials />
        <FAQ />
        <Contact />
        <LocalSEO />
      </Suspense>
    </>
  )
}
