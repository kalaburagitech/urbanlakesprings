"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // ✅ Use shadCN UI Button

interface PriceCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
  openModal: () => void; // ✅ Function to open modal
}

const PriceCard: FC<PriceCardProps> = ({ title, price, image, description, openModal }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Property Details */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Price & CTA */}
      <div className="p-4 flex flex-col items-center space-y-3">
        {/* Price with Glassmorphism Effect */}
        <div className="text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 rounded-full shadow-md">
          {price}
        </div>

        {/* View Price Button */}
        <Button
          onClick={openModal} // ✅ Opens contact modal
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full"
        >
          View Price Details
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
