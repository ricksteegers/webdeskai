import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap, ArrowRight, Flame, AlertCircle } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches zero
          days = 7;
          hours = 23;
          minutes = 45;
          seconds = 30;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating alert icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 animate-bounce">
          <Flame className="w-8 h-8 text-red-500 opacity-60" />
        </div>
        <div className="absolute top-32 right-32 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <AlertCircle className="w-6 h-6 text-orange-500 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce" style={{ animationDelay: '1s' }}>
          <Zap className="w-7 h-7 text-yellow-500 opacity-60" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Urgency Header */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg animate-pulse mb-4">
              <Flame className="w-5 h-5 mr-2" />
              Beperkte tijd actie
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-500">Laatste kans!</span><br />
              Bespaar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] to-orange-500">€1305</span> op je website
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Deze maand nog: krijg een premium website voor slechts <strong className="text-[#F4C430]">€695</strong> 
              in plaats van €2000. Maar wees er snel bij - deze actie eindigt over:
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-red-200 mb-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Dagen', value: timeLeft.days },
                { label: 'Uren', value: timeLeft.hours },
                { label: 'Minuten', value: timeLeft.minutes },
                { label: 'Seconden', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl p-4 mb-2 shadow-lg">
                    <div className="text-3xl lg:text-4xl font-bold">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer Details */}
          <div className="bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Wat krijg je voor €695?</h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                {[
                  "Premium AI-gedreven design",
                  "4 volledig gevulde pagina's",
                  "Responsive voor alle apparaten",
                  "Basis SEO optimalisatie"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                {[
                  ".nl domeinnaam inbegrepen",
                  "100% eigendom, geen maandkosten",
                  "2 rondes revisies",
                  "Binnen 1 week live"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Savings Highlight */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">€1305 BESPARING</div>
                <div className="text-gray-700">
                  Normaal €2000 → Nu slechts <span className="font-bold text-[#F4C430]">€695</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact"
              className="group bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-110 transition-all duration-500 relative overflow-hidden"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center">
                <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                CLAIM DEZE AANBIEDING
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            <a 
              href="tel:+31645830810"
              className="group bg-transparent border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                BEL DIRECT: +31 6 45830810
              </div>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>Geen vooruitbetaling</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>100% tevredenheidsgarantie</span>
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span>Binnen 1 week live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curved transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1 z-10">
        <svg className="w-full h-20 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default UrgencySection;