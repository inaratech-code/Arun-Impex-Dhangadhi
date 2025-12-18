'use client'

import { motion } from 'framer-motion'
import { Flame, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function FurnaceOilProducts() {
  const applications = [
    'Industrial boilers and furnaces',
    'Power generation plants',
    'Manufacturing industries',
    'Heating systems',
    'Marine applications',
    'Glass and ceramic industries',
  ]

  const advantages = [
    'High calorific value for efficient combustion',
    'Consistent quality and performance',
    'Reliable supply chain for industrial operations',
    'Cost-effective fuel solution',
    'Compliance with industrial standards',
    'Suitable for various heating applications',
  ]

  return (
    <section id="furnace-oil" className="section-padding bg-white scroll-mt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-safety-orange/10 mb-6">
            <Flame className="w-10 h-10 text-safety-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-asphalt-black mb-4">
            Furnace Oil
          </h2>
          <p className="text-lg md:text-xl text-industrial-grey max-w-3xl mx-auto">
            Industrial-grade furnace oil for manufacturing plants, boilers, and heating systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-6 md:p-10 mb-8"
          >
            <p className="text-lg text-industrial-grey leading-relaxed mb-8">
              Our furnace oil is a premium industrial fuel designed for high-performance heating 
              applications. It is carefully refined to meet the demanding requirements of 
              manufacturing plants, power generation facilities, and industrial boilers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-asphalt-black mb-4 flex items-center text-xl">
                  <CheckCircle className="w-6 h-6 text-safety-orange mr-2" />
                  Industrial Applications
                </h4>
                <ul className="space-y-3">
                  {applications.map((app, idx) => (
                    <li key={idx} className="text-industrial-grey flex items-start">
                      <span className="text-safety-orange mr-2 mt-1">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-asphalt-black mb-4 flex items-center text-xl">
                  <CheckCircle className="w-6 h-6 text-deep-blue mr-2" />
                  Key Advantages
                </h4>
                <ul className="space-y-3">
                  {advantages.map((adv, idx) => (
                    <li key={idx} className="text-industrial-grey flex items-start">
                      <span className="text-deep-blue mr-2 mt-1">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Request Quote for Furnace Oil</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

