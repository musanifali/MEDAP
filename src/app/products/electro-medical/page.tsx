'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function ElectroMedicalPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  return (
    <main className="relative">
      <ScrollProgress />
      <TopBar />
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200 mt-1 md:mt-10 lg:mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link 
              href="/" 
              className="hover:text-[#2db8c7] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-gray-400">→</span>
            <Link 
              href="/products" 
              className="hover:text-[#2db8c7] transition-colors duration-200"
            >
              Products
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-[#003867] font-semibold" aria-current="page">
              Electro-Medical Equipment
            </span>
          </nav>
        </div>
      </section>

      {/* Section 1: Hero */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#003867] to-[#2db8c7] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl mb-8 shadow-2xl"
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Electro-Medical
              <span className="block bg-gradient-to-r from-white via-[#5dd1df] to-white bg-clip-text text-transparent mt-2">
                Equipment
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Advanced monitoring, life-support, and operating theatre devices with 
              complete installation, training, and 24/7 service support.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                CE Certified
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                ISO Compliant
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                DRAP Registered
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Service
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-white/80 text-xs lg:text-sm">Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/80 text-xs lg:text-sm">Brands</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/80 text-xs lg:text-sm">Genuine</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Filters */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-20 shadow-md backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left: Filter Controls */}
            <div className="flex-1 space-y-4">
              {/* Filter by Application */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2db8c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filter by Application
                </h3>
                <div className="flex flex-wrap gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter('all')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === 'all'
                        ? 'bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white shadow-lg shadow-[#2db8c7]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Products
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter('icu')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === 'icu'
                        ? 'bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white shadow-lg shadow-[#2db8c7]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    ICU/CCU
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter('ot')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === 'ot'
                        ? 'bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white shadow-lg shadow-[#2db8c7]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Operating Theatre
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter('ward')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === 'ward'
                        ? 'bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white shadow-lg shadow-[#2db8c7]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Ward
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter('er')}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeFilter === 'er'
                        ? 'bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white shadow-lg shadow-[#2db8c7]/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Emergency
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right: Search */}
            <div className="lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-[#2db8c7] transition-all duration-300 text-sm font-medium"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#2db8c7] text-white rounded-xl hover:bg-[#25a5b3] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Product Type Quick Filters */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-500 font-semibold mr-2 py-2">Quick Filter:</span>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-[#2db8c7] hover:text-white transition-all duration-200 border border-gray-200 hover:border-[#2db8c7]">
                Patient Monitors
              </button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-[#2db8c7] hover:text-white transition-all duration-200 border border-gray-200 hover:border-[#2db8c7]">
                Infusion Pumps
              </button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-[#2db8c7] hover:text-white transition-all duration-200 border border-gray-200 hover:border-[#2db8c7]">
                Suction Units
              </button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-[#2db8c7] hover:text-white transition-all duration-200 border border-gray-200 hover:border-[#2db8c7]">
                OT Lights
              </button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-[#2db8c7] hover:text-white transition-all duration-200 border border-gray-200 hover:border-[#2db8c7]">
                OT Tables
              </button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-700 hover:bg-[#2db8c7] hover:text-white transition-all duration-200 border border-gray-200 hover:border-[#2db8c7]">
                Airway Equipment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Grid */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#003867] mb-1">Featured Products</h2>
              <p className="text-gray-600 text-sm">Showing 6 of 200+ electro-medical products</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="px-4 py-2 bg-white border-2 border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-[#2db8c7] cursor-pointer">
                <option>Most Popular</option>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1: Patient Monitor */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-[#2db8c7] h-full flex flex-col group-hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-72 bg-gradient-to-br from-[#2db8c7]/5 via-white to-[#003867]/5 flex items-center justify-center overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#2db8c7]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#003867]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="relative z-10 p-8">
                    <svg className="w-32 h-32 text-[#2db8c7]/30 group-hover:text-[#2db8c7]/50 transition-colors group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span className="px-3 py-1.5 bg-[#2db8c7] text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">ICU</span>
                    <span className="px-3 py-1.5 bg-[#003867] text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">CCU</span>
                  </div>
                  
                  {/* Quick Action - Hidden until hover */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-[#2db8c7] hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Stock Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      In Stock
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors line-clamp-2">
                    Multi-Parameter Patient Monitor
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                    High-visibility display with ECG, SpO2, NIBP, and temperature monitoring for critical care.
                  </p>

                  {/* Features */}
                  <div className="mb-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>CE Certified</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>24/7 Support</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <Link href="/contact" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Request Info
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 border-2 border-gray-200 rounded-xl hover:border-[#2db8c7] hover:bg-[#2db8c7] hover:text-white transition-all duration-300"
                      title="Download Brochure"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.button>
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 border-2 border-gray-200 rounded-xl hover:border-[#2db8c7] hover:bg-[#2db8c7] hover:text-white transition-all duration-300"
                        title="Request Quote"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Card 2: Infusion Pump */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="px-3 py-1 bg-[#2db8c7] text-white text-xs font-semibold rounded-full">ICU</span>
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">Ward</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors">
                  Volumetric Infusion Pump
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Precise drug delivery with alarm systems and battery backup for safe infusion therapy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2db8c7] hover:text-[#25a5b3] transition-colors">
                    Request Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <span className="text-gray-300">|</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    Brochure
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    RFQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Product Card 3: Suction Unit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">OT</span>
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">ER</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors">
                  Portable Suction Unit
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-vacuum suction for airway clearance with adjustable pressure and portable design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2db8c7] hover:text-[#25a5b3] transition-colors">
                    Request Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <span className="text-gray-300">|</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    Brochure
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    RFQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Product Card 4: OT Light */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">OT</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors">
                  LED Surgical Light
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Shadow-free LED illumination with adjustable intensity for operating theatres.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2db8c7] hover:text-[#25a5b3] transition-colors">
                    Request Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <span className="text-gray-300">|</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    Brochure
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    RFQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Product Card 5: OT Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">OT</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors">
                  Hydraulic OT Table
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Multi-position operating table with hydraulic controls for various surgical procedures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2db8c7] hover:text-[#25a5b3] transition-colors">
                    Request Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <span className="text-gray-300">|</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    Brochure
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    RFQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Product Card 6: Video Laryngoscope */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">OT</span>
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">ER</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors">
                  Video Laryngoscope
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  HD camera-assisted intubation device for difficult airway management in OT and ER.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2db8c7] hover:text-[#25a5b3] transition-colors">
                    Request Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                  <span className="text-gray-300">|</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    Brochure
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#2db8c7] transition-colors">
                    RFQ
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-[#2db8c7] text-[#2db8c7] px-8 py-4 rounded-2xl font-semibold hover:bg-[#2db8c7] hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              Load More Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003867] mb-3">
              Why Choose MEDAP for Electro-Medical Equipment?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for quality medical equipment with comprehensive support
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#2db8c7]/5 to-white p-6 rounded-2xl border-2 border-[#2db8c7]/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003867] mb-2">Certified Quality</h3>
              <p className="text-gray-600 text-sm">
                CE, ISO, and DRAP certified products meeting international standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/5 to-white p-6 rounded-2xl border-2 border-blue-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003867] mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock technical support and emergency service available
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/5 to-white p-6 rounded-2xl border-2 border-purple-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003867] mb-2">Warranty Backed</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive warranty coverage with genuine spare parts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/5 to-white p-6 rounded-2xl border-2 border-green-500/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#003867] mb-2">35+ Years</h3>
              <p className="text-gray-600 text-sm">
                Over three decades of experience serving healthcare facilities nationwide since 1990
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#003867] via-[#004578] to-[#2db8c7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2db8c7] rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Our medical equipment specialists are ready to help you find the perfect solution 
              for your healthcare facility. Get expert consultation and competitive quotes today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-[#003867] px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Request Quote
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-2xl font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: +92-42-36315179
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="grid sm:grid-cols-3 gap-6 text-white/90">
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">medap.international@gmail.com</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
