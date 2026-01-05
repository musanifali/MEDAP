'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

const partners = [
  { name: 'Partner 1', logo: '/partner1.png' },
  { name: 'Partner 2', logo: '/partner2.png' },
  { name: 'Partner 3', logo: '/partner3.png' },
  { name: 'Partner 4', logo: '/partner4.png' },
  { name: 'Partner 5', logo: '/partner5.png' },
]

export default function Partners() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-64 h-64 bg-[#2db8c7]/5 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 w-48 h-48 bg-[#2db8c7]/20 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16 sm:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e6f9fb] to-[#f0fcfe] border-2 border-[#2db8c7]/20 rounded-full px-6 py-3 text-sm font-bold text-[#003867] mb-8 shadow-lg shadow-[#2db8c7]/10"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span>Strategic Partnerships</span>
            <div className="w-2 h-2 bg-[#2db8c7] rounded-full animate-pulse"></div>
          </motion.div>
          
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
          >
            <span className="text-[#003867]">Our </span>
            <span className="block mt-2 bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Partners
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
As we are exclusive distributor in the Pakistani market, we select and deliver cutting-edge medical equipment from international partners, ensuring premier healthcare facilities have access to world-class technology and sustained excellence in patient care.          </motion.p>
        </motion.div>

        {/* Infinite Scrolling Partners */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden py-8">
            <motion.div
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="flex gap-12 lg:gap-16 items-center"
            >
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    filter: "drop-shadow(0 10px 20px rgba(45,184,199,0.4))",
                    transition: { duration: 0.3 }
                  }}
                  className="flex-shrink-0 cursor-pointer"
                >
                  <div className="relative w-48 sm:w-56 lg:w-64 h-32 sm:h-36 lg:h-60">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Second set for seamless loop */}
              {partners.map((partner, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    filter: "drop-shadow(0 10px 20px rgba(45,184,199,0.4))",
                    transition: { duration: 0.3 }
                  }}
                  className="flex-shrink-0 cursor-pointer"
                >
                  <div className="relative w-48 sm:w-56 lg:w-64 h-32 sm:h-36 lg:h-40">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24"
        >
          <div className="bg-gradient-to-br from-[#003867] via-[#004a6b] to-[#2db8c7] rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2db8c7]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3"
                >
                  Our Impact in Numbers
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-white/80 text-lg"
                >
                  Delivering healthcare excellence across Pakistan
                </motion.p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { number: '15+', label: 'Healthcare Partners', icon: '🏥' },
                  { number: '35+', label: 'Years of Excellence', icon: '🏆' },
                  { number: '50+', label: 'Cities Covered', icon: '📍' },
                  { number: '24/7', label: 'Support Available', icon: '💬' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="text-4xl sm:text-5xl font-black text-white mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-white/90 font-semibold text-sm sm:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="text-center mt-10"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-white text-[#003867] px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all"
                >
                  <span>Become Our Partner</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
