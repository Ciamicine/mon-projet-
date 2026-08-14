import { motion } from 'framer-motion'
import { content, colors } from '../config'
import './MagneticFeature.css'

export default function MagneticFeature() {
  const particleVariants = {
    animate: (i) => ({
      x: Math.cos((i / 6) * Math.PI * 2) * 60,
      y: Math.sin((i / 6) * Math.PI * 2) * 60,
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: (i / 6) * 0.5,
      },
    }),
  }

  return (
    <section className="magnetic-feature">
      <div className="container">
        <div className="magnetic-content">
          {/* Text Content */}
          <motion.div
            className="magnetic-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2>{content.magnetic.heading}</h2>
            <div className="magnetic-features">
              {content.magnetic.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="magnetic-feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="feature-dot"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Image with Magnetic Animation */}
          <motion.div
            className="magnetic-image"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="magnetic-ring-container">
              {/* Animated Particles */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="magnetic-particle"
                  custom={i}
                  variants={particleVariants}
                  animate="animate"
                />
              ))}

              {/* Product Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Cdefs%3E%3ClinearGradient id='cap-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23E0B87A;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23B39550;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23061326' width='300' height='400'/%3E%3Crect x='100' y='80' width='100' height='50' rx='4' fill='url(%23cap-grad)'/%3E%3Ccircle cx='150' cy='105' r='60' fill='none' stroke='%23C8A968' stroke-width='3'/%3E%3Ctext x='150' y='350' font-family='Inter' font-size='14' fill='%23C8A968' text-anchor='middle' font-weight='600'%3ESupport Magnétique%3C/text%3E%3C/svg%3E"
                alt="Magnetic Ring Detail"
                className="magnetic-image-img"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
