import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppPopup from '../components/WhatsAppPopup';
import { Users, Target, Lightbulb, Award, Heart, Zap, Sparkles, Clock, TrendingUp, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Alex van der Berg",
      role: "CEO & AI Strategist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "10+ jaar ervaring in digitale transformatie en AI-implementatie"
    },
    {
      name: "Sarah Jansen",
      role: "Lead AI Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in machine learning en AI-gedreven design automatisering"
    },
    {
      name: "Mike de Vries",
      role: "Creative AI Director",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specialist in AI-gegenereerde visuele content en UX design"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovatie",
      description: "We omarmen de nieuwste AI-technologieën om revolutionaire oplossingen te creëren",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Klanttevredenheid",
      description: "Jouw succes is ons succes. We gaan altijd voor 100% tevredenheid",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resultaatgericht",
      description: "Elke website die we maken is ontworpen om concrete resultaten te leveren",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Snelheid",
      description: "Dankzij AI kunnen we premium kwaliteit leveren in recordtijd",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projecten Voltooid", icon: <Award className="w-6 h-6" /> },
    { number: "100%", label: "Tevreden Klanten", icon: <Heart className="w-6 h-6" /> },
    { number: "4.9", label: "Gemiddelde Rating", icon: <Star className="w-6 h-6" /> },
    { number: "1 week", label: "Gemiddelde Oplevering", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F4C430] via-orange-400 to-red-400 rounded-full blur-3xl animate-float-gentle"></div>
          <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-drift-left"></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F4C430 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
              <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                OVER ONS
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Wij zijn <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500 animate-pulse">WebDesk AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Een team van AI-experts en creatieve professionals die de toekomst van webdesign vormgeven. 
              Wij combineren kunstmatige intelligentie met menselijke creativiteit om unieke digitale ervaringen te creëren.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">Missie</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Bij WebDesk AI geloven we dat elke onderneming toegang moet hebben tot premium webdesign, 
                  ongeacht budget of grootte. Daarom hebben we AI-technologie omarmd om de kosten drastisch 
                  te verlagen zonder in te boeten op kwaliteit.
                </p>
                <p>
                  Onze missie is simpel: <strong className="text-[#F4C430]">democratiseren van hoogwaardige webdesign</strong> 
                  door de kracht van kunstmatige intelligentie te benutten. We maken premium websites toegankelijk 
                  voor iedereen.
                </p>
                <div className="bg-gradient-to-r from-[#F4C430]/10 to-orange-500/10 rounded-2xl p-6 border border-[#F4C430]/20">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-[#F4C430] mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Onze Impact</h3>
                  </div>
                  <p className="text-gray-700">
                    Door AI in te zetten besparen onze klanten gemiddeld <strong>65% op ontwikkelkosten</strong> 
                    en krijgen ze hun website <strong>5x sneller</strong> dan bij traditionele bureaus.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/New banner.png"
                alt="WebDesk AI Team" 
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">Waarden</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze kernwaarden sturen alles wat we doen en bepalen hoe we met onze klanten en elkaar omgaan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border border-white/20 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#F4C430] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - moved directly after Values */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-3xl transform rotate-1"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#F4C430] animate-spin-slow mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Klaar om <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">samen te werken</span>?
                </h3>
                <Sparkles className="w-8 h-8 text-[#F4C430] animate-spin-slow ml-3" />
              </div>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Laten we jouw digitale transformatie starten. Neem contact op voor een gratis adviesgesprek.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/contact"
                  className="group bg-transparent border-2 border-[#F4C430] text-gray-800 px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#F4C430] hover:text-black transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-110 backdrop-blur-sm relative overflow-hidden"
                 onClick={(e) => {
                   e.preventDefault();
                   window.scrollTo(0, 0);
                   // Use React Router navigation to avoid SPA routing issues
                   window.history.pushState({}, '', '/contact');
                   window.location.reload();
                 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">NEEM CONTACT OP</div>
                </Link>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#F4C430] mr-2" />
                    <span className="font-semibold">In 1 week live</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center">
                    <span className="font-semibold text-[#F4C430]">Gratis advies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default AboutPage;