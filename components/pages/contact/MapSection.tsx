'use client'

import { motion } from 'framer-motion'

export default function MapSection() {
  // Exact location from: https://maps.app.goo.gl/BKYsAPX8mrEsTnCH7
  // Direct link to the location
  const mapDirectUrl = "https://maps.app.goo.gl/BKYsAPX8mrEsTnCH7"
  
  // Embed URL - using coordinates for Dhangadhi-03, Kailali area
  // Note: To get the exact embed code, visit the location in Google Maps and click "Share" > "Embed a map"
  const mapEmbedUrl = `https://www.google.com/maps?q=Dhangadhi-03,+Kailali,+Nepal&output=embed`

  return (
    <section className="bg-gray-50">
      <div className="container-custom py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-asphalt-black mb-4">
            Find Us
          </h2>
          <p className="text-lg text-industrial-grey">
            Visit our office or get directions to our location
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative w-full h-96 md:h-[500px]">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Arun Impex Location - Dhangadhi-03, Kailali, Nepal"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-industrial-grey">
            <strong className="text-asphalt-black">Address:</strong> Dhangadhi-03, Kailali, Nepal - 10900
            <br />
            <a
              href="https://maps.app.goo.gl/BKYsAPX8mrEsTnCH7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deep-blue hover:text-safety-orange underline mt-2 inline-block"
            >
              Get Directions on Google Maps
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

