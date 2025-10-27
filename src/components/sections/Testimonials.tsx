'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    hospital: "Metropolitan General Hospital",
    location: "New York, USA",
    rating: 5,
    content: "MEDAP International's furniture has transformed our patient experience. The smart hospital beds with integrated monitoring have significantly improved our care delivery while enhancing patient comfort. The quality and innovation exceed our expectations.",
    avatar: "👩‍⚕️",
    stats: { patients: "2,500+", satisfaction: "98%" }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hospital Administrator", 
    hospital: "Singapore Medical Center",
    location: "Singapore",
    rating: 5,
    content: "Working with MEDAP International was seamless from consultation to installation. Their ergonomic workstations have reduced staff fatigue by 40% and the modular design perfectly fits our space constraints. Outstanding ROI.",
    avatar: "👨‍💼",
    stats: { staff: "500+", efficiency: "40%" }
  },
  {
    id: 3,
    name: "Dr. Emma Rodriguez",
    role: "Head of Nursing",
    hospital: "Barcelona Health Institute", 
    location: "Barcelona, Spain",
    rating: 5,
    content: "The patient-centered design approach is evident in every piece. Our patients report 35% better sleep quality with the new beds, and the antimicrobial surfaces give us confidence in infection control. Truly innovative.",
    avatar: "👩‍⚕️",
    stats: { recovery: "35%", safety: "99.9%" }
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Facilities Director",
    hospital: "London Teaching Hospital",
    location: "London, UK", 
    rating: 5,
    content: "The sustainability aspect impressed our board. The eco-friendly materials don't compromise on durability - our furniture looks new after 3 years of intensive use. The maintenance support is exceptional.",
    avatar: "👨‍🔧",
    stats: { lifespan: "10+ years", waste: "-60%" }
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    role: "Department Head",
    hospital: "Mumbai Medical Complex",
    location: "Mumbai, India",
    rating: 5,
    content: "The technology integration is remarkable. Real-time patient data from the furniture helps us make faster clinical decisions. The training and support team made implementation smooth across our 400-bed facility.",
    avatar: "👩‍⚕️",
    stats: { beds: "400+", response: "50%" }
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "CEO",
    hospital: "Seoul Children's Hospital",
    location: "Seoul, South Korea",
    rating: 5,
    content: "Child-friendly designs with advanced safety features give parents peace of mind. The colorful, interactive elements help reduce anxiety while maintaining the highest medical standards. Our patient satisfaction scores are at an all-time high.",
    avatar: "👨‍💼",
    stats: { satisfaction: "96%", safety: "100%" }
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoplay])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoplay(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-[#e6f9fb] to-cyan-50">
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
            className="inline-flex items-center space-x-2 bg-[#ccf3f7] border border-[#99e7ef] rounded-full px-4 py-2 text-sm font-medium text-[#1b6e78] mb-6"
          >
            <Star size={16} />
            <span>What Our Clients Say</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003867] mb-6">
            Trusted by Leading
            <span className="block text-[#2db8c7]">Healthcare Providers</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover how hospitals worldwide are transforming their patient care with our innovative furniture solutions.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ccf3f7] to-transparent rounded-full -mr-32 -mt-32 opacity-50"></div>
            
            {/* Quote Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 text-[#99e7ef]"
            >
              <Quote size={48} />
            </motion.div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star size={20} className="text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Content */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium"
              >
                "{currentTestimonial.content}"
              </motion.blockquote>

              {/* Author Info & Stats */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#2db8c7] to-[#25a5b3] rounded-2xl flex items-center justify-center text-2xl">
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                    <div className="text-[#2db8c7] font-medium">{currentTestimonial.role}</div>
                    <div className="text-gray-500 text-sm">{currentTestimonial.hospital}</div>
                    <div className="text-gray-400 text-sm">{currentTestimonial.location}</div>
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex space-x-6"
                >
                  {Object.entries(currentTestimonial.stats).map(([key, value], i) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-[#2db8c7]">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#2db8c7] hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft size={20} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#2db8c7] scale-125' 
                    : 'bg-gray-300 hover:bg-[#66dbe7]'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#2db8c7] hover:shadow-xl transition-all duration-300"
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">500+</div>
            <div className="text-gray-600">Satisfied Hospitals</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">98%</div>
            <div className="text-gray-600">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-[#2db8c7] mb-2">1M+</div>
            <div className="text-gray-600">Patients Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}