import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <ContactForm />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default ContactPage;