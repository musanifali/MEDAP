'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Patient Monitor",
    category: "Electro Medical",
    features: ["Vital Signs", "ECG Monitoring", "Real-time Data"],
    description: "Advanced patient monitoring systems for critical care and general wards.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="16" width="48" height="32" rx="4" fill="#2db8c7" opacity="0.8"/>
        <path d="M16 28h8l4 8 8-16 4 8h8" stroke="#003867" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="40" r="2" fill="#003867"/>
        <circle cx="32" cy="40" r="2" fill="#003867"/>
        <circle cx="44" cy="40" r="2" fill="#003867"/>
      </svg>
    )
  },
  {
    id: 2,
    name: "Infusion Pump",
    category: "Electro Medical",
    features: ["Precise Control", "Multiple Channels", "Safety Alarms"],
    description: "Life support equipment for accurate medication delivery.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="20" y="12" width="24" height="40" rx="3" fill="#2db8c7" opacity="0.8"/>
        <rect x="24" y="16" width="16" height="10" rx="2" fill="#003867"/>
        <rect x="24" y="30" width="16" height="2" fill="#003867"/>
        <rect x="24" y="36" width="16" height="2" fill="#003867"/>
        <circle cx="28" cy="44" r="2" fill="#003867"/>
        <circle cx="36" cy="44" r="2" fill="#003867"/>
      </svg>
    )
  },
  {
    id: 3,
    name: "Medical Gas System",
    category: "Medical Gases",
    features: ["Automatic Manifold", "Outlet Points", "Oxygen Supply"],
    description: "Complete medical gas pipeline systems ensuring patient safety and hospital efficiency.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="16" y="20" width="8" height="28" rx="4" fill="#2db8c7" opacity="0.8"/>
        <rect x="28" y="20" width="8" height="28" rx="4" fill="#2db8c7" opacity="0.8"/>
        <rect x="40" y="20" width="8" height="28" rx="4" fill="#2db8c7" opacity="0.8"/>
        <circle cx="20" cy="16" r="4" fill="#003867"/>
        <circle cx="32" cy="16" r="4" fill="#003867"/>
        <circle cx="44" cy="16" r="4" fill="#003867"/>
      </svg>
    )
  },
  {
    id: 4,
    name: "Hospital Bed",
    category: "Hospital Furniture",
    features: ["Adjustable Height", "Electric Control", "Side Rails"],
    description: "Premium hospital beds for patient comfort and care efficiency.",
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
    id: 5,
    name: "Autoclave Sterilizer",
    category: "CSSD",
    features: ["Steam Sterilization", "Digital Control", "Safety Systems"],
    description: "High-quality sterilization equipment for central sterile supply departments.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="12" y="20" width="40" height="28" rx="4" fill="#2db8c7" opacity="0.8"/>
        <circle cx="32" cy="34" r="8" fill="#003867" opacity="0.5"/>
        <rect x="28" y="12" width="8" height="8" rx="2" fill="#003867"/>
        <rect x="20" y="48" width="4" height="8" fill="#003867"/>
        <rect x="40" y="48" width="4" height="8" fill="#003867"/>
      </svg>
    )
  },
  {
    id: 6,
    name: "Surgical Instruments",
    category: "Surgical Instruments",
    features: ["Stainless Steel", "Precision Crafted", "Sterilizable"],
    description: "Comprehensive range of quality medical surgical instruments.",
    svg: (
      <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
        <rect x="24" y="12" width="3" height="40" rx="1.5" fill="#003867"/>
        <rect x="32" y="16" width="3" height="36" rx="1.5" fill="#003867"/>
        <rect x="40" y="12" width="3" height="40" rx="1.5" fill="#003867"/>
        <ellipse cx="25.5" cy="10" rx="4" ry="3" fill="#2db8c7" opacity="0.8"/>
        <ellipse cx="33.5" cy="14" rx="4" ry="3" fill="#2db8c7" opacity="0.8"/>
        <ellipse cx="41.5" cy="10" rx="4" ry="3" fill="#2db8c7" opacity="0.8"/>
      </svg>
    )
  }
]

const categories = ["All Products", "Electro Medical", "Medical Gases", "Hospital Furniture", "CSSD", "Surgical Instruments"]

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
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
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
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}