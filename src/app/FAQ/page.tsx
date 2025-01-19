"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where is NCC Urban Lake Springs Located?",
    answer: "NCC Urban Lake Springs is located in JP Nagar 9th Phase, Bangalore.",
  },
  {
    question: "What are the unit variants offered in the project?",
    answer: "The project offers 3 and 3.5 BHK apartments.",
  },
  {
    question: "What are the size variants of the apartments?",
    answer: "The size variants of the apartments are 1622 to 2168 sq.ft.",
  },
  {
    question: "What is the total project area?",
    answer: "The total project area is 4.72 acres.",
  },
  {
    question: "Which amenities are offered in the project?",
    answer: "Swimming Pool, Clubhouse, Children's Play Area, Sport Courts, etc.",
  },
  {
    question: "What is the possession date?",
    answer: "The possession date is July 2026 onwards.",
  },
  {
    question: "Is this project RERA approved?",
    answer: "Yes, this project has received RERA approval.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // ✅ Only one opens at a time
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>

      {/* Grid Layout for Equal Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-semibold text-lg bg-white shadow-md rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-300"
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer Section */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 py-4 px-6 bg-gray-50 border border-gray-300 rounded-lg mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
