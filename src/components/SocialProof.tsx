import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah",
      position: "Ondernemer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "WebDesk AI heeft onze website volledig getransformeerd! De AI-gedreven aanpak leverde een design op dat perfect aansluit bij onze merkidentiteit. Het proces was snel, professioneel en het resultaat overtrof onze verwachtingen.",
      location: "Amsterdam, Nederland"
    },
    {
      name: "Michael",
      position: "Oprichter",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Ongelooflijk wat ze hebben bereikt met AI-technologie. Onze nieuwe website genereert 3x meer leads dan voorheen. De combinatie van creatief design en technische excellentie is indrukwekkend.",
      location: "Rotterdam, Nederland"
    },
    {
      name: "Emma",
      position: "Marketing Manager",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Het design dat ze voor ons maakten is absoluut prachtig. Gebruikersbetrokkenheid steeg met 40% na het herontwerp. WebDesk AI weet echt hoe gebruikersgerichte ontwerpen te maken.",
      location: "Utrecht, Nederland"
    }
  ];

  const partnerLogos = [
    { name: "BouwGarant", logo: "/Bouwgarant new.PNG" },
    { name: "BDO", logo: "/BDO new.PNG" },
    { name: "Juridisch Loket", logo: "/Juridisch Loket new.PNG" },
    { name: "Melis Logistics", logo: "/15.png" },
    { name: "Chapeau", logo: "/23.png" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Rotated transition from ProblemSolution */}
      <div className="absolute top-0 left-0 right-0 -mt-1 z-10">
        <svg className="w-full h-24 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0H0Z" fill="white"></path>
          <path d="M0,120C150,20 350,120 600,70C850,20 1050,120 1200,70V0H0V120Z" fill="white" opacity=".4"></path>
        </svg>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-8">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-indigo-400 via-blue-400 to-cyan-400 rounded-full blur-3xl animate-drift-left"></div>
        
        {/* Medium floating shapes */}
        <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full blur-2xl animate-drift-right opacity-60"></div>
        <div className="absolute bottom-32 left-32 w-56 h-56 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-2xl animate-float-gentle opacity-50"></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-16 left-1/3 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl animate-bounce-slow opacity-40"></div>
        <div className="absolute bottom-16 right-1/3 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full blur-xl animate-float-gentle-delayed opacity-45"></div>
      </div>

      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-8">
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, #F4C430 49%, #F4C430 51%, transparent 52%)`,
          backgroundSize: '100px 100px',
          opacity: 0.1
        }}></div>
        
        {/* Hexagon pattern */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.3'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          transform: 'rotate(15deg)',
          animation: 'spin-slow 30s linear infinite'
        }}></div>
      </div>

      {/* Floating particles and shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60 shadow-lg"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-8 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 transform rotate-45 animate-float-gentle opacity-30"></div>
        <div className="absolute top-2/3 right-8 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-bounce-slow opacity-25"></div>
        <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-gradient-to-br from-indigo-400 to-purple-400 transform rotate-12 animate-drift-left opacity-35"></div>
        
        {/* Animated lines and curves */}
        <div className="absolute top-1/4 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse opacity-30 transform -rotate-45"></div>
        
        {/* Floating icons */}
        <div className="absolute top-16 right-16 opacity-15 animate-float-gentle">
          <Star className="w-12 h-12 text-blue-500" />
        </div>
        <div className="absolute bottom-16 left-16 opacity-15 animate-float-gentle-delayed">
          <Quote className="w-10 h-10 text-green-500" />
        </div>
        <div className="absolute top-1/2 right-8 opacity-15 animate-bounce-slow">
          <Star className="w-8 h-8 text-purple-500" />
        </div>
        
        {/* Spiral pattern */}
        <div className="absolute top-1/3 left-1/2 w-48 h-48 opacity-10 animate-spin-slow">
          <div className="w-full h-full border-2 border-dashed border-blue-400 rounded-full"></div>
          <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-dashed border-purple-400 rounded-full"></div>
          <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-cyan-400 rounded-full"></div>
        </div>
        
        {/* Constellation effect */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
        
        {/* Connect the dots with animated lines */}
        <svg className="absolute top-1/4 left-1/4 w-64 h-64 opacity-20" viewBox="0 0 100 100">
          <line x1="10" y1="10" x2="30" y2="30" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2,2" className="animate-pulse" />
          <line x1="30" y1="30" x2="50" y2="50" stroke="#8B5CF6" strokeWidth="0.5" strokeDasharray="2,2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="50" y1="50" x2="70" y2="30" stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="2,2" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 scroll-animate">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500 animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              REVIEWS
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500 animate-pulse"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Wat onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">klanten</span> zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ontdek waarom bedrijven kiezen voor WebDesk AI en lees echte reviews van tevreden klanten
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20 scroll-animate-scale">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-16 h-16 text-blue-500" />
              </div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-blue-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].position}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="scroll-animate">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vertrouwd door deze bedrijven
            </h3>
            <p className="text-gray-600">
              Deze bedrijven passen AI al succesvol toe
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 sm:p-6 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 sm:max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">Gemiddelde rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Tevreden klanten</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Projecten voltooid</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-white transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default SocialProof;