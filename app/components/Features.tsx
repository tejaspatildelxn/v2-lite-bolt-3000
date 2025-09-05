'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Cloud, BarChart3, Bell, Lock, Zap, Cpu, Globe, Database } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First Design',
      description: 'Native mobile apps for iOS and Android with offline capabilities and real-time sync'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Enterprise Cloud Infrastructure',
      description: 'Scalable cloud platform with 99.99% uptime SLA and global CDN distribution'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'AI-Powered Analytics',
      description: 'Machine learning insights with predictive modeling and automated recommendations'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Smart Notifications',
      description: 'Intelligent alerts with priority filtering and multi-channel delivery options'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Military-Grade Security',
      description: 'End-to-end encryption with SOC 2 compliance and advanced threat protection'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Performance',
      description: 'Sub-second response times with edge computing and intelligent caching'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI Process Automation',
      description: 'Automated workflows with intelligent decision-making and process optimization'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Collaboration',
      description: 'Multi-timezone support with real-time collaboration and language localization'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Advanced Data Management',
      description: 'Centralized data hub with automated backups and intelligent data governance'
    },
  ]

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6"
          >
            Platform Capabilities
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Enterprise-Grade
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 block">
              Platform Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Powerful capabilities designed to enhance your construction management workflow 
            and boost project efficiency across all phases of development with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-3 w-fit mb-6 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Unified Construction Management Ecosystem
              </h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Experience the power of integrated construction management with our comprehensive 
                platform that connects every aspect of your projects from initial planning to 
                final delivery, ensuring seamless coordination and optimal outcomes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { metric: '99.99%', label: 'Platform Uptime', color: 'text-green-400' },
                  { metric: '< 100ms', label: 'Response Time', color: 'text-blue-400' },
                  { metric: '256-bit', label: 'Encryption', color: 'text-purple-400' },
                  { metric: '24/7', label: 'Expert Support', color: 'text-orange-400' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.metric}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-80 relative overflow-hidden"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center"
                  >
                    <BarChart3 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Real-Time Analytics Engine
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Advanced data processing with live project insights and predictive analytics
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features