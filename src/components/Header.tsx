import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Enhanced Background decorative elements */}

      <div className="max-w-7xl mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/WebDesnk AI.png" 
                alt="WebDesk AI" 
                className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Floating sparkle effect */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-[#F4C430] animate-spin-slow" />
              </div>
              
              {/* Underline effect */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4C430] to-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Tarieven', href: '#pricing', isAnchor: true },
              { name: 'Diensten', href: '#services', isAnchor: true },
              { name: 'Over ons', href: '/over-ons' }
            ].map((item, index) => (
              <div key={index} className="relative group">
                {item.isAnchor ? (
                  <a
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-[#F4C430] transition-all duration-300 font-medium relative overflow-hidden group"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.substring(1);
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        // If not on homepage, navigate to homepage first
                        window.location.href = `/${item.href}`;
                      }
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact"
              className="group bg-transparent border-2 border-blue-500 text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden inline-flex items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-500 text-blue-500 group-hover:text-white" />
                <span>Contact</span>
              </div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            className="lg:hidden relative group text-gray-700 hover:text-blue-500 p-2 rounded-full hover:bg-blue-500/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-gray-200/50 relative">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl -m-4"></div>
            
            <div className="relative z-10 flex flex-col space-y-6 pt-6">
              {[
                { name: 'Tarieven', href: '#pricing', isAnchor: true },
                { name: 'Diensten', href: '#services', isAnchor: true },
                { name: 'Over ons', href: '/over-ons' }
              ].map((item, index) => (
                <div key={index}>
                  {item.isAnchor ? (
                    <a
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium relative overflow-hidden group py-2 block"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        const targetId = item.href.substring(1);
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          // If not on homepage, navigate to homepage first
                          window.location.href = `/${item.href}`;
                        }
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      
                      {/* Animated border */}
                      <div className="absolute left-0 top-0 w-0 h-full border-l-2 border-blue-500 group-hover:w-1 transition-all duration-300"></div>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="group text-gray-700 hover:text-blue-500 transition-all duration-300 font-medium relative overflow-hidden py-2 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      
                      {/* Animated border */}
                      <div className="absolute left-0 top-0 w-0 h-full border-l-2 border-blue-500 group-hover:w-1 transition-all duration-300"></div>
                    </Link>
                  )}
                </div>
              ))}
              
              <Link 
                to="/contact"
                className="group bg-transparent border-2 border-blue-500 text-gray-800 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-2 backdrop-blur-sm mt-6 w-full relative overflow-hidden inline-flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-500 text-blue-500 group-hover:text-white" />
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-8 right-32 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-4 left-32 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </header>
  );
};

export default Header;