import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah van der Berg",
      position: "CEO, TechStart",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "WebDesk AI heeft onze website volledig getransformeerd! De AI-gedreven aanpak leverde een design op dat perfect aansluit bij onze merkidentiteit. Het proces was snel, professioneel en het resultaat overtrof onze verwachtingen.",
      rating: 5
    },
    {
      name: "Michael Jansen",
      position: "Oprichter, InnovateCorp",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Ongelooflijk wat ze hebben bereikt met AI-technologie. Onze nieuwe website genereert 3x meer leads dan voorheen. De combinatie van creatief design en technische excellentie is indrukwekkend.",
      rating: 5
    },
    {
      name: "Emma de Vries",
      position: "Marketing Directeur, GrowthCo",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Het resultaat dat ze voor ons maakten is absoluut prachtig. Gebruikersbetrokkenheid steeg met 40% na het herontwerp. WebDesk AI weet echt hoe gebruikersgerichte ontwerpen te maken.",
      rating: 5
    }
  ];

  const partners = [
    { name: "BouwGarant", logo: "/Bouwgarant new.PNG" },
    { name: "BDO", logo: "/BDO new.PNG" },
    { name: "Juridisch Loket", logo: "/Juridisch Loket new.PNG" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              KLANTBEOORDELINGEN
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Wat onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">klanten</span> zeggen
          </h2>

          {/* Overall Rating */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-4xl font-bold text-gray-900">4.9</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#F4C430] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">Gebaseerd op 50+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Testimonial Cards */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20 text-center">
                    <Quote className="w-12 h-12 text-[#F4C430] mx-auto mb-6 opacity-60" />
                    
                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-[#F4C430]/20"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#F4C430] fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-[#F4C430] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos Slider */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Vertrouwd door deze bedrijven</h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-slide space-x-12 items-center justify-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-[#F7F3E9]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F7F3E9"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;