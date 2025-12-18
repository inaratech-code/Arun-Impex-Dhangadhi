'use client'

import { motion } from 'framer-motion'

export default function IndustriesHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-asphalt-black to-asphalt-black/90 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Supporting diverse sectors with reliable fuel and bitumen solutions for infrastructure 
            development and industrial operations across India.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

