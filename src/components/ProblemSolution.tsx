import React, { useEffect, useState } from 'react';
import { CheckCircle, Zap, Clock, DollarSign, TrendingUp, ArrowRight, Sparkles, Target, Users, Award, Shield, TrendingDown } from 'lucide-react';

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
      icon: <DollarSign className="w-8 h-8" />,
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
    { number: "65%", label: "Goedkoper", icon: <DollarSign className="w-6 h-6" />, color: "text-green-500" },
    { number: "5x", label: "Sneller", icon: <Zap className="w-6 h-6" />, color: "text-blue-500" },
    { number: "100%", label: "AI-gedreven", icon: <Sparkles className="w-6 h-6" />, color: "text-purple-500" },
    { number: "50+", label: "Tevreden klanten", icon: <Users className="w-6 h-6" />, color: "text-orange-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-48 right-32 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-32 right-20 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-spin-slow opacity-30"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-30 transform -rotate-45"></div>
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
                HET PROBLEEM & ONZE OPLOSSING
                <Sparkles className="w-4 h-4 ml-2 text-blue-500 animate-spin-slow" />
              </span>
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-blue-500 to-cyan-500 animate-ping opacity-30"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight relative">
            <span className="relative inline-block">
              Waarom kiezen voor 
              <span className="relative inline-block mx-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 animate-pulse relative z-10">AI-gedreven</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-30 animate-pulse"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
              </span>
              websites?
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
          {/* VS Badge */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-2xl shadow-2xl animate-pulse border-4 border-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-pulse opacity-50"></div>
              <span className="relative z-10 flex items-center">
                <Target className="w-6 h-6 mr-2 animate-spin-slow" />
                VS
                <Zap className="w-6 h-6 ml-2 animate-bounce" />
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl animate-pulse">
                    <AlertTriangle className="w-8 h-8 text-white animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Traditionele Bureaus</h3>
                    <p className="text-red-600 font-semibold flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-ping"></span>
                      Duur, traag & complex
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
                      
                      <div className={`w-12 h-12 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                        <div className="text-white">
                          {problem.icon}
                        </div>
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{problem.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                      </div>
                      
                      {/* Hover effect particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Side */}
            <div className="scroll-animate-right relative">
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-green-200 relative overflow-hidden shadow-2xl min-h-[600px] flex flex-col">
                {/* Animated success pattern */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500 animate-pulse"></div>
                
                {/* Floating success icons */}
                <div className="absolute top-4 right-4 opacity-20">
                  <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
                </div>
                
                <div className="flex items-center mb-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl animate-pulse">
                    <CheckCircle className="w-8 h-8 text-white animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">WebDesk AI</h3>
                    <p className="text-green-600 font-semibold flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-ping"></span>
                      Snel, betaalbaar & simpel
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-center">
                  {solutions.map((solution, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                      style={{ animationDelay: `${solution.delay}ms` }}
                      onMouseEnter={() => setActiveCard(index + 10)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      {/* Animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${solution.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{solution.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                      
                      {/* Hover effect particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Comparison Stats */}
        <div className="scroll-animate-scale">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-float-gentle"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full animate-float-gentle-delayed"></div>
              <div className="absolute bottom-4 left-8 w-3 h-3 bg-white/20 rounded-full animate-drift-left"></div>
              <div className="absolute bottom-8 right-4 w-8 h-8 bg-white/20 rounded-full animate-drift-right"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 mr-3 animate-spin-slow" />
                <h3 className="text-3xl font-bold">Het Verschil in Cijfers</h3>
                <Shield className="w-8 h-8 ml-3 animate-bounce" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 relative"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
                      {/* Icon */}
                      <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} bg-white/20 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                        {stat.icon}
                      </div>
                      
                      {/* Number */}
                      <div className="text-4xl font-bold mb-2 group-hover:scale-125 transition-transform duration-300 relative">
                        {isVisible && (
                          <span className="animate-pulse">{stat.number}</span>
                        )}
                        <div className="absolute inset-0 text-4xl font-bold text-white blur-sm opacity-30 animate-pulse"></div>
                      </div>
                      
                      {/* Label */}
                      <div className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                      
                      {/* Hover particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to action */}
              <div className="mt-8 flex items-center justify-center space-x-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
                  <span className="font-semibold">Traditionele bureaus: €2000+ en 4-6 weken</span>
                </div>
                <ArrowRight className="w-6 h-6 animate-pulse" />
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                  <Zap className="w-5 h-5 mr-2 animate-bounce" />
                  <span className="font-bold">WebDesk AI: €695 en 1 week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="white"></path>
          <path d="M0,120C150,20 350,120 600,70C850,20 1050,120 1200,70V0H0V120Z" fill="white" opacity=".4"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProblemSolution;