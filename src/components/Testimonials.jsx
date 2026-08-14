import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { content } from '../config'
import './Testimonials.css'

export default function Testimonials() {
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
    <section className="testimonials">
      <div className="container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ils ont adopté PtiDétour.</h2>
          <div className="social-proof">
            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#C8A968" color="#C8A968" />
              ))}
              <span>{content.socialProof.rating}</span>
            </div>
            <span className="review-count">{content.socialProof.reviews}</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={itemVariants}
            >
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#C8A968" color="#C8A968" />
                ))}
              </div>
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              <p className="testimonial-author">— {testimonial.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
