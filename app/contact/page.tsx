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
      <ContactHero />
      <div className="bg-white/90 backdrop-blur-sm">
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

