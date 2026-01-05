'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { Activity, Heart, Stethoscope, AlertCircle, Baby, Wind, Shield, ArrowRight } from 'lucide-react'

const productCategories = [
  {
    id: 'operation-theater',
    title: 'Operation Theater',
    icon: Activity,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    hoverBg: 'hover:bg-blue-500',
    textColor: 'text-blue-600',
    description: 'Complete OT solutions for surgical excellence',
    count: 16
  },
  {
    id: 'icu-ward',
    title: 'ICU / Ward',
    icon: Heart,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    hoverBg: 'hover:bg-red-500',
    textColor: 'text-red-600',
    description: 'Critical care & ward equipment for patient monitoring',
    count: 10
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic',
    icon: Stethoscope,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    hoverBg: 'hover:bg-green-500',
    textColor: 'text-green-600',
    description: 'Essential diagnostic tools for accurate assessment',
    count: 5
  },
  {
    id: 'emergency',
    title: 'Emergency',
    icon: AlertCircle,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    hoverBg: 'hover:bg-orange-500',
    textColor: 'text-orange-600',
    description: 'Life-saving emergency care equipment',
    count: 4
  },
  {
    id: 'gyne-nursery',
    title: 'Gyne & Nursery',
    icon: Baby,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    hoverBg: 'hover:bg-pink-500',
    textColor: 'text-pink-600',
    description: 'Specialized maternal & neonatal care solutions',
    count: 9
  },
  {
    id: 'mgps',
    title: 'Medical Gas Pipeline System',
    icon: Wind,
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    hoverBg: 'hover:bg-cyan-500',
    textColor: 'text-cyan-600',
    description: 'Complete medical gas infrastructure solutions',
    count: 11
  },
  {
    id: 'cssd',
    title: 'CSSD System',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    hoverBg: 'hover:bg-purple-500',
    textColor: 'text-purple-600',
    description: 'Comprehensive sterilization & infection control',
    count: 11
  }
]

export default function ProductsPage() {
  return (
    <main className="relative bg-white">
      <ScrollProgress />
      <TopBar />
      <Navigation />
      
      {/* Hero Section - Simplified */}
      <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-[#003867] via-[#004578] to-[#2db8c7] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-[#2db8c7] rounded-full animate-pulse"></span>
              35+ Years of Excellence
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Medical Equipment
              <span className="block text-[#2db8c7] mt-2">Solutions</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Comprehensive portfolio of life-saving medical devices and hospital infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid - Clean & Modern */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003867] mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our specialized product lines designed for every aspect of healthcare delivery
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/products/${category.id}`}>
                    <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent h-full overflow-hidden">
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* 3D Icon Container */}
                        <div className="relative mb-6">
                          {/* 3D Shadow Layers */}
                          <div className={`absolute top-2 left-2 w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl blur-md opacity-40`}></div>
                          <div className={`absolute top-1 left-1 w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl opacity-30`}></div>
                          
                          {/* Main 3D Icon */}
                          <div className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-3 transition-all duration-500`}
                            style={{
                              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.2)'
                            }}
                          >
                            {/* Icon Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/30"></div>
                            
                            {/* Icon */}
                            <IconComponent className="relative w-8 h-8 text-white drop-shadow-lg" strokeWidth={2.5} />
                            
                            {/* Bottom Shine */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl"></div>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#003867] mb-2 group-hover:text-white transition-colors duration-300">
                          {category.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-4 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                          {category.description}
                        </p>
                        
                        {/* Product Count */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                            {category.count} Products
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { number: '7', label: 'Product Categories' },
              { number: '66+', label: 'Products' },
              { number: '500+', label: 'Healthcare Facilities' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#003867] to-[#2db8c7] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#003867] to-[#2db8c7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Our experts are ready to help you find the perfect equipment for your healthcare facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-[#003867] px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
