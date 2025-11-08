import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Thollarkings Solar</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Power your world with clean and reliable solar energy. We provide comprehensive 
              solar solutions for homes and businesses across the region.
            </p>
            <div className="space-y-2">
              <div className="flex items-center" style={{ color: '#ff6b35' }}>
                <Phone size={16} className="mr-2" />
                <a
                  href="tel:08065970017"
                  style={{ color: '#ff6b35', textDecoration: 'none' }}
                >
                  08065970017
                </a>
              </div>
              <div className="flex items-center" style={{ color: '#ff6b35' }}>
                <Mail size={16} className="mr-2" />
                <a
                  href="mailto:thollarkings@gmail.com"
                  style={{ color: '#ff6b35', textDecoration: 'none' }}
                >
                  thollarkings@gmail.com
                </a>
              </div>
              <div className="flex items-center" style={{ color: 'white' }}>
                <MapPin size={16} className="mr-2" />
                <span>Solar Energy Solutions for Homes and Businesses</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ color: '#ff6b35' }}>Quick Links</h4>
            <ul>
              <li>
                <Link to="/" style={{ color: '#ff6b35' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#ff6b35' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#ff6b35' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>Battery Storage</li>
              <li>Installation & Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 items-center">
              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Thollarkings Solar on Facebook"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  width="24"
                  height="24"
                  style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '30%' }}
                />
              </motion.a>
              {/* X */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Thollarkings Solar on X"
              >
                <img
                  src="/x.png"
                  alt="X"
                  width="24"
                  height="24"
                  style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '30%' }}
                />
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Thollarkings Solar on LinkedIn"
              >
                <img
                  src="/linkedIn.png"
                  alt="LinkedIn"
                  width="24"
                  height="24"
                  style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '30%' }}
                />
              </motion.a>
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Thollarkings Solar on Instagram"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  width="24"
                  height="24"
                  style={{ width: '36px', height: '36px', objectFit: 'contain', borderRadius: '30%' }}
                />
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Thollarkings Solar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer