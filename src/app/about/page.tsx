"use client";

import { Button } from "@/components/ui/button"; // ✅ Using shadCN UI Button
import { useModal } from "@/context/modal-context"; // ✅ Import the modal context
import Image from "next/image";

export default function AboutPage() {
  const { openModal } = useModal(); // ✅ Use the modal hook

  return (
    <section className="container mx-auto py-16 px-6 lg:px-12 text-gray-800">
      {/* About Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-wide mb-6 text-blue-900">
          About NCC Urban Lake Springs
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Presenting **NCC Urban Lake Springs**, an **Abode of Peace!** Located in **JP Nagar, Bangalore**, this premium residential project offers an **elegant and vibrant community living experience**.
          Designed to bring **comfort, luxury, and connectivity**, the project is surrounded by **renowned schools, hospitals, business hubs, and recreational spots**.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-8">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold rounded-md shadow-md"
          onClick={openModal} // ✅ Opens the contact modal
        >
          Get Complete Details
        </Button>
      </div>

      {/* Image Section */}
      <div className="mt-12 flex justify-center">
        <Image 
          src="/images/property2.jpg" // ✅ Ensure this image exists in `public/images/`
          alt="NCC Urban Lake Springs"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
