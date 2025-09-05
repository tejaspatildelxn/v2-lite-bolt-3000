'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, MapPin, Users, DollarSign, TrendingUp } from 'lucide-react'

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Metropolitan Office Complex',
      category: 'Commercial',
      location: 'Downtown Seattle',
      duration: '18 months',
      teamSize: '45 people',
      budget: '$24M',
      efficiency: '+35%',
      description: 'A 25-story mixed-use development featuring office spaces, retail outlets, and underground parking with smart building technology.',
      image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      technologies: ['BIM Integration', 'IoT Sensors', 'AI Scheduling']
    },
    {
      title: 'Riverside Residential Village',
      category: 'Residential',
      location: 'Portland, OR',
      duration: '24 months',
      teamSize: '60 people',
      budget: '$18M',
      efficiency: '+42%',
      description: 'Sustainable housing development with 200 eco-friendly homes and community amenities using green construction methods.',
      image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Progress',
      technologies: ['Green Building', 'Smart Homes', 'Energy Management']
    },
    {
      title: 'Industrial Manufacturing Hub',
      category: 'Industrial',
      location: 'Denver, CO',
      duration: '12 months',
      teamSize: '35 people',
      budget: '$32M',
      efficiency: '+28%',
      description: 'State-of-the-art manufacturing facility with advanced automation and green technologies for sustainable production.',
      image: 'https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      technologies: ['Automation', 'Robotics', 'Clean Energy']
    },
  ]

  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6"
          >
            Success Stories
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Transformative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
              Project Outcomes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Showcasing our successful construction management implementations across 
            diverse project types and scales, delivering exceptional results and measurable improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/30 text-green-300 border border-green-500/50' 
                      : 'bg-orange-500/30 text-orange-300 border border-orange-500/50'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Efficiency Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-blue-500/30 backdrop-blur-sm border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{project.efficiency}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-200" />
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-2 text-orange-400" />
                    {project.teamSize}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-4 h-4 mr-2 text-orange-400" />
                    {project.budget}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-orange-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Construction Projects?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of construction companies that have revolutionized their project 
            management with SkyStruct V2 Lite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              View All Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio