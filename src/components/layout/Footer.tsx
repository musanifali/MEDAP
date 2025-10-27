'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Award, Shield, Heart } from 'lucide-react'

const footerSections = [
  {
    title: "Products",
    links: [
      { name: "Hospital Beds", href: "#" },
      { name: "Patient Seating", href: "#" },
      { name: "Medical Workstations", href: "#" },
      { name: "Storage Solutions", href: "#" },
      { name: "Waiting Room Furniture", href: "#" },
      { name: "Bedside Tables", href: "#" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { name: "ICU Solutions", href: "#" },
      { name: "Emergency Department", href: "#" },
      { name: "Patient Rooms", href: "#" },
      { name: "Surgical Suites", href: "#" },
      { name: "Rehabilitation Centers", href: "#" },
      { name: "Long-term Care", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press & Media", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Quality Assurance", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#contact" },
      { name: "Technical Support", href: "#" },
      { name: "Installation Guide", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "Maintenance", href: "#" },
      { name: "Training", href: "#" }
    ]
  }
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" }
]

const certifications = [
  { name: "ISO 9001", description: "Quality Management" },
  { name: "FDA Approved", description: "Medical Device Standards" },
  { name: "CE Marking", description: "European Conformity" },
  { name: "ISO 13485", description: "Medical Device Quality" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with Healthcare Innovation
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on hospital furniture innovations, 
              industry insights, and exclusive offers for healthcare professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold">MEDAP International</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of innovative hospital furniture solutions, dedicated to enhancing 
              patient care and supporting healthcare professionals worldwide since 2010.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-500" />
                <span className="text-gray-300">info@medapinternational.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary-500 mt-1" />
                <span className="text-gray-300">123 Healthcare Blvd<br />Medical District, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <h4 className="text-lg font-semibold mb-6 text-center">Certifications & Compliance</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="text-center p-4 bg-gray-800 rounded-2xl hover:bg-gray-750 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award size={20} className="text-white" />
                </div>
                <div className="font-semibold text-sm mb-1">{cert.name}</div>
                <div className="text-xs text-gray-400">{cert.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MEDAP International. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Cookie Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -1 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Accessibility
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-950 py-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield size={14} />
              <span>Secure & Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award size={14} />
              <span>Industry Leader</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart size={14} />
              <span>Patient-First Design</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}