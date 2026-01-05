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
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#2db8c7]/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 50, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#003867]/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#2db8c7]/20 rounded-full px-5 py-2.5 text-sm font-bold text-[#003867] mb-6 shadow-lg"
          >
            <div className="w-2 h-2 bg-[#2db8c7] rounded-full animate-pulse"></div>
            <span>Trusted Nationwide</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
          >
            <span className="text-[#003867]">Our </span>
            <span className="bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] bg-clip-text text-transparent">
              Clients
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
Most of Pakistan's Premier Hospitals and Leading Healthcare Institutions who trust Medap International.           </motion.p>
        </motion.div>

        {/* Infinite Marquee - No Cards */}
        <div className="relative">
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden py-8">
            <motion.div
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="flex gap-12 lg:gap-16 items-center"
            >
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
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
                  <div className="relative w-48 sm:w-56 lg:w-64 h-32 sm:h-36 lg:h-40">
                    <Image
                      src={logo}
                      alt={`Client ${index + 1}`}
                      fill
                      className="object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Second set for seamless loop */}
              {clientLogos.map((logo, index) => (
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
                      src={logo}
                      alt={`Client ${index + 1}`}
                      fill
                      className="object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Statement */}
        
      </div>
    </section>
  )
}