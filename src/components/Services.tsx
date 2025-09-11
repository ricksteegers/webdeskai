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
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Creative Background */}
      <div className="absolute inset-0 opacity-12">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-float-gentle transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-[36rem] h-[36rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
        <div className="absolute top-10 right-1/4 w-[20rem] h-[20rem] bg-gradient-to-br from-emerald-400 via-green-400 to-lime-400 rounded-full blur-3xl animate-drift-right transform rotate-90"></div>
        <div className="absolute bottom-10 left-1/4 w-[24rem] h-[24rem] bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full blur-3xl animate-float-gentle transform -rotate-45"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-32 right-32 w-64 h-64 bg-gradient-to-br from-emerald-400 via-teal-400 to-green-400 rounded-full blur-2xl animate-drift-right opacity-70 transform rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-full blur-2xl animate-float-gentle opacity-60 transform -rotate-30"></div>
        <div className="absolute top-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400 rounded-full blur-2xl animate-bounce-slow opacity-50 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-gradient-to-br from-rose-400 via-pink-400 to-red-400 rounded-full blur-2xl animate-drift-left opacity-55 transform -rotate-60"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-16 left-1/3 w-40 h-40 bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 rounded-full blur-xl animate-bounce-slow opacity-45 transform rotate-90"></div>
        <div className="absolute bottom-16 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-400 rounded-full blur-xl animate-float-gentle-delayed opacity-50 transform -rotate-45"></div>
        <div className="absolute top-2/3 left-8 w-36 h-36 bg-gradient-to-br from-lime-400 via-green-400 to-emerald-400 rounded-full blur-xl animate-drift-right opacity-40 transform rotate-180"></div>
        <div className="absolute top-1/3 right-8 w-44 h-44 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 rounded-full blur-xl animate-float-gentle opacity-45 transform rotate-30"></div>
        
        {/* Micro accent dots */}
        <div className="absolute top-24 left-1/2 w-16 h-16 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-lg animate-pulse opacity-30"></div>
        <div className="absolute bottom-24 right-1/2 w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-lg animate-pulse opacity-35" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-16 w-12 h-12 bg-gradient-to-br from-green-300 to-teal-300 rounded-full blur-md animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-16 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-lg animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-12">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3B82F6 2px, transparent 0), radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
          backgroundSize: '60px 60px, 40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}></div>
        
        {/* Enhanced diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, #F4C430 49%, #F4C430 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, #3B82F6 49%, #3B82F6 51%, transparent 52%),
            linear-gradient(135deg, transparent 48%, #8B5CF6 49%, #8B5CF6 51%, transparent 52%)
          `,
          backgroundSize: '120px 120px, 80px 80px, 160px 160px',
          backgroundPosition: '0 0, 40px 40px, 80px 80px',
          opacity: 0.15
        }}></div>
        
        {/* Enhanced hexagon pattern */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          transform: 'rotate(15deg)',
          animation: 'spin-slow 25s linear infinite'
        }}></div>
        
        {/* Additional pattern overlays */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F4C430' fill-opacity='0.4'%3E%3Cpath d='M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          transform: 'rotate(-25deg)',
          animation: 'spin-slow 35s linear infinite reverse'
        }}></div>
        
        {/* Wave patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%238B5CF6' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 20px',
          animation: 'drift-left 8s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating particles and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-70 shadow-2xl"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-ping opacity-50 shadow-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-3.5 h-3.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-60 shadow-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-ping opacity-40 shadow-2xl" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-ping opacity-65 shadow-lg" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4.5 h-4.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-ping opacity-45 shadow-xl" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-8 w-8 h-8 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 transform rotate-45 animate-float-gentle opacity-40 shadow-lg"></div>
        <div className="absolute top-2/3 right-8 w-10 h-10 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-full animate-bounce-slow opacity-35 shadow-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-7 h-7 bg-gradient-to-br from-indigo-400 via-purple-400 to-violet-400 transform rotate-12 animate-drift-left opacity-45 shadow-lg"></div>
        <div className="absolute top-1/4 left-1/2 w-6 h-6 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 transform rotate-60 animate-float-gentle-delayed opacity-40 shadow-md"></div>
        <div className="absolute bottom-1/4 right-1/2 w-9 h-9 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-full animate-drift-right opacity-35 shadow-lg"></div>
        
        {/* Complex geometric shapes */}
        <div className="absolute top-16 right-1/4 w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-400 transform rotate-45 animate-spin-slow opacity-30 shadow-lg" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-gradient-to-br from-emerald-400 to-cyan-400 transform rotate-30 animate-bounce-slow opacity-35 shadow-xl" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="absolute top-1/2 left-8 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 transform rotate-90 animate-float-gentle opacity-40 shadow-lg" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 transform rotate-15 animate-drift-left opacity-30 shadow-xl" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></div>
        
        {/* Animated lines and curves */}
        <div className="absolute top-1/4 right-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-40 transform rotate-45 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-40 transform -rotate-45 shadow-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-35 transform rotate-90 shadow-md" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/2 right-1/4 w-36 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse opacity-35 transform -rotate-30 shadow-md" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Curved lines */}
        <div className="absolute top-1/3 left-1/2 w-48 h-48 opacity-25 animate-spin-slow" style={{ animationDuration: '40s' }}>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path d="M10,50 Q50,10 90,50 Q50,90 10,50" stroke="#F4C430" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
            <path d="M20,50 Q50,20 80,50 Q50,80 20,50" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>
        
        {/* Floating icons */}
        <div className="absolute top-16 right-16 opacity-20 animate-float-gentle transform rotate-12">
          <Zap className="w-16 h-16 text-blue-500 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-16 left-16 opacity-20 animate-float-gentle-delayed transform -rotate-12">
          <Monitor className="w-14 h-14 text-green-500 drop-shadow-lg" />
        </div>
        <div className="absolute top-1/2 right-8 opacity-20 animate-bounce-slow transform rotate-45">
          <ShoppingCart className="w-12 h-12 text-purple-500 drop-shadow-lg" />
        </div>
        <div className="absolute top-1/4 left-8 opacity-18 animate-drift-right transform -rotate-30">
          <Smartphone className="w-10 h-10 text-orange-500 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 opacity-18 animate-float-gentle transform rotate-60">
          <Search className="w-11 h-11 text-pink-500 drop-shadow-lg" />
        </div>
        <div className="absolute top-2/3 left-1/3 opacity-18 animate-bounce-slow transform -rotate-45">
          <Palette className="w-13 h-13 text-cyan-500 drop-shadow-lg" />
        </div>
        
        {/* Enhanced spiral pattern */}
        <div className="absolute top-1/3 left-1/2 w-64 h-64 opacity-15 animate-spin-slow" style={{ animationDuration: '50s' }}>
          <div className="w-full h-full border-3 border-dashed border-blue-400 rounded-full shadow-lg"></div>
          <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-purple-400 rounded-full shadow-md"></div>
          <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-cyan-400 rounded-full shadow-sm"></div>
          <div className="absolute top-12 left-12 right-12 bottom-12 border-1 border-dashed border-pink-400 rounded-full"></div>
          <div className="absolute top-16 left-16 right-16 bottom-16 border-1 border-dotted border-orange-400 rounded-full"></div>
        </div>
        
        {/* Enhanced constellation effect */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-70 shadow-lg"></div>
        <div className="absolute top-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-60 shadow-md" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-pulse opacity-80 shadow-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-3.5 h-3.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse opacity-65 shadow-xl" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full animate-pulse opacity-55 shadow-md" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse opacity-60 shadow-lg" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Enhanced constellation connections */}
        <svg className="absolute top-1/4 left-1/4 w-80 h-80 opacity-30" viewBox="0 0 100 100">
          <line x1="10" y1="10" x2="30" y2="30" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse drop-shadow-sm" />
          <line x1="30" y1="30" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '0.5s' }} />
          <line x1="50" y1="50" x2="70" y2="30" stroke="#06B6D4" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '1s' }} />
          <line x1="70" y1="30" x2="80" y2="60" stroke="#F4C430" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '1.5s' }} />
          <line x1="80" y1="60" x2="60" y2="80" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '2s' }} />
          <line x1="60" y1="80" x2="20" y2="70" stroke="#EC4899" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '2.5s' }} />
          
          {/* Curved connections */}
          <path d="M10,10 Q50,5 90,20" stroke="#8B5CF6" strokeWidth="1" fill="none" strokeDasharray="4,4" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '3s' }} />
          <path d="M20,80 Q60,85 80,60" stroke="#F59E0B" strokeWidth="1" fill="none" strokeDasharray="4,4" className="animate-pulse drop-shadow-sm" style={{ animationDelay: '3.5s' }} />
        </svg>
        
        {/* Floating service icons */}
        <div className="absolute top-12 left-12 opacity-12 animate-float-gentle transform rotate-15">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <Monitor className="w-10 h-10 text-blue-500" />
          </div>
        </div>
        <div className="absolute top-12 right-12 opacity-12 animate-float-gentle-delayed transform -rotate-15">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <ShoppingCart className="w-10 h-10 text-green-500" />
          </div>
        </div>
        <div className="absolute bottom-12 left-12 opacity-12 animate-drift-right transform rotate-30">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <Smartphone className="w-10 h-10 text-purple-500" />
          </div>
        </div>
        <div className="absolute bottom-12 right-12 opacity-12 animate-bounce-slow transform -rotate-30">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <Search className="w-10 h-10 text-orange-500" />
          </div>
        </div>
        <div className="absolute top-1/3 left-1/6 opacity-12 animate-drift-left transform rotate-45">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <Palette className="w-10 h-10 text-pink-500" />
          </div>
        </div>
        <div className="absolute bottom-1/3 right-1/6 opacity-12 animate-float-gentle transform -rotate-45">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <Zap className="w-10 h-10 text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              ONZE DIENSTEN
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            AI-gedreven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse">oplossingen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Onze AI-expertise stelt ons in staat om premium websites en digitale ervaringen
            te leveren voor een fractie van traditionele kosten, zonder kwaliteit of creativiteit op te offeren.
          </p>
          
          {/* Key benefits showcase */}
          <div className="flex items-center justify-center mt-8 space-x-4 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 animate-pulse">6</div>
              <div className="text-xs sm:text-sm text-gray-600">AI-Services</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 animate-pulse">100%</div>
              <div className="text-xs sm:text-sm text-gray-600">AI-Gedreven</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 animate-pulse">1 week</div>
              <div className="text-xs sm:text-sm text-gray-600">Live</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20 overflow-hidden ${index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'}`}
            >
              {/* Animated gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Enhanced icon with animations */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} opacity-20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 absolute`}></div>
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                  <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#F4C430] rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-0 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Progress indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }}></div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center scroll-animate-scale">
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
                <Target className="w-8 h-8 text-[#F4C430] animate-spin-slow mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">AI-gedreven</span> websites
                </h3>
                <TrendingUp className="w-8 h-8 text-[#F4C430] animate-bounce-slow ml-3" />
              </div>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Steeds meer bedrijven kiezen voor onze AI-gedreven aanpak. Bespaar kosten en ga voor premium design.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/contact"
                  className="group bg-transparent border-2 border-blue-500 text-gray-800 px-6 py-3 sm:px-10 sm:py-5 rounded-full font-medium text-sm sm:text-base hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center">
                    <span className="hidden sm:inline">ONTDEK ONZE SERVICES</span>
                    <span className="sm:hidden">SERVICES</span>
                  </div>
                </Link>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-500 mr-2" />
                    <span className="font-semibold text-xs sm:text-base">In 1 week live</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="font-semibold text-blue-500 text-xs sm:text-base">Geen verplichtingen</span>
                  </div>
                </div>
              </div>

              {/* Service highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Monitor className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Websites & Webshops</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Palette className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">AI Design & Marketing</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Smartphone className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Custom Webapps</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 bg-white/30 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2">
                      <div className="text-center sm:text-left">
                        <div className="text-sm sm:text-base font-semibold mb-1 sm:mb-0 sm:inline">Traditionele bureaus: €2000+ en 4-6 weken</div>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mx-auto sm:mx-2 sm:inline" />
                        <div className="text-sm sm:text-base font-bold text-blue-500 sm:inline">WebDesk AI: €695 en 1 week</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                    <span className="font-semibold">Alle services onder één dak</span>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
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