'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92-42-36315179", "+92-42-36363339"],
    description: "Mon-Fri 9AM-6PM PKT"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["medap.international@gmail.com"],
    description: "We respond promptly"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["17 G, Sharf Mansion", "Chowk Ganga Ram Hospital", "16 Shahrah e Fatima Jinnah", "Lahore, Punjab, Pakistan"],
    description: "Visit our office"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 9AM-6PM", "Sat: 9AM-2PM"],
    description: "Pakistan Time"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospital: '',
    role: '',
    inquiry: 'general',
    message: '',
    budget: '',
    timeline: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      hospital: '',
      role: '',
      inquiry: 'general',
      message: '',
      budget: '',
      timeline: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-[#e6f9fb] border border-[#ccf3f7] rounded-full px-4 py-2 text-sm font-medium text-[#1b6e78] mb-6"
          >
            <MessageCircle size={16} />
            <span>Get In Touch</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003867] mb-6">
            Ready to Elevate Your
            <span className="block text-[#2db8c7]">Healthcare Facility?</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Contact MEDAP International today to discuss your requirements for medical equipment, 
            hospital furniture, surgical instruments, or medical gas systems. We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-[#2db8c7] to-[#25a5b3] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-[#ccf3f7] mb-1">{detail}</p>
                        ))}
                        <p className="text-[#99e7ef] text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white/20 hover:bg-white/30 rounded-2xl p-3 text-left flex items-center space-x-3 transition-colors duration-300"
                    >
                      <Calendar size={16} />
                      <span>Schedule Consultation</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white/20 hover:bg-white/30 rounded-2xl p-3 text-left flex items-center space-x-3 transition-colors duration-300"
                    >
                      <Send size={16} />
                      <span>Download Catalog</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                      placeholder="your.email@hospital.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select your role</option>
                      <option value="administrator">Hospital Administrator</option>
                      <option value="doctor">Doctor/Physician</option>
                      <option value="nurse">Nurse Manager</option>
                      <option value="facilities">Facilities Manager</option>
                      <option value="purchasing">Purchasing Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Hospital Information */}
                <div>
                  <label htmlFor="hospital" className="block text-sm font-semibold text-gray-700 mb-2">
                    Hospital/Organization Name *
                  </label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                    placeholder="Your hospital or organization name"
                  />
                </div>

                {/* Inquiry Details */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                    >
                      <option value="general">General Information</option>
                      <option value="quote">Request Quote</option>
                      <option value="demo">Schedule Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="50k">$10K - $50K</option>
                      <option value="100k">$50K - $100K</option>
                      <option value="250k">$100K - $250K</option>
                      <option value="500k">$250K - $500K</option>
                      <option value="1m">$500K - $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="quarter">This Quarter (1-3 months)</option>
                    <option value="6months">6 months</option>
                    <option value="year">Within a year</option>
                    <option value="planning">Just planning</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2db8c7] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us more about your specific needs, current challenges, or any questions you have about our products..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-[#2db8c7]/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-to-r from-gray-50 to-[#e6f9fb] rounded-3xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-6">
            Our healthcare furniture experts are standing by to help you find the perfect solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2db8c7] hover:bg-[#25a5b3] text-white px-6 py-3 rounded-2xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
            
            <motion.a
              href="mailto:info@medapinternational.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2db8c7] text-[#2db8c7] hover:bg-[#2db8c7] hover:text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail size={18} />
              <span>Email Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}