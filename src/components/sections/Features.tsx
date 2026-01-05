'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Zap, Award, Users, Heart, Stethoscope } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Medical-grade materials ensuring durability and hygiene standards for healthcare environments.",
    color: "#2db8c7"
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "Smart features and IoT connectivity for modern healthcare facility management.",
    color: "#2db8c7"
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "International healthcare standards with FDA approval and ISO certifications.",
    color: "#2db8c7"
  },
  {
    icon: Users,
    title: "Ergonomic Design",
    description: "Designed for healthcare professionals and patient comfort, reducing strain.",
    color: "#2db8c7"
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Enhances patient experience and supports faster recovery processes.",
    color: "#2db8c7"
  },
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    description: "Supports clinical workflows and improves healthcare delivery.",
    color: "#2db8c7"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
            <Award size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Why Choose MEDAP</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#003867] mb-4 sm:mb-5 md:mb-6">
            Transforming Healthcare
            <span className="block text-[#2db8c7] mt-1 sm:mt-2">Environments</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-[#003867]/70 leading-relaxed font-light px-4 sm:px-0">
            Our comprehensive range of hospital furniture combines cutting-edge technology with exceptional comfort, 
            designed to meet the evolving needs of modern healthcare facilities.
          </p>
        </motion.div>

        {/* Features Grid with Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group px-6 sm:px-7 md:px-8 py-8 sm:py-9 md:py-10 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl flex flex-col items-center justify-center gap-3 sm:gap-4 relative overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100
              after:absolute after:h-full after:bg-[#2db8c7] after:z-[-1] after:w-full after:inset-0 after:rounded-xl sm:after:rounded-2xl after:transition-all after:duration-500 after:-translate-y-full after:hover:translate-y-0"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-[#2db8c7]/10 group-hover:bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl"
              >
                <feature.icon className="text-[#2db8c7] group-hover:text-[#003867] w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#003867] group-hover:text-white transition-all duration-300 text-center delay-75">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-[#003867]/70 group-hover:text-white/90 leading-relaxed text-center transition-all duration-300 delay-100">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 sm:gap-3 px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-5 bg-[#2db8c7] hover:bg-[#25a5b3] text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl shadow-2xl shadow-[#2db8c7]/30 hover:shadow-[#2db8c7]/50 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Our Products
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}