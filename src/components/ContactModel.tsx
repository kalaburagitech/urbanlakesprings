"use client";

import { useState } from "react";
import { useModal } from "@/context/modal-context"; // ✅ Correct Import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactModal() {
  const { isOpen, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null; // ✅ Hide modal when not open

  // 📌 Function to download the PDF
  const handleDownloadPDF = () => {
    const pdfUrl = "/pdf/price-list.pdf"; // ✅ Ensure the PDF is in `public/pdf/`
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "RealEstate_Price_List.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 📌 Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);

    // 📌 Download PDF automatically after successful submission
    setTimeout(() => {
      handleDownloadPDF();
      closeModal();
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name
              </label>
              <Input id="name" type="text" placeholder="John Doe" required className="w-full p-3 border border-gray-300 rounded-md" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Your Email
              </label>
              <Input id="email" type="email" placeholder="john.doe@example.com" required className="w-full p-3 border border-gray-300 rounded-md" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea id="message" placeholder="Type your message here" required className="w-full p-3 border border-gray-300 rounded-md" rows={4}></textarea>
            </div>

            <div className="flex justify-end">
              <Button onClick={closeModal} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white mr-2">
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white">
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-600 mb-3">Thank you! Your request has been submitted.</h3>
            <div className="flex justify-center gap-4">
              <Button onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white">
                Download PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
