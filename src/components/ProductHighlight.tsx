import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Crown, Rocket } from 'lucide-react';

const ProductHighlight: React.FC = () => {
  const packages = [
    {
      name: "Starter",
      icon: <Sparkles className="w-8 h-8" />,
      price: "€695",
      originalPrice: "€2000",
      description: "Perfect voor kleine bedrijven",
      features: [
        "Premium design",
        "4 pagina's gevuld",
        ".nl domeinnaam inbegrepen",
        "100% jouw eigendom",
        "Responsive design",
        "Basis SEO optimalisatie"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professioneel",
      icon: <Crown className="w-8 h-8" />,
      price: "€895",
      originalPrice: "€3000",
      description: "Ideaal voor groeiende bedrijven",
      features: [
        "Alles van Starter",
        "Tot 8 pagina's gevuld",
        "Extra widgets & functies",
        "3 rondes revisies",
        "1 maand gratis support",
        "Geavanceerde SEO"
      ],
      popular: true,
      color: "from-[#F4C430] to-orange-500"
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-8 h-8" />,
      price: "€1195",
      originalPrice: "€4500",
      description: "Voor grote teams en bureaus",
      features: [
        "Alles van Professioneel",
        "Tot 12 pagina's gevuld",
        "Google Ads setup",
        "€100 korting marketing",
        "Onbeperkte revisies",
        "Priority support"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Product Highlight */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                ONZE SERVICE
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              AI-gedreven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">websites</span> die converteren
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Onze AI-expertise stelt ons in staat om premium websites te leveren die niet alleen mooi zijn, 
              maar ook daadwerkelijk resultaten opleveren voor je bedrijf.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "65% goedkoper dan traditionele bureaus",
                "In 1 week live, geen maandenlange wachttijden",
                "100% eigendom, geen maandelijkse kosten",
                "Toekomstbestendige AI-technologie"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-[#F4C430] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="w-4 h-4 text-black font-bold" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/contact"
              className="group inline-flex items-center bg-transparent border-2 border-[#F4C430] text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-110"
            >
              Gratis adviesgesprek
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          <div className="relative">
            <img 
              src="/New banner.png"
              alt="AI Website Development Process" 
              className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Kies jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">pakket</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparante prijzen, geen verborgen kosten. Betaal eenmalig en de website is 100% van jou.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-[#F4C430] scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[#F4C430] to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    MEEST POPULAIR
                  </span>
                </div>
              )}

              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pkg.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
              
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${pkg.color} group-hover:scale-110 transition-transform duration-300`}>
                    {pkg.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {Math.round((1 - parseInt(pkg.price.replace('€', '')) / parseInt(pkg.originalPrice.replace('€', ''))) * 100)}% besparing
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#F4C430] mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className="w-full bg-transparent border-2 border-[#F4C430] text-gray-800 py-3 rounded-full font-semibold hover:bg-[#F4C430] hover:text-black transition-all duration-300 text-center block"
              >
                Kies dit pakket
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Niet zeker welk pakket bij je past?</p>
          <Link 
            to="/contact"
            className="inline-flex items-center text-[#F4C430] font-semibold hover:text-orange-500 transition-colors duration-300"
          >
            Vraag gratis advies aan
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProductHighlight;