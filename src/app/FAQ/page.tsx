"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-6 py-16"
    >
      {/* ⭐ FAQ Title with Premium Gradient */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-center drop-shadow-lg mb-12 font-[Playfair Display]"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ Grid - Smooth Motion Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-full"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-semibold text-lg bg-[#FFFFFF] shadow-md rounded-lg border border-gray-400 hover:bg-[#BFECFF] transition duration-300"
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

            {/* 🎭 Animated Answer Section */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "py-4 px-6 bg-yellow-100 border border-yellow-400 rounded-lg mt-2"
                  : ""
              }`}
            >
              <p className="text-gray-800">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
