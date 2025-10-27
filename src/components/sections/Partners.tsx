'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/200x100/2db8c7/ffffff?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/200x100/003867/ffffff?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/200x100/2db8c7/ffffff?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/200x100/003867/ffffff?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/200x100/2db8c7/ffffff?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/200x100/003867/ffffff?text=Partner+6' },
]

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#2db8c7]/10 border-2 border-[#2db8c7]/30 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#2db8c7] mb-4 sm:mb-5 md:mb-6 uppercase tracking-wider"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span>Our Trusted Partners</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#003867] mb-4 sm:mb-5 md:mb-6">
            Global Healthcare
            <span className="block text-[#2db8c7] mt-1 sm:mt-2">Partnerships</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[#003867]/70 leading-relaxed font-light px-4 sm:px-0">
            Collaborating with leading healthcare institutions and organizations worldwide
            to deliver excellence in medical equipment solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex items-center justify-center border border-gray-100 group cursor-pointer"
            >
              <div className="relative w-full h-16 sm:h-20 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <p className="text-sm sm:text-base text-[#003867]/60 font-medium">
            Trusted by <span className="text-[#2db8c7] font-bold">500+ Healthcare Facilities</span> across <span className="text-[#2db8c7] font-bold">50+ Countries</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
