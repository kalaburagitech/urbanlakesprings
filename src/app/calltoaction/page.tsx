"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/context/modal-context"; // ✅ Import Modal Context
import { Button } from "@/components/ui/button";

// ⏳ Function to generate random countdown values
function getRandomCountdown() {
  return {
    days: Math.floor(Math.random() * 30), // Random days (0-30)
    hours: Math.floor(Math.random() * 24), // Random hours (0-23)
    minutes: Math.floor(Math.random() * 60), // Random minutes (0-59)
    seconds: Math.floor(Math.random() * 60), // Random seconds (0-59)
  };
}

export default function CallToAction() {
  const { openModal } = useModal(); // ✅ Opens Contact Popup
  const [timeLeft, setTimeLeft] = useState(getRandomCountdown());
  const [isAnimating, setIsAnimating] = useState(false); // ✅ Controls animation

  // 🕒 Update countdown every 5 seconds with animation
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true); // ✅ Start fade effect
      setTimeout(() => {
        setTimeLeft(getRandomCountdown()); // ✅ Generate new random values
        setIsAnimating(false); // ✅ Remove fade effect after update
      }, 500); // Smooth transition effect (500ms)
    }, 5000); // ✅ Updates every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <section className="container mx-auto py-16 px-4 text-center bg-orange-50 rounded-lg shadow-lg">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-orange-700 mb-4">
        Schedule Your Site-Visit to NCC Urban Lake Springs JP Nagar
      </h2>

      {/* Urgent Call to Action */}
      <p className="text-xl font-semibold text-red-600 underline mb-2">
        Hurry Up! Enquire Now
      </p>
      <p className="text-gray-800 mb-6">
        Pre Launch Prices Applicable On 1st Few Units. <br />
        Construction Linked Flexi Payment Plans.
      </p>

      {/* Countdown Timer with Animation */}
      <div className="flex justify-center gap-6 text-gray-900 text-xl font-bold mb-6">
        <div className="text-center">
          <span
            className={`block text-4xl transition-all duration-500 transform ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {timeLeft.days}
          </span>
          Days
        </div>
        <div className="text-center">
          <span
            className={`block text-4xl transition-all duration-500 transform ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {timeLeft.hours}
          </span>
          Hours
        </div>
        <div className="text-center">
          <span
            className={`block text-4xl transition-all duration-500 transform ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {timeLeft.minutes}
          </span>
          Minutes
        </div>
        <div className="text-center">
          <span
            className={`block text-4xl transition-all duration-500 transform ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {timeLeft.seconds}
          </span>
          Seconds
        </div>
      </div>

      {/* Schedule Site Visit Button */}
      <Button
        onClick={openModal} // ✅ Opens Contact Modal
        className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-6 py-3 rounded-md shadow-md"
      >
        SCHEDULE SITE VISIT
      </Button>
    </section>
  );
}
