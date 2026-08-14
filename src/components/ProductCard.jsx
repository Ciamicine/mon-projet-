import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react'
import { content } from '../config'
import './ProductCard.css'

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <section className="product-card-section">
      <div className="container">
        <motion.div
          className="product-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Product Image */}
          <div className="product-card-image">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='bottle-grad-3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23333333;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23000000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23111111;stop-opacity:1' /%3E%3C/linearGradient%3E%3CradialGradient id='shine-3' cx='35%25' cy='35%25' r='60%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFFFFF;stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:%23FFFFFF;stop-opacity:0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23F7F7F5' width='400' height='500'/%3E%3Cellipse cx='200' cy='350' rx='55' ry='130' fill='url(%23bottle-grad-3)'/%3E%3Cellipse cx='180' cy='280' rx='28' ry='75' fill='url(%23shine-3)' opacity='0.6'/%3E%3Crect x='170' y='80' width='60' height='30' rx='3' fill='%23C8A968'/%3E%3Ccircle cx='200' cy='95' r='35' fill='none' stroke='%23C8A968' stroke-width='2'/%3E%3C/svg%3E"
              alt={content.product_card.name}
              className="product-card-image-img"
              loading="lazy"
            />
          </div>

          {/* Product Details */}
          <div className="product-card-details">
            {/* Info */}
            <div className="product-info">
              <h3>{content.product_card.name}</h3>
              <p className="product-subtitle">{content.product_card.subtitle}</p>
              <p className="product-price">{content.product_card.price}</p>
            </div>

            {/* Color Selector */}
            <div className="product-colors">
              <label>Couleur</label>
              <div className="color-options">
                {content.product_card.colors.map((color, index) => (
                  <motion.button
                    key={index}
                    className={`color-button ${selectedColor === index ? 'active' : ''}`}
                    onClick={() => setSelectedColor(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={color}
                  >
                    <span
                      className="color-dot"
                      style={{
                        backgroundColor: index === 0 ? '#050505' : index === 1 ? '#FFFFFF' : '#8B8B8B',
                        border: `2px solid ${selectedColor === index ? '#C8A968' : '#EDEDED'}`,
                      }}
                    ></span>
                    <span className="color-label">{color}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="product-quantity">
              <label>Quantité</label>
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <input type="number" value={quantity} readOnly className="quantity-input" />
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="product-actions">
              <button className="btn btn-add-cart">
                {content.product_card.cta_primary}
              </button>
              <button className="btn btn-buy-now">
                {content.product_card.cta_secondary}
              </button>
            </div>

            {/* Trust Elements */}
            <div className="trust-elements">
              {content.product_card.features.map((feature, index) => (
                <div key={index} className="trust-item">
                  {index === 0 && <Truck size={16} />}
                  {index === 1 && <Shield size={16} />}
                  {index === 2 && <RotateCcw size={16} />}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
