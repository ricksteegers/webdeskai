import React, { useEffect } from 'react';
import { Clock, DollarSign, Zap, Shield, Users } from 'lucide-react';

const KeyBenefits: React.FC = () => {
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

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Live binnen 1 week",
      description: "Van concept tot live website in slechts 7 dagen dankzij AI-automatisering",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "65% Kostenbesparing",
      description: "Premium kwaliteit websites voor een fractie van traditionele prijzen",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-gedreven Design",
      description: "Geavanceerde AI-technologie voor unieke en moderne ontwerpen",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Eigendom",
      description: "Volledig gecodeerde websites zonder technische beperkingen",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Persoonlijke Service",
      description: "Directe communicatie en ondersteuning tijdens het hele proces",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-gray-50 px-4 py-2 rounded-full shadow-lg">
              WAAROM WEBDESK AI
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Kernvoordelen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ontdek waarom steeds meer bedrijven kiezen voor onze revolutionaire AI-gedreven aanpak
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-gray-100 overflow-hidden scroll-animate-scale`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Enhanced icon with animations */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} opacity-20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 absolute`}></div>
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                  <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 scroll-animate">
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
            <div className="text-gray-600">Projecten</div>
          </div>
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-gray-600">Tevreden</div>
          </div>
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500 mb-2">4.9</div>
            <div className="text-gray-600">Rating</div>
          </div>
          <div className="text-center bg-gray-50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500 mb-2">1 week</div>
            <div className="text-gray-600">Live</div>
          </div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="rgb(249 250 251)"></path>
        </svg>
      </div>
    </section>
  );
};

export default KeyBenefits;