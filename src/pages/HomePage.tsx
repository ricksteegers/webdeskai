import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>WebDesk AI - AI-gedreven websites voor onverslaanbare prijzen | premium webdesign vanaf €695</title>
        <meta name="description" content="Hoogwaardige websites gemaakt door AI-experts. 65% goedkoper dan traditionele bureaus, in 1 week live! Premium webdesign vanaf €695. Gratis adviesgesprek." />
        <meta name="keywords" content="AI website ontwikkeling, goedkope websites, premium webdesign, AI webdesign, website laten maken, webdesign Nederland, AI gedreven websites" />
        <link rel="canonical" href="https://webdeskai.com/" />
        
        <meta property="og:title" content="WebDesk AI - AI-gedreven websites voor onverslaanbare prijzen" />
        <meta property="og:description" content="Premium websites vanaf €695 dankzij AI-technologie. 65% goedkoper dan traditionele bureaus en in 1 week live!" />
        <meta property="og:url" content="https://webdeskai.com/" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "WebDesk AI",
          "url": "https://webdeskai.com",
          "description": "AI-gedreven website ontwikkeling tegen onverslaanbare prijzen",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://webdeskai.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "WebDesk AI",
            "logo": "https://webdeskai.com/WebDesnk AI.png"
          }
        })}
        </script>
      </Helmet>
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