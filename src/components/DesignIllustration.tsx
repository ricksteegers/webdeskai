import React from 'react';
import { Monitor, Smartphone, Tablet, Palette, Code, Zap } from 'lucide-react';

const DesignIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main illustration container */}
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
        
        {/* Central device mockup */}
        <div className="relative">
          {/* Desktop mockup */}
          <div className="bg-gray-900 rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-transform duration-500">
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Browser bar */}
              <div className="bg-gray-100 px-4 py-2 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  webdeskai.com
                </div>
              </div>
              
              {/* Website content mockup */}
              <div className="p-6 space-y-4">
                <div className="h-8 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                  <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded"></div>
                  <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="absolute -bottom-4 -right-4 bg-gray-900 rounded-2xl p-2 shadow-xl transform hover:scale-110 transition-transform duration-500 z-10">
            <div className="bg-white rounded-lg w-20 overflow-hidden">
              <div className="bg-gray-100 px-2 py-1">
                <div className="w-8 h-1 bg-gray-300 rounded mx-auto"></div>
              </div>
              <div className="p-2 space-y-1">
                <div className="h-2 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded w-3/4"></div>
                <div className="h-1 bg-gray-200 rounded w-full"></div>
                <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                <div className="grid grid-cols-2 gap-1 mt-2">
                  <div className="h-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded"></div>
                  <div className="h-4 bg-gradient-to-br from-green-100 to-green-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet mockup */}
          <div className="absolute -top-4 -left-4 bg-gray-900 rounded-xl p-2 shadow-xl transform hover:scale-110 transition-transform duration-500 z-10">
            <div className="bg-white rounded-lg w-16 overflow-hidden">
              <div className="bg-gray-100 px-2 py-1">
                <div className="w-6 h-1 bg-gray-300 rounded mx-auto"></div>
              </div>
              <div className="p-2 space-y-1">
                <div className="h-1.5 bg-gradient-to-r from-[#F4C430] to-orange-500 rounded w-3/4"></div>
                <div className="h-0.5 bg-gray-200 rounded w-full"></div>
                <div className="h-0.5 bg-gray-200 rounded w-4/5"></div>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  <div className="h-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded"></div>
                  <div className="h-3 bg-gradient-to-br from-pink-100 to-pink-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating design elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* AI Tools floating around */}
          <div className="absolute top-4 right-4 bg-gradient-to-br from-[#F4C430] to-orange-500 rounded-full p-3 shadow-lg animate-float-gentle">
            <Palette className="w-4 h-4 text-white" />
          </div>
          
          <div className="absolute bottom-4 left-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-3 shadow-lg animate-float-gentle-delayed">
            <Code className="w-4 h-4 text-white" />
          </div>
          
          <div className="absolute top-1/2 right-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2 shadow-lg animate-bounce-slow">
            <Zap className="w-3 h-3 text-white" />
          </div>
          
          <div className="absolute top-8 left-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full p-2 shadow-lg animate-drift-left">
            <Monitor className="w-3 h-3 text-white" />
          </div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F4C430" />
                <stop offset="100%" stopColor="#ff8c00" />
              </linearGradient>
            </defs>
            <path
              d="M50,50 Q200,100 350,50"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M50,250 Q200,200 350,250"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </svg>

          {/* Floating particles */}
          <div className="absolute top-12 left-12 w-2 h-2 bg-[#F4C430] rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-12 right-12 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4C430]/10 via-transparent to-orange-500/10 rounded-3xl pointer-events-none"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -inset-4 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#F4C430] to-orange-400 rounded-full blur-2xl animate-float-gentle"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl animate-float-gentle-delayed"></div>
        <div className="absolute top-1/2 left-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl animate-drift-left"></div>
      </div>
    </div>
  );
};

export default DesignIllustration;