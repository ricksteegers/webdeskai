import React, { useEffect } from 'react';
import { Clock, DollarSign, Zap, Shield, Sparkles } from 'lucide-react';

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
      icon: <Clock className="w-12 h-12" />,
      title: "Live binnen 1 week",
      description: "Van concept tot live website in slechts 1 week",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "65% kostenbesparing",
      description: "Premium kwaliteit voor 65% minder dan traditionele bureaus",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI-gedreven",
      description: "Gebruik van de nieuwste AI-technologie voor optimale resultaten",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% eigendom",
      description: "Volledige eigendom van je website, geen maandelijkse kosten",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Premium kwaliteit",
      description: "Enterprise-level websites zonder het enterprise budget",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              WAAROM WEBDESK AI
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Jouw voordelen op een <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">rijtje</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20 overflow-hidden text-center scroll-animate-scale`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
              
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                  <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#F4C430] transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {benefit.description}
              </p>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default KeyBenefits;