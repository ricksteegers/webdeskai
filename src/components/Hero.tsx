import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Sparkles, ArrowRight, Zap, Clock, Target, TrendingUp } from 'lucide-react';
import DesignIllustration from './DesignIllustration';

const Hero: React.FC = () => {
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

    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-rotate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen relative overflow-visible scroll-animate pt-0">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-3 scroll-animate-scale">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5 scroll-animate-rotate">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none scroll-animate">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating AI Tools spread across homepage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {/* Design Tools spread across the page */}
        <div className="absolute top-16 left-8 transform rotate-12 animate-float-gentle z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-4 w-20 h-20 ring-4 ring-blue-400/20 hover:ring-blue-500/40 hover:shadow-3xl hover:scale-150 hover:-translate-y-8 hover:translate-x-6 hover:rotate-45 transition-all duration-700 cursor-pointer backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-sm font-bold">PS</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-bold text-black">AI</span>
            </div>
          </div>
        </div>

        <div className="absolute top-16 right-12 transform -rotate-12 animate-drift-left z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-4 w-18 h-18 ring-4 ring-cyan-400/20 hover:ring-cyan-500/40 hover:shadow-3xl hover:scale-140 hover:-translate-y-10 hover:-translate-x-8 hover:-rotate-60 transition-all duration-800 cursor-pointer backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xs font-bold">NLP</span>
            </div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-4 transform rotate-6 animate-float-gentle-delayed z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-3 w-16 h-16 ring-4 ring-green-400/20 hover:ring-green-500/40 hover:shadow-3xl hover:scale-160 hover:-translate-y-12 hover:translate-x-10 hover:rotate-90 transition-all duration-900 cursor-pointer animate-float backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xs font-bold">FG</span>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-full animate-bounce-slow"></div>
          </div>
        </div>

        <div className="absolute top-24 right-32 transform rotate-8 animate-float-gentle z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-4 w-20 h-20 ring-4 ring-orange-400/20 hover:ring-orange-500/40 hover:shadow-3xl hover:scale-135 hover:-translate-y-9 hover:-translate-x-4 hover:rotate-90 transition-all duration-800 cursor-pointer animate-bounce-slow backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div className="absolute -top-1 -left-1 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute bottom-24 left-32 transform rotate-15 animate-float-gentle-delayed z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-4 w-24 h-24 ring-4 ring-indigo-400/20 hover:ring-indigo-500/40 hover:shadow-3xl hover:scale-130 hover:-translate-y-12 hover:translate-x-8 hover:rotate-180 transition-all duration-1100 cursor-pointer animate-float backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-[9px] font-bold">DALL-E</span>
            </div>
            <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="absolute top-8 md:top-48 left-1/2 transform -translate-x-1/2 rotate-3 animate-drift-right z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-4 w-20 h-20 ring-4 ring-rose-400/20 hover:ring-rose-500/40 hover:shadow-3xl hover:scale-150 hover:-translate-y-14 hover:translate-x-7 hover:-rotate-120 transition-all duration-750 cursor-pointer backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-[9px] font-bold">MIDJ</span>
            </div>
            <div className="absolute top-1 left-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-spin-slow"></div>
          </div>
        </div>

        <div className="absolute top-2/3 right-20 transform rotate-10 animate-drift-left z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-3 w-18 h-18 ring-4 ring-teal-400/20 hover:ring-teal-500/40 hover:shadow-3xl hover:scale-140 hover:-translate-y-7 hover:translate-x-10 hover:-rotate-90 transition-all duration-880 cursor-pointer animate-bounce-slow backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-[8px] font-bold">ADOBE</span>
            </div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-24 transform -rotate-8 animate-float-gentle z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-3 w-18 h-18 ring-4 ring-lime-400/20 hover:ring-lime-500/40 hover:shadow-3xl hover:scale-145 hover:-translate-y-12 hover:translate-x-6 hover:rotate-165 transition-all duration-900 cursor-pointer animate-float backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-[8px] font-bold">FRAMER</span>
            </div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-br from-lime-400 to-green-500 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-28 transform -rotate-5 animate-drift-right z-30 pointer-events-auto">
          <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl shadow-2xl p-4 w-20 h-20 ring-4 ring-sky-400/20 hover:ring-sky-500/40 hover:shadow-3xl hover:scale-135 hover:-translate-y-9 hover:translate-x-7 hover:rotate-105 transition-all duration-780 cursor-pointer animate-bounce-slow backdrop-blur-sm">
            <div className="w-full h-full bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-[9px] font-bold">LUMA</span>
            </div>
            <div className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10 pt-32 sm:pt-40 lg:pt-44">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 scroll-animate-left">
            {/* Enhanced Tagline */}
            <div className="flex items-center space-x-4 group justify-center lg:justify-start mx-auto lg:mx-0 max-w-fit">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400 group-hover:from-blue-400 transition-all duration-500 animate-pulse"></div>
              <span className="text-sm font-bold text-blue-600 tracking-wider uppercase bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 text-center border border-blue-100">
                Jouw AI partner voor de toekomst
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400 group-hover:from-blue-400 transition-all duration-500 animate-pulse"></div>
            </div>

            {/* Enhanced Main Headline */}
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="text-black">
                  AI-Gedreven
                </span>
                <br />
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Websites</span>
                  {/* Decorative underline */}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 animate-pulse"></div>
                </span>
              </h1>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 text-lg text-gray-700 max-w-lg">
              <p className="font-semibold text-lg sm:text-xl text-gray-800">
                Hoogwaardige websites gemaakt door AI-experts.
              </p>
              <p className="leading-relaxed">
                Onze AI-expertise maakt premium website ontwikkeling mogelijk tegen
                <span className="font-bold text-blue-600"> aanzienlijk lagere prijzen</span> dan traditionele bureaus.
              </p>
              <div className="flex items-center space-x-6 text-base">
                <div className="flex items-center text-sm sm:text-base">
                  <Clock className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-semibold">In 1 week live</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <Target className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="font-semibold">Geen hoge kosten</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">
                <TrendingUp className="w-5 h-5 text-blue-500 inline mr-2" />
                Geen compromissen op kwaliteit.
              </p>
            </div>

            {/* Enhanced CTA and Pricing */}
            <div className="space-y-6">
              {/* Main CTA */}
              <Link 
                to="/contact"
                className="group inline-flex items-center bg-blue-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-semibold text-sm sm:text-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center">
                Plan een gesprek
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>

              {/* Enhanced Pricing Display */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-soft border border-blue-100 max-w-xs md:max-w-md ml-auto md:ml-0 lg:mr-auto lg:ml-0">
                <div className="flex items-center justify-between text-sm md:text-base">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <span className="text-lg md:text-2xl font-bold text-gray-400 line-through">€2.000</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-0.5 bg-red-500 transform rotate-12"></div>
                        <div className="absolute w-full h-0.5 bg-red-500 transform -rotate-12"></div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                    <div className="text-4xl font-bold text-black">
                      <span className="text-2xl md:text-4xl text-blue-600">€695</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs md:text-sm text-blue-500 italic font-medium">dankzij AI</div>
                    <div className="text-sm md:text-lg font-bold text-green-600">65% besparing</div>
                  </div>
                </div>
                
                {/* Value indicators */}
                <div className="mt-3 md:mt-4 grid grid-cols-3 gap-1 md:gap-2 text-xs">
                  <div className="text-center bg-green-50 rounded-lg py-1 md:py-2">
                    <div className="font-bold text-green-600">Binnen 1 week</div>
                    <div className="text-gray-600 text-[10px] md:text-xs">live</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-lg py-1 md:py-2">
                    <div className="font-bold text-blue-500">100%</div>
                    <div className="text-gray-600 text-[10px] md:text-xs">AI-gedreven</div>
                  </div>
                  <div className="text-center bg-purple-50 rounded-lg py-1 md:py-2">
                    <div className="font-bold text-blue-500">Premium</div>
                    <div className="text-gray-600 text-[10px] md:text-xs">kwaliteit</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>Geen vooruitbetaling</span>
                </div>
                <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>100% tevredenheidsgarantie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Design Illustration */}
          <div className="relative scroll-animate-right">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <DesignIllustration />
            </div>
            
            {/* Additional floating elements around illustration */}
            <div className="absolute inset-0 pointer-events-none scroll-animate-scale">
              <div className="absolute top-4 left-4 w-6 h-6 bg-[#F4C430]/20 rounded-full animate-float-gentle"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-orange-400/20 rounded-full animate-float-gentle-delayed"></div>
              <div className="absolute bottom-4 left-8 w-3 h-3 bg-purple-400/20 rounded-full animate-drift-left"></div>
              <div className="absolute bottom-8 right-4 w-8 h-8 bg-pink-400/20 rounded-full animate-drift-right"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center scroll-animate">
          <div className="bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden max-w-4xl mx-auto">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-3xl transform rotate-1"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-500 animate-spin-slow mr-2" />
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Klaar voor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">AI-revolutie</span>?
                </h3>
                <Sparkles className="w-6 h-6 text-blue-500 animate-spin-slow ml-2" />
              </div>
              
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Laat ons bewijzen waarom steeds meer bedrijven kiezen voor onze AI-gedreven aanpak.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/contact"
                  className="group bg-transparent border-2 border-blue-500 text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  Gratis adviesgesprek
                </Link>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="font-semibold text-sm">In 1 week live</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-500 text-sm">65% goedkoper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New curved transition to Services */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z" fill="white"></path>
        </svg>
      </div>

    </section>
    </>
  );
};

export default Hero;