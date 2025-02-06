"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons
import Image from "next/image";
import Link from "next/link"; // Updated to use Link component
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-50 text-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/home">
            <Image
              src={"/images/logo/brand.png"}
              alt="QueenLens Photography"
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-blue-900 transition-colors duration-200 ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gray-900 text-slate-50 px-4 py-1 rounded hover:bg-blue-950 transition-transform transform hover:scale-105">
          Let&apos;s Talk
        </button>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }} // Start from above the screen
            animate={{ opacity: 1, y: 0 }} // Slide in from the top
            exit={{ opacity: 0, y: "-100%" }} // Slide out to the top
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-50 z-50 md:hidden flex flex-col items-center justify-center"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                className={`text-2xl p-3 ${pathname === link.href ? "font-bold" : ""}`}
              >
                <Link href={link.href} onClick={toggleMenu}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={toggleMenu}
              className="bg-gray-900 text-slate-50 px-6 py-2 mt-4 rounded hover:bg-blue-950"
              
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
