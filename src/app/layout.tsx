import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/modal-context";
import Navbar from "./Navbar/page";
import Footer from "./footer/page";
import ContactModal from "@/components/ContactModel";
import type React from "react"; // Import React
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "NCC Urban Lake Springs | Luxury Apartments in JP Nagar, Bangalore",
//   description:
//     "Experience the epitome of elegance and luxury at NCC Urban Lake Springs. Premium residential project in JP Nagar, Bangalore, offering world-class amenities and serene living.",
//   keywords:
//     "NCC Urban Lake Springs, luxury apartments, JP Nagar, Bangalore real estate, premium residential project, urban living",
//   authors: [{ name: "NCC Urban" }],
//   creator: "NCC Urban",
//   publisher: "NCC Urban",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   icons: {
//     icon: "/logo.jpeg",
//     apple: "/apple-icon.png",
//   },
//   viewport: "width=device-width, initial-scale=1",
//   robots: "index, follow",
//   openGraph: {
//     type: "website",
//     locale: "en_IE",
//     url: "https://www.nccurbanlakesprings.com/",
//     siteName: "NCC Urban Lake Springs",
//     title: "NCC Urban Lake Springs - Luxury Living in JP Nagar, Bangalore",
//     description:
//       "Discover premium apartments at NCC Urban Lake Springs. Enjoy luxury living with world-class amenities in the heart of JP Nagar, Bangalore.",
//     images: [
//       {
//         url: "/images/ncc-urban-lake-springs.jpg",
//         width: 1200,
//         height: 630,
//         alt: "NCC Urban Lake Springs Luxury Apartments",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@nccurban",
//     creator: "@nccurban",
//     title: "NCC Urban Lake Springs - Premium Apartments in Bangalore",
//     description:
//       "Experience luxury living at NCC Urban Lake Springs. Located in JP Nagar, Bangalore, offering premium apartments with world-class amenities.",
//     images: ["/images/ncc-urban-lake-springs-twitter.jpg"],
//   },
// };
export const metadata: Metadata = {
  title: "DreamHome - Find Your Perfect Home",
  description: "Find your dream home with the best property deals and offers.",
  keywords:
    "real estate, property, dream home, home for sale, real estate listing",
  authors: [{ name: "DreamHome Team" }],
  robots: "index, follow",
  openGraph: {
    title: "DreamHome - Your Dream Property Awaits",
    description: "Luxury homes and apartments available at amazing deals!",
    url: "https://urbanlakesprings.in/",
    images: [{ url: "/images/property2.jpg" }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://urbanlakesprings.in/" />
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0BHSX5ZEW7"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0BHSX5ZEW7');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
          <ContactModal />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
