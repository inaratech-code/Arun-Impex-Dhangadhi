'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CompanyBackground() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="relative w-full max-w-2xl h-full">
          <Image
            src="/images/logo.png"
            alt="Arun Impex Logo Watermark"
            fill
            className="object-contain"
            quality={90}
          />
        </div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-asphalt-black mb-6 text-center">
            About Arun Impex
          </h1>
          <div className="prose prose-lg max-w-none text-industrial-grey leading-relaxed">
            <p className="text-xl md:text-2xl mb-6 text-center text-asphalt-black font-medium">
              Leading the industry in quality fuel and bitumen supply since our inception
            </p>
            <p className="mb-4 text-justify">
              Arun Impex has established itself as a trusted name in the industrial fuel and bitumen 
              supply sector. With years of experience and a commitment to excellence, we have built 
              strong relationships with road contractors, infrastructure companies, manufacturing 
              plants, and government projects across India.
            </p>
            <p className="mb-4 text-justify">
              Our company specializes in the distribution of high-quality bitumen products, including 
              VG (Viscosity Grade) bitumen grades, bitumen emulsions, and industrial furnace oil. 
              We understand the critical importance of reliable supply chains in infrastructure 
              development and industrial operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

