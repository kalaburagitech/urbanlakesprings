"use client";

import { Phone, MessageCircle } from "lucide-react";

const ContactButtons: React.FC = () => {
  return (
    <>
      {/* WhatsApp Button (Left Side) */}
      <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50">
        <a href="https://wa.me/9945264555" target="_blank" rel="noopener noreferrer">
          <div className="bg-green-500 text-white p-4 md:p-5 rounded-full shadow-xl flex items-center justify-center 
                          cursor-pointer transition-transform transform hover:scale-110 active:scale-95
                          w-14 h-14 md:w-16 md:h-16">
            <MessageCircle size={32} className="md:size-36" />
          </div>
        </a>
      </div>

      {/* Call Button (Right Side) */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <a href="tel:+91 9945264555">
          <div className="bg-blue-500 text-white p-4 md:p-5 rounded-full shadow-xl flex items-center justify-center 
                          cursor-pointer transition-transform transform hover:scale-110 active:scale-95
                          w-14 h-14 md:w-16 md:h-16">
            <Phone size={32} className="md:size-36" />
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactButtons;
