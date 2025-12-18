'use client'

import { motion } from 'framer-motion'
import { Truck, Building2, Factory, Briefcase, CheckCircle } from 'lucide-react'

const industries = [
  {
    icon: Truck,
    name: 'Road & Highway Construction',
    description: 'Comprehensive bitumen and emulsion solutions for national highways, state roads, and urban infrastructure development.',
    services: [
      'VG Grade Bitumen for highway construction',
      'Bitumen Emulsion for surface treatments',
      'Bulk supply for large road projects',
      'Technical support and guidance',
    ],
    color: 'from-asphalt-black to-asphalt-black/80',
  },
  {
    icon: Building2,
    name: 'Infrastructure Projects',
    description: 'Reliable fuel supply for airports, ports, bridges, and large-scale construction projects requiring consistent quality.',
    services: [
      'Supply for major infrastructure projects',
      'Customized solutions for unique requirements',
      'Timely delivery to project sites',
      'Quality assurance and documentation',
    ],
    color: 'from-asphalt-black to-asphalt-black/80',
  },
  {
    icon: Factory,
    name: 'Manufacturing & Boilers',
    description: 'Industrial-grade furnace oil for manufacturing plants, power generation facilities, and heating systems.',
    services: [
      'High-quality furnace oil supply',
      'Bulk delivery for industrial operations',
      'Consistent fuel quality',
      'Reliable supply chain management',
    ],
    color: 'from-safety-orange to-[#EE6E4D]/80',
  },
  {
    icon: Briefcase,
    name: 'Government & Private Contracts',
    description: 'Bulk supply solutions for government tenders, PWD projects, and private infrastructure developers across India.',
    services: [
      'Tender participation and execution',
      'Bulk supply contracts',
      'Compliance with government standards',
      'Documentation and certification support',
    ],
    color: 'from-asphalt-black to-asphalt-black/80',
  },
]

export default function IndustryCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 md:p-8 lg:p-10 group"
              >
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-asphalt-black mb-4 group-hover:text-safety-orange transition-colors">
                  {industry.name}
                </h2>
                <p className="text-industrial-grey mb-6 leading-relaxed text-lg">
                  {industry.description}
                </p>
                <div>
                  <h3 className="font-semibold text-asphalt-black mb-4">Our Services:</h3>
                  <ul className="space-y-2">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-industrial-grey">
                        <CheckCircle className="w-5 h-5 text-safety-orange mr-2 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

