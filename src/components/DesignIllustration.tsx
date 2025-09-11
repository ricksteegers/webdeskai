import React from 'react';

const DesignIllustration: React.FC = () => {
  return (
    <div className="relative group">
      <img 
        src="/Before and after.png"
        alt="AI-gedreven website transformatie - Before & After" 
        className="w-full h-auto object-cover rounded-[5%] transform transition-all duration-700 hover:scale-110 hover:rotate-1 hover:brightness-110 hover:contrast-110 hover:saturate-125 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(244,196,48,0.4)] relative z-10 animate-pulse max-w-none lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(244, 196, 48, 0.3)) drop-shadow(0 0 40px rgba(244, 196, 48, 0.1))',
          animation: 'pulse 3s ease-in-out infinite',
          borderRadius: '5%'
        }}
      />
      
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