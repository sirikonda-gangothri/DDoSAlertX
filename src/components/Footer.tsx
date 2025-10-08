import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0 text-gray-300">© 2025 DDoSAlertX. All rights reserved.</p>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;