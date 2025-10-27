'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientLogos = [
  '/client1.png',
  '/client2.png', 
  '/client3.png',
  '/client4.png',
  '/client5.png',
  '/client6.png',
  '/client7.png',
  '/client8.png',
]

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#003867] mb-4">
            Trusted by Leading
            <span className="block text-[#2db8c7]">Healthcare Providers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of hospitals and healthcare facilities worldwide who trust MEDAP International for their furniture needs.
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-16">
            {/* First set of logos */}
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={150}
                  height={80}
                  unoptimized
                  className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  width={150}
                  height={80}
                  unoptimized
                  className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}