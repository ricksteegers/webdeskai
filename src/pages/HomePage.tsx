import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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