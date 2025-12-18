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
    <div className="pt-24 md:pt-32">
      <CompanyBackground />
      <QualityAssurance />
      <IndustryExperience />
    </div>
  )
}

