'use client'

import { motion } from 'framer-motion'
import { Fuel, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const emulsionTypes = [
  {
    type: 'RS (Rapid Setting)',
    code: 'RS-1',
    description: 'Fast-setting emulsion for quick road repairs and surface treatments.',
    applications: [
      'Surface dressing and chip sealing',
      'Quick repairs and patching',
      'Micro-surfacing applications',
      'Premature surface treatments',
    ],
    advantages: [
      'Rapid curing time',
      'Ideal for high-traffic areas',
      'Weather-resistant application',
      'Excellent adhesion properties',
    ],
  },
  {
    type: 'MS (Medium Setting)',
    code: 'MS',
    description: 'Medium-setting emulsion for balanced performance in various applications.',
    applications: [
      'Bituminous macadam',
      'Road construction and maintenance',
      'Cold mix applications',
      'Prime coat and tack coat',
    ],
    advantages: [
      'Versatile application range',
      'Good workability',
      'Cost-effective solution',
      'Suitable for moderate traffic',
    ],
  },
  {
    type: 'SS (Slow Setting)',
    code: 'SS',
    description: 'Slow-setting emulsion for extended workability and cold mix applications.',
    applications: [
      'Cold mix bituminous concrete',
      'Open-graded premix carpet',
      'Bituminous base course',
      'Dense bituminous macadam',
    ],
    advantages: [
      'Extended workability time',
      'Ideal for cold mix applications',
      'Better coating of aggregates',
      'Suitable for longer transportation',
    ],
  },
]

export default function EmulsionProducts() {
  return (
    <section id="emulsion" className="section-padding bg-gray-50 scroll-mt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-industrial-grey/10 mb-6">
            <Fuel className="w-10 h-10 text-industrial-grey" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-asphalt-black mb-4">
            Bitumen Emulsion
          </h2>
          <p className="text-lg md:text-xl text-industrial-grey max-w-3xl mx-auto">
            High-performance bitumen emulsion products for road construction and maintenance applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {emulsionTypes.map((product, index) => (
            <motion.div
              key={product.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 md:p-8"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-industrial-grey">
                    {product.type}
                  </h3>
                  <span className="bg-industrial-grey/10 text-industrial-grey px-3 py-1 rounded-full text-sm font-semibold">
                    {product.code}
                  </span>
                </div>
                <p className="text-industrial-grey leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-asphalt-black mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-safety-orange mr-2" />
                  Applications
                </h4>
                <ul className="space-y-2">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="text-industrial-grey text-sm flex items-start">
                      <span className="text-safety-orange mr-2">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-asphalt-black mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-industrial-grey mr-2" />
                  Key Advantages
                </h4>
                <ul className="space-y-2">
                  {product.advantages.map((adv, idx) => (
                    <li key={idx} className="text-industrial-grey text-sm flex items-start">
                      <span className="text-industrial-grey mr-2">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Request Quote for Emulsion</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

