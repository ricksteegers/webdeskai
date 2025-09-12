import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ShoppingCart, Smartphone, Check, ArrowRight, Zap } from 'lucide-react';

const ProductHighlight: React.FC = () => {
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

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Websites",
      description: "Moderne, responsieve websites die je merk perfect representeren",
      features: ["Responsive design", "SEO geoptimaliseerd", "Snelle laadtijden"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Webshops",
      description: "Krachtige e-commerce oplossingen die verkopen stimuleren",
      features: ["Betalingsintegratie", "Voorraadbeheersysteem", "Conversie optimalisatie"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Webapps",
      description: "Geavanceerde webapplicaties voor complexe bedrijfsprocessen",
      features: ["Custom functionaliteit", "Database integratie", "API koppelingen"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "€695",
      originalPrice: "€2000",
      description: "Perfect voor kleine bedrijven",
      features: [
        "Premium design",
        "4 pagina's gevuld",
        ".nl domeinnaam inbegrepen",
        "100% jouw eigendom",
        "Responsive design",
        "Basis SEO optimalisatie"
      ],
      popular: false
    },
    {
      name: "Professioneel",
      price: "€895",
      originalPrice: "€3000",
      description: "Ideaal voor groeiende bedrijven",
      features: [
        "Alles van Starter",
        "Tot 8 pagina's gevuld",
        "Extra widgets & functies",
        "3 rondes revisies",
        "1 maand gratis support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "€1195",
      originalPrice: "€4500",
      description: "Voor grote teams en bureaus",
      features: [
        "Alles van Professional",
        "Tot 12 pagina's gevuld",
        "Google Ads setup",
        "€100 korting marketing",
        "Onbeperkte revisies"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* ULTRA CREATIVE FLOATING AI UNIVERSE */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Massive Floating AI Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-float-gentle transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-400 via-teal-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-35 animate-float-gentle-delayed transform -rotate-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-400 via-red-500 via-pink-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-drift-left transform rotate-90"></div>
        
        {/* Floating AI Tool Icons */}
        <div className="absolute top-20 left-20 transform rotate-12 animate-float-gentle z-20">
          <div className="group bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-6 w-24 h-24 ring-4 ring-cyan-400/30 hover:ring-cyan-500/60 hover:scale-150 transition-all duration-700 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-32 transform -rotate-15 animate-drift-right z-20">
          <div className="group bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-6 w-28 h-28 ring-4 ring-purple-400/30 hover:ring-purple-500/60 hover:scale-140 transition-all duration-800 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">GPT</span>
            </div>
          </div>
        </div>


      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Services Highlight */}
        <div className="mb-20">
          <div className="text-center mb-16 scroll-animate">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-gray-50 px-4 py-2 rounded-full shadow-lg">
                ONZE DIENSTEN
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              AI-gedreven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">oplossingen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van websites tot webshops en complexe webapplicaties - alles mogelijk met AI-technologie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden scroll-animate-scale`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
                
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10 mx-auto">
                    <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Visual Mockup */}
          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-animate">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Zie het verschil van <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">AI-design</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Onze AI-technologie analyseert duizenden succesvolle websites om het perfecte design 
                voor jouw bedrijf te creëren. Het resultaat? Unieke, moderne websites die converteren.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">Unieke designs op basis van AI-analyse</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">Geoptimaliseerd voor conversie en gebruikerservaring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">Volledig responsive en toekomstbestendig</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/Before copy.png"
                alt="AI Website Design Showcase" 
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Before/After Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-blue-500/30">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Before section */}
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-md sm:rounded-lg flex items-center justify-center mb-1 sm:mb-2 shadow-lg">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="9" cy="9" r="2"/>
                          <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                        </svg>
                      </div>
                      <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700">BEFORE</span>
                      <div className="text-[6px] sm:text-[8px] md:text-[10px] text-red-600 font-medium">Verouderd</div>
                    </div>
                    
                    {/* Transformation arrow */}
                    <div className="flex flex-col items-center">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-blue-500 mt-0.5 sm:mt-1 bg-blue-50 px-1 py-0.5 rounded-full">AI</span>
                    </div>
                    
                    {/* After section */}
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md sm:rounded-lg flex items-center justify-center mb-1 sm:mb-2 shadow-lg">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10,9 9,9 8,9"/>
                        </svg>
                      </div>
                      <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700">AFTER</span>
                      <div className="text-[6px] sm:text-[8px] md:text-[10px] text-green-600 font-medium">Modern</div>
                    </div>
                  </div>
                  
                  {/* Subtitle */}
                  <div className="text-center mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-gray-200">
                    <div className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-800">AI-Powered</div>
                    <div className="text-[6px] sm:text-[8px] md:text-[10px] text-blue-600 font-medium">Design Engine</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-500/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-transparent to-cyan-500/25"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/20 via-transparent to-orange-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-indigo-500/15"></div>
                
                {/* Enhanced animated scan lines */}
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse shadow-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse shadow-md" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                {/* Enhanced floating particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-80 shadow-2xl"></div>
                  <div className="absolute top-12 right-12 w-5 h-5 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-ping opacity-70 shadow-xl" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-8 left-12 w-7 h-7 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-ping opacity-75 shadow-xl" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-12 right-8 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-ping opacity-60 shadow-2xl" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-1/2 left-6 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping opacity-85 shadow-lg" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/3 right-6 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-ping opacity-75 shadow-xl" style={{ animationDelay: '2.5s' }}></div>
                  <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-70 shadow-md" style={{ animationDelay: '3s' }}></div>
                  <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-ping opacity-65 shadow-lg" style={{ animationDelay: '3.5s' }}></div>
                </div>
                
                {/* Enhanced corner accents with complex animations */}
                <div className="absolute top-6 left-6 w-12 h-12 border-4 border-blue-400/70 rounded-full animate-spin-slow shadow-2xl bg-blue-400/10 backdrop-blur-sm"></div>
                <div className="absolute top-6 right-6 w-10 h-10 border-3 border-cyan-400/70 rounded-full animate-spin-slow shadow-xl bg-cyan-400/10 backdrop-blur-sm" style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute bottom-6 left-6 w-14 h-14 border-4 border-purple-400/70 rounded-full animate-bounce-slow shadow-2xl bg-purple-400/10 backdrop-blur-sm"></div>
                <div className="absolute bottom-6 right-6 w-11 h-11 border-3 border-pink-400/70 rounded-full animate-float-gentle shadow-xl bg-pink-400/10 backdrop-blur-sm"></div>
                
                {/* Additional geometric shapes */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-orange-400/30 to-red-400/30 transform rotate-45 animate-float-gentle shadow-lg"></div>
                <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full animate-bounce-slow shadow-md"></div>
                <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-indigo-400/30 to-violet-400/30 transform rotate-12 animate-drift-left shadow-lg" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                
                {/* Enhanced Before/After Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-blue-500/30 animate-bounce-slow">
                    <div className="flex items-center space-x-6">
                      {/* Before section */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                          </svg>
                        </div>
                        <span className="text-sm font-bold text-gray-700">BEFORE</span>
                        <div className="text-xs text-red-600 font-medium">Verouderd</div>
                      </div>
                      
                      {/* Transformation arrow */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse shadow-xl">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-blue-500 mt-2 bg-blue-50 px-2 py-1 rounded-full">AI</span>
                      </div>
                      
                      {/* After section */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14,2 14,8 20,8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10,9 9,9 8,9"/>
                          </svg>
                        </div>
                        <span className="text-sm font-bold text-gray-700">AFTER</span>
                        <div className="text-xs text-green-600 font-medium">Modern</div>
                      </div>
                    </div>
                    
                    {/* Subtitle */}
                    <div className="text-center mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm font-bold text-gray-800">AI-Powered</div>
                      <div className="text-xs text-blue-600 font-medium">Design Engine</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Before/After Labels */}
                <div className="absolute top-1/4 left-8 bg-red-500/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl font-bold text-lg shadow-2xl border-2 border-white/40">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white rounded-full mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">BEFORE</div>
                      <div className="text-xs opacity-90">Verouderd design</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced AI Technology Badge */}
                <div className="absolute bottom-1/4 right-8 bg-green-500/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl font-bold text-lg shadow-2xl border-2 border-white/40">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white rounded-full mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">AFTER</div>
                      <div className="text-xs opacity-90">AI-gedreven</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating tech icons */}
                <div className="absolute bottom-8 left-8 bg-white/98 backdrop-blur-md rounded-2xl p-5 shadow-2xl border-2 border-white/70 animate-float-gentle">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">Powered</span>
                  </div>
                </div>
                
                {/* Enhanced performance indicators */}
                <div className="absolute bottom-8 right-8 bg-white/98 backdrop-blur-md rounded-2xl p-5 shadow-2xl border-2 border-white/70 animate-float-gentle-delayed">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg flex items-center justify-center">
                    </div>
                    <span className="text-xs font-semibold text-gray-700">Live in 1 week</span>
                  </div>
                </div>
                
                {/* Holographic grid effect */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
                    linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
                  backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px'
                }}>
                </div>
                
                {/* Neural network connections */}
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated neural connections */}
                  <line x1="50" y1="50" x2="150" y2="100" stroke="url(#connectionGradient1)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse">
                    <animate attributeName="stroke-dashoffset" values="0;12;0" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="150" y1="100" x2="250" y2="75" stroke="url(#connectionGradient2)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse">
                    <animate attributeName="stroke-dashoffset" values="0;12;0" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="75" x2="350" y2="150" stroke="url(#connectionGradient1)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse">
                    <animate attributeName="stroke-dashoffset" values="0;12;0" dur="4s" repeatCount="indefinite" />
                  </line>
                  
                  {/* Neural nodes */}
                  <circle cx="50" cy="50" r="6" fill="#06B6D4" className="animate-pulse">
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="100" r="8" fill="#8B5CF6" className="animate-pulse">
                    <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="250" cy="75" r="5" fill="#F59E0B" className="animate-pulse">
                    <animate attributeName="r" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="350" cy="150" r="7" fill="#10B981" className="animate-pulse">
                    <animate attributeName="r" values="7;11;7" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                </svg>
                
                {/* Data flow indicators */}
                <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm rounded-lg p-2 border border-blue-400/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <span className="text-xs font-bold text-blue-700">DATA IN</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-lg p-2 border border-green-400/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-xs font-bold text-green-700">RESULT OUT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="scroll-animate">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Kies jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">pakket</span>
            </h3>
            <p className="text-xl text-gray-600">
              Transparante prijzen, geen verborgen kosten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 ${
                  pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl">
                      MEEST POPULAIR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span className="text-4xl font-bold text-blue-500">{pkg.price}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {Math.round((1 - parseInt(pkg.price.replace('€', '')) / parseInt(pkg.originalPrice.replace('€', ''))) * 100)}% besparing
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Kies {pkg.name}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Niet zeker welk pakket het beste bij je past?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent border-2 border-blue-500 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Vraag gratis advies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductHighlight;