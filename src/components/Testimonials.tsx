import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Jan van der Berg",
      company: "TechStart BV",
      text: "Buck Design heeft onze website volledig getransformeerd. De AI-gedreven aanpak leverde resultaten die we nooit hadden verwacht voor deze prijs.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sarah Jansen",
      company: "Innovate Solutions",
      text: "Binnen een week hadden we een volledig nieuwe website die er professioneel uitziet en perfect werkt. Ongelooflijk wat AI kan bereiken!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Mark de Vries",
      company: "Digital Growth",
      text: "De kwaliteit is beter dan wat we van traditionele bureaus kregen, maar dan voor een fractie van de prijs. Absoluut een aanrader!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F4C430] animate-pulse"></div>
            <span className="text-sm font-bold text-gray-600 tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              TESTIMONIALS
            </span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#F4C430] animate-pulse"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Wat onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">klanten</span> zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ontdek waarom bedrijven kiezen voor onze AI-gedreven aanpak en hoe we hun digitale transformatie hebben gerealiseerd.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-white/20 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded-t-3xl group-hover:h-2 transition-all duration-300"></div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#F4C430] transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F4C430] fill-current" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-[#F4C430] mb-4 opacity-50" />
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;