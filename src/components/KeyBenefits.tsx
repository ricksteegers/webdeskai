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
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 opacity-8">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full blur-2xl animate-drift-right opacity-60"></div>
        <div className="absolute bottom-32 left-32 w-56 h-56 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-2xl animate-float-gentle opacity-50"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-16 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl animate-bounce-slow opacity-40"></div>
        <div className="absolute bottom-16 right-1/3 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-xl animate-float-gentle-delayed opacity-45"></div>
      </div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-8">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, #F4C430 49%, #F4C430 51%, transparent 52%)`,
          backgroundSize: '100px 100px',
          opacity: 0.1
        }}></div>
        
        {/* Hexagon pattern */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          transform: 'rotate(15deg)',
          animation: 'spin-slow 30s linear infinite'
        }}></div>
      </div>

      {/* Floating particles and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60 shadow-lg"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-8 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 transform rotate-45 animate-float-gentle opacity-30"></div>
        <div className="absolute top-2/3 right-8 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-bounce-slow opacity-25"></div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 transform rotate-12 animate-drift-left opacity-35"></div>
        
        {/* Animated lines and curves */}
        <div className="absolute top-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-30 transform -rotate-45"></div>
        
        {/* Floating icons */}
        <div className="absolute top-16 right-16 opacity-15 animate-float-gentle">
          <Zap className="w-12 h-12 text-blue-500" />
        </div>
        <div className="absolute bottom-16 left-16 opacity-15 animate-float-gentle-delayed">
          <Shield className="w-10 h-10 text-green-500" />
        </div>
        <div className="absolute top-1/2 right-8 opacity-15 animate-bounce-slow">
          <Clock className="w-8 h-8 text-purple-500" />
        </div>
        
        {/* Spiral pattern */}
        <div className="absolute top-1/3 left-1/2 w-48 h-48 opacity-10 animate-spin-slow">
          <div className="w-full h-full border-2 border-dashed border-blue-400 rounded-full"></div>
          <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-purple-400 rounded-full"></div>
          <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-cyan-400 rounded-full"></div>
        </div>
        
        {/* Constellation effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
        
        {/* Connect the dots with animated lines */}
        <svg className="absolute top-1/4 left-1/4 w-64 h-64 opacity-20" viewBox="0 0 100 100">
          <line x1="10" y1="10" x2="30" y2="30" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2,2" className="animate-pulse" />
          <line x1="30" y1="30" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="0.5" strokeDasharray="2,2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="50" y1="50" x2="70" y2="30" stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="2,2" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
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