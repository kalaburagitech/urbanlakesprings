"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import Image from "next/image";

export default function AboutPage() {
  const { openModal } = useModal();

  return (
    <section className="container mx-auto py-16 px-6 lg:px-12 text-gray-900 font-[Poppins]">
      {/* About Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold uppercase tracking-wide mb-6 text-[#0D0D0D] drop-shadow-lg">
          About NCC Urban Lake Springs
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 italic">
          <strong className="text-[#FFD700]">NCC Urban Lake Springs</strong>, an{" "}
          <strong>Abode of Peace!</strong>
          Located in <strong>JP Nagar, Bangalore</strong>, this premium
          residential project offers an{" "}
          <strong>elegant and vibrant community living experience</strong>.
          Designed to bring
          <strong> comfort, luxury, and connectivity</strong>, the project is
          surrounded by
          <strong>
            {" "}
            renowned schools, hospitals, business hubs, and recreational spots
          </strong>
          .
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <Button
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 px-6 py-3 rounded-md text-black font-semibold shadow-lg transition-all duration-300"
          onClick={openModal}
        >
          Get Complete Details
        </Button>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex justify-center relative">
        <div className="relative rounded-lg overflow-hidden shadow-2xl ">
          <Image
            src="/images/property2.jpg"
            alt="NCC Urban Lake Springs"
            width={800}
            height={450}
            className="rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg hover:bg-opacity-0 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
}
