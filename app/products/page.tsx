import { Metadata } from 'next'
import ProductsHero from '@/components/pages/products/ProductsHero'
import BitumenProducts from '@/components/pages/products/BitumenProducts'
import EmulsionProducts from '@/components/pages/products/EmulsionProducts'
import FurnaceOilProducts from '@/components/pages/products/FurnaceOilProducts'

export const metadata: Metadata = {
  title: 'Products - Arun Impex | Bitumen, Emulsion & Furnace Oil',
  description: 'Explore our range of products: Bitumen VG Grades (VG 10, VG 30), Bitumen Emulsion (RS-1, MS, SS), and Industrial Furnace Oil.',
}

export default function ProductsPage() {
  return (
    <div className="pt-24 md:pt-32 relative">
      {/* Background Image - Blended */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/Arun.jpeg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      <ProductsHero />
      <BitumenProducts />
      <EmulsionProducts />
      <FurnaceOilProducts />
    </div>
  )
}

