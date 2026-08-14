'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'Will the magnet damage my phone?',
    answer: 'No, our magnetic technology is completely safe for all phones. We use MagSafe-compatible magnets that have been tested with all major smartphone models. The magnetic field is extremely localized and won\'t affect your phone\'s functionality.',
  },
  {
    id: 2,
    question: 'How long does the insulation keep drinks cold?',
    answer: 'Our triple-wall insulated bottles keep drinks cold for up to 24 hours in normal conditions. Hot drinks stay hot for approximately 12 hours. This varies based on initial temperature and ambient conditions.',
  },
  {
    id: 3,
    question: 'Are the bottles dishwasher safe?',
    answer: 'The bottle body is stainless steel and dishwasher safe, but we recommend hand-washing the magnetic attachment to preserve its longevity. The cap and seal should also be hand-washed.',
  },
  {
    id: 4,
    question: 'What\'s your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all products. If you\'re not completely satisfied, simply return the bottle in original condition for a full refund. No questions asked!',
  },
  {
    id: 5,
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to over 45 countries worldwide. Shipping costs and delivery times vary by location. Free shipping is available on orders over $50 within the continental US.',
  },
  {
    id: 6,
    question: 'Can I customize the color or add my logo?',
    answer: 'Absolutely! We offer custom color options and bulk corporate orders with logo printing. Please contact our corporate team at corporate@hydromag.com for details and pricing.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our magnetic water bottles.
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-sky-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-sky-600" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-sky-100 to-pink-100 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help you 24/7.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
