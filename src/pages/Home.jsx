import { motion } from 'framer-motion'
import { Phone, Mail, ArrowRight, Sun, Zap, Shield, Wrench, Award, TrendingUp } from 'lucide-react'

const Home = () => {
  const solarCards = [
    {
      image: "/Gemini_Generated_Image_a0aaxqa0aaxqa0aa.png",
      title: "Residential Solar Solutions",
      description: "Power your home with clean, renewable energy and reduce your electricity bills by up to 90%.",
      icon: <Sun className="w-8 h-8 text-orange-400" />
    },
    {
      image: "/Commercial Solar Systems.png",
      title: "Commercial Solar Systems",
      description: "Scale up your business with reliable solar energy solutions for industries and large facilities.",
      icon: <Zap className="w-8 h-8 text-orange-400" />
    },
    {
      image: "/Battery Storage Systems.png",
      title: "Battery Storage Systems",
      description: "Store solar energy for use at night or during power outages with advanced battery technology.",
      icon: <Shield className="w-8 h-8 text-orange-400" />
    }
  ]

  const services = [
    {
      image: "/Professional Installation.png",
      title: "Professional Installation",
      description: "Expert installation services with warranty and ongoing maintenance support.",
      icon: <Wrench className="w-8 h-8 text-orange-400" />
    },
    {
      image: "/Maintenance & Support.png",
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services to keep your solar system running efficiently for years.",
      icon: <Award className="w-8 h-8 text-orange-400" />
    },
    {
      image: "/Latest Technology.png",
      title: "Latest Technology",
      description: "Stay ahead with the most advanced and efficient solar technology available in the market.",
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />
    }
  ]

  const benefits = [
    "Energy Assessment: Analyze your current electricity consumption and costs",
    "Custom Solution: Design a solar system specifically for your home or business",
    "Cost Analysis: Show you exactly how much you'll save with solar",
    "ROI Calculation: See your return on investment and payback period",
    "Government Incentives: Guide you through available subsidies and tax benefits",
    "Installation Timeline: Plan your solar project from start to finish",
    "Maintenance Plan: Long-term support and warranty information"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Reduced hero height while keeping full-width background */}
      <section className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '70vh' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/landing 1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-primary/80" />

        {/* Shift hero content slightly lower for better visual balance */}
        <div
          className="relative z-10 text-center px-6 max-w-5xl"
          style={{ marginTop: '10rem' }}
        >


          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textShadow: '0 4px 6px rgba(0, 0, 0, 0.87)' }}
            className="text-xl md:text-5xl mb-12 text-secondary font-medium leading-relaxed"
          >
            Power Your World with Clean and Reliable Energy
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="tel:08065970017"
            className="inline-flex items-center rounded-full text-xl font-bold transition-fast transform hover:scale-105 shadow-glow hover:shadow-glow animate-bounce-subtle"
            style={{
              padding: '10px',
              backgroundColor: 'rgba(5, 8, 22, 0.3)',
              color: '#ffffff'
            }}
          >
            Call Now for Free Consultation
          </motion.a>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">Our Solar Solutions</h2>
            <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of solar energy solutions designed to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solarCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-102 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-glass backdrop-blur-lg p-4 rounded-2xl shadow-lg">
                    {card.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{card.title}</h3>
                  <p className="text-muted leading-relaxed text-lg">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-tertiary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">Our Services</h2>
            <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
              Professional solar services backed by expertise and commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-102 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 bg-glass backdrop-blur-lg p-4 rounded-2xl shadow-lg">
                    {service.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted leading-relaxed text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 bg-gradient-to-br from-secondary via-tertiary to-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">Broad Solar Consultation</h2>
              <p className="text-xl md:text-2xl text-muted mb-16 leading-relaxed">
                Get expert advice tailored to your energy needs. Our consultation includes:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 text-left bg-glass backdrop-blur-lg p-6 rounded-2xl border border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102"
                >
                  <div className="flex-shrink-0 w-3 h-3 bg-accent rounded-full mt-3 animate-pulse"></div>
                  <p className="text-secondary text-lg leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">Ready to Go Solar?</h2>
            <p className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us today for a free consultation and energy assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:08065970017"
                className="inline-flex items-center rounded-full text-xl font-bold transition-fast transform hover:scale-105 shadow-glow hover:shadow-glow"
                style={{
                  padding: '15px',
                  backgroundColor: 'rgba(5, 8, 22, 0.3)',
                  color: '#ffffff'
                }}
              >
                <Phone className="mr-3" size={24} />
                Call 08065970017
              </a>
              <a
                href="mailto:thollarkings@gmail.com"
                className="inline-flex items-center rounded-full text-xl font-bold transition-fast transform hover:scale-105 shadow-glow hover:shadow-glow"
                style={{
                  padding: '15px',
                  backgroundColor: 'rgba(5, 8, 22, 0.3)',
                  color: '#ffffff'
                }}>
                <Mail className="mr-3" size={24} />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home