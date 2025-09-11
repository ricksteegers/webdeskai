import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Lightbulb, Palette, Rocket, MessageSquare, ArrowRight, Sparkles, Clock } from 'lucide-react';

const Process: React.FC = () => {
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

  const steps = [
    {
      icon: <MessageCircle className="w-12 h-12" />,
      number: "01",
      title: "Kennismaking",
      description: "We beginnen met een gedetailleerd gesprek om je bedrijf, doelen en ontwerpbehoeften te begrijpen.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      number: "02",
      title: "Kies je ontwerp",
      description: "Selecteer 3 websites die jou aanspreken, zodat wij deze kunnen gebruiken voor ons AI-gedreven algoritme.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      number: "03",
      title: "Ontwerpen & Creëren",
      description: "Wij brengen jouw visie tot leven met onze prompt engineers.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      number: "04",
      title: "Feedbackfase",
      description: "We presenteren het ontwerp en verwerken je feedback om alles perfect af te stemmen.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      number: "05",
      title: "Lancering",
      description: "We leveren je project aan binnen 1 week.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="pt-20 pb-32 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden scroll-animate">
        {/* Unique triangular transition from Benefits */}
        <div className="absolute top-0 left-0 right-0 -mt-1 z-10 scroll-animate-scale">
          <svg className="w-full h-28 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F7F3E9"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#F7F3E9" opacity=".7"></path>
          </svg>
        </div>

        {/* Background decorative elements */}
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
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                HOE WE WERKEN
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Binnen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse">5 stappen</span> live
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Onze AI-gedreven workflow stelt ons in staat om hoogwaardige websites sneller en betaalbaarder te leveren dan traditionele bureaus.
            </p>
            
            {/* Timeline indicator */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold text-gray-700">Van idee tot live website - in 1 week live</span>
              <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
            </div>
          </div>

          {/* Process Steps */}
          <div className="relative scroll-animate">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div key={index} className={`text-center group relative scroll-animate-scale`} style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Step connector arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-8 z-20">
                      <ArrowRight className="w-6 h-6 text-blue-500 animate-pulse" />
                    </div>
                  )}

                  <div className="relative mb-8">
                    {/* Animated background circle */}
                    <div className="absolute inset-0 w-28 h-28 mx-auto rounded-full bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse" 
                         style={{ backgroundImage: `linear-gradient(135deg, ${step.color.split(' ')[1]}, ${step.color.split(' ')[3]})` }}></div>
                    
                    {/* Main icon container */}
                    <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-110 border-4 border-white">
                      <div className={`text-white p-4 rounded-full bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-125 transition-transform duration-300 animate-bounce-slow">
                      {step.number}
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 left-0 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>

                  <div className="space-y-4 group-hover:transform group-hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base px-2">
                      {step.description}
                    </p>
                  </div>

                  {/* Step completion indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${step.color} rounded-full animate-pulse`} style={{ width: `${(index + 1) * 20}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
    </section>
  );
};

export default Process;