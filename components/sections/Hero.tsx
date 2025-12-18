'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Arun.jpeg"
          alt="Arun Impex - Industrial fuel and bitumen supplier"
          fill
          className="object-cover sm:object-cover md:object-cover"
          style={{ 
            objectPosition: 'center center'
          }}
          priority
          quality={90}
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay for text readability - responsive opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-asphalt-black/75 via-asphalt-black/65 to-asphalt-black/75 sm:from-asphalt-black/70 sm:via-asphalt-black/60 sm:to-asphalt-black/70"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2"
          >
            Trusted Supplier of{' '}
            <span className="text-safety-orange">Bitumen, Emulsion & Furnace Oil</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Quality products, compliance-driven service, and timely delivery for road contractors, 
            infrastructure companies, and industrial plants across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-safety-orange hover:bg-[#EE6E4D]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ease-out flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-asphalt-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ease-out flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2"
          >
            {[
              { label: 'Years of Experience', value: '15+' },
              { label: 'Clients Served', value: '200+' },
              { label: 'Quality Standards', value: 'ISO' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-safety-orange mb-1 sm:mb-2">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">
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

