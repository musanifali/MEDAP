'use client'

import { motion } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "What products and services does MEDAP International provide?",
    answer: "MEDAP International is a complete healthcare solution provider offering Electro Medical Equipment (patient monitors, infusion pumps, operation theatre equipment), Hospital Furniture, Surgical Instruments, Medical Gas Pipeline Systems, and CSSD Equipment. We've been serving healthcare institutions across Pakistan since 1990."
  },
  {
    question: "What is MEDAP's commitment to quality?",
    answer: "We are committed to Total Customer Satisfaction through our Quality Management System. We ensure compliance with customer requirements, Health Department laws, Ministry of Defense rules, and all regulatory requirements. Our goal is to emerge as market leader through honesty, quality, and continual improvement."
  },
  {
    question: "Who are MEDAP's major clients?",
    answer: "We proudly serve all Punjab Rangers Hospitals, Combined Military Hospitals, Armed Forces Institutes, Fauji Foundation Hospitals, PAF Hospitals/Bases, DHQ & THQ Hospitals, Population Welfare Department, DG Health Services Punjab & KPK, UNICEF Pakistan, and many other leading healthcare institutions across Pakistan."
  },
  {
    question: "What makes MEDAP International different from other suppliers?",
    answer: "MEDAP is not just a firm, it's a family. We provide quality working environment with interactive and communicative staff. Our 'Caring for Life' philosophy, established since 1990, combined with healthy working relationships with clients makes us one of Pakistan's most trusted suppliers and service providers in healthcare."
  },
  {
    question: "Does MEDAP provide installation and after-sales service?",
    answer: "Yes! We provide complete solutions including installation services and after-sales support. Our team of professionally competent personnel ensures proper setup, training, and ongoing support for all equipment and systems we supply."
  },
  {
    question: "What is MEDAP's mission and vision?",
    answer: "Our mission is to provide completely reliable and high-quality products, solutions, and services resulting in customer loyalty, fair profit, and inspired human capital. Our vision is to become the most dynamic, valued, and leading healthcare service provider in the community we serve."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-[#e6f9fb] border border-[#ccf3f7] rounded-full px-4 py-2 text-sm font-medium text-[#1b6e78] mb-6"
          >
            <HelpCircle size={16} />
            <span>Frequently Asked Questions</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003867] mb-4 sm:mb-6">
            Got Questions?
            <span className="block text-[#2db8c7]">We Have Answers</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Find answers to common questions about our hospital furniture solutions and services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 text-left transition-all duration-300 border border-gray-200 hover:border-[#2db8c7]/30"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-[#003867] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-[#2db8c7] rounded-full flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-[#2db8c7]/25 transition-all duration-300"
          >
            Contact Our Experts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}