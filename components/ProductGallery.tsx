'use client'

import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const products = [
  {
    id: 2,
    name: 'STANLEY Cup 304',
    price: '$74.99',
    image: '🔥',
    rating: 4.8,
    reviews: 287,
    colors: ['slate', 'blue', 'cyan'],
    description: 'Ultra-lightweight with 24-hour temperature control',
    inStock: true,
  },
  {
    id: 3,
    name: 'Thermal Water Bottle 1L',
    price: '$59.99',
    image: '💧',
    rating: 4.9,
    reviews: 342,
    colors: ['red', 'blue', 'gray'],
    description: 'Keep cold and hot water bottle with vacuum flask technology',
    inStock: true,
  },
  {
    id: 4,
    name: 'Insulated Bottle 500ml',
    price: '$59.99',
    image: '⚡',
    rating: 4.7,
    reviews: 156,
    colors: ['white', 'orange', 'purple'],
    description: 'Customizable 304 stainless steel outdoor sports water bottle',
    inStock: true,
  },
  {
    id: 5,
    name: 'Isotherme 1.2L',
    price: '$79.99',
    image: '🌙',
    rating: 5.0,
    reviews: 421,
    colors: ['pink', 'white', 'red'],
    description: 'Large capacity thermos with straw handle and seal',
    inStock: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
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
          {products.filter(p => p.inStock !== false).map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card group"
            >
              <div className="bg-white rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-shadow">
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-sky-100 to-pink-100 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0], y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
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
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-sky-600 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-shadow"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
