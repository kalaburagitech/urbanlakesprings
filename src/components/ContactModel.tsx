"use client";

import { useState } from "react";
import axios from "axios";
import { useModal } from "@/context/modal-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function BrochureModal() {
  const { isOpen, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!/^[6789]\d{9}$/.test(contact)) {
      setError("Please enter a valid phone number starting with 6, 7, 8, or 9.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://reakestateemail.onrender.com/send-email", {
        contact,
        email, // No need to append @gmail.com
      });

      if (response.data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          closeModal();
          setIsSubmitted(false);
        }, 1500);
      } else {
        throw new Error(response.data.message || "Failed to submit details");
      }
    } catch {
      setError("Failed to submit details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      {/* Rotating Glowing Effect Container */}
      <div className="relative flex items-center justify-center w-full max-w-3xl overflow-hidden">
        {/* Animated Border Effect */}
        <div className="absolute inset-0 w-full h-full animate-spin-slow rounded-2xl overflow-hidden">
          <div className="absolute -inset-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 w-[200px] h-[200px] rounded-full blur-xl opacity-50 animate-spin-slower"></div>
        </div>

        {/* Main Modal Card */}
        <div className="relative bg-white flex flex-col sm:flex-row rounded-2xl shadow-2xl overflow-hidden w-full p-8 backdrop-blur-lg bg-opacity-40 z-10 border border-gray-200">
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 text-lg font-bold hover:text-gray-900">✕</button>

          {/* Left Sidebar */}
          <div className="relative w-full sm:w-1/2 flex flex-col justify-center items-center text-white p-8 bg-cover bg-center font-serif overflow-hidden" style={{ backgroundImage: "url('/images/property5.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-l-2xl"></div>
            <div className="relative z-10 text-center">
              <Image src="/images/logo.png" alt="NCC Logo" width={100} height={100} className="mb-4" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-lg">NCC Urban Lake Springs</h2>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 w-full sm:w-1/2 bg-white rounded-r-2xl backdrop-blur-xl bg-opacity-80 font-serif shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">Download Brochure Now</h2>
            <p className="text-gray-600 text-center mb-6 text-base sm:text-lg">Please share your details to download brochure</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 p-4 rounded-lg w-full text-lg focus:ring-2 focus:ring-blue-500 transition-all bg-transparent"
              />

              <Input
                type="text"
                name="contact"
                placeholder="Phone Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="border-2 p-4 rounded-lg w-full text-lg focus:ring-2 focus:ring-blue-500 transition-all bg-transparent"
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <Button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white py-4 px-8 rounded-lg w-full shadow-lg text-lg transition-all ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>

              <Button
                type="button"
                className="flex items-center justify-center w-full mt-3 border-2 py-4 px-8 rounded-lg gap-3 hover:bg-gray-100 shadow-md text-lg"
              >
                <FcGoogle size={24} /> Continue with Google
              </Button>

              {isSubmitted && (
                <p className="text-green-500 text-center mt-3">Details submitted successfully! ✅</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
