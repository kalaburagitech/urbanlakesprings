"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface PriceCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
  openModal: () => void;
}

const PriceCard: FC<PriceCardProps> = ({ title, price, image, description, openModal }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white border border-gray-300 hover:shadow-2xl transition-all duration-300">
      {/* Property Image with Overlay */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Property Details */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#FFD700] transition duration-300">
          {title}
        </h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>

      {/* Price & CTA */}
      <div className="p-4 flex flex-col items-center space-y-4">
        {/* Price with Gold Gradient Effect */}
        <div className="text-lg font-bold text-white bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-6 py-2 rounded-full shadow-lg backdrop-blur-md">
          {price}
        </div>

        {/* View Price Button with Gold Theme */}
        <Button
          onClick={openModal}
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 px-6 py-3 rounded-md text-black font-semibold shadow-lg transition-all duration-300"
        >
          View Price Details
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
