'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, TrendingUp, Shield, DollarSign, ClipboardCheck, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'AI-Powered Project Planning',
      description: 'Intelligent project planning with machine learning algorithms that predict potential delays and optimize resource allocation for maximum efficiency.',
      features: ['Smart Timeline Generation', 'Risk Assessment', 'Resource Optimization']
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Dynamic Timeline Management',
      description: 'Real-time scheduling with automated adjustments, critical path analysis, and intelligent milestone tracking that adapts to project changes.',
      features: ['Auto-Scheduling', 'Critical Path Analysis', 'Milestone Tracking']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Smart Resource Allocation',
      description: 'Optimize workforce and equipment utilization with AI-driven scheduling, skill matching, and automated resource distribution systems.',
      features: ['Skill Matching', 'Equipment Tracking', 'Workload Balancing']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Quality Control',
      description: 'Digital quality assurance with IoT sensors, automated inspections, compliance tracking, and real-time quality reporting systems.',
      features: ['Digital Inspections', 'IoT Integration', 'Compliance Tracking']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Comprehensive Safety Management',
      description: 'Proactive safety protocols with incident prediction, real-time monitoring, and automated compliance reporting for zero-accident construction sites.',
      features: ['Incident Prediction', 'Safety Monitoring', 'Compliance Reports']
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Intelligent Budget Tracking',
      description: 'Real-time financial monitoring with predictive cost analysis, automated expense tracking, and profitability optimization algorithms.',
      features: ['Cost Prediction', 'Expense Automation', 'ROI Analysis']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6"
          >
            Comprehensive Solutions
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Next-Generation Construction
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 block">
              Management Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our AI-powered platform provides end-to-end construction management solutions 
            designed to revolutionize your operations and deliver unprecedented project success rates.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="bg-orange-500/20 rounded-2xl p-4 w-fit mb-6 group-hover:bg-orange-500/30 transition-colors duration-300">
                  <div className="text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.div
                  className="flex items-center text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm font-semibold mr-2">Explore Feature</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid lg:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-lg border border-orange-500/20 rounded-3xl p-10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Zap className="w-10 h-10 text-orange-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">Lightning-Fast Implementation</h3>
                <p className="text-orange-300">Get started in under 24 hours</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our streamlined onboarding process gets your team up and running with minimal disruption. 
              Import existing project data, configure workflows, and start managing construction projects 
              with enterprise-grade tools in less than a day.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">&lt;24h</div>
                <div className="text-sm text-gray-400">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">Zero</div>
                <div className="text-sm text-gray-400">Downtime</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-10"
          >
            <BarChart3 className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Advanced Analytics</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Gain deep insights into project performance with our comprehensive analytics dashboard 
              featuring predictive modeling and actionable recommendations.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">40%</div>
              <div className="text-sm text-gray-400">Efficiency Increase</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services