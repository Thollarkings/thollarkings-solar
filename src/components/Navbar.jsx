import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 via-secondary/90 to-primary/95 backdrop-blur-2xl border-b border-accent/20 transition-all duration-500 shadow-2xl">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8" style={{ background: 'rgba(0, 0, 0, 0.46)' }}>
        <div className="flex items-center justify-between h-24">
          {/* Left: Logo + Desktop Navigation in one horizontal row */}
          <div className="flex items-center gap-8" >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to="/"
                className="text-4xl font-black text-primary hover:text-accent transition-all duration-300 tracking-tight"
                style={{ textDecoration: 'none', fontWeight: '900', fontSize: '3rem' }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Thollarkings
                </span>
                <span className="text-accent ml-2">Solar</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation: Home / About / Contact / Call Now INLINE */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginLeft: '24px',
              }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  style={{ display: 'flex' }}
                >
                  <Link
                    to={item.path}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '8px 14px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      borderRadius: '999px',
                      textDecoration: 'none',
                      backgroundColor: isActive(item.path) ? '#ff6b35' : 'rgba(0, 0, 0, 0.54)',
                      color: isActive(item.path) ? '#0a0a0a' : '#d1d5db',
                      border: '1px solid rgba(148, 163, 253, 0.12)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(item.path)) {
                        e.currentTarget.style.backgroundColor = 'rgba(17,24,39,0.85)'
                        e.currentTarget.style.color = '#ffffff'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(item.path)) {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.54)'
                        e.currentTarget.style.color = '#d1d5db'
                      }
                    }}
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
                style={{ display: 'flex' }}
              >
                <a
                  href="tel:08065970017"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    borderRadius: '999px',
                    textDecoration: 'none',
                    backgroundColor: '#ff6b35',
                    color: '#0a0a0a',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e55a2b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff6b35'
                  }}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-6 transition-all duration-300"
              style={{ background: 'transparent', border: 'none' }}
            >
              <motion.div
                animate={{
                  rotate: isOpen ? 180 : 0,
                  scale: isOpen ? 1.1 : 1
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                className="relative"
                style={{ color: 'black'}}
              >
                {isOpen ? <X size={48} /> : <Menu size={48} />}
                {/* Pulsing ring animation */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.2, 0, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundColor: 'black' }}
                />
                {/* Inner pulsing dot */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 rounded-full"
                  animate={{
                    scale: [0.8, 1.6, 0.8],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-4"
            >
              <div className="mx-6 px-8 py-10 bg-gradient-to-br from-glass via-glass-hover to-glass backdrop-blur-2xl rounded-3xl shadow-2xl border border-accent/20">
                <div className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-8 py-5 text-xl font-bold rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                          isActive(item.path)
                            ? 'text-primary bg-accent shadow-lg shadow-accent/25'
                            : 'text-secondary hover:text-primary hover:bg-tertiary/50'
                        }`}
                        style={{ textDecoration: 'none', borderRadius:'10% / 90% 10% 40%' }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Elegant CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    className="pt-6 border-t border-accent/20"
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:08065970017"
                      className="flex items-center justify-left space-x-4 w-full px-8 py-6 font-bold bg-gradient-to-r from-accent to-accent-hover hover:from-accent-hover hover:to-accent text-primary rounded-6xl transition-all duration-300 shadow-lg hover:shadow-glow group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Phone size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-xl">Call Now</span>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
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