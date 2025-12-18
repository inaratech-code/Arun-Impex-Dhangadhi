import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ProductSummary from '@/components/sections/ProductSummary'
import WhyChooseUs from '@/components/sections/WhyChooseUs'

export const metadata: Metadata = {
  title: 'Home - Arun Impex | Trusted Supplier of Bitumen, Emulsion & Furnace Oil',
  description: 'Leading supplier of Bitumen (VG Grades), Bitumen Emulsion, and Furnace Oil. Quality products for road construction, infrastructure projects, and industrial applications.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSummary />
      <WhyChooseUs />
    </>
  )
}

