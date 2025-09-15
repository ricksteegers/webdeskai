import React from 'react';

const DesignIllustration: React.FC = () => {
  return (
    <div className="relative group">
      
      {/* Before/After Overlay */}
      <div className="absolute inset-0 rounded-[5%] overflow-hidden">
        {/* Before/After Central Badge */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-blue-500/30">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Before section */}
              <div className="text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-md sm:rounded-lg flex items-center justify-center mb-1 sm:mb-2 shadow-lg">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700">BEFORE</span>
                <div className="text-[6px] sm:text-[8px] md:text-[10px] text-red-600 font-medium">Verouderd</div>
              </div>
              
              {/* Transformation arrow */}
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold text-blue-500 mt-0.5 sm:mt-1 bg-blue-50 px-1 py-0.5 rounded-full">AI</span>
              </div>
              
              {/* After section */}
              <div className="text-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-md sm:rounded-lg flex items-center justify-center mb-1 sm:mb-2 shadow-lg">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-700">AFTER</span>
                <div className="text-[6px] sm:text-[8px] md:text-[10px] text-green-600 font-medium">Modern</div>
              </div>
            </div>
            
            {/* Subtitle */}
            <div className="text-center mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-gray-200">
              <div className="text-[8px] sm:text-[10px] md:text-xs font-bold text-gray-800">AI-Powered</div>
              <div className="text-[6px] sm:text-[8px] md:text-[10px] text-blue-600 font-medium">Design Engine</div>
            </div>
          </div>
        </div>
        
        {/* Before/After Labels */}
        <div className="absolute top-1/4 left-8 bg-red-500/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl font-bold text-lg shadow-2xl border-2 border-white/40">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white rounded-full mr-3 flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <div className="text-sm font-bold">BEFORE</div>
              <div className="text-xs opacity-90">Verouderd design</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-8 bg-green-500/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl font-bold text-lg shadow-2xl border-2 border-white/40">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-white rounded-full mr-3 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div>
              <div className="text-sm font-bold">AFTER</div>
              <div className="text-xs opacity-90">AI-gedreven</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Creative overlay effects */}
      <div className="absolute inset-0 rounded-[5%] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700">
        {/* Multi-layer creative overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-blue-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-cyan-500/15"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/10 via-transparent to-orange-500/10"></div>
        
        {/* Animated scan lines */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-80 shadow-xl"></div>
          <div className="absolute top-12 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60 shadow-lg" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-8 left-12 w-3.5 h-3.5 bg-purple-400 rounded-full animate-ping opacity-70 shadow-lg" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-12 right-8 w-5 h-5 bg-pink-400 rounded-full animate-ping opacity-50 shadow-xl" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-6 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping opacity-65 shadow-md" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-6 w-4.5 h-4.5 bg-emerald-400 rounded-full animate-ping opacity-55 shadow-lg" style={{ animationDelay: '2.5s' }}></div>
        </div>
        
        {/* Corner accents with rotation */}
        <div className="absolute top-6 left-6 w-10 h-10 border-3 border-blue-400/60 rounded-full animate-spin-slow shadow-lg"></div>
        <div className="absolute top-6 right-6 w-8 h-8 border-2 border-cyan-400/60 rounded-full animate-spin-slow shadow-md" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-3 border-purple-400/60 rounded-full animate-pulse shadow-xl"></div>
        <div className="absolute bottom-6 right-6 w-9 h-9 border-2 border-pink-400/60 rounded-full animate-bounce shadow-lg"></div>
        
        {/* AI Technology Badge */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl animate-pulse border-3 border-white/40 backdrop-blur-sm">
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
            AI-TRANSFORMATIE
            <svg className="w-5 h-5 ml-2 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L15.5 8.5L21 11L15.5 13.5L13 19L10.5 13.5L5 11L10.5 8.5L13 3Z"/>
            </svg>
          </span>
        </div>
        
        {/* Before/After Labels */}
        <div className="absolute top-1/4 left-8 bg-red-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl font-bold text-lg shadow-xl border-2 border-white/30 animate-pulse">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-white rounded-full mr-2 animate-ping"></div>
            BEFORE
          </span>
        </div>
        
        <div className="absolute bottom-1/4 right-8 bg-green-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl font-bold text-lg shadow-xl border-2 border-white/30 animate-pulse">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-white rounded-full mr-2 animate-ping"></div>
            AFTER
          </span>
        </div>
        
        {/* Floating tech icons */}
        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/60 animate-float-gentle">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-800">AI-Powered</div>
              <div className="text-xs text-gray-600">Design Engine</div>
            </div>
          </div>
        </div>
        
        {/* Performance indicators */}
        <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/60 animate-float-gentle-delayed">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping shadow-md"></div>
            <div>
              <div className="text-xs font-bold text-gray-800">Live in 1 week</div>
              <div className="text-xs text-green-600 font-semibold">65% goedkoper</div>
            </div>
          </div>
        </div>
        
        {/* Transformation arrow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-2xl animate-bounce border-3 border-white/50">
          <svg className="w-8 h-8 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        
        {/* Holographic grid effect */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px, 30px 30px, 60px 60px, 60px 60px',
          backgroundPosition: '0 0, 0 0, 15px 15px, 15px 15px'
        }}>
        </div>
        
        {/* Glowing edges */}
        <div className="absolute inset-0 rounded-[5%] border-2 border-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-60 animate-pulse shadow-2xl"></div>
        <div className="absolute -inset-2 rounded-[5%] border border-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-30 animate-pulse blur-sm"></div>
      </div>
    </div>
  );
};

export default DesignIllustration;