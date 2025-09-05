'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const footerLinks = {
    platform: [
      'Dashboard Overview',
      'Project Management',
      'Team Collaboration',
      'Analytics & Reports',
      'Mobile Apps',
      'API Documentation'
    ],
    solutions: [
      'Commercial Projects',
      'Residential Development',
      'Industrial Construction',
      'Infrastructure',
      'Renovation Projects',
      'Custom Solutions'
    ],
    resources: [
      'Help Center',
      'Video Tutorials',
      'Best Practices',
      'Webinars',
      'Case Studies',
      'Construction Guides'
    ],
    company: [
      'About SkyStruct',
      'Our Team',
      'Careers',
      'Press Kit',
      'Partner Program',
      'Investor Relations'
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="relative">
                <Building2 className="h-10 w-10 text-orange-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">SkyStruct</span>
                <div className="text-sm text-orange-400 font-medium">V2 Lite</div>
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Revolutionizing construction management through AI-powered technology 
              solutions that empower teams to build better, faster, and smarter with 
              unprecedented efficiency and quality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">hello@skystruct.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">Seattle, WA 98101</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 mt-16 pt-12"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest construction management insights and platform updates</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SkyStruct V2 Lite. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-3 text-gray-400 hover:text-orange-400 hover:bg-white/20 transition-all duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-orange-500/20 backdrop-blur-lg border border-orange-500/30 rounded-lg p-3 text-orange-400 hover:bg-orange-500/30 transition-all duration-200"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer