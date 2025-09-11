import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, ArrowRight, AlertTriangle, Gift } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full blur-3xl animate-float-gentle-delayed"></div>
      </div>

      {/* Animated warning stripes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center scroll-animate">
          {/* Urgency Badge */}
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full font-bold text-sm mb-8 animate-bounce shadow-2xl">
            <AlertTriangle className="w-5 h-5 mr-2 animate-pulse" />
            BEPERKTE TIJD ACTIE
            <AlertTriangle className="w-5 h-5 ml-2 animate-pulse" />
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-red-600">Laatste kans!</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              €200 korting
            </span> op alle pakketten
          </h2>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deze maand nog: krijg €200 korting op je nieuwe AI-gedreven website. 
            <strong className="text-red-600"> Slechts 5 plekken beschikbaar!</strong>
          </p>

          {/* Countdown Timer */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-red-200 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-red-500 mr-3 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-gray-900">Actie eindigt over:</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { value: timeLeft.days, label: 'Dagen' },
                { value: timeLeft.hours, label: 'Uren' },
                { value: timeLeft.minutes, label: 'Minuten' },
                { value: timeLeft.seconds, label: 'Seconden' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl p-4 md:p-6 shadow-lg">
                    <div className="text-2xl md:text-4xl font-bold mb-2 animate-pulse">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs md:text-sm font-semibold opacity-90">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer Details */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white mb-12 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-12 h-12 mr-4 animate-bounce" />
              <h3 className="text-3xl font-bold">Exclusieve Voordelen</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">€200</div>
                <div className="text-orange-100">Directe korting</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">+1</div>
                <div className="text-orange-100">Extra revisieronde</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Gratis</div>
                <div className="text-orange-100">SEO optimalisatie</div>
              </div>
            </div>
          </div>

          {/* Pricing with Discount */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Starter', original: '€695', discounted: '€495' },
              { name: 'Professioneel', original: '€895', discounted: '€695' },
              { name: 'Enterprise', original: '€1195', discounted: '€995' }
            ].map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200 relative overflow-hidden">
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 text-sm font-bold">
                    MEEST POPULAIR
                  </div>
                )}
                
                <div className={`text-center ${index === 1 ? 'pt-8' : ''}`}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                  
                  <div className="mb-4">
                    <div className="text-2xl text-gray-400 line-through mb-2">{pkg.original}</div>
                    <div className="text-4xl font-bold text-red-600">{pkg.discounted}</div>
                    <div className="text-green-600 font-semibold text-sm">€200 besparing!</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Urgency CTA */}
          <div className="space-y-6">
            <Link
              to="/contact"
              className="group inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-110 relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex items-center">
                <Zap className="w-8 h-8 mr-3 animate-pulse" />
                CLAIM JOUW €200 KORTING NU
                <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </Link>

            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                <span className="font-semibold">Slechts 5 plekken over</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="font-semibold">Geen vooruitbetaling</span>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
            <p className="text-gray-700 font-semibold mb-4">
              "Dankzij deze actie hebben we €200 bespaard én een fantastische website gekregen!"
            </p>
            <div className="flex items-center justify-center">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">- Sarah, TechStart CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;