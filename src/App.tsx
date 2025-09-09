import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="/WebDesnk AI.png" 
              alt="WebDesk AI" 
              className="h-16 w-auto"
            />
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-yellow-500 font-medium">Diensten</a>
              <a href="#pricing" className="text-gray-700 hover:text-yellow-500 font-medium">Prijzen</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-500 font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            AI-Gedreven <span className="text-yellow-500">Websites</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hoogwaardige websites gemaakt door AI-experts. Premium kwaliteit voor 65% minder dan traditionele bureaus.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl text-gray-400 line-through">€2000</span>
              <span className="text-4xl font-bold text-yellow-500">€695</span>
            </div>
            <p className="text-green-600 font-bold mt-2">65% besparing</p>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Start Jouw Project
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Onze <span className="text-yellow-500">Diensten</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Websites</h3>
              <p className="text-gray-600">Moderne, responsieve websites die je merk perfect representeren.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Webshops</h3>
              <p className="text-gray-600">Krachtige e-commerce oplossingen die verkopen stimuleren.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Design</h3>
              <p className="text-gray-600">Innovatieve ontwerpen gemaakt met AI-technologieën.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-yellow-100 via-white to-yellow-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            <span className="text-yellow-500">Prijzen</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-yellow-500 mb-4">€695</div>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Premium design</li>
                <li>✓ 4 pagina's</li>
                <li>✓ Responsive</li>
                <li>✓ SEO optimalisatie</li>
              </ul>
            </div>
            <div className="bg-yellow-500 p-8 rounded-2xl shadow-xl transform scale-105">
              <h3 className="text-2xl font-bold text-black mb-4">Professioneel</h3>
              <div className="text-4xl font-bold text-black mb-4">€895</div>
              <ul className="space-y-2 text-black">
                <li>✓ Alles van Starter</li>
                <li>✓ 8 pagina's</li>
                <li>✓ Extra widgets</li>
                <li>✓ 1 maand support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-yellow-500 mb-4">€1195</div>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Alles van Professional</li>
                <li>✓ 12 pagina's</li>
                <li>✓ Google Ads setup</li>
                <li>✓ Onbeperkte revisies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Neem <span className="text-yellow-500">Contact</span> Op
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Klaar om je digitale transformatie te starten?
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-mail</h3>
              <a href="mailto:hallo@webdeskai.com" className="text-yellow-500 font-bold text-lg">
                hallo@webdeskai.com
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Telefoon</h3>
              <a href="tel:+31645830810" className="text-yellow-500 font-bold text-lg">
                +31 6 45830810
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img 
            src="/WebDesnk AI.png" 
            alt="WebDesk AI" 
            className="h-12 w-auto mx-auto mb-4 filter brightness-0 invert"
          />
          <p className="text-gray-400">
            © 2024 WebDesk AI. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;