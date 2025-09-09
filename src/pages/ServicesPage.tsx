import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default ServicesPage;