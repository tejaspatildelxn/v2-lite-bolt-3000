'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Calendar, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Settings,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

const DashboardPreview: React.FC = () => {
  const projectData = [
    { name: 'Metro Tower Complex', progress: 85, status: 'On Track', budget: '$2.4M', team: 24 },
    { name: 'Riverside Apartments', progress: 62, status: 'Delayed', budget: '$1.8M', team: 18 },
    { name: 'Industrial Hub Phase 1', progress: 94, status: 'Ahead', budget: '$3.2M', team: 32 },
    { name: 'Shopping Center Renovation', progress: 38, status: 'On Track', budget: '$950K', team: 12 },
  ]

  const recentActivities = [
    { action: 'Quality inspection completed', project: 'Metro Tower', time: '2 min ago', type: 'success' },
    { action: 'Budget milestone reached', project: 'Riverside Apartments', time: '15 min ago', type: 'info' },
    { action: 'Safety alert resolved', project: 'Industrial Hub', time: '1 hour ago', type: 'warning' },
    { action: 'New team member added', project: 'Shopping Center', time: '3 hours ago', type: 'info' },
  ]

  return (
    <section id="dashboard" className="py-32 px-4 sm:px-6 lg:px-8">
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
            Interactive Dashboard
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Command Center for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block">
              Construction Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of construction management with our intuitive dashboard that 
            provides real-time insights, predictive analytics, and seamless project coordination.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Browser Frame */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl">
            {/* Browser Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-1 text-gray-300 text-sm">
                  app.skystruct.com/dashboard
                </div>
              </div>
              <div className="text-xs text-gray-400">SkyStruct V2 Lite</div>
            </div>

            {/* Dashboard Content */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 min-h-[600px]">
              {/* Dashboard Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Project Overview</h3>
                  <p className="text-gray-400">Welcome back, Sarah. Here's what's happening with your projects.</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>
                  <button className="bg-white/10 border border-white/20 rounded-lg p-2 text-gray-400 hover:text-white transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                  <button className="bg-white/10 border border-white/20 rounded-lg p-2 text-gray-400 hover:text-white transition-colors">
                    <Bell className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { 
                    title: 'Active Projects', 
                    value: '24', 
                    change: '+12%', 
                    trend: 'up',
                    icon: <BarChart3 className="w-5 h-5" />,
                    color: 'orange'
                  },
                  { 
                    title: 'Team Members', 
                    value: '156', 
                    change: '+8%', 
                    trend: 'up',
                    icon: <Users className="w-5 h-5" />,
                    color: 'blue'
                  },
                  { 
                    title: 'On Schedule', 
                    value: '98%', 
                    change: '+2%', 
                    trend: 'up',
                    icon: <CheckCircle className="w-5 h-5" />,
                    color: 'green'
                  },
                  { 
                    title: 'Budget Efficiency', 
                    value: '94%', 
                    change: '-1%', 
                    trend: 'down',
                    icon: <DollarSign className="w-5 h-5" />,
                    color: 'purple'
                  },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`bg-${metric.color}-500/20 rounded-lg p-2`}>
                        <div className={`text-${metric.color}-400`}>
                          {metric.icon}
                        </div>
                      </div>
                      <div className={`flex items-center space-x-1 text-xs ${
                        metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        <span>{metric.change}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.title}</div>
                  </motion.div>
                ))}
              </div>

              {/* Projects Table */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Projects List */}
                <div className="lg:col-span-2">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-white/10">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-white">Active Projects</h4>
                        <button className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors">
                          View All
                        </button>
                      </div>
                    </div>
                    <div className="divide-y divide-white/10">
                      {projectData.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-6 hover:bg-white/5 transition-colors duration-200"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="text-white font-medium">{project.name}</h5>
                            <button className="text-gray-400 hover:text-white transition-colors">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Progress</div>
                              <div className="text-sm text-white font-medium">{project.progress}%</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Status</div>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                project.status === 'On Track' ? 'bg-green-500/20 text-green-400' :
                                project.status === 'Delayed' ? 'bg-red-500/20 text-red-400' :
                                'bg-blue-500/20 text-blue-400'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Budget</div>
                              <div className="text-sm text-white font-medium">{project.budget}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-400 mb-1">Team</div>
                              <div className="text-sm text-white font-medium">{project.team} members</div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${project.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                              className={`h-2 rounded-full ${
                                project.status === 'On Track' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                                project.status === 'Delayed' ? 'bg-gradient-to-r from-red-400 to-red-500' :
                                'bg-gradient-to-r from-blue-400 to-blue-500'
                              }`}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar - Recent Activity */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <Calendar className="w-4 h-4" />, text: 'Schedule Meeting', color: 'orange' },
                        { icon: <Users className="w-4 h-4" />, text: 'Add Team Member', color: 'blue' },
                        { icon: <BarChart3 className="w-4 h-4" />, text: 'Generate Report', color: 'green' },
                        { icon: <Settings className="w-4 h-4" />, text: 'Project Settings', color: 'purple' },
                      ].map((action, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
                        >
                          <div className={`text-${action.color}-400`}>{action.icon}</div>
                          <span className="text-white text-sm">{action.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === 'success' ? 'bg-green-400' :
                            activity.type === 'warning' ? 'bg-yellow-400' :
                            'bg-blue-400'
                          }`} />
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{activity.action}</div>
                            <div className="text-gray-400 text-xs">{activity.project}</div>
                            <div className="text-gray-500 text-xs">{activity.time}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hidden lg:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Performance Boost</div>
                <div className="text-orange-400 text-sm">+40% Efficiency</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hidden lg:block"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Time Saved</div>
                <div className="text-blue-400 text-sm">15 hrs/week</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Dashboard Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Real-Time Collaboration',
              description: 'Seamless team communication with instant updates, file sharing, and integrated messaging.',
              icon: <Users className="w-8 h-8" />,
              color: 'blue'
            },
            {
              title: 'Predictive Analytics',
              description: 'AI-powered insights that predict project outcomes and recommend optimization strategies.',
              icon: <TrendingUp className="w-8 h-8" />,
              color: 'purple'
            },
            {
              title: 'Mobile Accessibility',
              description: 'Full-featured mobile apps for on-site management with offline capabilities and sync.',
              icon: <Calendar className="w-8 h-8" />,
              color: 'green'
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className={`bg-${feature.color}-500/20 rounded-2xl p-4 w-fit mx-auto mb-6`}>
                <div className={`text-${feature.color}-400`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardPreview