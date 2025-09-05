'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb, Building2, Globe, Zap } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every project with industry-leading standards'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients, contractors, and teams worldwide'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Accurate planning and execution with attention to every detail and milestone'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge AI and technology to revolutionize construction management'
    },
  ]

  const achievements = [
    { icon: <Building2 className="w-6 h-6" />, metric: '500+', label: 'Projects Delivered' },
    { icon: <Globe className="w-6 h-6" />, metric: '25+', label: 'Countries Served' },
    { icon: <Users className="w-6 h-6" />, metric: '10K+', label: 'Active Users' },
    { icon: <Zap className="w-6 h-6" />, metric: '40%', label: 'Efficiency Gain' },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
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
            Our Story
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Pioneering the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 block">
              Construction Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Leading the digital transformation in construction management with innovative 
            AI-powered solutions that empower teams to build better, faster, and smarter than ever before.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Our Journey</h3>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2018 by a team of construction industry veterans and AI researchers, 
                  SkyStruct emerged from the vision to bridge the gap between traditional construction 
                  practices and cutting-edge artificial intelligence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we serve over 500 construction companies across 25 countries, helping them 
                  streamline operations, reduce costs by up to 30%, and deliver projects with 
                  unprecedented efficiency and quality.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our V2 Lite platform represents the culmination of years of research and development, 
                  incorporating machine learning algorithms that learn from every project to continuously 
                  improve performance and outcomes.
                </p>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-orange-400 mb-3 flex justify-center">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{achievement.metric}</div>
                    <div className="text-gray-400 text-sm">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-orange-400 mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Sarah Chen', 
                role: 'CEO & Co-Founder', 
                expertise: 'Construction Management',
                background: 'Former VP at Turner Construction'
              },
              { 
                name: 'Dr. Michael Rodriguez', 
                role: 'CTO & Co-Founder', 
                expertise: 'AI & Software Architecture',
                background: 'Ex-Google AI Research'
              },
              { 
                name: 'Jennifer Kim', 
                role: 'VP of Product', 
                expertise: 'UX & Product Strategy',
                background: 'Former Autodesk Product Lead'
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                <p className="text-orange-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs mb-2">{member.expertise}</p>
                <p className="text-gray-500 text-xs">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About