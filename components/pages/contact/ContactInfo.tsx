'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+977 9858420038',
    href: 'https://wa.me/9779858420038',
    subtext: 'Chat with us on WhatsApp',
    iconColor: 'text-green-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'arunimpex.dhn@gmail.com',
    href: 'mailto:arunimpex.dhn@gmail.com',
    subtext: 'We respond within 24 hours',
    iconColor: 'text-safety-orange',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Dhangadhi-03, Kailali',
    href: '#',
    subtext: 'Nepal - 10900',
    iconColor: 'text-safety-orange',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday - Saturday',
    href: '#',
    subtext: '9:00 AM - 6:00 PM IST',
    iconColor: 'text-safety-orange',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-asphalt-black mb-6">
        Contact Information
      </h2>
      <p className="text-industrial-grey mb-8 leading-relaxed text-lg">
        Reach out to us through any of these channels. Our team is ready to assist you with 
        your inquiries, quotes, and technical support needs.
      </p>

      <div className="space-y-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          const Component = info.href !== '#' ? 'a' : 'div'
          return (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Component
                href={info.href !== '#' ? info.href : undefined}
                className={`flex items-start space-x-4 p-6 rounded-lg border border-gray-200 hover:border-safety-orange hover:shadow-md transition-all duration-300 ease-out ${
                  info.href !== '#' ? 'cursor-pointer' : ''
                }`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${info.iconColor === 'text-green-500' ? 'bg-green-500/10' : 'bg-safety-orange/10'} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${info.iconColor || 'text-safety-orange'}`} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-asphalt-black mb-1">{info.label}</h3>
                  <p className="text-deep-blue font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-industrial-grey">{info.subtext}</p>
                </div>
              </Component>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 p-6 bg-deep-blue/5 rounded-lg border border-deep-blue/20"
      >
        <h3 className="font-semibold text-asphalt-black mb-2">Need Immediate Assistance?</h3>
        <p className="text-industrial-grey mb-4">
          For urgent inquiries or bulk orders, please call us directly or use our WhatsApp support.
        </p>
        <a
          href="https://wa.me/9779858420038"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-safety-orange hover:text-[#EE6E4D]/90 font-semibold"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat on WhatsApp</span>
          <span>→</span>
        </a>
      </motion.div>
    </motion.div>
  )
}

