import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Target, Network, Lock } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Proactive Early Warnings, Not Just Detection',
      description: 'Get critical lead time. We identify threats before they peak, providing a crucial window to respond.',
      color: 'text-success-500',
      bgColor: 'bg-success-50',
      borderColor: 'border-success-200',
    },
    {
      icon: Brain,
      title: 'Mathematical & Statistical Foundation for Unmatched Accuracy',
      description: 'Our engine uses differential equations and statistical analysis (Kurtosis & Skewness) to detect anomalies traditional systems miss.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200',
    },
    {
      icon: Zap,
      title: 'Lightweight and Resource-Efficient',
      description: 'Enterprise-grade protection designed to run efficiently, even on legacy hardware and limited resources.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200',
    },
    {
      icon: Target,
      title: 'Effective Against Evolving and Low-Rate Attacks',
      description: 'Detects unknown (zero-day) and low-rate attacks that often bypass conventional signature-based systems.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: Network,
      title: 'Actionable, Tiered Alert System',
      description: 'Clear, prioritized alerts (Low, Medium, High) prevent fatigue and help your team focus on genuine threats.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: Lock,
      title: 'Proven Performance with Real-World Data',
      description: 'Thoroughly validated using the comprehensive CICDDoS2019 dataset against modern DDoS attack vectors.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why DDoSAlertX? Our Core Features
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10
                  }}
                  className={`${feature.bgColor} rounded-2xl p-8 border ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 border border-gray-200 group-hover:border-opacity-40 transition-all duration-300`}
                  >
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-4 ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary-500 rounded-full opacity-50 animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary-500 rounded-full opacity-30 animate-pulse animation-delay-200"></div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;