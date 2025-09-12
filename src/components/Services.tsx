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
      {/* White fade effect at top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-40 pointer-events-none"></div>
      
      {/* White fade effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-40 pointer-events-none"></div>
      
      {/* Additional bottom fade for smoother transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-39 pointer-events-none"></div>
      
      {/* ULTRA CREATIVE FLOATING AI UNIVERSE */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Massive Floating AI Orbs with enhanced complexity */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-float-gentle transform rotate-45"></div>
        <div className="absolute bottom-10 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-emerald-400 via-teal-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-45 animate-float-gentle-delayed transform -rotate-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-400 via-red-500 via-pink-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-drift-left transform rotate-90"></div>
        
        {/* Additional layered orbs for depth */}
        <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-br from-violet-400 via-indigo-500 to-blue-600 rounded-full blur-2xl opacity-35 animate-drift-right transform rotate-60"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-float-gentle transform -rotate-45"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-full blur-xl opacity-40 animate-bounce-slow transform rotate-30"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 rounded-full blur-xl opacity-35 animate-float-gentle-delayed transform -rotate-60"></div>
        
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
          {/* Enhanced matrix rain with more streams */}
          <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-16 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-0 left-24 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-0 left-32 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-0 left-40 w-1 h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-0 left-48 w-1 h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-0 right-8 w-1 h-full bg-gradient-to-b from-transparent via-violet-400 to-transparent animate-pulse" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-0 right-16 w-1 h-full bg-gradient-to-b from-transparent via-rose-400 to-transparent animate-pulse" style={{ animationDelay: '2.1s' }}></div>
          <div className="absolute top-0 right-24 w-1 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse" style={{ animationDelay: '2.4s' }}></div>
          <div className="absolute top-0 right-32 w-1 h-full bg-gradient-to-b from-transparent via-lime-400 to-transparent animate-pulse" style={{ animationDelay: '2.7s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced floating particles with more variety */}
          <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-80 shadow-2xl"></div>
          <div className="absolute top-40 right-32 w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full animate-ping opacity-70 shadow-xl" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-32 left-16 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-ping opacity-75 shadow-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-7 h-7 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-ping opacity-60 shadow-2xl" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-60 left-60 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping opacity-85 shadow-lg" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-60 right-60 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-ping opacity-75 shadow-xl" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-80 left-80 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-ping opacity-70 shadow-md" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-80 right-80 w-5 h-5 bg-gradient-to-r from-lime-400 to-green-500 rounded-full animate-ping opacity-65 shadow-lg" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-ping opacity-80 shadow-md" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-7 h-7 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-ping opacity-55 shadow-xl" style={{ animationDelay: '4.5s' }}></div>
        </div>

        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(45deg, rgba(244, 196, 48, 0.2) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px, 60px 60px, 60px 60px',
          backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px, 30px 30px, 30px 30px'
        }}>
        </div>
        
        {/* Additional creative patterns */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 25% 75%, rgba(244, 196, 48, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px, 120px 120px, 80px 80px, 90px 90px'
        }}>
        </div>
        
        {/* Animated constellation patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-md" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse shadow-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-2/3 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-md" style={{ animationDelay: '2s' }}></div>
          
          {/* Connect constellation with animated lines */}
          <svg className="absolute top-1/4 left-1/4 w-96 h-96 opacity-30" viewBox="0 0 200 200">
            <line x1="20" y1="20" x2="60" y2="60" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" />
            <line x1="60" y1="60" x2="100" y2="100" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="100" y1="100" x2="140" y2="140" stroke="#EC4899" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="140" y1="140" x2="180" y2="180" stroke="#10B981" strokeWidth="2" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            
            {/* Curved connections */}
            <path d="M20,20 Q100,10 180,40 Q190,100 160,180" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <path d="M40,180 Q120,190 180,140 Q190,80 120,30" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          </svg>
        </div>
        
        {/* Floating geometric shapes with enhanced variety */}
        <div className="absolute top-16 left-16 w-12 h-12 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 transform rotate-45 animate-float-gentle opacity-60 shadow-xl" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-24 right-24 w-16 h-16 bg-gradient-to-br from-purple-400/40 to-violet-500/40 rounded-full animate-bounce-slow opacity-50 shadow-2xl"></div>
        <div className="absolute bottom-24 left-24 w-14 h-14 bg-gradient-to-br from-emerald-400/40 to-teal-500/40 transform rotate-12 animate-drift-left opacity-65 shadow-lg" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="absolute bottom-16 right-16 w-10 h-10 bg-gradient-to-br from-pink-400/40 to-rose-500/40 transform rotate-60 animate-float-gentle-delayed opacity-55 shadow-md" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Additional floating tech elements */}
        <div className="absolute top-1/3 left-8 w-20 h-20 bg-gradient-to-br from-indigo-400/30 to-purple-500/30 rounded-2xl transform rotate-25 animate-drift-right opacity-40 shadow-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
          <span className="text-white text-xs font-bold">ML</span>
        </div>
        <div className="absolute bottom-1/3 right-8 w-18 h-18 bg-gradient-to-br from-rose-400/30 to-pink-500/30 rounded-2xl transform -rotate-20 animate-float-gentle opacity-45 shadow-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
          <span className="text-white text-xs font-bold">AI</span>
        </div>
        
        {/* Spiral and wave patterns */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-15 animate-spin-slow">
          <div className="w-full h-full border-4 border-dashed border-cyan-400 rounded-full"></div>
          <div className="absolute top-8 left-8 right-8 bottom-8 border-3 border-dashed border-purple-400 rounded-full"></div>
          <div className="absolute top-16 left-16 right-16 bottom-16 border-2 border-dashed border-pink-400 rounded-full"></div>
          <div className="absolute top-24 left-24 right-24 bottom-24 border-2 border-dashed border-orange-400 rounded-full"></div>
        </div>
        
        {/* Wave patterns */}
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path d="M10,50 Q30,20 50,50 T90,50" stroke="#06B6D4" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M10,60 Q30,30 50,60 T90,60" stroke="#8B5CF6" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M10,70 Q30,40 50,70 T90,70" stroke="#EC4899" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
        </div>
        
        {/* Enhanced neural network visualization */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {/* Neural nodes */}
            <circle cx="50" cy="50" r="8" fill="#06B6D4" className="animate-pulse">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="50" r="6" fill="#8B5CF6" className="animate-pulse">
              <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="100" r="10" fill="#EC4899" className="animate-pulse">
              <animate attributeName="r" values="10;15;10" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="150" r="7" fill="#10B981" className="animate-pulse">
              <animate attributeName="r" values="7;11;7" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="150" r="9" fill="#F59E0B" className="animate-pulse">
              <animate attributeName="r" values="9;13;9" dur="2.8s" repeatCount="indefinite" />
            </circle>
            
            {/* Neural connections */}
            <line x1="50" y1="50" x2="150" y2="50" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
              <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="50" y1="50" x2="100" y2="100" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
              <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="150" y1="50" x2="100" y2="100" stroke="#EC4899" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
              <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3.5s" repeatCount="indefinite" />
            </line>
            <line x1="100" y1="100" x2="50" y2="150" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
              <animate attributeName="stroke-dashoffset" values="0;10;0" dur="2.8s" repeatCount="indefinite" />
            </line>
            <line x1="100" y1="100" x2="150" y2="150" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse">
              <animate attributeName="stroke-dashoffset" values="0;10;0" dur="3.2s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
        
        {/* Floating data streams */}
        <div className="absolute top-0 left-1/6 w-2 h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse opacity-40"></div>
        <div className="absolute top-0 left-2/6 w-2 h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent animate-pulse opacity-35" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-0 left-3/6 w-2 h-full bg-gradient-to-b from-transparent via-pink-400/60 to-transparent animate-pulse opacity-45" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-0 left-4/6 w-2 h-full bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent animate-pulse opacity-40" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute top-0 left-5/6 w-2 h-full bg-gradient-to-b from-transparent via-orange-400/60 to-transparent animate-pulse opacity-50" style={{ animationDelay: '3.2s' }}></div>
        
        {/* Floating binary code elements */}
        <div className="absolute top-32 left-1/3 transform rotate-8 animate-drift-right opacity-40 z-15">
          <div className="bg-black/70 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-cyan-500/40">
            <div className="text-cyan-400 text-xs font-mono">
              <div className="text-green-400">// AI Engine</div>
              <div>neural.process()</div>
              <div className="text-purple-400">return design;</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-40 right-1/3 transform -rotate-12 animate-float-gentle opacity-40 z-15">
          <div className="bg-black/70 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-purple-500/40">
            <div className="text-purple-400 text-xs font-mono">
              <div className="text-pink-400">/* Deep Learning */</div>
              <div>model.predict(input)</div>
              <div className="text-cyan-400">optimize.ui()</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-2/3 left-1/6 transform rotate-15 animate-bounce-slow opacity-35 z-15">
          <div className="bg-black/70 backdrop-blur-xl rounded-xl p-3 shadow-xl border border-emerald-500/40">
            <div className="text-emerald-400 text-xs font-mono">
              <div className="text-orange-400">// Auto Generate</div>
              <div>ai.createWebsite()</div>
            </div>
          </div>
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
        
        {/* Additional floating tech badges */}
        <div className="absolute top-1/4 left-1/2 transform rotate-10 animate-drift-left opacity-25 z-15">
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30">
            <div className="text-white text-sm font-bold">NEURAL NET</div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/2 transform -rotate-8 animate-float-gentle opacity-25 z-15">
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30">
            <div className="text-white text-sm font-bold">DEEP AI</div>
          </div>
        </div>

        {/* Holographic Data Streams */}
        <div className="absolute top-0 left-1/5 w-3 h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse opacity-50"></div>
        <div className="absolute top-0 left-2/5 w-3 h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent animate-pulse opacity-45" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-0 left-3/5 w-3 h-full bg-gradient-to-b from-transparent via-pink-400/60 to-transparent animate-pulse opacity-55" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-0 left-4/5 w-3 h-full bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent animate-pulse opacity-50" style={{ animationDelay: '2.1s' }}></div>

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
        
        {/* Additional glowing elements */}
        <div className="absolute top-1/5 left-1/5 w-12 h-12 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full animate-pulse opacity-60 shadow-2xl blur-md"></div>
        <div className="absolute top-4/5 right-1/5 w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse opacity-70 shadow-xl blur-sm" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-2/5 left-2/5 w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse opacity-50 shadow-2xl blur-lg" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute top-3/5 right-2/5 w-10 h-10 bg-gradient-to-r from-lime-400 to-green-500 rounded-full animate-pulse opacity-65 shadow-xl blur-md" style={{ animationDelay: '3.6s' }}></div>
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
                  ONTDEK ONZE SERVICES
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
                  <Palette className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm font-medium text-white">AI Design</span>
                </div>
                <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-white">Automatisering</span>
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