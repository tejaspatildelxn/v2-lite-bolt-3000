'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Users, Building, TrendingUp } from 'lucide-react'

const Hero: React.FC = () => {
  const parallaxVariants = {
    initial: { y: 0 },
    animate: { 
      y: -30,
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  }

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Real-time Project Tracking" },
    { icon: <Users className="w-5 h-5" />, text: "Team Collaboration Tools" },
    { icon: <Building className="w-5 h-5" />, text: "Resource Management" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Performance Analytics" }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-dark-gradient">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          variants={parallaxVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          variants={parallaxVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '3s' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
        />
        <motion.div
          variants={parallaxVariants}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '6s' }}
          className="absolute top-1/3 left-1/2 w-64 h-64 bg-success-500/20 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse" />
                Now Available - Version 2.0 Lite
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Build Smarter with
              <span className="gradient-text block">
                SkyStruct V2 Lite
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              The next-generation construction management platform that transforms how you plan, 
              execute, and deliver construction projects. Experience unprecedented efficiency 
              with our AI-powered workflow optimization.
            </motion.p>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="text-primary-400">{feature.icon}</div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group btn-primary px-8 py-4 rounded-full text-lg flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group btn-glass px-8 py-4 rounded-full text-lg flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 flex items-center space-x-8 text-sm text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>GDPR Ready</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Preview */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-panel rounded-3xl p-8 shadow-2xl"
              >
                <div className="glass-dark rounded-2xl p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-xs text-gray-400">SkyStruct V2 Lite Dashboard</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-orange-500/20 rounded-lg p-3 text-center">
                        <div className="text-orange-400 text-lg font-bold">24</div>
                        <div className="text-xs text-gray-400">Active Projects</div>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                        <div className="text-blue-400 text-lg font-bold">156</div>
                        <div className="text-xs text-gray-400">Team Members</div>
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-3 text-center">
                        <div className="text-green-400 text-lg font-bold">98%</div>
                        <div className="text-xs text-gray-400">On Schedule</div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Metro Tower Complex</span>
                          <span>85%</span>
                        </div>
                        <div className="progress-bar h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ duration: 2, delay: 1 }}
                            className="progress-fill"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Riverside Apartments</span>
                          <span>62%</span>
                        </div>
                        <div className="progress-bar h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '62%' }}
                            transition={{ duration: 2, delay: 1.2 }}
                            className="bg-gradient-to-r from-accent-400 to-accent-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 -left-4 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success-500/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-success-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Project Approved</div>
                    <div className="text-gray-400 text-xs">Metro Tower Phase 2</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Efficiency +40%</div>
                    <div className="text-gray-400 text-xs">This Quarter</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '500+', label: 'Projects Completed', color: 'text-primary-400' },
            { number: '98%', label: 'On-Time Delivery', color: 'text-accent-400' },
            { number: '50+', label: 'Expert Team Members', color: 'text-success-400' },
            { number: '24/7', label: 'Support Available', color: 'text-purple-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="metric-card text-center"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero