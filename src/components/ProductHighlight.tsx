import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ShoppingCart, Smartphone, Check, ArrowRight, Zap } from 'lucide-react';

const ProductHighlight: React.FC = () => {
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

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Websites",
      description: "Moderne, responsieve websites die je merk perfect representeren",
      features: ["Responsive design", "SEO geoptimaliseerd", "Snelle laadtijden"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Webshops",
      description: "Krachtige e-commerce oplossingen die verkopen stimuleren",
      features: ["Betalingsintegratie", "Voorraadbeheersysteem", "Conversie optimalisatie"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Webapps",
      description: "Geavanceerde webapplicaties voor complexe bedrijfsprocessen",
      features: ["Custom functionaliteit", "Database integratie", "API koppelingen"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const packages = [
    {
      name: "Starter",
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
      popular: false
    },
    {
      name: "Professioneel",
      price: "€895",
      originalPrice: "€3000",
      description: "Ideaal voor groeiende bedrijven",
      features: [
        "Alles van Starter",
        "Tot 8 pagina's gevuld",
        "Extra widgets & functies",
        "3 rondes revisies",
        "1 maand gratis support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "€1195",
      originalPrice: "€4500",
      description: "Voor grote teams en bureaus",
      features: [
        "Alles van Professional",
        "Tot 12 pagina's gevuld",
        "Google Ads setup",
        "€100 korting marketing",
        "Onbeperkte revisies"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Services Highlight */}
        <div className="mb-20">
          <div className="text-center mb-16 scroll-animate">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-gray-50 px-4 py-2 rounded-full shadow-lg">
                ONZE DIENSTEN
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              AI-gedreven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">oplossingen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van websites tot webshops en complexe webapplicaties - alles mogelijk met AI-technologie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 overflow-hidden scroll-animate-scale`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} rounded-t-3xl group-hover:h-2 transition-all duration-300`}></div>
                
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10 mx-auto">
                    <div className={`text-white p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Visual Mockup */}
          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-animate">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Zie het verschil van <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">AI-design</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Onze AI-technologie analyseert duizenden succesvolle websites om het perfecte design 
                voor jouw bedrijf te creëren. Het resultaat? Unieke, moderne websites die converteren.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">Unieke designs op basis van AI-analyse</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">Geoptimaliseerd voor conversie en gebruikerservaring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-gray-700">Volledig responsive en toekomstbestendig</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/New banner.png"
                alt="AI Website Design Showcase" 
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="scroll-animate">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Kies jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">pakket</span>
            </h3>
            <p className="text-xl text-gray-600">
              Transparante prijzen, geen verborgen kosten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 ${
                  pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                      MEEST POPULAIR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span className="text-4xl font-bold text-blue-500">{pkg.price}</span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {Math.round((1 - parseInt(pkg.price.replace('€', '')) / parseInt(pkg.originalPrice.replace('€', ''))) * 100)}% besparing
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Kies {pkg.name}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Niet zeker welk pakket het beste bij je past?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-transparent border-2 border-blue-500 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Vraag gratis advies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductHighlight;