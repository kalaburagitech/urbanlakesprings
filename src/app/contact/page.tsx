"use client";

import ContactModal from "@/components/ContactModel";
import { useModal } from "@/context/modal-context";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const { openModal } = useModal();

  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        Reach out to us for any inquiries or questions.
      </p>

      <div className="text-center">
        <Button onClick={openModal} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white">
          Open Contact Form
        </Button>
      </div>

      <ContactModal /> {/* ✅ Contact Modal is always included, but controlled by `useModal` */}
    </section>
  );
}
