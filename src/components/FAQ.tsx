import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Hoe werkt de onbeperkte ontwerpservice?",
      answer: "Zodra je geabonneerd bent, kun je zoveel ontwerpverzoeken aan je wachtrij toevoegen als je wilt. We werken ze een voor een af (of meerdere tegelijk afhankelijk van je plan) en leveren ze binnen het gespecificeerde tijdsbestek."
    },
    {
      question: "Wat is de typische doorlooptijd?",
      answer: "De meeste verzoeken worden gemiddeld binnen 24-48 uur voltooid. Complexere projecten kunnen langer duren, maar we communiceren altijd vooraf de verwachte levertijden."
    },
    {
      question: "Wie zijn de ontwerpers?",
      answer: "Ons team bestaat uit senior-level ontwerpers met jarenlange ervaring in het werken met topmerken en bureaus. Elke ontwerper specialiseert zich in verschillende gebieden om ervoor te zorgen dat je de beste expertise krijgt voor je project."
    },
    {
      question: "Hoe vraag ik ontwerpen aan?",
      answer: "Voeg eenvoudig verzoeken toe aan uw dashboard, deel Google docs of wireframes, of neem zelfs een korte Loom video op. Wij nemen het vanaf daar over en leveren uw ontwerpen."
    },
    {
      question: "Wat als ik het ontwerp niet leuk vind?",
      answer: "Geen zorgen! We blijven het ontwerp herzien totdat je 100% tevreden bent. We bieden onbeperkte revisies op al onze plannen."
    },
    {
      question: "Kan ik mijn abonnement pauzeren?",
      answer: "Absoluut! Je kunt je abonnement op elk moment pauzeren en hervatten wanneer je er klaar voor bent. Je resterende tijd wordt bewaard voor wanneer je terugkeert."
    },
    {
      question: "Welke ontwerpsoftware gebruiken jullie?",
      answer: "We gebruiken industriestandaard tools waaronder Figma, Adobe Creative Suite (Photoshop, Illustrator, After Effects), Sketch en andere professionele ontwerpsoftware."
    },
    {
      question: "Bieden jullie terugbetalingen aan?",
      answer: "Vanwege de hoogwaardige aard van het werk worden er geen terugbetalingen uitgegeven. Je kunt echter je abonnement op elk moment pauzeren of annuleren."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Unique organic transition from Pricing */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-28 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V0H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#F7F3E9"></path>
          <path d="M0,120C300,40 600,100 900,60C1000,40 1100,80 1200,60V0H0V120Z" fill="#F7F3E9" opacity=".3"></path>
        </svg>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F4C430] via-orange-400 to-red-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-drift-left"></div>
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-400 via-green-400 to-lime-400 rounded-full blur-3xl animate-drift-right"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400 via-violet-400 to-purple-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-16 w-88 h-88 bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-2/3 right-1/3 w-56 h-56 bg-gradient-to-br from-sky-400 via-blue-400 to-indigo-400 rounded-full blur-3xl animate-drift-left"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#F4C430] rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              VEELGESTELDE VRAGEN
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500 animate-pulse">Veelgestelde</span> vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Heeft u vragen? Wij hebben antwoorden. Hier zijn de meest gestelde vragen over onze AI-gedreven services.
          </p>
          
          {/* FAQ stats */}
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">8</div>
              <div className="text-sm text-gray-600">Veelgestelde vragen</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">24/7</div>
              <div className="text-sm text-gray-600">Ondersteuning</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">100%</div>
              <div className="text-sm text-gray-600">Transparantie</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-102 border border-white/20 overflow-hidden relative"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded-t-3xl group-hover:h-2 transition-all duration-300"></div>
              
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-[#F4C430]/5 group-hover:to-orange-500/5 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-[#F4C430] transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#F4C430] group-hover:rotate-180 transition-transform duration-300" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#F4C430] group-hover:rotate-90 transition-transform duration-300" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fadeIn">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F4C430]/30 to-transparent mb-4"></div>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#F4C430] rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
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
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Heb je nog <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">vragen</span>?
                </h3>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We zijn er om te helpen. Neem contact op voor persoonlijke ondersteuning.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="https://wa.me/31612345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-10 py-5 rounded-full font-medium hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center">
                  NEEM CONTACT OP
                  </div>
                </a>

                <button className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="flex items-center">
                    BELLEN
                  </span>
                </button>
              </div>

              {/* Contact highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">24/7 beschikbaar</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Gratis consultatie</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Support</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border border-white/50 rounded-full animate-ping"></div>
                </div>
                <div className="relative">
                  <div className="w-1 h-3 bg-white rounded-full transform rotate-12"></div>
                  <div className="absolute top-0 left-1 w-2 h-1 bg-white rounded-full"></div>
                  <div className="absolute bottom-0 left-0.5 w-1.5 h-1 bg-white/70 rounded-full animate-pulse"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="absolute top-0.5 left-0.5 w-2 h-1 bg-purple-200 rounded-sm animate-pulse"></div>
                  <div className="absolute -bottom-0.5 left-1 w-1 h-1 bg-white rounded-full animate-bounce-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;