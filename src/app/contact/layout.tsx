import type { Metadata } from "next";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title:
    "About NCC Urban Lake Springs | Premium Residential Project in JP Nagar, Bangalore",
  description:
    "Discover NCC Urban Lake Springs, a luxurious residential project in JP Nagar, Bangalore. Enjoy elegant living with top-notch amenities, schools, hospitals, and recreational spots nearby.",
  keywords:
    "NCC Urban Lake Springs, JP Nagar, Bangalore real estate, luxury apartments, residential project, premium living",
  openGraph: {
    title: "NCC Urban Lake Springs - Luxury Living in JP Nagar, Bangalore",
    description:
      "Experience the epitome of luxury living at NCC Urban Lake Springs. Located in JP Nagar, Bangalore, our premium residential project offers comfort, connectivity, and a vibrant community.",
    images: [
      {
        url: "/images/property2.jpg",
        width: 800,
        height: 450,
        alt: "NCC Urban Lake Springs Property View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCC Urban Lake Springs - Premium Living in Bangalore",
    description:
      "Discover luxury living at NCC Urban Lake Springs in JP Nagar, Bangalore. Elegant apartments, world-class amenities, and a vibrant community await you.",
    images: ["/images/property2.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
