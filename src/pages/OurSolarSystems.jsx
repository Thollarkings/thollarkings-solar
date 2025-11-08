import { motion } from 'framer-motion'
import './OurSolarSystems.css'

const systems = [
  {
    size: '1 kW',
    panels: '1000W Solar Panels Input',
    leadAcid: '₦1,100,000',
    lithiumIon: '₦1,350,000',
    description: 'Entry-level backup for essential loads like lighting, fans, TV, and basic devices.',
  },
  {
    size: '2 kW',
    panels: '1800W Solar Panels Input',
    leadAcid: '₦1,800,000',
    lithiumIon: '₦2,200,000',
    description: 'Perfect for small homes and apartments.',
  },
  {
    size: '3.5 kW',
    panels: '3000W Solar Panels Input',
    leadAcid: '₦2,700,000',
    lithiumIon: '₦3,480,000',
    description: 'Ideal for medium-sized homes.',
  },
  {
    size: '5 kW',
    panels: '4500W Solar Panels Input',
    leadAcid: '₦3,630,000',
    lithiumIon: '₦4,530,000',
    description: 'Great for larger homes with higher energy needs.',
  },
  {
    size: '7.5 kW',
    panels: '6500W Solar Panels Input',
    leadAcid: '₦4,700,000',
    lithiumIon: '₦6,300,000',
    description: 'Perfect for commercial and large residential use.',
  },
  {
    size: '10 kW',
    panels: '8000W Solar Panels Input',
    leadAcid: '₦7,260,000',
    lithiumIon: '₦11,060,000',
    description: 'For small businesses and large commercial facilities.',
  },
  {
    size: '15 kW',
    panels: '12000W Solar Panels Input',
    leadAcid: '₦10,500,000',
    lithiumIon: '₦15,500,000',
    description: 'Ideal for medium commercial and industrial setups.',
  },
  {
    size: '20 kW+',
    panels: 'Custom Solar Panels Input',
    description:
      'For factories, estates, data centers, fuel stations, and other high-demand facilities. Fully engineered to your exact load profile and runtime requirements.',
    note:
      'Contact us for detailed load analysis, custom system design, and accurate pricing for 20kW and above solutions.',
  },
]

const OurSolarSystems = () => {
  return (
    <div className="solar-page">
      {/* Hero */}
      <section className="solar-hero">
        <div
          className="solar-hero-bg-image"
          style={{
            backgroundImage: "url('/Oursolarsystems.png')",
          }}
        />
        <div className="solar-hero-inner">
          <div className="solar-hero-text">
            <div className="solar-pill">
              <span className="solar-pill-dot" />
              Our Solar Systems
            </div>
            <h1 className="solar-title">
              Carefully engineered
              <span className="solar-title-accent"> solar packages</span> for every need.
            </h1>
            <p className="solar-subtitle">
              Transparent, structured, and future-ready systems for homes, businesses, and industrial clients.
            </p>
          </div>
          <div className="solar-hero-card">
            <p className="solar-hero-card-title">All packages include:</p>
            <ul>
              <li>Premium solar panels</li>
              <li>Hybrid inverter</li>
              <li>Lead Acid or Lithium-Ion battery bank</li>
              <li>Professional installation & wiring</li>
              <li>Protection devices & breakers</li>
              <li>After-installation support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="solar-section">
        <div className="solar-section-inner">
          <div className="solar-section-header">
            <h2>Choose a system that fits your lifestyle</h2>
            <p>
              Each package is designed with realistic Nigerian power conditions in mind — optimized for reliability,
              efficiency, and long-term value.
            </p>
          </div>
          <div className="solar-grid">
            {systems.map((system, index) => (
              <motion.div
                key={system.size}
                className={`solar-card ${system.size === '20 kW+' ? 'solar-card-high-capacity' : ''}`}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div className="solar-card-header">
                  <h3>{system.size} System</h3>
                  <span className="solar-card-tag">{system.panels}</span>
                </div>
                <p className="solar-card-description">{system.description}</p>
                {system.leadAcid && system.lithiumIon && (
                  <div className="solar-card-prices">
                    <div className="solar-price-row">
                      <span>Lead Acid:</span>
                      <strong>{system.leadAcid}</strong>
                    </div>
                    <div className="solar-price-row">
                      <span>Lithium-Ion:</span>
                      <strong>{system.lithiumIon}</strong>
                    </div>
                  </div>
                )}
                <div className="solar-card-note">
                  {system.note ||
                    'Ideal for: backup power, reduced diesel and petrol spend, and stable daily usage.'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="solar-disclaimer">
            *All prices shown here may vary up or down depending on your exact usage scenario, installation
            conditions, and component preferences. Please contact us for accurate evaluation and final pricing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="solar-cta">
        <div className="solar-cta-inner">
          <h2>Need a custom solar configuration?</h2>
          <p>
            Share your load requirements, budget, and preferred backup hours — we will recommend a tailored system
            that fits perfectly.
          </p>
          <div className="solar-cta-actions">
            <a href="tel:08065970017" className="solar-cta-btn primary">
              Call 08065970017
            </a>
            <a href="mailto:thollarkings@gmail.com" className="solar-cta-btn ghost">
              Email your load list
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurSolarSystems