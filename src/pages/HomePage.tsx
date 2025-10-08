import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TechnologySection from '../components/sections/TechnologySection';
import TeamSection from '../components/sections/TeamSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;