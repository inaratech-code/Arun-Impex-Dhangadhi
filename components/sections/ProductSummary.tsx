'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const services = [
  {
    title: 'BITUMEN DEALER',
    image: '/images/DRUM-PACKING.webp',
    alt: 'Bitumen drums and tanker truck',
    items: [
      'Road Construction Grade',
      'Industrial Applications',
      'Nationwide Delivery',
    ],
  },
  {
    title: 'PETROLEUM BUSINESS',
    image: '/images/bitumen.jpeg',
    alt: 'Fuel pumps and storage tanks',
    items: [
      'Diesel & Petrol Supply',
      'Lubricants',
      'Lubricants & Oils',
      'Commercial & Retail',
    ],
  },
]

export default function ProductSummary() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                {service.title}
              </h2>
              
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  quality={90}
                />
              </div>

              <ul className="space-y-3 mt-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-asphalt-black text-lg">
                    <CheckCircle className="w-5 h-5 text-safety-orange mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

