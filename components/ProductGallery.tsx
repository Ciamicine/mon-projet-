'use client'

import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'AquaMag Pro',
    price: '$79.99',
    image: '🌊',
    rating: 4.9,
    reviews: 342,
    colors: ['sky', 'slate', 'cyan'],
    description: 'Premium magnetic attachment with triple-wall insulation',
  },
  {
    id: 2,
    name: 'FlowMag Elite',
    price: '$89.99',
    image: '⚡',
    rating: 4.8,
    reviews: 287,
    colors: ['pink', 'purple', 'violet'],
    description: 'Ultra-lightweight with 24-hour temperature control',
  },
  {
    id: 3,
    name: 'EcoMag Pure',
    price: '$69.99',
    image: '🌿',
    rating: 4.7,
    reviews: 156,
    colors: ['green', 'teal', 'emerald'],
    description: '100% recycled materials with reinforced magnet',
  },
  {
    id: 4,
    name: 'MoonMag Midnight',
    price: '$84.99',
    image: '🌙',
    rating: 5.0,
    reviews: 421,
    colors: ['slate', 'indigo', 'blue'],
    description: 'Limited edition with glow-in-the-dark feature',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ProductGallery() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Premium Collection</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of magnetic water bottles, each designed with precision engineering and premium materials for the modern lifestyle.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card group"
            >
              <div className="bg-white rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-shadow">
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-sky-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-9xl"
                  >
                    {product.image}
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        favorites.includes(product.id)
                          ? 'fill-pink-500 text-pink-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="flex gap-2">
                    {product.colors.map((color, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2 }}
                        className={`w-4 h-4 rounded-full cursor-pointer border-2 border-gray-300 hover:border-sky-500 transition-colors bg-${color}-400`}
                      />
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-2xl font-bold gradient-text">
                      {product.price}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-gradient-to-r from-sky-500 to-pink-500 text-white hover:shadow-lg transition-shadow"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-sky-600 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-shadow"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
