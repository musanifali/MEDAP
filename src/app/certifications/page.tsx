'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function CertificationsPage() {
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
              Quality & Certifications
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2db8c7] rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003867] mb-6">
              Quality &
              <span className="block text-[#2db8c7] mt-2">Certifications</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Our commitment to quality is backed by rigorous standards, certifications, and 
              continuous improvement of our Quality Management System.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] mb-6 text-center">
              Our Quality
              <span className="block text-[#2db8c7] mt-2">Policy</span>
            </h2>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                At MEDAP International, our quality policy prioritizes <strong>customer satisfaction</strong>, 
                <strong> honesty</strong>, and <strong>continual improvement</strong> of our Quality Management System (QMS). 
                We are committed to:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2db8c7] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Meeting customer requirements and applicable regulatory and statutory obligations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2db8c7] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Delivering reliable, high-quality products and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2db8c7] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Maintaining transparency and integrity in all operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2db8c7] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Continuous training and development of our team</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#2db8c7] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Regular audits and process improvements</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] mb-4">
              Certifications &
              <span className="block text-[#2db8c7] mt-2">Standards</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We adhere to international quality standards and maintain certifications that ensure 
              product safety and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Certification 1: ISO 9001 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">
                Quality Management System certification ensuring consistent quality in our processes and services.
              </p>
            </motion.div>

            {/* Certification 2: CE Marking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">CE Marking</h3>
              <p className="text-gray-600 text-sm">
                European Conformity marking for applicable medical devices, ensuring safety and health standards.
              </p>
            </motion.div>

            {/* Certification 3: ISO 13485 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">ISO 13485</h3>
              <p className="text-gray-600 text-sm">
                Medical devices quality management system for design, development, and distribution.
              </p>
            </motion.div>

            {/* Certification 4: DRAP Registration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">DRAP Registered</h3>
              <p className="text-gray-600 text-sm">
                Drug Regulatory Authority of Pakistan registration for medical devices and equipment.
              </p>
            </motion.div>

            {/* Certification 5: Good Distribution Practice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">GDP Compliant</h3>
              <p className="text-gray-600 text-sm">
                Good Distribution Practice standards for proper storage, handling, and transport of medical products.
              </p>
            </motion.div>

            {/* Certification 6: Calibration Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">Calibration Certified</h3>
              <p className="text-gray-600 text-sm">
                Regular calibration certificates for equipment ensuring accuracy and reliability of measurements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] mb-4">
                Regulatory
                <span className="block text-[#2db8c7] mt-2">Compliance</span>
              </h2>
            </motion.div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                MEDAP International works closely with healthcare institutions, government bodies, and defense organizations 
                to ensure full compliance with:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2db8c7] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Ministry of Health regulations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2db8c7] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">DRAP medical device requirements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2db8c7] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Defense procurement standards</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2db8c7] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">International safety standards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2db8c7] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Environmental regulations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2db8c7] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Quality audit requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#003867] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Need Certification Documents?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Request copies of our certifications, quality policy, or compliance documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2db8c7] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-[#2db8c7]/50 transition-all duration-300"
                >
                  Learn About Our Quality
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#003867] px-10 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Request Certificate Copies
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
