import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DDoSAlertX</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Learn how we proactively stop DDoS attacks before they impact services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              At DDoSAlertX, we are tackling one of the most persistent challenges in cybersecurity: the threat of DDoS attacks. We saw that traditional detection systems often respond too late, only after an attack has already caused costly downtime and disruption.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              That is the purpose behind DDoSAlertX. Our solution is engineered to identify threats before they can cause harm. Our innovative approach uses advanced mathematical tools and statistical analysis to detect the earliest warning signs of an attack, enabling rapid and targeted threat mitigation.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              In an era of escalating cyber threats, DDoSAlertX meets the growing demand for a straightforward and cost-effective solution, safeguarding network integrity and preventing expensive disruptions.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;