"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ Import Next.js Image Component
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // ✅ Using shadCN UI Button

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <Image 
  src="/logo.jpeg"
  alt="RealEstate Logo"
  width={100} 
  height={50} 
  priority
  className="h-[40px] w-[80px] object-contain" // ✅ Force fixed size
/>

        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost" // ✅ shadCN UI Button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-gray-800"
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
            <li><Link href="/" className="block px-6 py-2 text-gray-800 hover:text-blue-500">Home</Link></li>
            <li><Link href="/price" className="block px-6 py-2 text-gray-800 hover:text-blue-500">Price</Link></li>
            <li><Link href="/floorplan" className="block px-6 py-2 text-gray-800 hover:text-blue-500">Floor Plan</Link></li>
            <li><Link href="/location" className="block px-6 py-2 text-gray-800 hover:text-blue-500">Location</Link></li>
            <li><Link href="/gallery" className="block px-6 py-2 text-gray-800 hover:text-blue-500">Gallery</Link></li>
            <li><Link href="/contact" className="block px-6 py-2 bg-blue-500 text-white text-center rounded-md hover:bg-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-6 md:items-center">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/price" className="hover:text-blue-500">Price</Link></li>
          <li><Link href="/floorplan" className="hover:text-blue-500">Floor Plan</Link></li>
          <li><Link href="/location" className="hover:text-blue-500">Location</Link></li>
          <li><Link href="/gallery" className="hover:text-blue-500">Gallery</Link></li>
          <li>
            <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
