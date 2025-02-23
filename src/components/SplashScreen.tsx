"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // ✅ Close Icon

interface BankPopupProps {
  onFinish: () => void; // ✅ Callback when popup closes
}

export default function BankPopup({ onFinish }: BankPopupProps) {
  const [showPopup, setShowPopup] = useState(true);

  // Auto-hide the pop-up after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
      onFinish(); // ✅ Notify parent when hidden
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showPopup) return null; // Hide after time expires

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 w-[90%] max-w-md md:max-w-lg"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setShowPopup(false);
            onFinish();
          }}
          className="absolute top-2 right-2 text-gray-700 hover:text-red-500 transition p-2 rounded-full bg-white shadow-md"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="w-full bg-white bg-opacity-30 backdrop-blur-lg text-center py-3 rounded-md shadow-md">
          <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase">
            Approved By
          </h2>
        </div>

        {/* Bank Logos */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 w-full">
          {/* HDFC Logo & Text */}
          <div className="flex flex-col items-center space-y-2">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_45_4204)">
                <path d="M0 0H24V24H0V0Z" fill="#ED232A" />
                <path d="M4.20056 4.20067H19.8023V19.8024H4.20056V4.20067Z" fill="white" />
                <path d="M10.8003 0H13.1993V24H10.8003V0Z" fill="white" />
                <path d="M0 10.8034H24V13.2024H0V10.8034Z" fill="white" />
                <path d="M8.40112 8.40133H15.6014V15.6017H8.40112V8.40133Z" fill="#004C8F" />
              </g>
              <defs>
                <clipPath id="clip0_45_4204">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">HDFC Bank</h3>
          </div>

          {/* SBI Logo & Text */}
          <div className="flex flex-col items-center space-y-2">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_45_4204)">
                <path d="M12 0.00366211C5.3726 0.00366211 0 5.38872 0 12.0313C0 18.2589 4.722 23.3807 10.772 23.9965V15.2593C9.47167 14.7633 8.54529 13.5039 8.54529 12.0313C8.54529 10.1259 10.0946 8.57569 12 8.57569C13.9045 8.57569 15.4556 10.1259 15.4556 12.0313C15.4556 13.5039 14.5274 14.7631 13.2271 15.2593V23.9965C19.278 23.3807 24 18.2589 24 12.0313C24 5.38872 18.6274 0.00366211 12 0.00366211Z" fill="#00B5EF"/>
              </g>
              <defs>
                <clipPath id="clip0_45_4204">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">SBI Bank</h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
