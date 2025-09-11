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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
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

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-red-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="rgb(254 242 242)"></path>
        </svg>
      </div>
    </section>
  );
};

export default TrustBuilders;