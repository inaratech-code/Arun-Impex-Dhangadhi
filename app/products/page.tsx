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
    <div className="pt-24 md:pt-32">
      <ProductsHero />
      <BitumenProducts />
      <EmulsionProducts />
      <FurnaceOilProducts />
    </div>
  )
}

