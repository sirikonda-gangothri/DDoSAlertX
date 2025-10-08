import React from 'react';
import { motion } from 'framer-motion';

const TechnologyPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our mathematical framework for early, accurate DDoS detection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              DDoSAlertX is a proactive Intrusion Prevention System that identifies DDoS attacks at their inception, enabling mitigation before services are impacted.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              Our core innovation is a mathematical framework that analyzes network traffic dynamics. We model packet flow using differential equations to understand its velocity and acceleration, moving beyond simple volume thresholds.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              We then apply statistical analysis—specifically Kurtosis and Skewness—to detect subtle anomalies in traffic distribution. This method identifies the earliest deviations signaling an attack.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              When these statistical indicators breach learned thresholds, the system triggers a tiered alert (Low, Medium, High). This provides a clear Early Warning Signal, giving security teams critical time to respond before an attack reaches its peak.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;