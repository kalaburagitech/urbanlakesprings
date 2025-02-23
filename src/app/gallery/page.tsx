'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery Images
const galleryImages = [
  { id: 1, src: '/images/property1.jpg', title: 'Ncc Urban lake springs Premium Luxury flats' },
  { id: 2, src: '/images/property2.jpg', title: 'Modern premium 3bhk flats ' },
  { id: 3, src: '/images/property3.jpg', title: 'lake view East facing premium 3bhk flats ', tall: true },
  { id: 4, src: '/images/property4.jpg', title: 'Ncc Urban lake springs project Master Plan' },
  { id: 5, src: '/images/property5.jpg', title: 'High Rise premium Apartment by Ncc urban lake springs' },
  { id: 6, src: '/images/property6.jpg', title: 'Lake springs Module flats.', tall: true },
  { id: 7, src: '/images/property7.jpg', title: 'Modern premium flats Module.', tall: true },
];

export default function ImageGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Open modal for a particular image
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Navigate to previous image
  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex - 1 + galleryImages.length) % galleryImages.length : 0
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % galleryImages.length : 0
    );
  };

  return (
    <section className="container mx-auto py-16 px-4">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Explore Our Properties
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white"
            onClick={() => openModal(index)}
          >
            {/* Image Wrapper with Consistent Height */}
            <div className="relative w-full h-72"> {/* Fixed height for consistency */}
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Overlay & Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 flex items-end p-4 text-white text-lg font-semibold transition-opacity duration-300">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {/* Image Zoom Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            >
              <X />
            </button>

            {/* Image Navigation */}
            <div className="flex items-center justify-between">
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Image Display with Scrollable Support for Tall Images */}
              <div
                className={`flex flex-col items-center ${
                  galleryImages[selectedImageIndex].tall ? 'h-[600px] overflow-y-auto' : 'h-auto'
                }`}
              >
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <p className="text-center text-gray-900 mt-4 text-lg font-semibold">
                  {galleryImages[selectedImageIndex].title}
                </p>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
