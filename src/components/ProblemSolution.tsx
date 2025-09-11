import React, { useEffect } from 'react';
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';

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
      icon: <DollarSign className="w-8 h-8" />,
      title: "Hoge kosten",
      description: "Traditionele webdesign bureaus rekenen €2000+ voor een simpele website"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lange wachttijden",
      description: "4-6 weken wachten voordat je website eindelijk live gaat"
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Verouderde methodes",
      description: "Oude ontwikkelmethodes zonder gebruik van moderne AI-technologie"
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "65% kostenbesparing",
      description: "Premium websites vanaf €695 dankzij AI-automatisering"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "In 1 week live",
      description: "Razendsnel ontwikkelen met onze AI-gedreven workflow"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Toekomstbestendige technologie",
      description: "Gebruik van de nieuwste AI-tools voor optimale resultaten"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Diagonal transition from Hero */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-20 fill-current text-[#F7F3E9]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="white"></path>
        </svg>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              HET PROBLEEM
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Waarom betaal je <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">te veel</span> voor websites?
          </h2>
        </div>

        {/* Problem Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="group text-center scroll-animate-left" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {problem.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* VS Divider */}
        <div className="text-center mb-20 scroll-animate-scale">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-8 py-4 text-3xl font-bold text-[#F4C430] border-4 border-[#F4C430] rounded-full shadow-lg">
                VS
              </span>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">AI-oplossing</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group text-center scroll-animate-right" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curved transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-[#F7F3E9]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120H200V80H400V100H600V60H800V90H1000V70H1200V0H0V120Z" fill="#F7F3E9"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProblemSolution;