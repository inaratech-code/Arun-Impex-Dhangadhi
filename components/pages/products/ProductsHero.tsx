'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const productDetails = [
  'High-Quality VG Grades (VG 10, VG 30)',
  'Bitumen Emulsion (RS-1, MS, SS)',
  'Industrial Furnace Oil',
  'ISO Certified Products',
  'Nationwide Delivery',
  'Competitive Pricing',
]

export default function ProductsHero() {
  return (
    <section className="section-padding relative text-white overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/bitumen.jpeg"
          alt="Bitumen products"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-asphalt-black/75 via-asphalt-black/70 to-asphalt-black/75 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
              Comprehensive range of industrial fuels and bitumen products designed to meet the 
              highest quality standards for your infrastructure and industrial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#bitumen"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="bg-safety-orange hover:bg-[#EE6E4D]/90 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ease-out"
              >
                View Products
              </motion.a>
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="border-2 border-white text-white hover:bg-white hover:text-asphalt-black px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 ease-out"
              >
                Request Quote
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 border border-white/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-safety-orange">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {productDetails.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-safety-orange mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-100">{detail}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-safety-orange mb-1">15+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-safety-orange mb-1">200+</div>
                <div className="text-sm text-gray-300">Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

