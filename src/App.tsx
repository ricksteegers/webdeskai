import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bedankt" element={<ThankYouPage />} />
        <Route path="/over-ons" element={<AboutPage />} />
        <Route path="/tarieven" element={<PricingPage />} />
        <Route path="/diensten" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;