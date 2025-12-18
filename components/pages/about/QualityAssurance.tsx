'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, FileCheck, Shield, Award } from 'lucide-react'

const qualityStandards = [
  {
    icon: FileCheck,
    title: 'ISO Certified',
    description: 'Our products and processes meet international quality standards.',
  },
  {
    icon: Shield,
    title: 'Quality Testing',
    description: 'Rigorous testing at every stage to ensure product consistency.',
  },
  {
    icon: Award,
    title: 'Industry Compliance',
    description: 'Full compliance with Indian and international specifications.',
  },
  {
    icon: CheckCircle,
    title: 'Certified Products',
    description: 'All products come with quality certificates and test reports.',
  },
]

export default function QualityAssurance() {
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-asphalt-black mb-4">
            Quality Assurance & Safety Standards
          </h2>
          <p className="text-lg md:text-xl text-industrial-grey max-w-3xl mx-auto">
            Commitment to quality, safety, and environmental responsibility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {qualityStandards.map((standard, index) => {
            const Icon = standard.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-safety-orange/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-safety-orange" />
                </div>
                <h3 className="text-xl font-bold text-asphalt-black mb-3">
                  {standard.title}
                </h3>
                <p className="text-industrial-grey leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto card p-8 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-asphalt-black mb-6">
            Our Quality Commitment
          </h3>
          <div className="prose prose-lg max-w-none text-industrial-grey">
            <p className="mb-4 text-justify">
              At Arun Impex, quality is not just a standard—it&apos;s our foundation. We maintain 
              strict quality control measures at every stage of our operations, from sourcing 
              to delivery.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-safety-orange mr-3 flex-shrink-0 mt-0.5" />
                <span>Regular quality audits and inspections of all products</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-safety-orange mr-3 flex-shrink-0 mt-0.5" />
                <span>Compliance with IS (Indian Standards) and international specifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-safety-orange mr-3 flex-shrink-0 mt-0.5" />
                <span>Safe handling and storage practices throughout the supply chain</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-safety-orange mr-3 flex-shrink-0 mt-0.5" />
                <span>Environmental responsibility and sustainable practices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-safety-orange mr-3 flex-shrink-0 mt-0.5" />
                <span>Continuous improvement through feedback and innovation</span>
              </li>
            </ul>
            <p className="text-justify">
              Our quality assurance processes ensure that every product leaving our facility 
              meets or exceeds industry standards, giving our clients confidence in their 
              infrastructure projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

