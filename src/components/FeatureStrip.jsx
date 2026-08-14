import { motion } from 'framer-motion'
import { Zap, Thermometer, Droplet, Shield } from 'lucide-react'
import { colors, content } from '../config'
import './FeatureStrip.css'

const icons = [
  { Icon: Zap },
  { Icon: Thermometer },
  { Icon: Droplet },
  { Icon: Shield },
]

export default function FeatureStrip() {
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
    <motion.section
      className="feature-strip"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container">
        <div className="features-grid">
          {content.features.map((feature, index) => {
            const IconComponent = icons[index]?.Icon
            return (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
              >
                <div className="feature-icon">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
