'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="section-padding bg-gradient-to-br from-asphalt-black via-asphalt-black to-asphalt-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Ready to discuss your project needs? Contact us for quotes, technical support, 
            or any inquiries about our products and services.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

