import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Target, 
  AlertTriangle,
  BarChart3
} from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Proactive Early Warnings, Not Just Detection',
      description: 'Get critical lead time. We identify threats before they peak, providing a crucial window to respond.',
      color: 'text-success-500',
      bgColor: 'bg-success-50',
    },
    {
      icon: Brain,
      title: 'Mathematical & Statistical Foundation for Unmatched Accuracy',
      description: 'Our engine uses differential equations and statistical analysis (Kurtosis & Skewness) to detect anomalies traditional systems miss.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Zap,
      title: 'Lightweight and Resource-Efficient',
      description: 'Enterprise-grade protection designed to run efficiently, even on legacy hardware and limited resources.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: Target,
      title: 'Effective Against Evolving and Low-Rate Attacks',
      description: 'Detects unknown (zero-day) and low-rate attacks that often bypass conventional signature-based systems.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: AlertTriangle,
      title: 'Actionable, Tiered Alert System',
      description: 'Clear, prioritized alerts (Low, Medium, High) prevent fatigue and help your team focus on genuine threats.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: BarChart3,
      title: 'Proven Performance with Real-World Data',
      description: 'Thoroughly validated using the comprehensive CICDDoS2019 dataset against modern DDoS attack vectors.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
    },
  ];

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
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why DDoSAlertX?
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our Core Features for Advanced DDoS Protection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;