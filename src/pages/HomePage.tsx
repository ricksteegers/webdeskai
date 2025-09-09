import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';

const HomePage: React.FC = () => {
  useEffect(() => {
    console.log('HomePage loaded');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default HomePage;