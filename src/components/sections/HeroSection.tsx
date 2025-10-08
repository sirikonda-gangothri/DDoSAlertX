import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Eye, Brain, Bell } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const handleDemoClick = () => {
    window.open('https://ddosalertx.onrender.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-primary-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-400"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div className="text-gray-900">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                <Brain className="h-4 w-4 mr-2" />
                DDoS Attack Prevention System
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-primary-600">Intelligent</span>
              <br />
              <span className="text-secondary-600">DDoS Protection</span>
              <br />
              <span className="text-gray-900">for Network Security</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              Engineered to prevent DDoS attacks before they reach your network - with predictive monitoring, 
              early warning alerts, and real-time response mechanisms that ensure uninterrupted protection.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={handleDemoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Try Live Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white text-primary-600 px-6 py-4 rounded-lg border-2 border-primary-200 hover:border-primary-300 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                <span>Watch Video</span>
              </motion.button> */}
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Eye className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">DDoSAlertX Analysis</h3>
                    <p className="text-primary-600 text-sm">Real-time Detection</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-success-600 text-sm font-medium">Active</span>
                </div>
              </div>

              {/* Network Traffic Visualization */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="text-gray-900 text-sm font-medium mb-4 flex items-center">
                  <Brain className="h-4 w-4 mr-2 text-primary-600" />
                  Network Traffic Analysis
                </h4>
                <div className="relative h-40 bg-white rounded-lg border border-gray-200">
                  {/* Simple animated chart representation */}
                  <div className="absolute inset-4">
                    <div className="flex items-end justify-between h-full space-x-1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-primary-500 rounded-t"
                          style={{ width: '4px' }}
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 80 + 20}%` }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="flex justify-center space-x-6 mt-4 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-600">Normal Traffic</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">Attack Traffic</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600">Early Warning</span>
                  </div>
                </div>
              </div>

              {/* Detection Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-4">
                  <div className="text-gray-900 text-sm font-medium mb-2 flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-primary-600" />
                    Detected Anomalies
                  </div>
                  <div className="text-2xl font-bold text-primary-600">1,529</div>
                </div>
                <div className="bg-secondary-50 rounded-xl p-4">
                  <div className="text-gray-900 text-sm font-medium mb-2 flex items-center">
                    <Brain className="h-4 w-4 mr-2 text-secondary-600" />
                    Early Warnings
                  </div>
                  <div className="text-2xl font-bold text-secondary-600">12</div>
                </div>
              </div>
            </div>

            {/* Floating Alert Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
            >
              ALERT
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;