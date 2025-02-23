"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
// import Image from "next/image";

export default function AboutPage() {
  const { openModal } = useModal();

  return (
    <section className="container mx-auto py-16 px-6 lg:px-12 text-gray-900 font-['Poppins']">
      {/* About Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide mb-6 text-[#0D0D0D] drop-shadow-lg">
          About <span className="text-[#FFD700]">NCC Urban Lake Springs</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic font-medium">
          <strong className="text-[#FFD700]">NCC Urban Lake Springs</strong>, an
          <strong> Abode of Peace!</strong> Located in <strong>JP Nagar, Bangalore</strong>,
          this premium residential project offers an
          <strong> elegant and vibrant community living experience</strong>. Designed to bring
          <strong> comfort, luxury, and connectivity</strong>, the project is surrounded by
          <strong> renowned schools, hospitals, business hubs, and recreational spots</strong>.
        </p>
      </div>

      {/* Project Details */}
      <div className="mt-12 max-w-5xl mx-auto space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
        <p>
          NCC Urban Lake Springs is a residential project developed by <strong>NCC Urban Infrastructure Limited</strong>.
          Located in Bangalore South, this project is known for offering premium
          apartments designed with modern amenities and a focus on a **comfortable living** experience.
          Facilities include **landscaped gardens, fitness centers, and recreational areas**.
        </p>
        <p>
          The project offers a range of <strong className="text-[#FFD700]">3 BHK Premium Flats</strong> and 
          <strong className="text-[#FFA500]"> 3.5 BHK Flats</strong>, currently under construction,
          catering to various budgets and lifestyle preferences.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-8 text-[#0D0D0D]">
          Popular Localities in <span className="text-[#FFD700]">Bangalore South</span>
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>JP Nagar:</strong> Well-established, close to commercial hubs.</li>
          <li><strong>Banashankari:</strong> A peaceful environment with modern amenities.</li>
          <li><strong>Jayanagar:</strong> Tree-lined streets, shopping centers, and premium flats.</li>
          <li><strong>Vijayanagar:</strong> Affordable, with great connectivity.</li>
          <li><strong>Koramangala:</strong> A hub for startups, premium 3 BHK apartments.</li>
          <li><strong>Electronic City:</strong> IT hub with budget and mid-range flats.</li>
          <li><strong>BTM Layout:</strong> Ideal for young professionals and families.</li>
        </ul>
      </div>

      {/* Developer Details */}
      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0D0D0D]">About <span className="text-[#FFD700]">NCC Urban Infrastructure Limited</span></h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-3">
          NCC Urban is a subsidiary of NCC Limited, a leading **construction and infrastructure company in India**.
          They develop **residential, commercial, and mixed-use projects** in multiple cities, including Bangalore, Hyderabad, and Chennai.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mt-4 text-gray-800">
          Notable Projects in <span className="text-[#FFD700]">Bangalore</span>:
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>NCC Urban Green Province:</strong> Luxury Villas in Sarjapur Road.</li>
          <li><strong>NCC Urban Lake Springs:</strong> Premium Luxury 3 BHK and 3.5 BHK Flats available.</li>
          <li><strong>NCC Urban Park View:</strong> Premium residences near Yelahanka New Town, Bangalore.</li>
          <li><strong>NCC Urban Parkside:</strong> NCC Urban Retreat - Upcoming Luxury Villa project near Hennur, Bangalore.</li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <Button
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 px-8 py-4 rounded-lg text-black font-semibold text-xl shadow-lg transition-all duration-300"
          onClick={openModal}
        >
          Get Complete Details
        </Button>
      </div>

      {/* Image Section */}
      {/* <div className="mt-12 flex justify-center relative">
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/property2.jpg"
            alt="NCC Urban Lake Springs"
            width={800}
            height={450}
            className="rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg hover:bg-opacity-0 transition-all duration-300"></div>
        </div>
      </div> */}
    </section>
  );
}
