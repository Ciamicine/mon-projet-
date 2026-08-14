import { motion } from 'framer-motion'
import { Instagram, Music, Facebook, ChevronUp } from 'lucide-react'
import { colors, content } from '../config'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  }

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram size={20} />
      case 'Music':
        return <Music size={20} />
      case 'Facebook':
        return <Facebook size={20} />
      default:
        return null
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{content.brand.name}</h3>
            <p>{content.brand.tagline}</p>
          </div>

          <div className="footer-columns">
            {/* Navigation */}
            <div className="footer-column">
              <h4>Navigation</h4>
              <motion.nav
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="footer-links"
              >
                {content.footer.nav.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            </div>

            {/* Customer Service */}
            <div className="footer-column">
              <h4>Service Client</h4>
              <motion.nav
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="footer-links"
              >
                {content.footer.service.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>
            </div>

            {/* Social */}
            <div className="footer-column">
              <h4>Suivez-nous</h4>
              <div className="social-links">
                {content.footer.social.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="social-link"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">{content.footer.copyright}</p>
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
