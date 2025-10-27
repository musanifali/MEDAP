'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: "EliteCare Hospital Bed",
    category: "Patient Beds",
    features: ["Electric Adjustment", "Memory Foam", "IoT Monitoring"],
    description: "Premium electric hospital bed with advanced patient monitoring and comfort features.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="32" width="48" height="16" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="4" y="28" width="4" height="24" rx="2" fill="#003867"/>
        <rect x="56" y="28" width="4" height="24" rx="2" fill="#003867"/>
        <rect x="12" y="24" width="40" height="4" rx="2" fill="#2db8c7"/>
        <circle cx="16" cy="44" r="3" fill="#003867"/>
        <circle cx="48" cy="44" r="3" fill="#003867"/>
      </svg>
    )
  },
  {
    id: 2,
    name: "MediComfort Recliner",
    category: "Patient Seating",
    features: ["Zero Gravity", "Heat Therapy", "Memory Position"],
    description: "Therapeutic recliner designed for patient comfort during treatments and recovery.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <path d="M16 20h32c4 0 8 4 8 8v16c0 4-4 8-8 8H16c-4 0-8-4-8-8V28c0-4 4-8 8-8z" fill="#2db8c7" opacity="0.8"/>
        <rect x="12" y="44" width="40" height="8" rx="4" fill="#003867"/>
        <rect x="8" y="16" width="8" height="16" rx="4" fill="#2db8c7"/>
        <rect x="48" y="16" width="8" height="16" rx="4" fill="#2db8c7"/>
      </svg>
    )
  },
  {
    id: 3,
    name: "FlexiDesk Medical Workstation",
    category: "Workstations",
    features: ["Height Adjustable", "Cable Management", "Antimicrobial"],
    description: "Ergonomic workstation optimized for healthcare professionals' daily workflows.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="12" y="20" width="40" height="2" fill="#003867"/>
        <rect x="12" y="26" width="40" height="2" fill="#003867"/>
        <rect x="28" y="48" width="8" height="12" fill="#003867"/>
        <rect x="20" y="56" width="24" height="4" rx="2" fill="#2db8c7"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "TechCart Mobile Unit",
    category: "Storage & Transport",
    features: ["Secure Storage", "Silent Wheels", "Battery Powered"],
    description: "Mobile medical cart with secure storage and battery-powered technology features.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="16" y="12" width="32" height="36" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="20" y="16" width="24" height="2" fill="#003867"/>
        <rect x="20" y="22" width="24" height="2" fill="#003867"/>
        <rect x="20" y="28" width="24" height="2" fill="#003867"/>
        <circle cx="20" cy="52" r="4" fill="#003867"/>
        <circle cx="44" cy="52" r="4" fill="#003867"/>
        <rect x="24" y="8" width="16" height="4" rx="2" fill="#2db8c7"/>
      </svg>
    )
  },
  {
    id: 5,
    name: "ComfortZone Waiting Chairs",
    category: "Waiting Room",
    features: ["Stain Resistant", "Easy Assembly", "Multiple Colors"],
    description: "Comfortable and durable seating solution for hospital waiting areas.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="24" width="16" height="20" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="28" y="24" width="16" height="20" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="48" y="24" width="8" height="20" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="8" y="16" width="16" height="8" rx="4" fill="#003867"/>
        <rect x="28" y="16" width="16" height="8" rx="4" fill="#003867"/>
        <rect x="48" y="16" width="8" height="8" rx="4" fill="#003867"/>
        <rect x="4" y="44" width="56" height="4" rx="2" fill="#2db8c7"/>
      </svg>
    )
  },
  {
    id: 6,
    name: "VitalMonitor Bedside Table",
    category: "Bedside Furniture",
    features: ["Built-in Charging", "Adjustable Height", "Storage Drawer"],
    description: "Smart bedside table with integrated technology and patient convenience features.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="16" y="20" width="32" height="24" rx="2" fill="#2db8c7" opacity="0.8"/>
        <rect x="20" y="24" width="24" height="2" fill="#003867"/>
        <rect x="20" y="30" width="24" height="2" fill="#003867"/>
        <rect x="20" y="36" width="24" height="2" fill="#003867"/>
        <rect x="28" y="44" width="8" height="12" fill="#003867"/>
        <rect x="20" y="52" width="24" height="4" rx="2" fill="#2db8c7"/>
        <circle cx="24" cy="28" r="1" fill="#2db8c7"/>
        <circle cx="40" cy="28" r="1" fill="#2db8c7"/>
      </svg>
    )
  }
]

const categories = ["All Products", "Patient Beds", "Patient Seating", "Workstations", "Storage & Transport", "Waiting Room", "Bedside Furniture"]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products")

  const filteredProducts = activeCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
    >


        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-[#2db8c7] text-white rounded-full">
            {product.category}
          </span>
        </div>

        {/* SVG Icon */}
        <div className="relative p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-[#e6f9fb] group-hover:to-[#ccf3f7] transition-all duration-300">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {product.svg}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-[#003867] mb-3 group-hover:text-[#2db8c7] transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
            {product.description}
          </p>

          {/* Features */}
          <div className="space-y-2">
            {product.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-[#2db8c7] rounded-full" />
                <span className="text-xs text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
    </motion.div>
  )

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#2db8c7]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#003867]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-[#e6f9fb] border border-[#ccf3f7] rounded-full px-4 py-2 text-sm font-medium text-[#1b6e78] mb-6"
          >
            <Heart size={16} />
            <span>Premium Hospital Furniture</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003867] mb-6">
            Our Product
            <span className="block text-[#2db8c7]">Collection</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our comprehensive range of hospital furniture designed to enhance patient care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] text-white shadow-lg shadow-[#2db8c7]/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}