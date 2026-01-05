'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Globe, Users } from 'lucide-react'

const offices = [
  {
    city: "Lahore Head Office",
    address: "17 G, Sharf Mansion, Chowk Ganga Ram Hospital, 16 Shahrah e Fatima Jinnah, Lahore, Punjab, Pakistan",
    phone: "+92-42-36315179",
    email: "medap.international@gmail.com"
  }
]

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri 9AM-6PM, Sat 9AM-2PM Pakistan Time",
    action: "+92-42-36315179",
    color: "bg-green-500"
  },
  {
    icon: Phone,
    title: "Alternate Number",
    description: "Available during business hours",
    action: "+92-42-36363339",
    color: "bg-green-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send your inquiries and requirements",
    action: "medap.international@gmail.com",
    color: "bg-blue-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Near Ganga Ram Hospital, Lahore",
    action: "Get Directions",
    color: "bg-[#2db8c7]"
  }
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] text-center mb-16">
            Our
            <span className="block text-[#2db8c7]">Location</span>
          </h2>
          
          <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#003867] mb-6">{office.city}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-[#2db8c7] mt-1" size={18} />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="text-[#2db8c7]" size={18} />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-[#2db8c7]" size={18} />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="text-[#2db8c7]" size={18} />
                    <span className="text-gray-600">Mon-Fri: 8AM-6PM Local Time</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003867] text-center mb-16">
            How Can We
            <span className="block text-[#2db8c7]">Help You?</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#003867] mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <button className="text-[#2db8c7] font-semibold hover:text-[#25a5b3] transition-colors">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}