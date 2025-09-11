import React from 'react';

const DesignIllustration: React.FC = () => {
  return (
    <img 
      src="/Before (1).png"
      alt="3D rendering website hosting concept" 
      className="w-full h-auto object-cover rounded-[5%] transform transition-all duration-700 hover:scale-110 hover:rotate-1 hover:brightness-110 hover:contrast-110 hover:saturate-125 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(244,196,48,0.4)] relative z-10 animate-pulse max-w-none lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
      style={{
        filter: 'drop-shadow(0 0 20px rgba(244, 196, 48, 0.3)) drop-shadow(0 0 40px rgba(244, 196, 48, 0.1))',
        animation: 'pulse 3s ease-in-out infinite',
        borderRadius: '5%'
      }}
    />
  );
};

export default DesignIllustration;