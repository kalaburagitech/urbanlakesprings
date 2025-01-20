"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/context/modal-context";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// ⏳ Initial Countdown Timer (Starts from 24:60:60)
const initialTime = {
  days: 0,
  hours: 24,
  minutes: 60,
  seconds: 60,
};

export default function CallToAction() {
  const { openModal } = useModal();
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              days = days > 0 ? days - 1 : 0;
            }
          }
        }

        // Reset the countdown when it reaches 00:00:00:00
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          return initialTime; // Reset to initial time
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto py-16 px-6 text-center bg-gradient-to-b from-[#BFECFF] to-[#FFCCEA] rounded-xl shadow-2xl"
    >
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-white drop-shadow-lg mb-4">
        Schedule Your Site-Visit to
      </h2>
      <h2 className="text-3xl font-bold text-black bg-white px-4 py-2 rounded-lg inline-block shadow-md">
        NCC Urban Lake Springs, JP Nagar
      </h2>

      {/* Urgent Call to Action */}
      <p className="text-2xl font-semibold text-red-700 underline mt-4 mb-2 animate-pulse">
        Hurry Up! Limited Time Offer
      </p>
      <p className="text-lg text-white font-medium mb-8">
        Pre Launch Prices Applicable On First Few Units. <br />
        Construction Linked Flexi Payment Plans Available.
      </p>

      {/* Countdown Timer with Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-black text-xl font-bold mb-6">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center bg-white px-6 py-4 rounded-lg shadow-md w-full max-w-[140px] mx-auto"
          >
            <motion.span
              key={label}
              className="block text-5xl font-bold transition-all duration-500 transform"
            >
              {timeLeft[label.toLowerCase() as keyof typeof timeLeft]
                .toString()
                .padStart(2, "0")}
            </motion.span>
            <span className="text-lg font-medium text-gray-600">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Schedule Site Visit Button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6"
      >
        <Button
          onClick={openModal}
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 px-8 py-4 rounded-lg text-black font-bold shadow-lg transition-all duration-300"
        >
          SCHEDULE SITE VISIT
        </Button>
      </motion.div>
    </motion.section>
  );
}
