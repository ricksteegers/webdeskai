import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Contact - WebDesk AI | gratis adviesgesprek AI website ontwikkeling</title>
        <meta name="description" content="Neem contact op met WebDesk AI voor een gratis adviesgesprek. Ontdek hoe onze AI-gedreven websites uw bedrijf kunnen helpen groeien. Reactie binnen 24 uur gegarandeerd!" />
        <meta name="keywords" content="contact WebDesk AI, gratis adviesgesprek, AI website ontwikkeling, offerte aanvragen, website laten maken" />
        <link rel="canonical" href="https://webdeskai.com/contact" />
        
        <meta property="og:title" content="Contact - WebDesk AI | gratis adviesgesprek" />
        <meta property="og:description" content="Neem contact op voor een gratis adviesgesprek over AI-gedreven website ontwikkeling. Reactie binnen 24 uur!" />
        <meta property="og:url" content="https://webdeskai.com/contact" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact WebDesk AI",
          "description": "Neem contact op met WebDesk AI voor AI-gedreven website ontwikkeling",
          "url": "https://webdeskai.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "WebDesk AI",
            "telephone": "+31-6-45830810",
            "email": "hallo@webdeskai.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Verdunplein 17",
              "addressLocality": "Eindhoven",
              "postalCode": "5627 SZ",
              "addressCountry": "NL"
            }
          }
        })}
        </script>
      </Helmet>
      <Header />
      <ContactForm />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default ContactPage;