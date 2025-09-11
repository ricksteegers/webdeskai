import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ShoppingCart, Smartphone, Search, Palette, Zap, Sparkles, ArrowRight, Clock, Target, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Websites",
      description: "Moderne, responsieve websites die je merk perfect representeren en bezoekers omzetten.",
      color: "from-blue-500 to-cyan-500",
      features: ["Responsive design", "SEO geoptimaliseerd", "Snelle laadtijden"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Webshops",
      description: "Krachtige e-commerce oplossingen die verkopen stimuleren en klanten behouden.",
      color: "from-green-500 to-emerald-500",
      features: ["Betalingsintegratie", "Voorraadbeheersysteem", "Conversie optimalisatie"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Webapps",
      description: "Geavanceerde webapplicaties die complexe bedrijfsprocessen automatiseren.",
      color: "from-purple-500 to-indigo-500",
      features: ["Custom functionaliteit", "Database integratie", "API koppelingen"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Online marketing",
      description: "Strategische campagnes op Google en Meta platforms voor maximale zichtbaarheid.",
      color: "from-orange-500 to-red-500",
      features: ["Google Ads", "Social media", "Analytics & tracking"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "AI design",
      description: "Innovatieve ontwerpen gemaakt met de nieuwste AI-technologieën voor unieke resultaten.",
      color: "from-pink-500 to-rose-500",
      features: ["AI-gegenereerde designs", "Unieke visuele identiteit", "Snelle iteraties"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI automatisering",
      description: "Slimme automatisering die repetitieve taken overneemt en efficiëntie verhoogt.",
      color: "from-yellow-500 to-amber-500",
      features: ["Workflow automatisering", "Chatbots", "Data processing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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

        <div className="absolute bottom-32 left-32 transform rotate-20 animate-bounce-slow z-20">
          <div className="group bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-6 w-26 h-26 ring-4 ring-emerald-400/30 hover:ring-emerald-500/60 hover:scale-160 transition-all duration-900 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">ML</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-20 transform -rotate-8 animate-float-gentle-delayed z-20">
          <div className="group bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-6 w-22 h-22 ring-4 ring-orange-400/30 hover:ring-orange-500/60 hover:scale-130 transition-all duration-750 cursor-pointer">
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">API</span>
            </div>
          </div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute top-40 left-40 transform rotate-6 animate-drift-left z-20">
          <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-cyan-500/30 hover:scale-110 transition-all duration-500">
            <div className="text-cyan-400 text-xs font-mono">
              <div className="text-green-400">// AI Design</div>
              <div>const design = ai.create()</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 right-40 transform -rotate-10 animate-float-gentle z-20">
          <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-purple-500/30 hover:scale-110 transition-all duration-500">
            <div className="text-purple-400 text-xs font-mono">
              <div className="text-pink-400">/* Neural Network */</div>
              <div>model.predict(input)</div>
            </div>
          </div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-60 left-60 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 animate-spin-slow opacity-60 shadow-2xl"></div>
        <div className="absolute bottom-60 right-60 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce-slow opacity-50 shadow-2xl"></div>
        <div className="absolute top-80 right-80 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 transform rotate-12 animate-float-gentle opacity-70 shadow-xl" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
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
          <line x1="100" y1="100" x2="300" y2="200" stroke="url(#connectionGradient1)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="0;15;0" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="200" x2="500" y2="150" stroke="url(#connectionGradient2)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="0;15;0" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="500" y1="150" x2="700" y2="300" stroke="url(#connectionGradient1)" strokeWidth="3" strokeDasharray="10,5" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="0;15;0" dur="4s" repeatCount="indefinite" />
          </line>
          
          {/* Neural nodes */}
          <circle cx="100" cy="100" r="8" fill="#06B6D4" className="animate-pulse">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="200" r="10" fill="#8B5CF6" className="animate-pulse">
            <animate attributeName="r" values="10;15;10" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="500" cy="150" r="6" fill="#F59E0B" className="animate-pulse">
            <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-20 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 left-30 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 right-10 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-0 right-20 w-1 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-80 shadow-2xl"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60 shadow-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-16 w-5 h-5 bg-emerald-400 rounded-full animate-ping opacity-70 shadow-xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-400 rounded-full animate-ping opacity-50 shadow-2xl" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-60 left-60 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-75 shadow-lg" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-60 right-60 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-65 shadow-xl" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100px 100px, 100px 100px',
          backgroundPosition: '0 0, 0 0, 25px 25px, 25px 25px'
        }}>
        </div>

        {/* Floating Service Icons in Background */}
        <div className="absolute top-16 left-16 transform rotate-15 animate-float-gentle opacity-20 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <Monitor className="w-16 h-16 text-white" />
          </div>
        </div>

        <div className="absolute top-16 right-16 transform -rotate-12 animate-drift-right opacity-20 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <ShoppingCart className="w-16 h-16 text-white" />
          </div>
        </div>

        <div className="absolute bottom-16 left-16 transform rotate-18 animate-bounce-slow opacity-20 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500/40 to-indigo-500/40 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <Smartphone className="w-16 h-16 text-white" />
          </div>
        </div>

        <div className="absolute bottom-16 right-16 transform -rotate-20 animate-float-gentle-delayed opacity-20 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-500/40 to-red-500/40 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <Search className="w-16 h-16 text-white" />
          </div>
        </div>

        <div className="absolute top-1/2 left-8 transform rotate-25 animate-drift-left opacity-20 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-500/40 to-rose-500/40 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <Palette className="w-16 h-16 text-white" />
          </div>
        </div>

        <div className="absolute top-1/2 right-8 transform -rotate-22 animate-float-gentle opacity-20 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-500/40 to-amber-500/40 rounded-3xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
            <Zap className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Holographic Data Streams */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-2 h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-3/4 w-2 h-full bg-gradient-to-b from-transparent via-pink-400/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating Binary Code */}
        <div className="absolute top-24 left-1/3 transform rotate-3 animate-drift-right opacity-30 z-10">
          <div className="bg-black/60 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-cyan-500/30">
            <div className="text-cyan-400 text-xs font-mono">
              01001001 01000001
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 right-1/3 transform -rotate-5 animate-float-gentle opacity-30 z-10">
          <div className="bg-black/60 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-purple-500/30">
            <div className="text-purple-400 text-xs font-mono">
              &lt;AI/&gt; DESIGN
            </div>
          </div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-cyan-400 rounded-full animate-pulse opacity-60 shadow-2xl blur-sm"></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-70 shadow-xl blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-pink-400 rounded-full animate-pulse opacity-50 shadow-2xl blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400 animate-pulse"></div>
            <span className="text-sm font-bold text-cyan-300 tracking-wider uppercase bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-cyan-400/30">
              ONZE DIENSTEN
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-400 animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            AI-gedreven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">oplossingen</span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
            Onze AI-expertise stelt ons in staat om premium websites en digitale ervaringen
            te leveren voor een fractie van traditionele kosten, zonder kwaliteit of creativiteit op te offeren.
          </p>
          
          {/* Key benefits showcase */}
          <div className="flex items-center justify-center mt-8 space-x-4 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-pulse">6</div>
              <div className="text-xs sm:text-sm text-cyan-200">AI-Services</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-pulse">100%</div>
              <div className="text-xs sm:text-sm text-cyan-200">AI-Gedreven</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-pulse">1 week</div>
              <div className="text-xs sm:text-sm text-cyan-200">Live</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20 overflow-hidden ${index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'}`}
            >
              {/* Animated gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color} rounded-t-3xl group-hover:h-4 transition-all duration-300`}></div>
              
              {/* Enhanced icon with animations */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} opacity-30 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 absolute`}></div>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl relative z-10 border border-white/30">
                  <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-cyan-100 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-cyan-200">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Progress indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center scroll-animate-scale">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl transform rotate-1"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-float-gentle"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400/30 rounded-full animate-float-gentle-delayed"></div>
              <div className="absolute bottom-4 left-8 w-4 h-4 bg-pink-400/30 rounded-full animate-drift-left"></div>
              <div className="absolute bottom-8 right-4 w-10 h-10 bg-orange-400/30 rounded-full animate-drift-right"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-cyan-400 animate-spin-slow mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI-gedreven</span> websites
                </h3>
                <TrendingUp className="w-8 h-8 text-cyan-400 animate-bounce-slow ml-3" />
              </div>
              
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Steeds meer bedrijven kiezen voor onze AI-gedreven aanpak. Bespaar kosten en ga voor premium design.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border-2 border-cyan-400 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-bold text-sm sm:text-lg hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400 hover:text-black transition-all duration-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 hover:scale-110 backdrop-blur-xl relative overflow-hidden animate-pulse"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {/* Animated background layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 animate-pulse"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-2 right-8 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
                  
                  <div className="relative z-10 flex items-center">
                    <span className="hidden sm:inline flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                      ONTDEK ONZE SERVICES
                      <span className="w-2 h-2 bg-purple-400 rounded-full ml-3 animate-pulse"></span>
                    </span>
                    <span className="sm:hidden flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                      SERVICES
                      <span className="w-2 h-2 bg-purple-400 rounded-full ml-2 animate-pulse"></span>
                    </span>
                  </div>
                </Link>

                <div className="flex items-center space-x-4 text-cyan-200">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                    <span className="font-semibold text-xs sm:text-base">In 1 week live</span>
                  </div>
                  <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="font-semibold text-cyan-400 text-xs sm:text-base">Geen verplichtingen</span>
                  </div>
                </div>
              </div>

              {/* Service highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Monitor className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-sm font-medium text-white">Websites & Webshops</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Palette className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-sm font-medium text-white">AI Design & Marketing</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Smartphone className="w-5 h-5 text-cyan-400 mr-2" />
                  <span className="text-sm font-medium text-white">Custom Webapps</span>
                </div>
              </div>

              {/* Enhanced comparison section */}
              <div className="mt-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-4 border border-cyan-400/30 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-cyan-100">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="font-semibold text-sm sm:text-base">Traditionele bureaus: €2000+ en 4-6 weken</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                    <span className="font-bold text-cyan-400 text-sm sm:text-base">WebDesk AI: €695 en 1 week</span>
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;