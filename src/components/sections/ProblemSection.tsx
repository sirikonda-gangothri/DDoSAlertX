import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, Users, TrendingUp, Shield } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Proactive DDoS Protection',
      description: 'DDoSAlertX identifies and prevents DDoS attacks before they reach your network, ensuring uninterrupted service.',
      color: 'text-success-500',
      bgColor: 'bg-success-50',
    },
    {
      icon: Clock,
      title: 'Early Warning System',
      description: 'Get critical lead time with our early warning alerts that identify threats before they peak.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solution',
      description: 'Prevent costly downtime and service disruptions with our efficient, resource-light protection.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: Users,
      title: 'Mathematical Foundation',
      description: 'Advanced statistical analysis using Kurtosis & Skewness to detect anomalies traditional systems miss.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: TrendingUp,
      title: 'Zero-Day Attack Detection',
      description: 'Detects unknown and low-rate attacks that often bypass conventional signature-based systems.',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: Shield,
      title: 'Tiered Alert System',
      description: 'Clear, prioritized alerts (Low, Medium, High) prevent fatigue and help focus on genuine threats.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Organizations Choose{' '}
            <span className="text-gradient">DDoSAlertX</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's cyber threat landscape, traditional DDoS protection systems fall short. 
            DDoSAlertX delivers the intelligent, proactive protection your network needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 ${problem.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`h-6 w-6 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 shadow-lg text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Proven Results</h3>
            <p className="text-blue-100">DDoSAlertX delivers measurable improvements across all metrics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;100ms</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">78%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Fewer False Alerts</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
