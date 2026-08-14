import { motion } from 'framer-motion'
import { content } from '../config'
import './ProductShowcase.css'

export default function ProductShowcase() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="product-showcase">
      <div className="container">
        <div className="showcase-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {content.product.heading}
          </motion.h2>
          <motion.p
            className="showcase-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {content.product.description}
          </motion.p>
        </div>

        <div className="showcase-content">
          {/* Product Image */}
          <motion.div
            className="showcase-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Cdefs%3E%3ClinearGradient id='bottle-grad-2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23333333;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23000000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23111111;stop-opacity:1' /%3E%3C/linearGradient%3E%3CradialGradient id='shine-2' cx='35%25' cy='35%25' r='60%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFFFFF;stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:%23FFFFFF;stop-opacity:0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23F7F7F5' width='400' height='500'/%3E%3Cellipse cx='200' cy='350' rx='55' ry='130' fill='url(%23bottle-grad-2)'/%3E%3Cellipse cx='180' cy='280' rx='28' ry='75' fill='url(%23shine-2)' opacity='0.6'/%3E%3Crect x='170' y='80' width='60' height='30' rx='3' fill='%23C8A968'/%3E%3Ccircle cx='200' cy='95' r='35' fill='none' stroke='%23C8A968' stroke-width='2'/%3E%3C/svg%3E"
              alt="PtiDétour Bottle Showcase"
              className="showcase-image-img"
              loading="lazy"
            />
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="showcase-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {content.product.cards.map((card, index) => (
              <motion.div
                key={index}
                className="showcase-card"
                variants={itemVariants}
              >
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
