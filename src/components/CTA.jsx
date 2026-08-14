import { motion } from 'framer-motion'
import { content } from '../config'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-bg">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23061326' width='1200' height='600'/%3E%3Cellipse cx='1000' cy='300' rx='120' ry='200' fill='rgba(200,169,104,0.05)'/%3E%3C/svg%3E"
          alt=""
          className="cta-bg-image"
          loading="lazy"
        />
      </div>

      <div className="container">
        <div className="cta-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="cta-heading"
          >
            {content.cta.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="cta-description"
          >
            {content.cta.description}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="btn btn-cta"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {content.cta.button}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
