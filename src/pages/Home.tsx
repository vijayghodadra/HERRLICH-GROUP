import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ProcessSection } from '../components/ProcessSection';
import { InsightsSection } from '../components/InsightsSection';
import { ContactSection } from '../components/ContactSection';

interface HomeProps {
  onOpenConsultation?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'HERRLICH GROUP | Uncovering Truths. Ensuring Justice.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero onOpenConsultation={onOpenConsultation} />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUs />
      <ProcessSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
};
