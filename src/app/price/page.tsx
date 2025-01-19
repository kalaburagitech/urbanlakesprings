"use client";

import PriceCard from "@/components/price-card";
import { useModal } from "@/context/modal-context"; // ✅ Import useModal

const pricingData = [
  {
    title: "3 BHK Apartment",
    price: "$200,000",
    image: "/images/property5.jpg",
    description: "Spacious and modern design with luxurious interiors.",
  },
  {
    title: "3 BHK Apartment",
    price: "$300,000",
    image: "/images/property2.jpg",
    description: "Elegant apartments with premium features and amenities.",
  },
  {
    title: "3.5 BHK Apartment",
    price: "$400,000",
    image: "/images/property1.jpg",
    description: "Exclusive high-end apartments for a superior lifestyle.",
  },
];

export default function PricePage() {
  const { openModal } = useModal(); // ✅ Use modal context

  return (
    <section className="container mx-auto py-16 px-4 text-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-3">
        Property Pricing & Plans
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Discover premium living spaces designed for comfort and luxury.
      </p>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingData.map((property, index) => (
          <PriceCard key={index} {...property} openModal={openModal} />
        ))}
      </div>
    </section>
  );
}
