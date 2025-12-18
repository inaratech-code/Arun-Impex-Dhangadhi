'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, Users, Award, Truck } from 'lucide-react'

const experiencePoints = [
  {
    icon: TrendingUp,
    number: '15+',
    label: 'Years of Experience',
  },
  {
    icon: Users,
    number: '200+',
    label: 'Satisfied Clients',
  },
  {
    icon: Truck,
    number: '1000+',
    label: 'Successful Deliveries',
  },
]

export default function IndustryExperience() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#20201F] to-[#20201F]/90 text-white relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industry Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Building trust through years of reliable service and proven results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {experiencePoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-safety-orange mb-2">
                  {point.number}
                </div>
                <div className="text-gray-200 text-sm md:text-base">
                  {point.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            With over 15 years in the industry, Arun Impex has built a reputation for reliability, 
            quality, and customer satisfaction. Our experience spans across various sectors including 
            national highway projects, state road construction, industrial manufacturing, and 
            government infrastructure development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

