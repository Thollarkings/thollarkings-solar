import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'residential'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const projectTypes = [
    { value: 'residential', label: 'Residential Solar' },
    { value: 'commercial', label: 'Commercial Solar' },
    { value: 'maintenance', label: 'System Maintenance' },
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'other', label: 'Other' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS template parameters shaped for your HTML email template
      const subjectPrefix = 'Solar Enquiry - '
      const normalizedSubject = formData.subject?.trim()
      const finalSubject = normalizedSubject
        ? `${subjectPrefix}${normalizedSubject}`
        : `${subjectPrefix}New message`

      const templateParams = {
        name: formData.name,
        time: new Date().toLocaleString(),
        subject: finalSubject,
        message: `
${finalSubject}

Project Type: ${projectTypes.find(type => type.value === formData.projectType)?.label}
Phone: ${formData.phone || 'Not provided'}
Email: ${formData.email}

Message:
${formData.message}
        `.trim(),
        from_email: formData.email,
        to_email: 'thollarkings@gmail.com'
      }

      // Live EmailJS integration using environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'residential'
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      info: "08065970017",
      action: "tel:08065970017",
      description: "Mon-Sat 8AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      info: "thollarkings@gmail.com",
      action: "mailto:thollarkings@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      info: "Nationwide",
      action: null,
      description: "Solar solutions across the region"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon-Sat: 8AM-6PM",
      action: null,
      description: "Sunday: Emergency only"
    }
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-hero-pill">
              <span>Contact Thollarkings Solar</span>
            </div>
            <h1 className="contact-hero-title">Let’s talk about your solar project.</h1>
            <p className="contact-hero-subtitle">
              Share your energy needs, location, and preferred backup hours. We’ll respond with a clean, clear, and
              professional recommendation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main">
        <div className="contact-layout">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <h2 className="contact-form-title">Send us a message</h2>
            <p className="contact-form-subtitle">
              Fill in the form and our team will reach out with a tailored solar recommendation.
            </p>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-green-400">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6 flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <p className="text-red-400">Failed to send message. Please try again or call us directly.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="contact-grid-2">
                  <div>
                    <label htmlFor="name" className="contact-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="contact-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="contact-grid-2">
                  <div>
                    <label htmlFor="phone" className="contact-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="contact-label">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="contact-select"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-gray-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="contact-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contact-input"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="contact-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="contact-textarea"
                    placeholder="Tell us about your solar energy needs, property details, or any questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`contact-submit-btn ${isSubmitting ? 'is-disabled' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-col"
          >
            <div className="contact-info-header">
              <h2>Contact Information</h2>
              <p>
                Reach us quickly through any of these channels. We respond with clarity, not confusion.
              </p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="contact-info-item"
                >
                  <div className="contact-info-icon">
                    {info.icon}
                  </div>
                  <div>
                    <p className="contact-info-text-title">{info.title}</p>
                    {info.action ? (
                      <a href={info.action} className="contact-info-link">
                        {info.info}
                      </a>
                    ) : (
                      <p className="contact-info-text-main">{info.info}</p>
                    )}
                    <p className="contact-info-text-sub">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="contact-quick-card">
              <div className="flex items-center mb-2">
                <MessageCircle className="w-5 h-5 text-orange-400 mr-2" />
                <h3 className="contact-quick-title">Need immediate help?</h3>
              </div>
              <p className="contact-quick-text">
                For urgent inquiries or emergency system issues, call us directly and we’ll assist you promptly.
              </p>
              <a href="tel:08065970017" className="contact-quick-btn">
                <Phone className="w-4 h-4" />
                Call 08065970017
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="contact-faq-inner">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-faq-header"
          >
            <h2 className="contact-faq-title">Frequently Asked Questions</h2>
            <p className="contact-faq-subtitle">
              Quick answers to common questions about our solar services.
            </p>
          </motion.div>

          <div className="contact-faq-grid">
            {[
              {
                question: "How long does a solar installation take?",
                answer: "Most residential solar installations take 1-3 days, depending on system size and complexity. Commercial projects may take longer."
              },
              {
                question: "What warranties do you provide?",
                answer: "We provide warranties for inverters, batteries, and other components according to the respective manufacturers' terms. We do not alter or override manufacturer warranty conditions."
              },
              {
                question: "Do you provide maintenance services?",
                answer: "Yes, we provide ongoing maintenance services to ensure your system operates at peak efficiency throughout its lifespan."
              },
              {
                question: "Can you help with government incentives?",
                answer: "Absolutely! We guide you through available government incentives, tax credits, and financing options to maximize your savings."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="contact-faq-card"
              >
                <h3 className="contact-faq-question">{faq.question}</h3>
                <p className="contact-faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact