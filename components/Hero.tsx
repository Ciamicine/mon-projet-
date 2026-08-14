'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Smartphone } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="z-10">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-pink-100 text-sm font-semibold gradient-text">
                  ✨ Premium Hydration Technology
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Stay <span className="gradient-text">Hydrated</span>, Keep Your Phone <span className="gradient-text">Close</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Experience the revolution in mobile hydration. Our magnetic water bottles securely attach your smartphone while keeping you refreshed throughout the day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Shop Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-sky-500 text-sky-600 font-semibold hover:bg-sky-50 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-6 pt-6 border-t border-gray-200"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ultra Secure</p>
                    <p className="text-sm text-gray-600">Magnetic grip technology</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Eco-Friendly</p>
                    <p className="text-sm text-gray-600">Sustainable materials</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">All Phones</p>
                    <p className="text-sm text-gray-600">Universal compatibility</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Product Showcase */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-pink-500 rounded-3xl transform -rotate-6 opacity-20" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 rounded-3xl glass-effect p-8 h-96 flex items-center justify-center overflow-hidden"
            >
              {/* Placeholder for product image */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-sky-400 via-purple-400 to-pink-400 rounded-full animate-pulse flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-white opacity-50" />
                </div>
                <p className="mt-8 text-gray-600 text-sm">Your premium water bottle will appear here</p>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-12 -right-12 w-64 h-64 border-2 border-sky-300/30 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -left-20 w-40 h-40 border-2 border-pink-300/30 rounded-full pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
