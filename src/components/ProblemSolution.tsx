import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Clock, TrendingUp, ArrowRight, Sparkles, Target, Users, Award, Shield, TrendingDown, AlertTriangle, Euro } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          setIsVisible(true);
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Hoge kosten",
      description: "Traditionele webdesign bureaus vragen €2000-€5000+ voor een website",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      delay: 0
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lange wachttijden",
      description: "4-8 weken wachten voordat je website eindelijk live gaat",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      delay: 200
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Complexe processen",
      description: "Eindeloze meetings, revisies en technische problemen",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      delay: 400
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "65% goedkoper",
      description: "Premium websites vanaf €695 dankzij AI-automatisering",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      delay: 0
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "In 1 week live",
      description: "Van concept tot live website in slechts 7 dagen",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      delay: 200
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Eenvoudig proces",
      description: "Duidelijke stappen, snelle communicatie, geen gedoe",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      delay: 400
    }
  ];

  const stats = [
    { number: "65%", label: "Goedkoper", icon: <Euro className="w-6 h-6" />, color: "text-green-500" },
    { number: "5x", label: "Sneller", icon: <Zap className="w-6 h-6" />, color: "text-blue-500" },
    { number: "100%", label: "AI-gedreven", icon: <Sparkles className="w-6 h-6" />, color: "text-purple-500" },
    { number: "50+", label: "Tevreden klanten", icon: <Users className="w-6 h-6" />, color: "text-orange-500" }
  ];

  return (
    <section className="py-20 pb-32 bg-white relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-32 left-20 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-48 right-32 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-32 right-20 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-spin-slow opacity-30"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-60 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-60 transform -rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-50 transform rotate-90"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse opacity-50 transform -rotate-30"></div>
        <div className="absolute top-2/3 left-1/5 w-36 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse opacity-40 transform rotate-60"></div>
        <div className="absolute bottom-2/3 right-1/5 w-30 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-55 transform -rotate-75"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping opacity-30"></div>
            </div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border-2 border-blue-500/20 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 cursor-pointer relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-orange-500 animate-pulse" />
                ONZE OPLOSSING
                <Sparkles className="w-4 h-4 ml-2 text-blue-500 animate-spin-slow" />
              </span>
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-500 to-cyan-500 animate-ping opacity-30"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight relative">
            <span className="relative inline-block">
              Hoe AI-automatisering 
              <span className="relative inline-block mx-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 animate-pulse relative z-10">webdesign</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-30 animate-pulse"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
              </span>
              revolutioneert
            </span>
            
            {/* Creative text decorations */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative">
            Traditionele webdesign is duur, traag en complex. Wij maken het anders.
            <span className="inline-block ml-2 animate-bounce">🎯</span>
          </p>
        </div>

        {/* Enhanced VS Section */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Problems Side */}
            <div className="scroll-animate-left relative">
              <div className="bg-gradient-to-br from-red-50 via-orange-50 to-pink-50 rounded-3xl p-8 border-2 border-red-200 relative overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
                {/* Animated warning pattern */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse"></div>
                
                {/* Floating warning icons */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Clock className="w-16 h-16 text-orange-500 animate-bounce" />
                </div>
                
                <div className="flex items-center mb-8 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 md:mr-6 shadow-xl animate-pulse">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Traditionele Bureaus</h3>
                    <p className="text-red-600 font-semibold flex items-center">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 animate-ping"></span>
                      <span className="text-sm sm:text-base">Duur, traag & complex</span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-center">
                  {problems.map((problem, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                      style={{ animationDelay: `${problem.delay}ms` }}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${problem.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${problem.color} rounded-lg flex items-center justify-center shadow-xl animate-pulse relative z-10`}>
                        <div className="text-white">
                          {problem.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 relative z-10">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{problem.title}</h4>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{problem.description}</p>
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-bounce" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VS Badge - positioned between cards on mobile */}
            <div className="flex justify-center my-8 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:my-0 z-20">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold text-lg sm:text-xl md:text-2xl shadow-2xl animate-pulse border-2 sm:border-4 border-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-pulse opacity-50"></div>
                <span className="relative z-10 flex items-center">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2 animate-spin-slow" />
                  VS
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1 sm:ml-2 animate-bounce" />
                </span>
              </div>
            </div>

            {/* Solutions Side */}
            <div className="scroll-animate-right relative">
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-6 sm:p-8 border-2 border-green-200 relative overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
                {/* Animated success pattern */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-pulse"></div>
                
                {/* Floating success icons */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 animate-bounce" />
                </div>
                
                <div className="flex items-center mb-6 sm:mb-8 relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 md:mr-6 shadow-xl animate-pulse">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">WebDesk AI</h3>
                    <p className="text-green-600 font-semibold flex items-center">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 animate-ping"></span>
                      <span className="text-sm sm:text-base">Slim, snel & betaalbaar</span>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 sm:space-y-6 relative z-10 flex-1 flex flex-col justify-center">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                      style={{ animationDelay: `${solution.delay}ms` }}
                      onMouseEnter={() => setActiveCard(index + 10)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${solution.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center shadow-xl animate-pulse relative z-10`}>
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 relative z-10">
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{solution.title}</h4>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{solution.description}</p>
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-bounce" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Section */}
        <div className="scroll-animate-scale mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-blue-200 relative overflow-hidden shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
            
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Waarom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">WebDesk AI</span> de slimme keuze is
              </h3>
              <p className="text-base sm:text-lg text-gray-600">Bewezen resultaten die spreken voor zich</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 ${stat.color} bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center scroll-animate relative">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full animate-pulse opacity-10"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Klaar om te starten met jouw 
                <span className="block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">AI-gedreven website</span>?
                </span>
              </h3>
              
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">
                Sluit je aan bij 50+ tevreden ondernemers die al kozen voor de toekomst van webdesign
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/contact"
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group w-full sm:w-auto justify-center"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span>Start Nu - Gratis Consult</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">100% Tevredenheidsgarantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;