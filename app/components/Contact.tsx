'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Building, MessageSquare, Calendar, CheckCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold mb-6"
          >
            Let's Connect
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Ready to Transform
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 block">
              Your Construction Projects?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Start your journey with SkyStruct V2 Lite today. Our experts are ready to help you 
            revolutionize your construction management and achieve unprecedented project success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10"
          >
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-white">Start Your Free Trial</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-3">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                    placeholder="Your construction company"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-3">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm transition-all duration-200"
                  >
                    <option value="" className="bg-slate-800">Select project type</option>
                    <option value="commercial" className="bg-slate-800">Commercial</option>
                    <option value="residential" className="bg-slate-800">Residential</option>
                    <option value="industrial" className="bg-slate-800">Industrial</option>
                    <option value="infrastructure" className="bg-slate-800">Infrastructure</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm resize-none transition-all duration-200"
                  placeholder="Tell us about your construction management needs, project scale, timeline, and specific challenges you're facing..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Start Free Trial</span>
                  </>
                )}
              </motion.button>

              <p className="text-gray-400 text-sm text-center">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </form>
          </motion.div>

          {/* Contact Information & Support */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 rounded-xl p-4">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email Support</h4>
                    <p className="text-gray-300 mb-1">hello@skystruct.com</p>
                    <p className="text-gray-300">support@skystruct.com</p>
                    <p className="text-gray-400 text-sm mt-2">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 rounded-xl p-4">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone Support</h4>
                    <p className="text-gray-300 mb-1">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                    <p className="text-gray-400 text-sm mt-2">24/7 Emergency Support</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 rounded-xl p-4">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Headquarters</h4>
                    <p className="text-gray-300 mb-1">123 Innovation Drive</p>
                    <p className="text-gray-300">Seattle, WA 98101</p>
                    <p className="text-gray-400 text-sm mt-2">Open for visits by appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Support Hours</h3>
              </div>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-green-400 font-medium">8:00 AM - 8:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="text-orange-400 font-medium">10:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-blue-400 font-medium">Emergency Support Only</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">Emergency Hotline</span>
                    <span className="text-red-400 font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Demo Booking */}
            <div className="bg-gradient-to-br from-orange-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white">Book a Demo</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                See SkyStruct V2 Lite in action with a personalized demo tailored to your 
                construction management needs.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule 30-min Demo</span>
              </motion.button>

              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  Available slots: Today, Tomorrow, This Week
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact