import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Shield, Award, Clock, Users, CheckCircle, Star } from 'lucide-react';

const TrustBuilders: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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

  const caseStudy = {
    client: "BouwGarant Nederland",
    industry: "Bouw & Constructie",
    challenge: "Verouderde website met lage conversie en slechte gebruikerservaring",
    solution: "Complete AI-gedreven redesign met focus op lead generatie en mobiele optimalisatie",
    results: [
      { metric: "40%", description: "Meer leads binnen 1 maand" },
      { metric: "60%", description: "Snellere laadtijd" },
      { metric: "3x", description: "Betere mobiele ervaring" },
      { metric: "85%", description: "Hogere klanttevredenheid" }
    ],
    image: "/Bouwgarant new.PNG"
  };

  const faqs = [
    {
      question: "Hoe kan WebDesk AI zo goedkoop zijn?",
      answer: "Door AI-technologie te gebruiken kunnen we veel processen automatiseren die traditioneel handmatig worden gedaan. Dit bespaart tijd en kosten, die we doorberekenen aan onze klanten. We behouden wel de menselijke creativiteit en kwaliteitscontrole."
    },
    {
      question: "Krijg ik echt eigendom van mijn website?",
      answer: "Ja, absoluut! Je krijgt alle broncode, bestanden en toegangen. Er zijn geen maandelijkse kosten of afhankelijkheden. Je kunt de website altijd naar een andere hosting provider verhuizen of laten aanpassen door andere developers."
    },
    {
      question: "Hoe zit het met ondersteuning na oplevering?",
      answer: "We bieden altijd nazorg en ondersteuning. Bij het Professional pakket krijg je 1 maand gratis support, bij Enterprise onbeperkte ondersteuning. Ook daarna blijven we beschikbaar voor vragen en updates tegen faire tarieven."
    },
    {
      question: "Kan ik revisies aanvragen tijdens het proces?",
      answer: "Natuurlijk! Het Starter pakket bevat 2 revisierondes, Professional 3 rondes, en Enterprise onbeperkte revisies. We willen dat je 100% tevreden bent met het eindresultaat."
    },
    {
      question: "Wat gebeurt er als ik niet tevreden ben?",
      answer: "We bieden een 100% tevredenheidsgarantie. Als je niet tevreden bent, werken we samen tot je wel tevreden bent. Mocht dit niet lukken, dan krijg je je geld terug. Jouw tevredenheid staat voorop."
    },
    {
      question: "Hoe werkt het AI-design proces precies?",
      answer: "Onze AI analyseert jouw bedrijf, doelgroep en concurrenten. Op basis van duizenden succesvolle websites creëert het unieke designs. Onze designers verfijnen dit vervolgens met menselijke creativiteit voor het perfecte resultaat."
    }
  ];

  const trustBadges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Tevredenheidsgarantie",
      description: "Niet tevreden? Geld terug garantie"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gecertificeerde Experts",
      description: "Team van ervaren AI-specialisten"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Snelle Levering",
      description: "Gegarandeerd binnen 1 week live"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "50+ Tevreden Klanten",
      description: "Bewezen track record van succes"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* White flow transition from previous section */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-20 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="white"></path>
        </svg>
      </div>

      {/* Ultra Creative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Massive floating orbs with complex gradients */}
        <div className="absolute top-10 left-5 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-400 via-cyan-400 via-teal-400 to-emerald-400 rounded-full blur-3xl animate-float-gentle transform rotate-45"></div>
        <div className="absolute bottom-10 right-5 w-[50rem] h-[50rem] bg-gradient-to-br from-purple-400 via-pink-400 via-rose-400 to-red-400 rounded-full blur-3xl animate-float-gentle-delayed transform -rotate-30"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[60rem] h-[60rem] bg-gradient-to-br from-indigo-400 via-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-drift-left transform rotate-90"></div>
        <div className="absolute top-5 right-1/3 w-[30rem] h-[30rem] bg-gradient-to-br from-emerald-400 via-green-400 via-lime-400 to-yellow-400 rounded-full blur-3xl animate-drift-right transform rotate-180"></div>
        <div className="absolute bottom-5 left-1/3 w-[35rem] h-[35rem] bg-gradient-to-br from-orange-400 via-red-400 via-pink-400 to-purple-400 rounded-full blur-3xl animate-float-gentle transform -rotate-60"></div>
        <div className="absolute top-2/3 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-br from-violet-400 via-purple-400 via-indigo-400 to-blue-400 rounded-full blur-3xl animate-bounce-slow transform rotate-120"></div>
      </div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-15">
        {/* Multi-layer grid patterns */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 4px 4px, #F4C430 4px, transparent 0), 
            radial-gradient(circle at 2px 2px, #3B82F6 2px, transparent 0),
            radial-gradient(circle at 3px 3px, #8B5CF6 3px, transparent 0),
            radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)
          `,
          backgroundSize: '100px 100px, 80px 80px, 120px 120px, 60px 60px',
          backgroundPosition: '0 0, 40px 40px, 80px 80px, 20px 20px'
        }}></div>
        
        {/* Complex diagonal line patterns */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 47%, #F4C430 49%, #F4C430 51%, transparent 53%),
            linear-gradient(-45deg, transparent 47%, #3B82F6 49%, #3B82F6 51%, transparent 53%),
            linear-gradient(135deg, transparent 47%, #8B5CF6 49%, #8B5CF6 51%, transparent 53%),
            linear-gradient(225deg, transparent 47%, #10B981 49%, #10B981 51%, transparent 53%),
            linear-gradient(315deg, transparent 47%, #F59E0B 49%, #F59E0B 51%, transparent 53%)
          `,
          backgroundSize: '200px 200px, 150px 150px, 250px 250px, 180px 180px, 220px 220px',
          backgroundPosition: '0 0, 75px 75px, 150px 150px, 100px 100px, 200px 200px',
          opacity: 0.6
        }}></div>
        
        {/* Enhanced hexagon patterns */}
        <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.6'%3E%3Cpath d='m40 40v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zm0-60V0h-4v8h-8v4h8v8h4V12h8V8h-8zM8 40v-8H4v8H0v4h4v8h4v-8h8v-4H8zM8 8V0H4v8H0v4h4v8h4V12h8V8H8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          transform: 'rotate(25deg)',
          animation: 'spin-slow 25s linear infinite'
        }}></div>
        
        <div className="absolute bottom-1/4 left-1/4 w-[25rem] h-[25rem] opacity-35" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F4C430' fill-opacity='0.7'%3E%3Cpath d='M30 30c0 16.5-13.5 30-30 30s-30-13.5-30-30 13.5-30 30-30 30 13.5 30 30zm-15 0c0-8.25-6.75-15-15-15s-15 6.75-15 15 6.75 15 15 15 15-6.75 15-15z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          transform: 'rotate(-45deg)',
          animation: 'spin-slow 35s linear infinite reverse'
        }}></div>
      </div>

      {/* Ultra Enhanced floating particles and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        {/* Enhanced animated particles with gradients */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full animate-ping opacity-80 shadow-2xl"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-full animate-ping opacity-70 shadow-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-7 h-7 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 rounded-full animate-ping opacity-75 shadow-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded-full animate-ping opacity-60 shadow-2xl" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Complex floating geometric shapes */}
        <div className="absolute top-1/4 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 transform rotate-45 animate-float-gentle opacity-50 shadow-xl" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-3/4 right-8 w-20 h-20 bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-full animate-bounce-slow opacity-45 shadow-2xl"></div>
        <div className="absolute bottom-1/4 left-1/5 w-14 h-14 bg-gradient-to-br from-indigo-400 via-purple-400 to-violet-400 transform rotate-12 animate-drift-left opacity-55 shadow-lg" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}></div>
        <div className="absolute top-1/5 left-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 transform rotate-60 animate-float-gentle-delayed opacity-50 shadow-md" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Floating trust icons */}
        <div className="absolute top-16 right-16 opacity-20 animate-float-gentle">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/40 shadow-2xl">
            <Shield className="w-10 h-10 text-blue-500" />
          </div>
        </div>
        <div className="absolute bottom-16 left-16 opacity-20 animate-float-gentle-delayed">
          <div className="w-18 h-18 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/40 shadow-xl">
            <Award className="w-9 h-9 text-green-500" />
          </div>
        </div>
        <div className="absolute top-1/2 right-8 opacity-20 animate-bounce-slow">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/40 shadow-lg">
            <Clock className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="absolute top-1/3 left-8 opacity-20 animate-drift-right">
          <div className="w-22 h-22 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/40 shadow-xl">
            <Users className="w-11 h-11 text-orange-500" />
          </div>
        </div>
        
        {/* Enhanced constellation effect */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-80 shadow-xl"></div>
        <div className="absolute top-1/3 left-1/3 w-5 h-5 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse opacity-70 shadow-lg" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full animate-pulse opacity-85 shadow-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-7 h-7 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse opacity-75 shadow-xl" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Connect the dots with animated lines */}
        <svg className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] opacity-30" viewBox="0 0 100 100">
          <line x1="15" y1="15" x2="35" y2="35" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" />
          <line x1="35" y1="35" x2="65" y2="35" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '0.5s' }} />
          <line x1="65" y1="35" x2="85" y2="65" stroke="#06B6D4" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '1s' }} />
          <line x1="85" y1="65" x2="65" y2="85" stroke="#F4C430" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '1.5s' }} />
          <line x1="65" y1="85" x2="35" y2="85" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '2s' }} />
          <line x1="35" y1="85" x2="15" y2="65" stroke="#EC4899" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '2.5s' }} />
          <line x1="15" y1="65" x2="15" y2="15" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '3s' }} />
          
          {/* Curved connections */}
          <path d="M15,15 Q50,5 85,25 Q90,50 75,85" stroke="#8B5CF6" strokeWidth="2.5" fill="none" strokeDasharray="6,6" className="animate-pulse drop-shadow-lg" style={{ animationDelay: '3.5s' }} />
          <path d="M25,85 Q60,90 85,65 Q90,35 55,20" stroke="#F59E0B" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse drop-shadow-md" style={{ animationDelay: '4s' }} />
        </svg>
        
        {/* Floating question mark and check icons */}
        <div className="absolute top-12 left-12 opacity-15 animate-float-gentle transform rotate-15">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl">
            <span className="text-4xl font-bold text-blue-500">?</span>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 opacity-15 animate-bounce-slow transform -rotate-15">
          <div className="w-28 h-28 bg-gradient-to-br from-green-500/25 to-emerald-500/25 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-2xl">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>
        
        {/* Floating percentage symbols */}
        <div className="absolute top-1/3 right-12 opacity-12 animate-drift-left transform rotate-30">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl">
            <span className="text-2xl font-bold text-purple-500">%</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-12 opacity-12 animate-float-gentle transform -rotate-30">
          <div className="w-18 h-18 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
            <Star className="w-10 h-10 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Case Study */}
        <div className="mb-20 scroll-animate">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                BEWEZEN RESULTATEN
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Succesverhaal</span> van onze klant
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Tarieven</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-blue-50 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">€695</div>
                    <div className="text-gray-600 text-sm">Starter</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-2xl p-6 ring-2 ring-blue-500">
                    <div className="text-2xl font-bold text-blue-600 mb-2">€895</div>
                    <div className="text-gray-600 text-sm">Professioneel</div>
                  </div>
                  <div className="text-center bg-blue-50 rounded-2xl p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">€1195</div>
                    <div className="text-gray-600 text-sm">Enterprise</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.client}
                    className="w-16 h-16 rounded-2xl object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{caseStudy.client}</h3>
                    <p className="text-blue-500 font-semibold">{caseStudy.industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Uitdaging:</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Oplossing:</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-center">Behaalde Resultaten:</h4>
                <div className="grid grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center bg-gray-50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-blue-500 mb-2">{result.metric}</div>
                      <div className="text-gray-600 text-sm">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-20 scroll-animate-scale">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {badge.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="scroll-animate">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Veelgestelde <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Vragen</span>
            </h3>
            <p className="text-xl text-gray-600">
              Alles wat je wilt weten over onze AI-gedreven aanpak
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h4 className="font-bold text-gray-900 text-lg pr-4">{faq.question}</h4>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-500" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 mr-4" />
              <h3 className="text-2xl font-bold">100% Tevredenheidsgarantie</h3>
            </div>
            <p className="text-green-100 max-w-2xl mx-auto">
              We zijn zo zeker van onze kwaliteit dat we een volledige tevredenheidsgarantie bieden. 
              Niet tevreden? Dan krijg je je geld terug. Zo simpel is het.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default TrustBuilders;