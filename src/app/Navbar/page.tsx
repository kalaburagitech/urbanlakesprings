"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image Component
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // ✅ Using shadCN UI Button

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50"> {/* ✅ White Background */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.jpeg"
            alt="RealEstate Logo"
            width={300} 
            height={150} 
            priority
            className="h-[40px] w-[80px] object-contain" // ✅ Fixed Size
          />
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost" // ✅ shadCN UI Button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-gray-900" // ✅ Changed Text Color
          aria-label="Toggle navigation"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </Button>

        {/* Mobile Menu (Hidden by Default) */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4 py-4">
            <li><Link href="/" className="block px-6 py-2 text-gray-900 hover:text-primary">Home</Link></li>
            <li><Link href="/price" className="block px-6 py-2 text-gray-900 hover:text-primary">Price</Link></li>
            <li><Link href="/floorplan" className="block px-6 py-2 text-gray-900 hover:text-primary">Floor Plan</Link></li>
            <li><Link href="/location" className="block px-6 py-2 text-gray-900 hover:text-primary">Location</Link></li>
            <li><Link href="/gallery" className="block px-6 py-2 text-gray-900 hover:text-primary">Gallery</Link></li>
            <li><Link href="/contact" className="block px-6 py-2 bg-primary text-white text-center rounded-md hover:opacity-80 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-6 md:items-center">
          <li><Link href="/" className="text-gray-900 hover:text-primary">Home</Link></li>
          <li><Link href="/price" className="text-gray-900 hover:text-primary">Price</Link></li>
          <li><Link href="/floorplan" className="text-gray-900 hover:text-primary">Floor Plan</Link></li>
          <li><Link href="/location" className="text-gray-900 hover:text-primary">Location</Link></li>
          <li><Link href="/gallery" className="text-gray-900 hover:text-primary">Gallery</Link></li>
          <li>
            <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-80 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
