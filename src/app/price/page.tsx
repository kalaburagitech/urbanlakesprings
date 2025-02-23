"use client";

import PriceCard from "@/components/price-card";
import { useModal } from "@/context/modal-context";
import { motion } from "framer-motion";

const pricingData = [
  {
    title: "3 BHK Apartment",
    price: "₹1.62 Cr - 2.30 Cr",
    image: "/images/property5.jpg",
    description: "Spacious and modern design with luxurious interiors.",
  },
  {
    title: "3 BHK Apartment",
    price: "₹1.62 Cr - 2.30 Cr",
    image: "/images/property2.jpg",
    description: "Elegant apartments with premium features and amenities.",
  },
  {
    title: "3.5 BHK Apartment",
    price: "₹2.38 Cr",
    image: "/images/property1.jpg",
    description: "Exclusive high-end apartments for a superior lifestyle.",
  },
];

export default function PricePage() {
  const { openModal } = useModal();

  return (
    <section className="container mx-auto py-16 px-6 lg:px-12 text-center font-[Poppins]">
      {/* Page Title with Gold-to-Orange Gradient & Premium Font */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-[#FFD700] to-[#FFA500] drop-shadow-lg mb-6 font-[Playfair Display]"
      >
        Exclusive <span className="text-[#FFD700]">Property Pricing</span> & Plans
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-xl text-gray-700 font-medium italic mb-10"
      >
        Discover premium living spaces crafted for comfort, elegance, and luxury.
      </motion.p>

      {/* Pricing Grid with Smooth Animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {pricingData.map((property, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <PriceCard {...property} openModal={openModal} />
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:scale-105 
          transition-all duration-300 px-8 py-4 rounded-lg text-black font-semibold text-lg shadow-lg"
        >
          Get Full Pricing Details
        </button>
      </motion.div>
    </section>
  );
}
