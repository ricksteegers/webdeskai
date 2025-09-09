import React from 'react';
import { useEffect } from 'react';
import { Clock, DollarSign, Zap, Shield, Users, Sparkles, HeadphonesIcon, Gauge, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Benefits: React.FC = () => {
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

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Live binnen 1 week",
      description: "Van concept tot live website in slechts 1 week. Onze AI-gedreven workflow zorgt voor ongekende snelheid.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "65% Kostenbesparing",
      description: "Premium kwaliteit websites voor 65% minder dan traditionele bureaus dankzij AI-automatisering.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Schaalbaar",
      description: "Je website is volledig gecodeerd, waardoor hij toekomstbestendig is en geen technische beperkingen heeft voor groei.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Toekomstbestendig",
      description: "Ontwerpen die jaren meegaan en automatisch meebewegen met de nieuwste design trends dankzij AI.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Volledige ondersteuning",
      description: "Ondersteuning en begeleiding bij elke stap, zodat je website altijd optimaal functioneert.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Snelle laadtijd",
      description: "Dankzij efficiënt gecodeerde websites laden pagina's razendsnel, voor een betere gebruikerservaring en hogere conversies.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden scroll-animate">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 opacity-10 z-10 scroll-animate-rotate">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5 scroll-animate-scale">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                WAAROM WEBDESK AI
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Voordelen van <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500 animate-pulse">AI developers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ontdek waarom steeds meer bedrijven kiezen voor onze revolutionaire AI-gedreven aanpak
            </p>
            
            {/* Key stats */}
            <div className="flex flex-row items-center justify-center mt-8 space-x-4 sm:space-x-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F4C430] animate-pulse">65%</div>
                <div className="text-xs sm:text-sm text-gray-600">Goedkoper</div>
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F4C430] animate-pulse">1 week</div>
                <div className="text-xs sm:text-sm text-gray-600">Live</div>
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#F4C430] animate-pulse">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">AI-gedreven</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-white/20 overflow-hidden scroll-animate-scale`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
                
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} opacity-20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 absolute`}></div>
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                    <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F4C430] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Progress indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${benefit.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }}></div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center scroll-animate">
            <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30 relative overflow-hidden">
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

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-[#F4C430] animate-spin-slow mr-3" />
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">Start vandaag</span> nog
                  </h3>
                  <Sparkles className="w-8 h-8 text-[#F4C430] animate-spin-slow ml-3" />
                </div>
                
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Geen limieten in schaalbaarheid, volledig gecodeerd.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    to="/contact"
                    className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-6 py-3 sm:px-10 sm:py-5 rounded-full font-semibold text-sm sm:text-lg hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-110 flex items-center backdrop-blur-sm relative overflow-hidden"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-center">
                    START JOUW PROJECT
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-500 text-[#F4C430] group-hover:text-black" />
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-[#F4C430] rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 right-4 w-1 h-1 bg-[#F4C430] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </Link>

                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[#F4C430] mr-2" />
                      <span className="font-semibold">In 1 week live</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="flex items-center">
                      <span className="font-semibold text-[#F4C430]">65% goedkoper</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced trust indicators */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Geen vooruitbetaling</span>
                  </div>
                  <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Onbeperkte revisies</span>
                  </div>
                  <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">100% tevredenheidsgarantie</span>
                  </div>
                </div>

                {/* Additional value proposition */}
                <div className="mt-8 p-6 bg-gradient-to-r from-[#F4C430]/10 to-orange-500/10 rounded-2xl border border-[#F4C430]/20">
                  <div className="flex items-center justify-center space-x-4 text-gray-700">
                    <Zap className="w-6 h-6 text-[#F4C430]" />
                    <span className="font-semibold">Traditionele bureaus: €2000+ en 4-6 weken</span>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                    <span className="font-bold text-[#F4C430]">WebDesk AI: €695 en 1 week</span>
                    <Sparkles className="w-6 h-6 text-[#F4C430]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Benefits;