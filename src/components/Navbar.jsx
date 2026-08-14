import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { colors, content } from '../config'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#">{content.brand.name}</a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop-menu">
          {content.nav.links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions desktop-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-button" aria-label="Account">
            <User size={20} />
          </button>
          <button className="icon-button cart-button" aria-label="Cart">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button
            className="icon-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-menu-content">
            {content.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="icon-button" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="icon-button" aria-label="Account">
              <User size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
