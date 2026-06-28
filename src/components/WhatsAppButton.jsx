import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hello%20Spark%20Institute,%20I%20am%20interested%20in%20academic%20admissions.', '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center group"
      aria-label="Connect via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white stroke-none" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-semibold pl-0 group-hover:pl-2">
        Chat with Admissions
      </span>
    </button>
  );
};

export default WhatsAppButton;