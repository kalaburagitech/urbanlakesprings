"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Price", href: "/price" },
    { name: "Floor Plan", href: "/floorplan" },
    { name: "Location", href: "/location" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/logo.jpeg"
                alt="RealEstate Logo"
                width={300}
                height={150}
                priority
                className="h-[40px] w-[80px] object-contain"
              />
            </motion.div>
          </Link>

          <Button
            variant="ghost"
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? "close" : "open"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </AnimatePresence>
          </Button>

          <motion.ul
            className="hidden md:flex md:space-x-1 md:items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }),
                }}
              >
                <Link
                  href={item.href}
                  className="text-gray-900 hover:text-primary px-3 py-2 rounded-md transition duration-300 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              custom={navItems.length}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1 },
                }),
              }}
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block px-6 py-2 text-gray-900 hover:text-primary hover:bg-gray-100 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className="block mx-6 py-2 bg-primary text-white text-center rounded-md hover:bg-primary-dark transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
