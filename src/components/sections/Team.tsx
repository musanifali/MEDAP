'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: "Commitment",
    role: "Our Promise",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
    bio: "Dedicated to excellence in every aspect"
  },
  {
    name: "Customer Value",
    role: "Caring for Life",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    bio: "Your satisfaction is our priority"
  },
  {
    name: "Teamwork",
    role: "Together We Grow",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
    bio: "Collaboration drives our success"
  },
  {
    name: "Professionalism",
    role: "Excellence Always",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80",
    bio: "High standards in everything we do"
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] mb-6">
            Our
            <span className="block text-[#2db8c7]">Core Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The values that guide our operations and business transactions at MEDAP International
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#003867] mb-1">{member.name}</h3>
              <p className="text-[#2db8c7] font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}