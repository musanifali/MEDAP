'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
    }, 1800)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      >
        {/* Floating Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-[#2db8c7]/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-[#003867]/10 rounded-full blur-xl"
        />

        {/* Logo with Elegant Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut"
          }}
          className="mb-12"
        >
          <motion.div
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <Image 
              src="/MEDAP Logo.png" 
              alt="MEDAP International" 
              width={250}
              height={80}
              priority
              className="h-20 w-auto object-contain"
            />
            
            {/* Subtle Glow Effect */}
            <motion.div
              animate={{
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#2db8c7]/20 blur-xl rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* Elegant Loading Animation */}
        <div className="flex items-center space-x-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{
                scaleY: [1, 2, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="w-1 h-8 bg-gradient-to-t from-[#2db8c7] to-[#003867] rounded-full"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-[#003867] text-lg font-medium tracking-wide"
        >
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading Healthcare Excellence
          </motion.span>
        </motion.p>

        {/* Screen Transition Effect */}
        {isExiting && (
          <motion.div
            initial={{ 
              clipPath: "polygon(0% 100%, 0% 100%, 0% 100%)"
            }}
            animate={{ 
              clipPath: "polygon(0% 100%, 100% 0%, 100% 0%, 0% 100%)"
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-[#2db8c7] z-20"
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}