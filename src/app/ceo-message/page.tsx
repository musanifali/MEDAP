'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/layout/Navigation'
import TopBar from '@/components/layout/TopBar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function CEOMessagePage() {
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
              href="/about" 
              className="hover:text-[#2db8c7] transition-colors duration-200"
            >
              About
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-[#003867] font-semibold" aria-current="page">
              CEO Message
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#003867] via-[#004a7c] to-[#003867] overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#2db8c7]/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#2db8c7]/10 blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#2db8c7] animate-pulse"></span>
              <span className="text-sm font-bold">Leadership Message</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Message from the
              <span className="block mt-2 bg-gradient-to-r from-[#2db8c7] via-white to-[#2db8c7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Chief Executive Officer
              </span>
            </motion.h1>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-white/90 italic font-light"
            >
              "Empowering healthcare providers with quality solutions and unwavering support"
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* CEO Profile Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-8 space-y-6">
                {/* CEO Photo */}
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2db8c7]/20">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  {/* Decorative Corner */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-full blur-2xl opacity-50"></div>
                </div>

                {/* CEO Info Card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#003867] mb-2">CEO Name</h3>
                  <p className="text-[#2db8c7] font-semibold mb-4">Chief Executive Officer</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-full mb-4"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leading MEDAP International with a vision to transform healthcare delivery across Pakistan through innovation, quality, and customer-first approach.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">30+</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Years of</div>
                        <div className="font-semibold text-[#003867]">Excellence</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">500+</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Healthcare</div>
                        <div className="font-semibold text-[#003867]">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Opening Statement */}
              <div className="bg-gradient-to-br from-[#2db8c7]/5 to-[#25a5b3]/5 rounded-2xl p-8 border-l-4 border-[#2db8c7]">
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "Since 1990, MEDAP International has been committed to one unwavering mission: empowering healthcare providers across Pakistan with reliable, high-quality medical equipment and exceptional service that makes a real difference in patient care."
                </p>
              </div>

              {/* Main Message */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-[#003867] mb-4">Our Journey & Commitment</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When we founded MEDAP International 35 years ago in 1990, we had a clear vision: to become Pakistan's most trusted partner in healthcare solutions. Today, I'm proud to say that we serve more than 500 healthcare facilities across 50+ cities, from the Armed Forces Medical Institutes and Combined Military Hospitals to district health facilities and international development programs.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  What sets us apart is not just our comprehensive product portfolio—spanning electro-medical equipment, hospital furniture, surgical instruments, CSSD solutions, and medical gas systems—but our <strong className="text-[#2db8c7]">customer-first philosophy</strong> that permeates everything we do.
                </p>

                <h2 className="text-3xl font-bold text-[#003867] mb-4 mt-12">Quality Without Compromise</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In healthcare, there is no room for compromise. That's why we've built a <strong className="text-[#003867]">culture of compliance and quality</strong> that goes beyond certifications. Our ISO certification, DRAP approval, and CE-compliant products are not just badges—they represent our promise that every piece of equipment we deliver meets the highest international standards.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We carefully select our manufacturing partners, conduct rigorous quality checks, and maintain transparent documentation throughout the supply chain. Because we understand that the equipment we provide directly impacts patient outcomes and healthcare worker safety.
                </p>

                <h2 className="text-3xl font-bold text-[#003867] mb-4 mt-12">Service That Never Stops</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A sale is just the beginning of our relationship with clients. Our <strong className="text-[#2db8c7]">24/7 nationwide after-sales support</strong>, preventive maintenance programs, and comprehensive training ensure that healthcare facilities can rely on their equipment day after day, year after year.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We maintain regional service centers, rapid-response spare parts inventory, and trained technicians who understand that downtime in healthcare is not an option. This commitment to service has earned us the trust of Pakistan's most demanding healthcare institutions.
                </p>

                <h2 className="text-3xl font-bold text-[#003867] mb-4 mt-12">Looking Forward</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As we look to the future, we remain committed to innovation, expanding our product offerings, and strengthening our service capabilities. We're investing in digital solutions, exploring new partnerships with leading global manufacturers, and continuously training our team to deliver even better value to our clients.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Healthcare in Pakistan is evolving, and MEDAP International will continue to be at the forefront—supporting hospitals and healthcare programs with the equipment, expertise, and dedication they need to deliver world-class care.
                </p>

                {/* Closing Statement */}
                <div className="bg-[#003867] text-white rounded-2xl p-8 mt-12">
                  <p className="text-lg leading-relaxed mb-6">
                    Thank you to our clients for placing your trust in us, to our team for their tireless dedication, and to our partners for their collaboration. Together, we're not just supplying equipment—we're <strong>improving healthcare, one facility at a time</strong>.
                  </p>
                  <p className="text-xl font-semibold">
                    With gratitude and commitment,
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-2xl font-bold mb-1">CEO Name</p>
                    <p className="text-[#2db8c7]">Chief Executive Officer</p>
                    <p className="text-white/80 text-sm">MEDAP International</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 mt-12">
                <h3 className="text-2xl font-bold text-[#003867] mb-4">Want to Learn More?</h3>
                <p className="text-gray-600 mb-6">
                  Discover our complete range of healthcare solutions or get in touch with our team to discuss your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Products
                    </motion.button>
                  </Link>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto bg-white text-[#003867] px-8 py-4 rounded-xl font-semibold border-2 border-[#003867] hover:bg-[#003867] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
