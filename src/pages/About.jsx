import { motion } from 'framer-motion'
import { Users, Award, Target, Lightbulb, Shield, Sun, TrendingUp } from 'lucide-react'
import './About.css'

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: <Award /> },
    { number: '50+', label: 'Projects Completed', icon: <TrendingUp /> },
    { number: '50+', label: 'Happy Clients', icon: <Users /> },
    { number: '24/7', label: 'Support Available', icon: <Shield /> },
  ]

  const values = [
    {
      icon: <Target />,
      title: 'Our Mission',
      description:
        'To provide reliable, cost-effective, and environmentally sustainable solar energy solutions that empower homes and businesses while reducing energy costs.',
    },
    {
      icon: <Lightbulb />,
      title: 'Our Vision',
      description:
        'To be the leading solar energy company in the region, driving the transition to renewable energy with beautiful, efficient, and durable installations.',
    },
    {
      icon: <Shield />,
      title: 'Our Values',
      description:
        'Integrity, innovation, attention to detail, and long-term partnerships. We do not cut corners — in components, design, or support.',
    },
  ]

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div
          className="about-hero-bg-image"
          style={{
            backgroundImage: "url('/About-Us.png')",
          }}
        />
        <div className="about-hero-inner">
          <motion.div
            className="about-hero-text"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-pill">
              <span className="about-pill-dot" />
              About Thollarkings Solar
            </div>
            <h1 className="about-title">
              Elegant solar solutions
              <span className="about-title-accent"> for modern homes & businesses.</span>
            </h1>
            <p className="about-subtitle">
              We are a detail-driven solar company focused on reliable power, neat installations, and a classy
              aesthetic that fits premium spaces.
            </p>
            <div className="about-hero-meta">
              <div className="about-meta-item">5+ Years Experience</div>
              <div className="about-meta-item">50+ Completed Projects</div>
              <div className="about-meta-item">24/7 Technical Support</div>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-card"
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-hero-card-grid">
              <div className="about-hero-card-item">
                <span className="label">Experience</span>
                <span className="value">5+ yrs</span>
                <span className="hint">Hands-on solar delivery</span>
              </div>
              <div className="about-hero-card-item">
                <span className="label">Projects</span>
                <span className="value">50+</span>
                <span className="hint">Homes & businesses</span>
              </div>
              <div className="about-hero-card-item">
                <span className="label">Response</span>
                <span className="value">{'< 24 hrs'}</span>
                <span className="hint">Support & maintenance</span>
              </div>
              <div className="about-hero-card-item">
                <span className="label">Uptime Focus</span>
                <span className="value">24/7</span>
                <span className="hint">Always-on mindset</span>
              </div>
            </div>
            <div className="about-hero-card-foot">
              <div className="about-hero-icon">
                <Sun className="about-hero-icon-svg" />
              </div>
              <p>Designed for Nigerian conditions — efficient, tidy, and built to last.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="about-section">
        <div className="about-two-col">
          <motion.div
            className="about-text-block"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <p>
              Thollarkings Solar was founded to solve a real problem — unstable power and noisy, expensive alternatives.
              We believe solar should feel premium, work flawlessly, and be installed with the same care as luxury
              interiors.
            </p>
            <p>
              Our team of certified professionals brings engineering discipline, honest advice, and precise execution to
              every project. From compact homes to demanding commercial facilities, we design with purpose, not guesswork.
            </p>
            <p>
              We stay after installation — monitoring, optimizing, and supporting — so your investment keeps delivering
              value for years.
            </p>
          </motion.div>

          <motion.div
            className="about-story-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="about-orbit">
              <div className="about-orbit-inner">
                <Sun className="about-orbit-sun" />
              </div>
            </div>
            <h3>Empowering every watt.</h3>
            <p>
              Every cable run, panel alignment, and battery bay is intentionally laid out — so your system looks as
              considered as it performs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="about-section muted">
        <div className="about-inner">
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle">
              A growing portfolio of refined installations and dependable backup power across homes and businesses.
            </p>
          </motion.div>
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="about-stat-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="about-stat-icon">{stat.icon}</div>
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="about-section">
        <div className="about-inner">
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Foundation</h2>
            <p className="section-subtitle">
              The principles that shape how we design, install, and support every Thollarkings Solar system.
            </p>
          </motion.div>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="about-value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <div className="about-inner">
          <motion.div
            className="section-header center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Clients Choose Thollarkings</h2>
            <p className="section-subtitle">
              More than panels and batteries — we deliver a polished, reliable, and well-supported experience.
            </p>
          </motion.div>
          <div className="about-why-grid">
            {[
              'Certified and experienced professionals.',
              'Neat, minimal, and intentional installation layouts.',
              'Clear, transparent proposals with real expectations.',
              'High-quality components matched to your exact needs.',
              'Long-term support, maintenance, and performance checks.',
              'Local understanding of power challenges and solutions.',
            ].map((text, index) => (
              <motion.div
                key={index}
                className="about-why-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bullet-dot" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section cta">
        <div className="about-inner center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Ready to elevate your energy setup?</h2>
            <p className="section-subtitle">
              Let's review your space, your loads, and your goals, then recommend a clean, modern solar solution
              that fits.
            </p>
            <div className="about-cta-actions">
              <a href="tel:08065970017" className="about-cta-btn primary">
                Call 08065970017
              </a>
              <a
                href="mailto:thollarkings@gmail.com"
                className="about-cta-btn ghost"
              >
                Send project details
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About