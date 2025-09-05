'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Building, TrendingUp, Users, Award } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Mitchell',
      role: 'Senior Project Manager',
      company: 'BuildTech Solutions',
      content: 'SkyStruct V2 Lite has completely transformed our project management approach. The AI-powered scheduling and real-time collaboration features have increased our efficiency by 45% while reducing project delays by 60%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      metrics: { efficiency: '+45%', delays: '-60%' }
    },
    {
      name: 'Maria Rodriguez',
      role: 'Construction Director',
      company: 'Skyline Builders',
      content: 'The platform\'s intuitive interface and powerful analytics helped us complete our last three projects ahead of schedule while staying 15% under budget. The ROI has been exceptional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      metrics: { schedule: 'Ahead', budget: '-15%' }
    },
    {
      name: 'Robert Kim',
      role: 'Site Supervisor',
      company: 'Urban Development Co.',
      content: 'Outstanding mobile capabilities and real-time updates. The safety management features and quality control tools have revolutionized our on-site operations and improved team coordination significantly.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      metrics: { safety: '+90%', quality: 'A+' }
    },
  ]

  const companyLogos = [
    'BuildTech Solutions',
    'Skyline Builders', 
    'Urban Development Co.',
    'Metro Construction',
    'Pacific Builders',
    'Summit Engineering'
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-semibold mb-6"
          >
            Client Success Stories
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Trusted by Industry
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 block">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hear from construction professionals who have transformed their project 
            management processes and achieved remarkable results with SkyStruct V2 Lite.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-orange-400 mb-6" />
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-300 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center bg-white/5 rounded-lg p-3 border border-white/10">
                      <div className="text-orange-400 font-bold text-lg">{value}</div>
                      <div className="text-gray-400 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-orange-400/30"
                  />
                  <div>
                    <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-orange-400 text-sm font-medium">{testimonial.role}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl font-semibold text-gray-400 mb-8">
            Trusted by Leading Construction Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <div className="text-center">
                  <Building className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="text-gray-400 text-xs font-medium">{company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Measurable Impact Across All Projects
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our clients consistently achieve remarkable improvements in project outcomes, 
              efficiency, and profitability with SkyStruct V2 Lite.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                icon: <TrendingUp className="w-8 h-8" />, 
                number: '40%', 
                label: 'Average Efficiency Gain',
                color: 'text-green-400'
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                number: '98%', 
                label: 'Client Satisfaction Rate',
                color: 'text-blue-400'
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                number: '25%', 
                label: 'Faster Team Onboarding',
                color: 'text-purple-400'
              },
              { 
                icon: <Building className="w-8 h-8" />, 
                number: '60%', 
                label: 'Reduction in Delays',
                color: 'text-orange-400'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-300 text-sm leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials