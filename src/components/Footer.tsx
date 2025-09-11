import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">

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

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 group cursor-pointer">
              <img 
                src="/1.png" 
                alt="WebDesk AI" 
                className="h-16 w-auto group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI-gedreven website ontwikkeling tegen onverslaanbare prijzen. Onze expertise in kunstmatige intelligentie 
              stelt ons in staat om premium kwaliteit websites te leveren voor een fractie van traditionele kosten.
            </p>
            
            {/* Enhanced stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400 animate-pulse">50+</div>
                <div className="text-xs text-gray-400">Projecten</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400 animate-pulse">100%</div>
                <div className="text-xs text-gray-400">Tevreden</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-400 animate-pulse">4.9</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Snelle Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Tarieven
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Over Ons
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 animate-pulse" />
                <a href="mailto:hallo@webdeskai.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  hallo@webdeskai.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 animate-pulse" />
                <a href="tel:+31645830810" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  +31 6 45830810
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 animate-pulse" />
                <span className="text-gray-400">
                  Verdunplein 17<br />
                  5627 SZ Eindhoven
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WebDesk AI. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#F4C430] text-sm transition-colors duration-200">
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacybeleid
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Algemene Voorwaarden
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Cookiebeleid
              </a>
            </div>
          </div>
          
          {/* Enhanced bottom section */}
          <div className="mt-8 pt-8 border-t border-gray-800/50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
                  AI-GEDREVEN WEBSITE ONTWIKKELING
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400 animate-pulse"></div>
              </div>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                Gemaakt met ❤️ en AI-technologie in Nederland. 
                Transformeer je digitale aanwezigheid met onze revolutionaire aanpak.
              </p>
              
              {/* Trust badges */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-600">
                <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>SSL Beveiligd</span>
                <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>GDPR Compliant</span>
                <span className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>Nederlandse Hosting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;