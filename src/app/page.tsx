'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import Partners from '@/components/sections/Partners'
import Clients from '@/components/sections/Clients'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import LoadingScreen from '@/components/ui/LoadingScreen'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <main key="main" className="relative overflow-hidden">
          {/* Subtle Background Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="fixed top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#2db8c7]/5 to-[#003867]/5 rounded-full blur-2xl z-0"
          />
          
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#2db8c7]/3 to-[#003867]/3 rounded-full blur-3xl z-0"
          />
          
          <ScrollProgress />
          <TopBar />
          <Navigation />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Hero />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Partners />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <Clients />
            </motion.div>

            {/* Stats Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true }}
              className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-[#e6f9fb]/30 to-white relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-[#2db8c7]/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#003867]/5 rounded-full blur-3xl"></div>
              
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto border border-gray-100">
                    <div className="grid sm:grid-cols-3 gap-8 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#003867] mb-2">ISO Certified</h4>
                        <p className="text-sm text-gray-600">Quality Management System</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#c084fc] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#003867] mb-2">DRAP Registered</h4>
                        <p className="text-sm text-gray-600">Drug Regulatory Authority</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#003867] to-[#2db8c7] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-[#003867] mb-2">Caring for Life</h4>
                        <p className="text-sm text-gray-600">Customer First Philosophy</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Enhanced CTA Band */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
            >
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#003867] via-[#004a6b] to-[#2db8c7]">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-[#2db8c7]/20 via-transparent to-[#2db8c7]/20"
                  style={{ backgroundSize: '200% 200%' }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2db8c7]/20 rounded-full blur-3xl"></div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="text-center lg:text-left flex-1">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20">
                          Get Started Today
                        </span>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                          Ready to Transform Your
                          <span className="block mt-1 text-[#2db8c7]">Healthcare Facility?</span>
                        </h3>
                        <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                          Request a quotation or schedule a consultation with our product specialists. We're here to help you find the perfect solutions.
                        </p>
                      </motion.div>

                      {/* Contact Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                      >
                        <div className="flex items-center gap-2 text-white/90">
                          <svg className="w-5 h-5 text-[#2db8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-sm font-medium">+92-42-36315179</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                          <svg className="w-5 h-5 text-[#2db8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium">medap.international@gmail.com</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Right CTAs */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col gap-4 w-full lg:w-auto"
                    >
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group w-full lg:w-auto bg-white text-[#003867] px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Request a Quote
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.button>
                      </Link>
                      
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group w-full lg:w-auto bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Talk to Sales Team
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
          
          <Footer />
        </main>
      )}
    </AnimatePresence>
  )
}