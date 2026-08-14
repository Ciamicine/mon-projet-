import { motion } from 'framer-motion'
import { content } from '../config'
import './Benefits.css'

export default function Benefits() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="benefits">
      <div className="container">
        <motion.h2
          className="benefits-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {content.benefits.length > 0 ? content.benefits[0].title.split(' ')[0] === 'DESIGN' ? 'Pensée pour votre quotidien.' : 'Avantages PtiDétour' : 'Avantages'}
        </motion.h2>

        <motion.div
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {content.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              variants={itemVariants}
            >
              <div className="benefit-icon">
                {index === 0 && <span>✨</span>}
                {index === 1 && <span>💧</span>}
                {index === 2 && <span>♻️</span>}
                {index === 3 && <span>🌍</span>}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
