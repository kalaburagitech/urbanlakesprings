"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // ✅ Using shadCN UI Button

// ✅ Corrected Image Paths
const floorPlans = [
  { id: 1, image: "/images/property2.jpg", title: "3 BHK Floor Plan" },
  { id: 2, image: "/images/property4.jpg", title: "3.5 BHK Floor Plan" },
];

export default function FloorPlanPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="container mx-auto py-16 px-4 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        NCC Urban Lake Springs Floor Plans & Master Plan
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Exquisite Designs – Curated Exclusively For YOU!
      </p>

      {/* Floor Plan Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {floorPlans.map((plan) => (
          <div
            key={plan.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(plan.image)}
          >
            {/* ✅ Image with Background Placeholder Fix */}
            <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:shadow-2xl bg-gray-200">
              <Image
                src={plan.image}
                alt={plan.title}
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                placeholder="blur"
                blurDataURL={plan.image} // ✅ Shows a blurred version while loading
              />
            </div>

            {/* Floor Plan Title */}
            <div className="text-lg font-semibold text-gray-800 mt-4">
              {plan.title}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Lightbox Modal for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full animate-fadeIn">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Expanded Floor Plan"
              width={800}
              height={600}
              layout="intrinsic"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
