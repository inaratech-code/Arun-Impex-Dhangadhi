import { Metadata } from 'next'
import IndustriesHero from '@/components/pages/industries/IndustriesHero'
import IndustryCards from '@/components/pages/industries/IndustryCards'
import CTA from '@/components/pages/industries/CTA'

export const metadata: Metadata = {
  title: 'Industries Served - Arun Impex | Road Construction, Infrastructure & Industrial',
  description: 'Arun Impex serves road contractors, infrastructure companies, manufacturing plants, and government projects with quality bitumen, emulsion, and furnace oil.',
}

export default function IndustriesPage() {
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
      <IndustriesHero />
      <IndustryCards />
      <CTA />
    </div>
  )
}

