import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Solar Systems', path: '/solar-systems' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-row">
          {/* Left: Logo */}
          <div className="flex items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/" className="navbar-logo-link">
                <span className="navbar-logo-main">Thollarkings</span>
                <span className="navbar-logo-accent">Solar</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation: Home / About / Our Solar Systems / Contact / Call Now */}
            <div className="navbar-links-desktop">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                >
                  <Link
                    to={item.path}
                    className={
                      'navbar-link ' +
                      (isActive(item.path) ? 'navbar-link-active' : '')
                    }
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Call Now inline on same row */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.25 }}
              >
                <a href="tel:08065970017" className="navbar-call-desktop">
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button - visible on mobile, aligned top-right */}
          <div className="navbar-toggle-wrap md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-toggle-btn"
            >
              <motion.div
                animate={{
                  rotate: isOpen ? 180 : 0,
                  scale: isOpen ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 200,
                }}
                className="relative"
              >
                {isOpen ? <X size={48} /> : <Menu size={48} />}
                {/* Pulsing ring animation */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ backgroundColor: 'black' }}
                />
                {/* Inner pulsing dot */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 rounded-full"
                  animate={{
                    scale: [0.8, 1.6, 0.8],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  style={{ backgroundColor: 'black' }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 1, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="navbar-mobile-wrap lg:hidden"
            >
              <div className="navbar-mobile-panel">
                <div className="navbar-mobile-links">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={
                          'navbar-mobile-link ' +
                          (isActive(item.path)
                            ? 'navbar-mobile-link-active'
                            : 'navbar-mobile-link-default')
                        }
                      >
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: navItems.length * 0.1 + 0.2,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="navbar-mobile-cta-wrap"
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:08065970017"
                      className="navbar-mobile-cta"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone size={24} />
                      <span>Call Now</span>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
