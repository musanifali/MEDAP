'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import { Wind } from 'lucide-react'

const products = [
  'Complete MGPS Installation',
  'Air & Oxygen Compressor Plants',
  'Vacuum & Suction Stations',
  'Cylinder Manifolds',
  'Central & Zone Alarm Systems',
  'Zone & Line Pressure Regulators',
  'Gas Outlets (Wall/Pendant)',
  'AGSS (Anesthetic Gas Scavenging System)',
  'Bed Head Units (Horizontal/Vertical)',
  'Gas Cylinders & Accessories',
  'Color-coded Pipeline Network'
]

export default function MGPSPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <TopBar />
      <Navigation />
      
      <section className="bg-gray-50 py-4 border-b border-gray-200 mt-1 md:mt-10 lg:mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#2db8c7] transition-colors duration-200">Home</Link>
            <span className="text-gray-400">→</span>
            <Link href="/products" className="hover:text-[#2db8c7] transition-colors duration-200">Products</Link>
            <span className="text-gray-400">→</span>
            <span className="text-[#003867] font-semibold">Medical Gas Pipeline System</span>
          </nav>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Wind className="w-10 h-10 lg:w-12 lg:h-12 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">Medical Gas Pipeline System</h1>
                <p className="text-lg sm:text-xl text-white/90">Complete MGPS infrastructure solutions</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
              <p className="text-white text-lg leading-relaxed">
                Comprehensive medical gas pipeline infrastructure including oxygen, medical air, nitrous oxide, vacuum, and AGSS systems. From compressor plants to bed head units.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003867] mb-4">Our Product Range</h2>
              <p className="text-gray-600 text-lg">{products.length} comprehensive MGPS solutions</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }} whileHover={{ y: -8, scale: 1.02 }} className="group">
                  <div className="relative bg-cyan-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-cyan-200 hover:border-cyan-400 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                      <Wind className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-semibold text-[#003867] mb-3 leading-snug group-hover:text-cyan-600 transition-colors">{product}</h4>
                    <Link href="/contact">
                      <button className="flex items-center gap-2 text-sm text-cyan-600 group-hover:text-cyan-700 transition-colors mt-3 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Request Info
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="mt-16 text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Need a Custom Quote?</h3>
                <p className="text-lg mb-6 opacity-90">Our experts will help you design and install the perfect MGPS solution</p>
                <Link href="/contact">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-white text-cyan-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Quote for MGPS
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
