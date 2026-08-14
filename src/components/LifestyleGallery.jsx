import { motion } from 'framer-motion'
import { content } from '../config'
import './LifestyleGallery.css'

export default function LifestyleGallery() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.04,
    },
  }

  return (
    <section className="lifestyle-gallery">
      <div className="container">
        <motion.h2
          className="gallery-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Votre compagnon partout
        </motion.h2>

        <div className="gallery-grid">
          {content.lifestyle.map((item, index) => (
            <motion.div
              key={index}
              className="gallery-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div
                className="gallery-image"
                variants={imageVariants}
              >
                {index === 0 && (
                  <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#8B7355" width="400" height="500" />
                    <ellipse cx="200" cy="150" rx="80" ry="100" fill="#2D5016" />
                    <rect x="150" y="280" width="100" height="150" rx="8" fill="#6B4423" />
                    <circle cx="180" cy="320" r="35" fill="#C8A968" />
                  </svg>
                )}
                {index === 1 && (
                  <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#2D5016" width="400" height="500" />
                    <circle cx="200" cy="200" r="100" fill="#76BA1B" />
                    <rect x="120" y="350" width="160" height="80" fill="#90EE90" />
                    <circle cx="160" cy="280" r="30" fill="#C8A968" />
                  </svg>
                )}
                {index === 2 && (
                  <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#87CEEB" width="400" height="500" />
                    <rect x="100" y="200" width="200" height="120" rx="8" fill="#D3D3D3" />
                    <rect x="130" y="220" width="140" height="80" fill="#4A90E2" />
                    <circle cx="170" cy="250" r="25" fill="#C8A968" />
                  </svg>
                )}
                {index === 3 && (
                  <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#F5F5F5" width="400" height="500" />
                    <rect x="50" y="100" width="300" height="200" rx="8" fill="#E8E8E8" />
                    <rect x="80" y="350" width="240" height="100" fill="#D0D0D0" />
                    <circle cx="150" cy="280" r="30" fill="#C8A968" />
                  </svg>
                )}
              </motion.div>
              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
