'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Award, Users, Globe, CheckCircle } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const AnimatedNumber = ({ value, duration = 2, inView }: { value: string, duration?: number, inView: boolean }) => {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  
  useEffect(() => {
    if (!inView) return
    
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * numericValue))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [numericValue, duration, inView])
  
  return <span>{count}{value.replace(/[0-9]/g, '')}</span>
}

const stats = [
  { number: "35+", label: "Years Experience", icon: Award },
  { number: "500+", label: "Healthcare Facilities", icon: Users },
  { number: "100+", label: "Major Clients", icon: Globe },
  { number: "1990", label: "Established", icon: CheckCircle }
]

export default function About() {
  const [inView, setInView] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#e6f9fb] border border-[#ccf3f7] rounded-full px-4 py-2 text-sm font-medium text-[#1b6e78] mb-6">
              <Award size={16} />
              <span>About MEDAP International</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003867] mb-4 sm:mb-6">
              Leading Healthcare Provider
              <span className="block text-[#2db8c7]">Since 1990</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              MEDAP International is a team of well-linked professionals and one of Pakistan's leading suppliers 
              and service providers of Electro Medical Equipment, Hospital Furniture, Surgical Instruments, and Medical 
              Gases. We work with "Caring for Life" philosophy to serve healthcare institutions across Pakistan.
            </p>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-[#2db8c7]/25 transition-all duration-300"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="text-white" size={20} />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003867] mb-1 sm:mb-2">
                  <AnimatedNumber value={stat.number} duration={2.5} inView={inView} />
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}