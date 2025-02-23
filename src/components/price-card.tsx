"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Novatrix } from "uvcanvas"


interface PriceCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
  openModal: () => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const PriceCard: FC<PriceCardProps> = ({ title, price, image, description, openModal }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 
      hover:shadow-2xl transition-all duration-300"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
    >
      <Novatrix />

      {/* Property Image with Overlay */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Property Details */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 font-[Playfair Display] group-hover:text-[#FFD700] transition duration-300">
          {title}
        </h3>
        <p className="text-gray-700 mt-2 font-[Poppins] text-base">{description}</p>
      </div>

      {/* Price & CTA */}
      <div className="p-4 flex flex-col items-center space-y-4">
        {/* Price with Slide-in Effect */}
        <motion.div
          className="text-lg font-bold text-white bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-6 py-2 
          rounded-full shadow-lg backdrop-blur-md"
          whileHover={{ x: 10 }}
        >
          {price}
        </motion.div>

        {/* Button with Ripple Effect */}
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            onClick={openModal}
            className="relative bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 
            transition-all duration-300 px-6 py-3 rounded-lg text-black font-semibold shadow-md overflow-hidden"
          >
            View Price Details
            <span className="absolute inset-0 bg-white opacity-10 rounded-lg scale-0 group-hover:scale-150 transition-transform duration-500"></span>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PriceCard;
