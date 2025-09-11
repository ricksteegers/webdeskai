import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Award, Clock, CheckCircle, Star, TrendingUp } from 'lucide-react';

const TrustBuilders: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Hoe kunnen jullie zo goedkoop zijn?",
      answer: "Door AI-technologie in te zetten automatiseren we veel van het ontwikkelproces. Waar traditionele bureaus weken besteden aan handmatig coderen, kunnen wij met AI-tools in dagen hoogwaardige websites creëren. Dit bespaart tijd en kosten, die we doorberekenen aan onze klanten."
    },
    {
      question: "Is de kwaliteit wel goed als het zo snel gaat?",
      answer: "Absoluut! AI helpt ons juist om consistente, hoogwaardige resultaten te leveren. Elke website wordt nog steeds door onze experts gecontroleerd en geoptimaliseerd. De snelheid komt door efficiëntie, niet door kwaliteitsverlies."
    },
    {
      question: "Wat als ik niet tevreden ben?",
      answer: "We bieden een 100% tevredenheidsgarantie. Als je niet tevreden bent, werken we door tot je wel tevreden bent, of je krijgt je geld terug. Onze klanttevredenheid staat op 4.9/5 sterren."
    },
    {
      question: "Krijg ik echt 100% eigendom van mijn website?",
      answer: "Ja, zodra het project is afgerond en betaald, is de website 100% van jou. Geen maandelijkse kosten, geen licentiekosten. Je krijgt alle bestanden en kunt de website hosten waar je wilt."
    },
    {
      question: "Kunnen jullie ook mijn bestaande website verbeteren?",
      answer: "Zeker! We kunnen je bestaande website analyseren en verbeteren met onze AI-tools. Of we maken een compleet nieuwe website die beter presteert dan je huidige site."
    },
    {
      question: "Wat gebeurt er na oplevering?",
      answer: "Na oplevering krijg je een complete website die klaar is voor gebruik. We bieden ook optionele onderhoud- en marketingpakketten aan, maar dit is niet verplicht. Je website blijft gewoon werken."
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
      title: "4.9/5 Sterren",
      description: "Gebaseerd op 50+ klantbeoordelingen"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Binnen 1 week live",
      description: "Gegarandeerde oplevering binnen 7 dagen"
    }
  ];

  const caseStudy = {
    client: "BouwGarant Nederland",
    industry: "Bouw & Constructie",
    challenge: "Verouderde website met lage conversie",
    solution: "Complete AI-gedreven redesign met focus op gebruiksvriendelijkheid",
    results: [
      { metric: "Meer leads", value: "+40%" },
      { metric: "Snellere laadtijd", value: "3x" },
      { metric: "Mobiele conversie", value: "+65%" },
      { metric: "Bounce rate", value: "-50%" }
    ],
    image: "/Bouwgarant new.PNG"
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Case Study */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                CASE STUDY
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Bewezen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">resultaten</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudy.client}</h3>
                <p className="text-[#F4C430] font-semibold mb-6">{caseStudy.industry}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Uitdaging:</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Oplossing:</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Resultaten:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="text-center bg-gradient-to-br from-[#F4C430]/10 to-orange-500/10 rounded-2xl p-4 border border-[#F4C430]/20">
                          <div className="text-2xl font-bold text-[#F4C430] mb-1">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={caseStudy.image}
                alt={caseStudy.client}
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustBadges.map((badge, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white">
                  {badge.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Veelgestelde <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">vragen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je wilt weten over onze AI-gedreven websites
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-[#F4C430]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-[#F7F3E9]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z" fill="#F7F3E9"></path>
        </svg>
      </div>
    </section>
  );
};

export default TrustBuilders;