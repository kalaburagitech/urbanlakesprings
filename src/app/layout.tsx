import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/modal-context";
import Navbar from "./Navbar/page";
import Footer from "./footer/page";
import ContactModal from "@/components/ContactModel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NCC Urban Lake Springs",
  description: "A Home of Elegance & Luxury",
  icons: {
    icon: "/logo.jpeg", // Update this if the filename changes
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ModalProvider>
         <Navbar />
        {children}
        <ContactModal /> 
        <Footer />
        
         </ModalProvider>
      </body>
    </html>
  );
}
