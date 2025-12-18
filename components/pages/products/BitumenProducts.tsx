'use client'

import { motion } from 'framer-motion'
import { Droplet, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const bitumenGrades = [
  {
    grade: 'VG 10',
    image: '/images/bitumen-vg-10.jpg',
    description: 'Lower viscosity grade suitable for cold climates and light traffic areas.',
    applications: [
      'Road construction in cold regions',
      'Surface dressing applications',
      'Prime coat and tack coat',
      'Low-traffic areas',
    ],
    advantages: [
      'Excellent workability in cold conditions',
      'Better penetration in porous surfaces',
      'Cost-effective for lighter applications',
    ],
  },
  {
    grade: 'VG 30',
    image: '/images/bitumen-vg-10.jpg',
    description: 'Medium viscosity grade, most commonly used for road construction and highway projects.',
    applications: [
      'Highway construction',
      'National and state roads',
      'Heavy-duty pavements',
      'Bus stops and parking areas',
    ],
    advantages: [
      'Balanced viscosity for most climates',
      'Excellent durability and performance',
      'Widely accepted grade for major projects',
    ],
  },
]

export default function BitumenProducts() {
  return (
    <section id="bitumen" className="section-padding bg-white scroll-mt-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-deep-blue/10 mb-6">
            <Droplet className="w-10 h-10 text-deep-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-asphalt-black mb-4">
            Bitumen (VG Grades)
          </h2>
          <p className="text-lg md:text-xl text-industrial-grey max-w-3xl mx-auto">
            High-quality viscosity grade bitumen products for road construction and infrastructure projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bitumenGrades.map((product, index) => (
            <motion.div
              key={product.grade}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 md:p-8"
            >
              {product.image && (
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`Bitumen ${product.grade}`}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-deep-blue mb-3">
                  VG {product.grade.split(' ')[1]}
                </h3>
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
                  <CheckCircle className="w-5 h-5 text-deep-blue mr-2" />
                  Key Advantages
                </h4>
                <ul className="space-y-2">
                  {product.advantages.map((adv, idx) => (
                    <li key={idx} className="text-industrial-grey text-sm flex items-start">
                      <span className="text-deep-blue mr-2">•</span>
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
            <span>Request Quote for Bitumen</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

