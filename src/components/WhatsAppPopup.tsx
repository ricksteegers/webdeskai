import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppPopup: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumber = "31645830810";
  const message = "Hallo! Ik ben geïnteresseerd in jullie AI-gedreven website services. Kunnen we een gesprek plannen?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded popup */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Buck Design</h3>
                <p className="text-sm text-green-600">Online nu</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Message */}
          <div className="p-4">
            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                👋 Hallo! Heb je vragen over onze AI-gedreven websites? 
                We helpen je graag verder met een gratis adviesgesprek!
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Chat
              </a>
              
              <a
                href="tel:+31645830810"
                className="flex items-center justify-center w-full bg-white border-2 border-green-500 text-green-600 px-4 py-3 rounded-xl font-medium hover:bg-green-50 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Bel Direct
              </a>
            </div>
          </div>

          {/* Quick info */}
          <div className="px-4 pb-4">
            <div className="text-xs text-gray-500 text-center">
              Reactietijd: binnen 5 minuten • Gratis adviesgesprek
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white animate-bounce">
          1
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Hover tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat met ons!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppPopup;