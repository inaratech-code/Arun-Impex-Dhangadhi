'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/DRUM-PACKING.webp"
          alt="Industrial fuel drums - Arun Impex"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-asphalt-black/80 via-asphalt-black/70 to-asphalt-black/80"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Trusted Supplier of{' '}
            <span className="text-safety-orange">Bitumen, Emulsion & Furnace Oil</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Quality products, compliance-driven service, and timely delivery for road contractors, 
            infrastructure companies, and industrial plants across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-safety-orange hover:bg-[#EE6E4D]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-asphalt-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-out flex items-center space-x-2"
            >
              <span>Learn More</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { label: 'Years of Experience', value: '15+' },
              { label: 'Clients Served', value: '200+' },
              { label: 'Quality Standards', value: 'ISO' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-safety-orange mb-2">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

