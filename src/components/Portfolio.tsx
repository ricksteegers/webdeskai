import React from 'react';
import { useEffect } from 'react';
import { ExternalLink, Sparkles, ArrowRight, Clock, Target, TrendingUp, Star } from 'lucide-react';

const Portfolio: React.FC = () => {
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

  const projects = [
    {
      title: "BouwGarant",
      category: "Website Ontwikkeling",
      image: "/Bouwgarant new.PNG",
      description: "Professionele website voor bouwgarantie dienstverlening",
      color: "from-blue-500 to-cyan-500",
      stats: { rating: 4.8 },
      details: {
        duration: "2 weken",
        industry: "Bouw & Constructie",
        scope: "Complete website redesign met focus op gebruiksvriendelijkheid en conversie optimalisatie voor bouwgarantie services.",
        technologies: ["React", "Tailwind CSS", "AI Design"],
        features: ["Responsive Design", "SEO Optimalisatie", "Contact Formulieren", "40% meer leads", "Snellere laadtijd"],
        client: "BouwGarant Nederland"
      }
    },
    {
      title: "BDO Accountants & Adviseurs",
      category: "Website Ontwikkeling",
      image: "/BDO new.PNG",
      description: "Professionele website voor accountancy en adviesbureau",
      color: "from-purple-500 to-pink-500",
      stats: { rating: 4.8 },
      details: {
        duration: "3 weken",
        industry: "Financiële Diensten",
        scope: "Enterprise-level website met geavanceerde functionaliteiten voor accountancy services en client management.",
        technologies: ["Next.js", "TypeScript", "AI Content"],
        features: ["Multi-language", "Client Portal", "Document Management", "60% betere UX", "Geautomatiseerde workflows"],
        client: "BDO Nederland"
      }
    },
    {
      title: "Juridisch Loket",
      category: "Website Ontwikkeling",
      image: "/Juridisch Loket new.PNG",
      description: "Professionele website voor juridische dienstverlening en advies",
      color: "from-green-500 to-emerald-500",
      stats: { rating: 4.8 },
      details: {
        duration: "2.5 weken",
        industry: "Juridische Diensten",
        scope: "Moderne juridische platform met AI-chatbot voor automatische juridische advies en appointment scheduling.",
        technologies: ["Vue.js", "Nuxt.js", "AI Chatbot"],
        features: ["Legal Database", "Appointment System", "Live Chat", "50% meer consultaties", "24/7 AI ondersteuning"],
        client: "Het Juridisch Loket"
      }
    }
  ];

  return (
    <section className="pt-20 pb-32 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden scroll-animate">
      {/* Unique mountain transition from Process */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10 scroll-animate-scale">
        <svg className="w-full h-32 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0V0Z" fill="#F7F3E9"></path>
        </svg>
      </div>

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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none scroll-animate">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#F4C430] rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 scroll-animate relative">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping opacity-30"></div>
              </div>
              <span className="text-xs sm:text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-xl border-2 border-blue-500/20 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                ONS WERK
                </span>
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-500 to-cyan-500 animate-ping opacity-30"></div>
              </div>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight relative">
              <span className="relative inline-block">
                Deze bedrijven passen 
                <span className="relative inline-block mx-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 animate-pulse relative z-10">AI</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-30 animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
                </span>
                al toe
              </span>
              
              {/* Creative text decorations */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative">
              Deze bedrijven passen AI al succesvol toe om hun merk en digitale aanwezigheid te versterken.
              <span className="inline-block ml-2 animate-bounce">🎯</span>
            </p>
            
            {/* Portfolio stats */}
            <div className="flex items-center justify-center mt-12 space-x-8">
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse group-hover:scale-125 transition-transform duration-300">50+</div>
                  <div className="absolute inset-0 text-4xl font-bold text-blue-500 blur-sm opacity-30 animate-pulse"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-60"></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1 group-hover:text-blue-500 transition-colors duration-300">Projecten</div>
              </div>
              <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse opacity-50"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse group-hover:scale-125 transition-transform duration-300">100%</div>
                  <div className="absolute inset-0 text-4xl font-bold text-green-500 blur-sm opacity-30 animate-pulse"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-60"></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1 group-hover:text-green-500 transition-colors duration-300">Tevreden klanten</div>
              </div>
              <div className="w-1 h-12 sm:h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-pulse opacity-50"></div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse group-hover:scale-125 transition-transform duration-300">4.9</div>
                  <div className="absolute inset-0 text-4xl font-bold text-purple-500 blur-sm opacity-30 animate-pulse"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1 group-hover:text-purple-500 transition-colors duration-300">Gemiddelde rating</div>
              </div>
            </div>
            
          </div>
                
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white rounded-2xl lg:rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 cursor-pointer overflow-hidden border-4 border-transparent hover:border-white/50 backdrop-blur-sm scroll-animate-scale">
                {/* Creative corner accent */}
                <div className={`absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${project.color} rounded-full opacity-20 group-hover:opacity-60 group-hover:scale-150 group-hover:rotate-180 transition-all duration-700 md:duration-1000 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute inset-2 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl lg:rounded-[2rem] bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-xl md:blur-2xl transition-all duration-500 md:duration-700 animate-pulse`}></div>
                <div className={`absolute -inset-2 rounded-xl md:rounded-2xl lg:rounded-[2rem] bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 animate-pulse`}></div>
                
                {/* Image container with enhanced effects */}
                <div className="relative overflow-hidden rounded-[5%] h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 md:duration-700">
                  {/* Creative frame decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-2 border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" style={{ animationDelay: '0.5s' }}></div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 md:group-hover:scale-115 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125 group-hover:hue-rotate-15 transition-all duration-500 md:duration-700 filter"
                  />
                  
                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm relative overflow-hidden rounded-[5%]">
                    {/* Animated scan lines */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent animate-pulse opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Project Details - Top Section */}
                    <div className="absolute top-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 z-20">
                      <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-2xl">
                        <div className="grid grid-cols-2 gap-3 text-white text-xs">
                          <div>
                            <div className="text-[#F4C430] font-bold mb-1 text-xs">Client</div>
                            <div className="text-xs text-white font-medium">{project.details.client}</div>
                          </div>
                          <div>
                            <div className="text-[#F4C430] font-bold mb-1 text-xs">Duration</div>
                            <div className="text-xs text-white font-medium">{project.details.duration}</div>
                          </div>
                          <div>
                            <div className="text-[#F4C430] font-bold mb-1 text-xs">Budget</div>
                            <div className="text-xs text-green-400 font-bold">€695 - €1195</div>
                          </div>
                          <div>
                            <div className="text-[#F4C430] font-bold mb-1 text-xs">Status</div>
                            <div className="text-xs flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                              <span className="text-green-400 font-bold">Live</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-white/20">
                          <div className="text-[#F4C430] font-bold mb-1 text-xs">Industry</div>
                          <div className="text-xs text-white font-medium mb-2">{project.details.industry}</div>
                          
                          <div className="text-[#F4C430] font-bold mb-2 text-xs">Technologies</div>
                          <div className="flex flex-wrap gap-1">
                            {project.details.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-[#F4C430]/20 text-[#F4C430] px-2 py-1 rounded-full text-xs font-bold border border-[#F4C430]/30">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features List - Middle Section */}
                    <div className="absolute top-1/2 left-2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0 z-20" style={{ transitionDelay: '0.3s' }}>
                      <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-white/30 shadow-2xl">
                        <div className="text-[#F4C430] font-bold mb-2 text-xs flex items-center">
                          <div className="w-2 h-2 bg-[#F4C430] rounded-full mr-2 animate-pulse"></div>
                          Key Features
                        </div>
                        <div className="space-y-1">
                          {project.details.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-white text-xs font-medium">
                              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mr-2 animate-pulse`} style={{ animationDelay: `${featureIndex * 0.2}s` }}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 md:top-6 md:left-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 md:duration-500">
                      <span className={`text-xs md:text-sm font-bold text-white px-3 py-2 md:px-5 md:py-3 rounded-full bg-gradient-to-r ${project.color} backdrop-blur-md shadow-2xl border-2 border-white/30 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        <span className="relative z-10 flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                        {project.category}
                        </span>
                      </span>
                    </div>

                    {/* Stats in top right */}

                    {/* Main content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-10 text-white relative rounded-b-[5%]">
                      {/* Creative background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-[5%]"></div>
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                      
                      {/* Project Status Indicator */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0" style={{ transitionDelay: '0.3s' }}>
                        <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-500/30">
                          <div className="flex items-center text-green-400 text-xs font-medium">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            Live
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-2 md:mb-4">
                        <div className="flex items-center relative z-10">
                          <div className="flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                            <Star className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-blue-500 mr-1 md:mr-2 animate-pulse" />
                            <span className="text-sm md:text-base lg:text-lg font-bold text-blue-500">{project.stats.rating}</span>
                            <div className="ml-2 flex space-x-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-blue-500 rounded-full animate-ping opacity-60" style={{ animationDelay: `${i * 0.1}s` }}></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 md:duration-500 cursor-pointer shadow-2xl border-2 border-white/30 group-hover:scale-150 group-hover:rotate-45 relative z-10 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full animate-pulse"></div>
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4 group-hover:text-blue-500 transition-all duration-300 leading-tight relative z-10 transform group-hover:scale-105">
                        {project.title}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
                      </h3>
                      <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed mb-3 md:mb-6 relative z-10">
                        {project.description}
                        <span className="inline-block ml-2 animate-pulse">✨</span>
                      </p>

                      {/* Progress bar */}
                      <div className="w-full h-2 md:h-3 bg-white/25 rounded-full overflow-hidden backdrop-blur-sm relative z-10 border border-white/20">
                        <div className={`h-full bg-gradient-to-r ${project.color} rounded-full transition-all duration-1000 md:duration-1500 group-hover:w-full shadow-lg relative overflow-hidden`} style={{ width: '0%' }}>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-pulse"></div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Creative floating elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className={`absolute top-1/4 left-1/4 w-3 md:w-4 h-3 md:h-4 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-ping transition-opacity duration-300 md:duration-500 shadow-lg`}></div>
                      <div className={`absolute bottom-1/3 right-1/4 w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-500 md:duration-700 shadow-lg`} style={{ animationDelay: '0.5s' }}></div>
                      <div className={`absolute top-1/2 right-1/3 w-2 md:w-2.5 h-2 md:h-2.5 bg-gradient-to-r ${project.color} rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-opacity duration-400 md:duration-600 shadow-lg`} style={{ animationDelay: '1s' }}></div>
                      <div className={`absolute top-1/3 left-1/3 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-600 shadow-lg`} style={{ animationDelay: '1.5s' }}></div>
                    </div>
                  </div>

                  {/* Enhanced floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:duration-700 pointer-events-none overflow-hidden">
                      <div className="absolute top-6 left-6 md:top-12 md:left-12 w-3 md:w-4 h-3 md:h-4 bg-blue-400 rounded-full animate-ping shadow-2xl border border-white/30"></div>
                      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-3 md:w-4 h-3 md:h-4 bg-orange-400 rounded-full animate-ping shadow-2xl border border-white/30" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 right-4 md:right-8 w-2 md:w-3 h-2 md:h-3 bg-pink-400 rounded-full animate-ping shadow-2xl border border-white/30" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/3 left-4 md:left-8 w-2 md:w-2.5 h-2 md:h-2.5 bg-purple-400 rounded-full animate-ping shadow-2xl border border-white/30" style={{ animationDelay: '1.5s' }}></div>
                      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-2xl border border-white/30" style={{ animationDelay: '2s' }}></div>
                      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping shadow-2xl border border-white/30" style={{ animationDelay: '2.5s' }}></div>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 md:duration-700 rounded-[5%] pointer-events-none`}></div>
                  
                  {/* Creative shadow effect */}
                  <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-2xl md:blur-3xl transition-all duration-500 md:duration-700 rounded-[5%] -z-10 animate-pulse`}></div>
                  <div className={`absolute -inset-4 md:-inset-6 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-all duration-700 rounded-[5%] -z-20 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
                </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;