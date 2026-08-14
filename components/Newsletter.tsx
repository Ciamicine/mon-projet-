'use client'

import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{ rotate: [0, 4, -4, 0], y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <Mail className="w-16 h-16 text-white mx-auto mb-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get 20% Off Your First Order
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join our community and stay updated with exclusive offers, product launches, and hydration tips from our experts.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              type="submit"
              disabled={submitted}
              className="px-8 py-4 rounded-full bg-sky-400 hover:bg-sky-300 text-white font-semibold transition-colors whitespace-nowrap disabled:opacity-75"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-white/90 text-sm pt-6"
          >
            <span>✓ 20% off coupon</span>
            <span>✓ Exclusive deals</span>
            <span>✓ Early access to new products</span>
            <span>✓ Free shipping tips</span>
          </motion.div>

          <p className="text-white/70 text-sm pt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
