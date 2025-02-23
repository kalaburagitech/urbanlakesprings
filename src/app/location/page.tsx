"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/context/modal-context"; // Import modal context

const LocationSection: FC = () => {
  const { openModal } = useModal(); // Get openModal function
  const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="location"
      className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center px-4"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          key={isMuted ? "muted" : "unmuted"} // Forces re-render when toggling sound
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/VKyi6OZKTgM?autoplay=1&loop=1&playlist=VKyi6OZKTgM&controls=0&showinfo=0&modestbranding=1&${isMuted ? "mute=1" : "mute=0"}`}
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </div>

      {/* Sound Toggle Button */}
      <motion.button
        onClick={toggleSound}
        className="absolute bottom-6 right-6 bg-black/50 text-white font-semibold px-5 py-3 rounded-full shadow-lg backdrop-blur-md hover:bg-white/30 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        {isMuted ? "🔇 Unmute Sound" : "🔊 Mute Sound"}
      </motion.button>

      {/* Project Title & Description */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-[#FFD700] drop-shadow-lg mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to NCC Urban Lake Springs 🌟
      </motion.h2>

      <motion.p
        className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Experience **luxury living** with **serene landscapes**, **ultra-modern apartments**, and
        **top-tier amenities** at NCC Urban Lake Springs. Nestled in a prime location, it's a perfect
        blend of **nature & urban convenience**.
      </motion.p>

      {/* Location Details Box */}
      <motion.div
        className="absolute top-6 left-6 bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-7 md:p-8 rounded-2xl shadow-2xl w-[200px] sm:w-[250px] md:w-[280px] h-[170px] sm:h-[210px] md:h-[250px] transition-transform duration-300"
        initial={{ opacity: 0, x: -150, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 15px 30px rgba(255, 215, 0, 0.5)", // Soft golden glow
          rotate: 0.5,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-white text-sm sm:text-lg font-semibold mb-3 text-center">
          📍 Our Location
        </h3>
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7779.276401261862!2d77.565117!3d12.866629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b7ce9247083%3A0x485e446d2a63b3e!2sNCC%20Urban%20Lake%20Springs!5e0!3m2!1sen!2sus!4v1737010094808!5m2!1sen!2sus"
          width="100%"
          height="80%"
          className="rounded-md shadow-lg"
          loading="lazy"
          initial={{ y: 10 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        ></motion.iframe>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 px-6 py-3 rounded-lg text-black font-semibold text-lg shadow-lg transition-all duration-300 animate-pulse"
        >
          Get in Touch 📞
        </button>
      </motion.div>
    </section>
  );
};

export default LocationSection;
