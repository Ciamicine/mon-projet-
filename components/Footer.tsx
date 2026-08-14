'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-pink-500" />
              <span className="text-xl font-bold">HydroMag</span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium magnetic water bottles connecting hydration with technology.
            </p>
            <div className="flex gap-4 mt-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['All Products', 'Featured', 'New Arrivals', 'Best Sellers', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['About Us', 'Blog', 'Careers', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Contact Us', 'Help Center', 'Shipping Info', 'Returns', 'Warranty'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} HydroMag. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              Cookie Settings
            </a>
          </div>
          <div className="flex gap-2">
            {['Visa', 'Mastercard', 'Apple Pay', 'PayPal'].map((payment) => (
              <div
                key={payment}
                className="px-3 py-1 rounded-full bg-slate-800 text-xs text-gray-400"
              >
                {payment}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
