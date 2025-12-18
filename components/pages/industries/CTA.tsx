'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center card p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-asphalt-black mb-4">
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl text-industrial-grey mb-8 leading-relaxed">
            Whether you&apos;re working on a major highway project, industrial facility, or infrastructure 
            development, we&apos;re here to provide reliable, quality products and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+9779858420038"
              className="btn-outline inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

