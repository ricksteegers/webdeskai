import React from 'react';
import { Star, Quote, MapPin, Calendar, ThumbsUp, ExternalLink, Sparkles, ArrowRight, Clock, Target, TrendingUp } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah",
      position: "CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
     content: "WebDesk AI heeft onze website volledig getransformeerd! De AI-gedreven aanpak leverde een design op dat perfect aansluit bij onze merkidentiteit. Het proces was snel, professioneel en het resultaat overtrof onze verwachtingen.",
      rating: 5,
      date: "2 weken geleden",
      verified: true,
      helpful: 12,
      location: "Amsterdam, Nederland"
    },
    {
      name: "Michael",
      position: "Oprichter",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
     content: "Ongelooflijk wat ze hebben bereikt met AI-technologie. Onze nieuwe website genereert 3x meer leads dan voorheen. De combinatie van creatief design en technische excellentie is indrukwekkend.",
      rating: 5,
      date: "1 maand geleden",
      verified: true,
      helpful: 8,
      location: "Rotterdam, Nederland"
    },
    {
      name: "Emma",
      position: "Marketing Directeur",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
     content: "Het mobiele app ontwerp dat ze voor ons maakten is absoluut prachtig. Gebruikersbetrokkenheid steeg met 40% na het herontwerp. WebDesk AI weet echt hoe gebruikersgerichte ontwerpen te maken.",
      rating: 5,
      date: "3 weken geleden",
      verified: true,
      helpful: 15,
      location: "Utrecht, Nederland"
    }
  ];

  const overallRating = 4.9;
  const totalReviews = 127;

  return (
    <section className="py-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#F7F3E9] relative overflow-hidden">
      {/* Unique flowing transition from Portfolio */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#F7F3E9"></path>
          <path d="M0,120C150,20 350,120 600,70C850,20 1050,120 1200,70V0H0V120Z" fill="#F7F3E9" opacity=".4"></path>
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
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              GOOGLE REVIEWS
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Wat onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse">klanten</span> zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ontdek waarom bedrijven kiezen voor Buck Design. Lees echte reviews van tevreden klanten 
            die hun digitale transformatie hebben ervaren.
          </p>

          {/* Google Reviews Summary */}
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-md">
                <span className="text-blue-500 font-bold text-lg">G</span>
                <span className="text-red-500 font-bold text-lg">o</span>
                <span className="text-yellow-500 font-bold text-lg">o</span>
                <span className="text-blue-500 font-bold text-lg">g</span>
                <span className="text-green-500 font-bold text-lg">l</span>
                <span className="text-red-500 font-bold text-lg">e</span>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">{overallRating}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F4C430] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20 overflow-hidden"
            >
              {/* Google-style header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F4C430]/20 group-hover:ring-[#F4C430]/40 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google" 
                  className="w-8 h-3 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Rating and date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-500 fill-current group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>

              {/* Review content */}
              <div className="relative mb-6">
                <Quote className="w-6 h-6 text-blue-500 mb-3 opacity-60" />
                <p className="text-gray-600 leading-relaxed italic">
                  {testimonial.content}
                </p>
              </div>

              {/* Location and verification */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {testimonial.location}
                </div>
                {testimonial.verified && (
                  <div className="flex items-center bg-green-50 text-green-600 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    <span className="text-xs font-medium">Geverifieerd</span>
                  </div>
                )}
              </div>

              {/* Helpful section */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center text-sm text-gray-500 hover:text-blue-500 transition-colors duration-300 group/btn">
                  <ThumbsUp className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                  Nuttig ({testimonial.helpful})
                </button>
                <button className="text-sm text-gray-500 hover:text-blue-500 transition-colors duration-300 group/btn">
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>

              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
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
                <Target className="w-8 h-8 text-blue-500 animate-spin-slow mr-3" />
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Klaar om de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">volgende review</span> te worden?
                </h3>
                <TrendingUp className="w-8 h-8 text-blue-500 animate-bounce-slow ml-3" />
              </div>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sluit je aan bij onze tevreden klanten en ervaar zelf waarom Buck Design de beste keuze is
                voor je digitale transformatie.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="/contact"
                  className="group bg-transparent border-2 border-blue-500 text-gray-800 px-6 py-3 sm:px-10 sm:py-5 rounded-full font-medium text-sm sm:text-base hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center">
                    START JOUW PROJECT
                  </div>
                </a>

              </div>

              {/* Review highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">4.9/5 sterren</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="w-5 h-5 text-[#F4C430] mr-2" />
                  <span className="text-sm font-medium text-gray-700">In 1 week live</span>
                </div>
                <div className="flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">100% tevreden</span>
                </div>
              </div>

              {/* Google Reviews badge */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;