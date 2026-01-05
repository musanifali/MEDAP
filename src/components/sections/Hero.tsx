'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
  'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80',
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${carouselImages[currentSlide]})`,
              }}
            />
            {/* Gradient Overlay - Strong left, visible right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Static Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
            <div className="max-w-5xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm border-2 border-[#2db8c7]/20 rounded-full px-5 py-2.5 mb-6 sm:mb-8 shadow-lg"
              >
                <div className="w-2 h-2 bg-[#2db8c7] rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-[#003867]">Trusted Since 1990</span>
                <div className="w-px h-4 bg-gray-300"></div>
                <span className="text-sm font-semibold text-[#2db8c7]">35+ Years of Excellence</span>
              </motion.div>
             
              {/* Main Headline - Enhanced */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 sm:mb-10 leading-[1.05] tracking-tight"
              >
                <span className="text-[#003867] block">
                  Complete Healthcare
                </span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Solutions Provider
                  </span>
                  {/* Underline Effect */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full"
                  ></motion.div>
                </span>
              </motion.h1>

              {/* Description - Enhanced */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-[#003867]/90 mb-8 sm:mb-10 leading-relaxed font-medium max-w-4xl"
              >
                <span className="font-bold text-[#003867]">Electro Medical Equipment</span> • 
                <span className="font-bold text-[#003867]"> Hospital Furniture</span> • 
                <span className="font-bold text-[#003867]"> Surgical Instruments</span> • 
                <span className="font-bold text-[#003867]"> Medical Gases</span>
              </motion.p>

              {/* Tagline with Icon - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-3 mb-12 sm:mb-14"
              >
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#2db8c7]/20">
                  <svg className="w-5 h-5 text-[#2db8c7]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-base font-bold text-[#003867] tracking-wide uppercase">
                    Caring for Life
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
              >
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-[#2db8c7]/40 transition-all duration-300 overflow-hidden text-center"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25a5b3] to-[#2db8c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  ></motion.div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Explore Products
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-white/95 backdrop-blur-sm text-[#003867] text-base sm:text-lg font-bold rounded-2xl border-3 border-[#003867] transition-all duration-300 hover:bg-[#003867] hover:text-white shadow-xl hover:shadow-2xl text-center overflow-hidden"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-[#003867] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Contact Us
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>

              {/* Trust Indicators - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12 sm:mt-14 md:mt-16"
              >
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Elegant Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? 'w-10 h-2.5 bg-[#2db8c7] shadow-lg shadow-[#2db8c7]/50'
                  : 'w-2.5 h-2.5 bg-[#003867]/30 hover:bg-[#003867]/50 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
