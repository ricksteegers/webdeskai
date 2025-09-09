import React from 'react';
import { Check, Zap, Crown, Rocket, Sparkles, ArrowRight, Clock, Target, TrendingUp } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-8 h-8" />,
      description: "Perfect voor kleine bedrijven en startups",
      price: "€695",
      originalPrice: "€2000",
      features: [
        "Premium design",
        "4 pagina's gevuld",
        ".nl domeinnaam inbegrepen",
        "100% jouw eigendom",
        "Responsive (desktop, tablet, mobiel)",
        "Basis SEO optimalisatie",
        "Snelle oplevering",
        "2 rondes revisies inbegrepen"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professioneel",
      icon: <Crown className="w-8 h-8" />,
      description: "Ideaal voor groeiende bedrijven",
      price: "€895",
      originalPrice: "€3000",
      features: [
        "Alles van het Starter pakket",
        "Website tot 8 pagina's gevuld",
        "Extra widgets & functies (bijv. kalender, sliders, interactieve kaarten)",
        "3 rondes revisies inbegrepen",
        "1 maand gratis support"
      ],
      popular: true,
      color: "from-[#F4C430] to-orange-500"
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-8 h-8" />,
      description: "Voor grote teams en bureaus",
      price: "€1195",
      originalPrice: "€4500",
      features: [
        "Alles van het Professional pakket",
        "Uitgebreid design voor maximale impact",
        "Website tot 12 pagina's gevuld",
        "Google Ads setup inbegrepen",
        "€100 korting op marketingpakket",
        "Onbeperkte revisies"
      ],
      popular: false,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Unique stepped transition from Testimonials */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-20 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120H200V80H400V100H600V60H800V90H1000V70H1200V0H0V120Z" fill="#F7F3E9"></path>
          <path d="M0,0H150V40H350V20H550V60H750V30H950V50H1200V120H0V0Z" fill="#F7F3E9" opacity=".5"></path>
        </svg>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              PRIJZEN
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Prijzen waar je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500 animate-pulse">blij van wordt</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dankzij onze AI-expertise bieden we premium website ontwikkeling aan tegen revolutionaire prijzen. 
            Krijg enterprise-kwaliteit resultaten zonder het enterprise budget.
          </p>
          
          {/* Pricing stats */}
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">65%</div>
              <div className="text-sm text-gray-600">Goedkoper</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">3</div>
              <div className="text-sm text-gray-600">Pakketten</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-transparent via-[#F4C430] to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4C430] animate-pulse">1 week</div>
              <div className="text-sm text-gray-600">Live</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20 overflow-hidden ${
                plan.popular ? 'ring-2 ring-[#F4C430] scale-105' : ''
              }`}
            >
              {/* Enhanced gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${plan.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
              
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-[#F4C430] to-orange-500 text-black px-6 py-2 rounded-full text-xs font-bold shadow-xl border-2 border-white relative overflow-hidden animate-pulse">
                    <span className="relative z-10">MEEST POPULAIR</span>
                    <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10 mx-auto">
                    <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${plan.color} group-hover:scale-110 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                  </div>
                  
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                {/* Enhanced pricing display */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">excl. BTW</div>
                  <div className="text-sm text-green-600 font-semibold">
                    {Math.round((1 - parseInt(plan.price.replace('€', '')) / parseInt(plan.originalPrice.replace('€', ''))) * 100)}% besparing
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#F4C430] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Progress indicator */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${plan.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '0%' }}></div>
                </div>
              </div>

              <button
                className="w-full py-4 px-6 rounded-full bg-transparent border-2 border-[#F4C430] text-gray-800 font-medium hover:bg-[#F4C430] hover:text-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm"
              >
                BEGIN NU
              </button>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none`}></div>
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
                <Target className="w-8 h-8 text-[#F4C430] animate-spin-slow mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Klaar voor je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">AI-gedreven website</span>?
                </h3>
                <TrendingUp className="w-8 h-8 text-[#F4C430] animate-bounce-slow ml-3" />
              </div>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Heb je een aangepast plan nodig? We bespreken graag je specifieke vereisten.
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
                    KIES JOUW PAKKET
                  </div>
                </a>

                <button className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 text-[#F4C430] group-hover:text-black" />
                    AANGEPAST PLAN
                  </span>
                </button>
              </div>

              {/* Pricing highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-[#F4C430] mr-2" />
                  <span className="text-sm font-medium text-gray-700">In 1 week live</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Sparkles className="w-5 h-5 text-[#F4C430] mr-2" />
                  <span className="text-sm font-medium text-gray-700">AI-gedreven</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-[#F4C430] mr-2" />
                  <span className="text-sm font-medium text-gray-700">65% goedkoper</span>
                </div>
              </div>

              {/* Value proposition */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#F4C430]/10 to-orange-500/10 rounded-2xl border border-[#F4C430]/20">
                <div className="flex items-center justify-center space-x-4 text-gray-700">
                  <Zap className="w-6 h-6 text-[#F4C430]" />
                  <span className="font-semibold">Traditionele bureaus: €2000+ en 4-6 weken</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <span className="font-bold text-[#F4C430]">Buck Design: vanaf €695 en 1 week</span>
                  <Sparkles className="w-6 h-6 text-[#F4C430]" />
                </div>
                <div className="relative">
                  <div className="w-3 h-3 border border-white rounded-sm"></div>
                  <div className="absolute top-0.5 left-0.5 w-2 h-0.5 bg-white rounded-full"></div>
                  <div className="absolute top-1.5 left-0.5 w-1.5 h-0.5 bg-white/70 rounded-full"></div>
                  <div className="absolute top-2 left-0.5 w-1 h-0.5 bg-white/50 rounded-full animate-pulse"></div>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-0 left-0 w-3 h-1.5 bg-white/70 rounded-t-full"></div>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-yellow-200 rounded-full animate-ping"></div>
                </div>
                <div className="relative">
                  <div className="w-0.5 h-3 bg-white rounded-full"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1 bg-white rounded-full animate-bounce-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique organic transition to FAQ */}
        <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
          <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0C150,60 300,20 450,40C600,60 750,20 900,30C1050,40 1150,60 1200,80V120H0V0Z" fill="#F7F3E9"></path>
            <path d="M0,40C100,100 200,60 300,80C400,100 500,60 600,80C700,100 800,60 900,80C1000,100 1100,60 1200,80V120H0V40Z" fill="#F7F3E9" opacity=".4"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;