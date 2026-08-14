import { motion } from 'framer-motion'
import { colors, content } from '../config'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="hero">
      {/* Background Video */}
      <motion.div
        className="hero-bg"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23061326' width='1920' height='1080'/%3E%3C/svg%3E"
          className="hero-video"
        >
          <source
            src="https://videos.pexels.com/video-files/6473488/6473488-sd_640_360_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </motion.div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            className="hero-inner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div className="hero-eyebrow" variants={itemVariants}>
              {content.hero.eyebrow}
            </motion.div>

            {/* Heading */}
            <motion.h1 className="hero-heading" variants={itemVariants}>
              {content.hero.heading.split('\n').map((line, i) => (
                <div key={i}>
                  {line === content.hero.headingHighlight ? (
                    <span style={{ color: colors.gold }}>{line}</span>
                  ) : (
                    line
                  )}
                </div>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p className="hero-description" variants={itemVariants}>
              {content.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <button className="btn btn-primary">
                {content.hero.ctaPrimary}
              </button>
              <button className="btn btn-secondary">
                {content.hero.ctaSecondary}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Image */}
        <motion.div
          className="hero-product"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="product-image-wrapper">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cdefs%3E%3ClinearGradient id='bottle-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23333333;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23000000;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23111111;stop-opacity:1' /%3E%3C/linearGradient%3E%3CradialGradient id='shine' cx='35%25' cy='35%25' r='60%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFFFFF;stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:%23FFFFFF;stop-opacity:0' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='%23061326' width='400' height='600'/%3E%3C!-- Bottle Body ---%3E%3Cellipse cx='200' cy='420' rx='60' ry='140' fill='url(%23bottle-grad)'/%3E%3C!-- Bottle Shine ---%3E%3Cellipse cx='180' cy='350' rx='30' ry='80' fill='url(%23shine)' opacity='0.6'/%3E%3C!-- Cap ---%3E%3Crect x='170' y='100' width='60' height='30' rx='3' fill='%23C8A968'/%3E%3C!-- Magnetic Ring ---%3E%3Ccircle cx='200' cy='115' r='35' fill='none' stroke='%23C8A968' stroke-width='3'/%3E%3C!-- Phone ---%3E%3Crect x='100' y='80' width='80' height='140' rx='8' fill='%23050505' stroke='%23EDEDED' stroke-width='2'/%3E%3Crect x='108' y='88' width='64' height='120' fill='%23333333'/%3E%3C/svg%3E"
              alt="PtiDétour Water Bottle with Magnetic Phone Holder"
              className="product-image"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot"></div>
      </motion.div>
    </section>
  )
}
