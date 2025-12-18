import { Metadata } from 'next'
import CompanyBackground from '@/components/pages/about/CompanyBackground'
import QualityAssurance from '@/components/pages/about/QualityAssurance'
import IndustryExperience from '@/components/pages/about/IndustryExperience'

export const metadata: Metadata = {
  title: 'About Us - Arun Impex | Quality Fuel & Bitumen Supplier',
  description: 'Learn about Arun Impex - our quality assurance standards and industry experience in supplying bitumen, emulsion, and furnace oil.',
}

export default function AboutPage() {
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
      <CompanyBackground />
      <QualityAssurance />
      <IndustryExperience />
    </div>
  )
}

