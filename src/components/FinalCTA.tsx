import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle, Sparkles, Clock, Shield, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden">
      {/* SVG flow transition from previous section */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-20 fill-current text-blue-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="white"></path>
        </svg>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center scroll-animate">
          {/* Header */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              KLAAR OM TE STARTEN?
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Laten we jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse">AI-website</span> bouwen
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Neem vandaag nog contact op en ontdek hoe onze AI-gedreven aanpak jouw bedrijf kan transformeren. 
            <strong className="text-blue-600"> Gratis adviesgesprek, geen verplichtingen.</strong>
          </p>

          {/* Main CTA */}
          <div className="mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:scale-110 relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center">
                <Sparkles className="w-8 h-8 mr-3 animate-spin-slow" />
                START JOUW AI-PROJECT NU
                <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-3 transition-transform duration-500" />
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 scroll-animate-left">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Bellen</h3>
              <p className="text-gray-600 mb-6">Heb je haast? Bel ons direct voor snelle hulp en advies</p>
              <a 
                href="tel:+31645830810" 
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                +31 6 45830810
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 scroll-animate-scale">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-mail Ons</h3>
              <p className="text-gray-600 mb-6">Stuur je vraag of projectdetails via e-mail</p>
              <a 
                href="mailto:hallo@webdeskai.com" 
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                hallo@webdeskai.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/20 scroll-animate-right">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp Chat</h3>
              <p className="text-gray-600 mb-6">Chat direct met ons via WhatsApp</p>
              <a 
                href="https://wa.me/31645830810" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-blue-500/20 scroll-animate">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-8 h-8 text-blue-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Binnen 24 uur</div>
                  <div className="text-gray-600 text-sm">Reactie gegarandeerd</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-8 h-8 text-blue-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">100% Garantie</div>
                  <div className="text-gray-600 text-sm">Tevredenheid verzekerd</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Zap className="w-8 h-8 text-blue-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">In 1 week live</div>
                  <div className="text-gray-600 text-sm">Snelle oplevering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-16 scroll-animate">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Klaar voor de AI-revolutie?</strong><br />
              Sluit je aan bij de 50+ bedrijven die al profiteren van onze AI-gedreven websites. 
              Neem vandaag nog contact op en ontdek wat mogelijk is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;