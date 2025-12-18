'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Truck, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'ISO certified products meeting international standards for reliability and performance.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description: 'Efficient logistics network ensuring on-time delivery to project sites across India.',
  },
  {
    icon: Shield,
    title: 'Compliance Driven',
    description: 'Full compliance with industry regulations and environmental standards.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Trusted by leading contractors and infrastructure companies nationwide.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-asphalt-black mb-4">
            Why Choose Arun Impex
          </h2>
          <p className="text-lg md:text-xl text-industrial-grey max-w-3xl mx-auto">
            Your trusted partner for industrial fuels and bitumen products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="card p-6 md:p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-safety-orange/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-safety-orange" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-asphalt-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-industrial-grey leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

