import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';

const ContactPage: React.FC = () => {
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