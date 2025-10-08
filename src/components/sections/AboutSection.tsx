import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Target, AlertTriangle, Cpu } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features: any[] = [];

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
              About DDoSAlertX
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  At <span className="text-primary-600 font-semibold">DDoSAlertX</span>, we are tackling one of the most persistent challenges in cybersecurity: the threat of DDoS attacks. We saw that traditional detection systems often respond too late, only after an attack has already caused costly downtime and disruption.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  That is the purpose behind <span className="text-secondary-600 font-semibold">DDoSAlertX</span>. Our solution is engineered to identify threats before they can cause harm. Our innovative approach uses advanced mathematical tools and statistical analysis to detect the earliest warning signs of an attack, enabling rapid and targeted threat mitigation.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  In an era of escalating cyber threats, <span className="text-success-600 font-semibold">DDoSAlertX</span> meets the growing demand for a straightforward and cost-effective solution, safeguarding network integrity and preventing expensive disruptions.
                </p>
              </div>

              {/* Feature Cards removed as requested */}
            </motion.div>

            {/* Visual Element removed as requested */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;