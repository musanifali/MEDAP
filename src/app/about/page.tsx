'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Head from 'next/head'

export default function AboutPage() {
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
            <span className="text-[#003867] font-semibold" aria-current="page">
              About
            </span>
          </nav>
        </div>
      </section>

      {/* Section 2: Who We Are - Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border-2 border-[#2db8c7]/20"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2db8c7] to-[#25a5b3]"
                ></motion.span>
                <span className="text-sm font-bold bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] bg-clip-text text-transparent">
                  Trusted Healthcare Partner Since 1990
                </span>
              </motion.div>

              {/* Main Heading with Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-[#003867]">About </span>
                  <span className="bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    MEDAP
                  </span>
                  <span className="block text-[#003867] mt-2">International</span>
                </h1>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '200px' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-1.5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mt-4"
                ></motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                Founded in <span className="font-bold text-[#2db8c7]">1990</span>, MEDAP International is a Pakistan‑based 
                <span className="font-semibold text-gray-800"> healthcare solutions company</span> supplying 
                electro‑medical equipment, medical gas systems, hospital furniture, CSSD solutions, and surgical 
                instruments. We combine reliable products with responsive after‑sales service, training, and 
                nationwide support—so hospitals and programs can deliver <span className="font-semibold text-[#2db8c7]">safer, better care</span>.
              </motion.p>

              {/* Enhanced Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">🏆</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#003867]">35+</div>
                      <div className="text-xs text-gray-600">Years Legacy</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">🇵🇰</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#003867]">50+</div>
                      <div className="text-xs text-gray-600">Cities Served</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">🏥</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#003867]">500+</div>
                      <div className="text-xs text-gray-600">Healthcare Clients</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center shadow-lg">
                      <span className="text-white text-xl font-bold">🔧</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#003867]">24/7</div>
                      <div className="text-xs text-gray-600">Support</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/products" className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-full sm:w-auto bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[#2db8c7]/30 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Products
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.button>
                </Link>

                <Link href="/contact" className="group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-[#003867] px-8 py-4 rounded-2xl font-semibold border-2 border-[#003867] hover:bg-[#003867] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Contact Us
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Enhanced Image with Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[450px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Medical Equipment Image */}
              <Image
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&q=80"
                alt="Modern Hospital Medical Equipment and Facility"
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003867]/90 via-[#003867]/50 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-center space-y-4"
                >
                  <div className="text-5xl sm:text-6xl font-bold drop-shadow-lg">MEDAP</div>
                  <div className="text-2xl sm:text-3xl font-light tracking-wider">International</div>
                  <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mt-4"></div>
                  <div className="text-sm sm:text-base font-medium tracking-wide">Healthcare Solutions Provider</div>
                </motion.div>
              </div>

              {/* Stats Cards Overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white/95 backdrop-blur-xl rounded-xl p-3 text-center shadow-xl"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#2db8c7]">ISO</div>
                  <div className="text-xs text-gray-600">Certified</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/95 backdrop-blur-xl rounded-xl p-3 text-center shadow-xl"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#2db8c7]">DRAP</div>
                  <div className="text-xs text-gray-600">Approved</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-white/95 backdrop-blur-xl rounded-xl p-3 text-center shadow-xl"
                >
                  <div className="text-xl sm:text-2xl font-bold text-[#2db8c7]">CE</div>
                  <div className="text-xs text-gray-600">Compliant</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission, Vision & Values */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2db8c7]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#003867]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border border-[#2db8c7]/20 mb-6"
            >
              <span className="text-2xl">🎯</span>
              <span className="text-sm font-semibold text-[#2db8c7]">What Drives Us</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              <span className="text-[#003867]">Our Purpose & </span>
              <span className="bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Core Values
              </span>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto"
            ></motion.div>
          </motion.div>

          {/* Mission & Vision - Enhanced 2 Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 lg:mb-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#2db8c7]/20 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#2db8c7]/30"
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  To provide <span className="font-semibold text-[#2db8c7]">reliable, high‑quality products</span>, solutions, and services that earn customer 
                  loyalty and inspire our people.
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2db8c7]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#003867]/20 overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003867]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#003867] to-[#2db8c7] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#003867]/30"
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#003867] transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  To be the most <span className="font-semibold text-[#003867]">dynamic, valued, and leading</span> healthcare service provider in our community.
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#003867]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Values Grid - 6 Cards */}
          <div>
            {/* Values Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#003867] mb-3">
                Six Core <span className="text-[#2db8c7]">Values</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision and action we take
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Value 1: Commitment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors duration-300">Commitment</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">We keep our promises to customers and colleagues.</p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2db8c7]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2db8c7]">01</span>
                </div>
              </motion.div>

              {/* Value 2: Customer Value */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors duration-300">Customer Value</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">Every decision centers on end‑user outcomes.</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2db8c7]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2db8c7]">02</span>
                </div>
              </motion.div>

              {/* Value 3: Teamwork */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors duration-300">Teamwork</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">We collaborate openly and support each other.</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2db8c7]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2db8c7]">03</span>
                </div>
              </motion.div>

              {/* Value 4: Professionalism */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors duration-300">Professionalism</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">We act with integrity, clarity, and respect.</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2db8c7]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2db8c7]">04</span>
                </div>
              </motion.div>

              {/* Value 5: Flexibility & Adaptability */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors duration-300">Flexibility & Adaptability</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">We respond to changing needs quickly.</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2db8c7]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2db8c7]">05</span>
                </div>
              </motion.div>

              {/* Value 6: Social Responsibility */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-[#2db8c7] transition-colors duration-300">Social Responsibility</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">We contribute to healthier communities.</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#2db8c7]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2db8c7]">06</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What Makes Us Different */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#2db8c7]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border border-[#2db8c7]/20 mb-6"
            >
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold text-[#2db8c7]">Our Competitive Edge</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              <span className="text-[#003867]">What Makes Us </span>
              <span className="block mt-2 bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Different
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1.5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto"
            ></motion.div>
          </motion.div>

          {/* Enhanced 4 Pillars Grid - 2x2 */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* Pillar 1: Complete Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2db8c7]/10 to-[#25a5b3]/10 flex items-center justify-center border border-[#2db8c7]/20">
                <span className="text-xl font-bold bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] bg-clip-text text-transparent">01</span>
              </div>

              <div className="relative z-10">
                {/* Enhanced Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#2db8c7]/40"
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                  Complete Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  One partner for <span className="font-semibold text-[#2db8c7]">devices, gases, furniture, CSSD, and instruments</span>.
                </p>

                {/* Feature List */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    Electro-Medical Equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    Medical Gas Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    Hospital Furniture & CSSD
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pillar 2: Regulatory Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2db8c7]/10 to-[#25a5b3]/10 flex items-center justify-center border border-[#2db8c7]/20">
                <span className="text-xl font-bold bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] bg-clip-text text-transparent">02</span>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#2db8c7]/40"
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                  Regulatory Alignment
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  Processes and documentation aligned with <span className="font-semibold text-[#2db8c7]">health and defense requirements</span>.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    ISO Certified Processes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    DRAP Approved Products
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    CE Compliance Standards
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pillar 3: Service-First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2db8c7]/10 to-[#25a5b3]/10 flex items-center justify-center border border-[#2db8c7]/20">
                <span className="text-xl font-bold bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] bg-clip-text text-transparent">03</span>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#2db8c7]/40"
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                  Service‑First
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  <span className="font-semibold text-[#2db8c7]">Installation, staff training, and maintenance</span>, delivered promptly.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    Professional Installation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    Comprehensive Training
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    24/7 Technical Support
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pillar 4: Proven Track Record */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2db8c7]/10 to-[#25a5b3]/10 flex items-center justify-center border border-[#2db8c7]/20">
                <span className="text-xl font-bold bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] bg-clip-text text-transparent">04</span>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[#2db8c7]/40"
                >
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#003867] mb-4 group-hover:text-[#2db8c7] transition-colors duration-300">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                  <span className="font-semibold text-[#2db8c7]">Decades of projects</span> across public hospitals, armed forces, and national programs.
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    35+ Years Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    500+ Healthcare Clients
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2db8c7]"></div>
                    Nationwide Projects
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/certifications" className="inline-block group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[#2db8c7]/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Certifications
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 5: National Footprint & Sectors Served */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2db8c7]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#003867]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Enhanced Header */}
            <div className="text-center mb-12 lg:mb-16">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border border-[#2db8c7]/20 mb-6"
              >
                <span className="text-2xl">🌍</span>
                <span className="text-sm font-semibold text-[#2db8c7]">Nationwide Coverage</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                <span className="text-[#003867]">Supporting Care—</span>
                <span className="block mt-2 bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Across Provinces & Care Settings
                </span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '140px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-8"
              ></motion.div>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From <span className="font-semibold text-[#2db8c7]">district hospitals</span> and <span className="font-semibold text-[#2db8c7]">teaching institutions</span> to <span className="font-semibold text-[#003867]">defense health facilities</span> and international 
                programs, MEDAP supports project scoping, supply, installation, and ongoing service.
              </p>
            </div>

            {/* Enhanced Sectors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Sector 1: DHQs & THQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg group-hover:text-[#2db8c7] transition-colors duration-300">DHQs & THQs</h3>
                    <p className="text-xs text-gray-500 mt-0.5">District Healthcare</p>
                  </div>
                </div>
              </motion.div>

              {/* Sector 2: Teaching/Tertiary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg group-hover:text-[#2db8c7] transition-colors duration-300">Teaching Hospitals</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Tertiary Care Centers</p>
                  </div>
                </div>
              </motion.div>

              {/* Sector 3: Armed Forces */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003867] to-[#2db8c7] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[#003867]/40"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg group-hover:text-[#2db8c7] transition-colors duration-300">Armed Forces</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Defense Medical Units</p>
                  </div>
                </div>
              </motion.div>

              {/* Sector 4: Public Health Programs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg group-hover:text-[#2db8c7] transition-colors duration-300">Public Health</h3>
                    <p className="text-xs text-gray-500 mt-0.5">National Programs</p>
                  </div>
                </div>
              </motion.div>

              {/* Sector 5: NGOs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[#2db8c7]/40"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg group-hover:text-[#2db8c7] transition-colors duration-300">NGOs & Partners</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Development Projects</p>
                  </div>
                </div>
              </motion.div>

              {/* Sector 6: Aviation Medical */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#2db8c7]/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2db8c7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#003867] to-[#2db8c7] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[#003867]/40"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-base lg:text-lg group-hover:text-[#2db8c7] transition-colors duration-300">Aviation Medical</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Specialized Units</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Coverage Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">50+</div>
                <div className="text-sm text-gray-600">Cities Covered</div>
              </div>
              <div className="text-center border-l border-r border-gray-200">
                <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">4</div>
                <div className="text-sm text-gray-600">Provinces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">100%</div>
                <div className="text-sm text-gray-600">Nationwide Service</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Leadership Message */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#003867] via-[#004a7c] to-[#003867] text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-[#2db8c7]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#2db8c7]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="text-2xl">💬</span>
                <span className="text-sm font-semibold text-[#2db8c7]">Leadership Message</span>
              </div>
            </motion.div>

            <blockquote className="text-center">
              {/* Enhanced Quote Mark */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="text-7xl sm:text-8xl text-[#2db8c7] mb-8 font-serif leading-none" 
                aria-hidden="true"
              >
                "
              </motion.div>

              {/* Enhanced Quote Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-12 text-white/95"
              >
                Our shared purpose is <span className="font-semibold text-[#2db8c7]">better health for patients</span>. We deliver quality solutions, 
                honest service, and lasting partnerships.
              </motion.p>

              {/* Enhanced Footer */}
              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Avatar with Animation */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-24 h-24 lg:w-28 lg:h-28 mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full animate-pulse"></div>
                  <div className="absolute inset-1 bg-[#003867] rounded-full flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                      M
                    </div>
                  </div>
                </motion.div>

                <cite className="not-italic">
                  <p className="font-bold text-xl lg:text-2xl mb-2 text-white">Muhammad [Full Name]</p>
                  <p className="text-[#2db8c7] font-semibold text-lg mb-6">CEO, MEDAP International</p>
                </cite>

                {/* Enhanced CTA Button */}
                <Link href="/ceo-message" className="group">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border-2 border-white/30 hover:bg-white hover:text-[#003867] transition-all duration-300 shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Read the Full CEO Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.button>
                </Link>
              </motion.footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Quality Mindset & Compliance Culture */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#2db8c7]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#003867]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 lg:mb-16"
            >
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-2xl mb-6 shadow-xl"
              >
                <motion.svg
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 lg:w-12 lg:h-12 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </motion.svg>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2db8c7]/10 to-[#25a5b3]/10 border border-[#2db8c7]/20 mb-6"
              >
                <span className="text-2xl">✓</span>
                <span className="text-sm font-semibold text-[#2db8c7]">Quality Assurance</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                <span className="text-[#003867]">Quality That Stands Behind </span>
                <span className="block mt-2 bg-gradient-to-r from-[#2db8c7] via-[#25a5b3] to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Every Delivery
                </span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '120px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1.5 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-8"
              ></motion.div>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our policy prioritizes <span className="font-semibold text-[#2db8c7]">customer satisfaction, honesty, and continual improvement</span> of our QMS. 
                We work to meet customer requirements and applicable regulatory and statutory obligations.
              </p>
            </motion.div>

            {/* Certification Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">ISO</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">DRAP</div>
                  <div className="text-sm text-gray-600">Approved</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 hover:border-[#2db8c7]/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">CE</div>
                  <div className="text-sm text-gray-600">Compliant</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/certifications" className="group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-[#2db8c7]/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Certifications
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.button>
              </Link>

              <Link href="/contact" className="group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#003867] px-8 py-4 rounded-2xl font-semibold border-2 border-[#003867] hover:bg-[#003867] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Certificates
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
