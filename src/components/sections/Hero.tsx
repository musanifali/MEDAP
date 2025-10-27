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
          <div className="flex items-center h-full py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="max-w-5xl">
             
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#003867] mb-4 sm:mb-6 leading-[1.1] tracking-tight">
                Premium Hospital{' '}
                <span className="text-[#2db8c7] block mt-1 sm:mt-2">
                  Furniture Solutions
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#003867]/80 mb-4 sm:mb-6 leading-relaxed font-light max-w-3xl">
                Modern, durable, and ergonomic designs for better patient care
              </p>

              {/* Tagline with Icon */}
              <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
                <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-[#2db8c7]"></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#2db8c7] tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  Caring For Life
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-5">
                <a
                  href="#products"
                  className="group relative px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-[#2db8c7] text-white text-sm sm:text-base font-bold rounded-lg sm:rounded-xl shadow-2xl shadow-[#2db8c7]/30 transition-all duration-300 hover:shadow-[#2db8c7]/50 hover:-translate-y-1 overflow-hidden text-center"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Explore Products
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#contact"
                  className="group px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white text-[#003867] text-sm sm:text-base font-bold rounded-lg sm:rounded-xl border-2 sm:border-3 border-[#003867] transition-all duration-300 hover:bg-[#003867] hover:text-white hover:-translate-y-1 shadow-xl text-center"
                >
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    Contact Us
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t-2 border-[#2db8c7]/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-[#003867]/70">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2db8c7] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base">ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2db8c7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base">Quality Assured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#2db8c7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-sm sm:text-base">Global Delivery</span>
                  </div>
                </div>
              </div>
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
