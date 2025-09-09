import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bedankt" element={<ThankYouPage />} />
          <Route path="/over-ons" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;