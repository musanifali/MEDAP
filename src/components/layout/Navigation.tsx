'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="hidden md:block absolute top-25 sm:top-40 md:top-24 lg:top-44 left-0 right-0 z-50 py-3 sm:py-4">
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-full shadow-xl border border-gray-100 px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1">
              {navItems.map((item, index) => {
                return (
                  <a key={item.name} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="text-lg font-semibold transition-colors duration-200 relative py-2 cursor-pointer text-gray-700 hover:text-[#2db8c7]"
                    >
                      {item.name}
                    </motion.div>
                  </a>
                )
              })}
            </div>

            {/* Mobile Brand Name */}
            <div className="lg:hidden flex-1">
              <span className="text-lg font-bold text-[#003867]">MEDAP</span>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <a href="#contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden text-base lg:text-lg cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="hidden lg:inline">Get Quote</span>
                    <span className="lg:hidden">Quote</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25a5b3] to-[#2db8c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </a>
            </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#2db8c7] hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-gray-200/20">
                {navItems.map((item, index) => {
                  return (
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
                  )
                })}
                <a href="#contact">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white py-3.5 rounded-full font-bold text-base shadow-lg cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Get Quote
                  </motion.div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        </div>
      </motion.nav>
    </div>
  )
}