import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize, 
  Download,
  Share2,
  Eye,
  Settings,
  Bell,
  Shield,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState('dashboard');

  const demoScenarios = [
    {
      id: 'dashboard',
      title: 'Real-Time Dashboard',
      description: 'Live monitoring interface with real-time alerts and system status',
      duration: '2:30',
      thumbnail: '/demo/dashboard-thumb.jpg'
    },
    {
      id: 'alerts',
      title: 'Smart Alert System',
      description: 'AI-powered threat detection and intelligent alert management',
      duration: '1:45',
      thumbnail: '/demo/alerts-thumb.jpg'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and predictive analytics dashboard',
      duration: '2:15',
      thumbnail: '/demo/analytics-thumb.jpg'
    },
    {
      id: 'mobile',
      title: 'Mobile Experience',
      description: 'Native mobile app with push notifications and remote control',
      duration: '1:30',
      thumbnail: '/demo/mobile-thumb.jpg'
    }
  ];

  const demoData = {
    dashboard: {
      title: 'SignalGuard Dashboard',
      status: 'Online',
      alerts: 3,
      confidence: 94,
      uptime: '99.9%',
      lastUpdate: '2 seconds ago',
      metrics: [
        { label: 'Active Threats', value: 2, status: 'warning' },
        { label: 'Resolved Issues', value: 15, status: 'success' },
        { label: 'System Health', value: 98, status: 'success' },
        { label: 'Response Time', value: '47ms', status: 'success' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            See SignalGuard{' '}
            <span className="text-gradient">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our early warning system through interactive demos 
            and real-world scenarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Demo Selector */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Choose Demo Scenario
            </h3>
            
            <div className="space-y-4">
              {demoScenarios.map((demo, index) => (
                <motion.button
                  key={demo.id}
                  variants={itemVariants}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'border-primary-500 bg-primary-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Play className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{demo.title}</h4>
                      <p className="text-sm text-gray-600">{demo.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">Duration:</span>
                        <span className="text-xs font-medium text-primary-600">{demo.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Demo Controls */}
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gray-50 rounded-lg p-6"
            >
              <h4 className="font-medium text-gray-900 mb-4">Demo Controls</h4>
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button className="p-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors">
                  <RotateCcw className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors">
                  <Maximize className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Demo Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Demo Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">
                    SignalGuard Demo - {demoScenarios.find(d => d.id === selectedDemo)?.title}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 bg-gray-900">
                {selectedDemo === 'dashboard' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl p-6"
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-600 rounded-lg">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{demoData.dashboard.title}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600">{demoData.dashboard.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{demoData.dashboard.confidence}%</div>
                        <div className="text-sm text-gray-600">AI Confidence</div>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {demoData.dashboard.metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">{metric.label}</span>
                            {metric.status === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                            {metric.status === 'success' && <CheckCircle className="h-4 w-4 text-success-500" />}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Live Chart */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Threat Level Trend</h4>
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">Live</span>
                        </div>
                      </div>
                      <div className="h-32 bg-gradient-to-r from-success-400 via-secondary-400 to-primary-400 rounded opacity-60 flex items-center justify-center">
                        <span className="text-white font-medium">Real-time Chart Visualization</span>
                      </div>
                    </div>

                    {/* Recent Alerts */}
                    <div className="mt-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Recent Alerts</h4>
                        <Bell className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="space-y-2">
                        {[
                          { type: 'warning', message: 'Unusual pattern detected in Zone A', time: '2 min ago' },
                          { type: 'info', message: 'System maintenance completed', time: '15 min ago' },
                          { type: 'success', message: 'Threat neutralized in Zone B', time: '32 min ago' }
                        ].map((alert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-2 bg-white rounded border"
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              alert.type === 'warning' ? 'bg-yellow-500' :
                              alert.type === 'info' ? 'bg-blue-500' : 'bg-success-500'
                            }`}></div>
                            <span className="text-sm text-gray-700 flex-1">{alert.message}</span>
                            <span className="text-xs text-gray-500">{alert.time}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Demo Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <button className="flex-1 btn-primary flex items-center justify-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Start Live Demo</span>
              </button>
              <button className="flex-1 btn-secondary flex items-center justify-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Customize Demo</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience SignalGuard?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get hands-on with our platform through our interactive demo environment. 
            No setup required - start exploring immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">
              Launch Full Demo
            </button>
            <button className="btn-secondary px-8 py-3">
              Schedule Personal Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
