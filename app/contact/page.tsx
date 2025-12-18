import { Metadata } from 'next'
import ContactHero from '@/components/pages/contact/ContactHero'
import ContactInfo from '@/components/pages/contact/ContactInfo'
import MapSection from '@/components/pages/contact/MapSection'

export const metadata: Metadata = {
  title: 'Contact Us - Arun Impex | Get in Touch for Bitumen & Fuel Supply',
  description: 'Contact Arun Impex for quotes, inquiries, or support. Reach out for quality bitumen, emulsion, and furnace oil supply.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ContactHero />
      <div className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
    </div>
  )
}

