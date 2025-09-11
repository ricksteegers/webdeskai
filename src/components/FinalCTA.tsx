import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, Shield, Zap, Phone, Mail } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F4C430] via-orange-400 to-red-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#F4C430] rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-3xl transform rotate-1"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-8 bg-[#F4C430]/20 rounded-full animate-float-gentle"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-orange-400/20 rounded-full animate-float-gentle-delayed"></div>
            <div className="absolute bottom-4 left-8 w-4 h-4 bg-purple-400/20 rounded-full animate-drift-left"></div>
            <div className="absolute bottom-8 right-4 w-10 h-10 bg-pink-400/20 rounded-full animate-drift-right"></div>
          </div>

          <div className="relative z-10 text-center">
            {/* Header */}
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-10 h-10 text-[#F4C430] animate-spin-slow mr-4" />
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Klaar voor je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">AI-website</span>?
              </h2>
              <Sparkles className="w-10 h-10 text-[#F4C430] animate-spin-slow ml-4" />
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Sluit je aan bij 50+ tevreden klanten die al de voordelen van AI-gedreven webdesign ervaren. 
              <strong className="text-[#F4C430]"> Binnen 1 week heb jij ook een premium website!</strong>
            </p>

            {/* Key Benefits Recap */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="w-12 h-12 text-[#F4C430] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Binnen 1 week live</h3>
                <p className="text-gray-600">Geen maandenlange wachttijden</p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Shield className="w-12 h-12 text-[#F4C430] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">65% goedkoper</h3>
                <p className="text-gray-600">Premium kwaliteit, betaalbare prijs</p>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Zap className="w-12 h-12 text-[#F4C430] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% eigendom</h3>
                <p className="text-gray-600">Geen maandelijkse kosten</p>
              </div>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 mb-12">
              <Link 
                to="/contact"
                className="group bg-transparent border-3 border-[#F4C430] text-gray-800 px-12 py-6 rounded-full font-bold text-xl hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:scale-110 backdrop-blur-sm relative overflow-hidden"
                onClick={() => window.scrollTo(0, 0)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-center">
                  <Sparkles className="w-7 h-7 mr-4 group-hover:rotate-180 transition-transform duration-500 text-[#F4C430] group-hover:text-black" />
                  START JOUW PROJECT
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-3 transition-transform duration-500 text-[#F4C430] group-hover:text-black" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-[#F4C430] rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-[#F4C430] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </Link>

              <div className="text-center lg:text-left">
                <p className="text-gray-600 mb-4 text-lg">Of neem direct contact op:</p>
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <a 
                    href="tel:+31645830810"
                    className="group flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 text-[#F4C430] mr-3 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold text-gray-700 group-hover:text-[#F4C430] transition-colors duration-300">+31 6 45830810</span>
                  </a>
                  
                  <a 
                    href="mailto:hallo@webdeskai.com"
                    className="group flex items-center bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <Mail className="w-5 h-5 text-[#F4C430] mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-gray-700 group-hover:text-[#F4C430] transition-colors duration-300">hallo@webdeskai.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Final Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-3 shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Gratis advies</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-3 shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Geen vooruitbetaling</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-3 shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">100% garantie</span>
              </div>
              <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-3 shadow-md">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">4.9/5 sterren</span>
              </div>
            </div>

            {/* Final Urgency Message */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#F4C430]/10 to-orange-500/10 rounded-2xl border-2 border-[#F4C430]/20">
              <p className="text-lg text-gray-700">
                <strong className="text-[#F4C430]">Laatste kans:</strong> Bespaar €1305 op je website deze maand. 
                <br className="hidden sm:block" />
                <strong>Neem vandaag nog contact op en ga morgen al van start!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;