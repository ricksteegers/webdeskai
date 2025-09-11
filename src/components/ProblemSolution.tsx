import React, { useEffect } from 'react';
import { AlertTriangle, CheckCircle, Zap, Clock, DollarSign, TrendingUp } from 'lucide-react';

const ProblemSolution: React.FC = () => {
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

  const problems = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Hoge kosten",
      description: "Traditionele webdesign bureaus vragen €2000-€5000+ voor een website"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lange wachttijden",
      description: "4-8 weken wachten voordat je website eindelijk live gaat"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Complexe processen",
      description: "Eindeloze meetings, revisies en technische problemen"
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "65% goedkoper",
      description: "Premium websites vanaf €695 dankzij AI-automatisering"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "In 1 week live",
      description: "Van concept tot live website in slechts 7 dagen"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Eenvoudig proces",
      description: "Duidelijke stappen, snelle communicatie, geen gedoe"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-20 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="rgb(249 250 251)"></path>
        </svg>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              HET PROBLEEM & ONZE OPLOSSING
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Waarom kiezen voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">AI-gedreven</span> websites?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Traditionele webdesign is duur, traag en complex. Wij maken het anders.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems */}
          <div className="scroll-animate-left">
            <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Traditionele Bureaus</h3>
              </div>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-red-500">
                        {problem.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{problem.title}</h4>
                      <p className="text-gray-600 text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="scroll-animate-right">
            <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">WebDesk AI</h3>
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-green-500">
                        {solution.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{solution.title}</h4>
                      <p className="text-gray-600 text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="mt-16 scroll-animate-scale">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-8">Het Verschil in Cijfers</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">65%</div>
                <div className="text-blue-100">Goedkoper</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5x</div>
                <div className="text-blue-100">Sneller</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">AI-gedreven</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProblemSolution;