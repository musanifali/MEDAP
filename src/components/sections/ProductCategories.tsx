'use client'

import { motion } from 'framer-motion'
import { Bed, Armchair, Monitor, Archive, Users, Stethoscope } from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    title: "Electro Medical Equipment",
    description: "Life support equipment including patient monitors, infusion pumps, operation theatre lights and tables",
    count: "Complete Range"
  },
  {
    icon: Stethoscope,
    title: "Medical Gases",
    description: "Medical gas pipeline systems with automatic manifolds, outlet points, and oxygen cylinders",
    count: "Full Systems"
  },
  {
    icon: Bed,
    title: "Hospital Furniture",
    description: "Complete range of hospital beds, patient chairs, medical workstations and storage solutions",
    count: "Wide Selection"
  },
  {
    icon: Archive,
    title: "CSSD Equipment",
    description: "Autoclaves, steam sterilizers, surgical scrub units and sterilization indicators",
    count: "Quality Assured"
  },
  {
    icon: Users,
    title: "Surgical Instruments",
    description: "Comprehensive line of quality medical surgical instruments made from premium materials",
    count: "Premium Quality"
  },
  {
    icon: Armchair,
    title: "Complete Solutions",
    description: "End-to-end healthcare facility setup with installation and after-sales service",
    count: "Full Support"
  }
]

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] mb-6">
            Product
            <span className="block text-[#2db8c7]">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive furniture solutions for every area of your healthcare facility
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#2db8c7] rounded-2xl flex items-center justify-center mb-6">
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#003867] mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="text-[#2db8c7] font-semibold">{category.count}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}