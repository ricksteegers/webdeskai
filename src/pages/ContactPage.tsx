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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

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
      <div className="relative z-10">
        <Header />
        <ContactForm />
        <Footer />
        <WhatsAppPopup />
      </div>
    </div>
  );
};

export default ContactPage;