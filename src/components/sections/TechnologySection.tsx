import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Calculator, BarChart3, Cpu, Database, Network, Shield, Zap } from 'lucide-react';

const TechnologySection: React.FC = () => {
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

  return (
    <section className="relative section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Technology
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  <span className="text-primary-600 font-semibold">DDoSAlertX</span> is a proactive Intrusion Prevention System that identifies DDoS attacks at their inception, enabling mitigation before services are impacted.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Our core innovation is a <span className="text-secondary-600 font-semibold">mathematical framework</span> that analyzes network traffic dynamics. We model packet flow using differential equations to understand its velocity and acceleration, moving beyond simple volume thresholds.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  We then apply <span className="text-success-600 font-semibold">statistical analysis</span>—specifically Kurtosis and Skewness—to detect subtle anomalies in traffic distribution. This method identifies the earliest deviations signaling an attack.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  When these statistical indicators breach learned thresholds, the system triggers a <span className="text-primary-600 font-semibold">tiered alert system</span> (Low, Medium, High). This provides a clear Early Warning Signal, giving security teams critical time to respond before an attack reaches its peak.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection;