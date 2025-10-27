'use client'

import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
]

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      {/* Announcement Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#4a5568] text-white py-2 text-center text-xs sm:text-sm"
      >
        <div className="container mx-auto px-4">
          <p className="font-medium">
            We are here, ready to support{' '}
            <span className="font-bold">safe sterilization with certified supplies</span>{' '}
            delivered right to your facility.
          </p>
        </div>
      </motion.div>

      {/* Contact Info Bar with Logo - Increased Height */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white border-b border-gray-200 py-6 sm:py-8 md:py-10 lg:py-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center flex-shrink-0"
            >
              <Image 
                src="/MEDAP%20Logo.png" 
                alt="MEDAP International" 
                width={300}
                height={70}
                priority
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </motion.a>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-[#2db8c7] hover:bg-gray-100 transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Contact Info - Hidden on small screens */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {/* Email */}
              <div className="flex items-center gap-2 lg:gap-3 text-gray-700">
                <div className="w-10 h-10 bg-[#2db8c7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2db8c7]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email Address</p>
                  <a href="mailto:info@medapinternational.com" className="text-sm font-semibold text-gray-800 hover:text-[#2db8c7] transition-colors">
                    info@medapinternational.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 lg:gap-3 text-gray-700">
                <div className="w-10 h-10 bg-[#2db8c7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#2db8c7]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Phone Number</p>
                  <a href="tel:+923008442270" className="text-sm font-semibold text-gray-800 hover:text-[#2db8c7] transition-colors">
                    +92-300-8442270
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 lg:gap-3 text-gray-700">
                <div className="w-10 h-10 bg-[#2db8c7]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#2db8c7]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Our Location</p>
                  <p className="text-sm font-semibold text-gray-800">Lateef Manzal 1st Floor, Lahore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <a key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="block font-semibold text-base transition-colors duration-200 px-2 py-2 cursor-pointer text-gray-700 hover:text-[#2db8c7]"
                    >
                      {item.name}
                    </motion.div>
                  </a>
                ))}
                <a href="#contact">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white py-3.5 rounded-full font-bold text-base shadow-lg cursor-pointer mt-4"
                  >
                    Get Quote
                  </motion.div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
