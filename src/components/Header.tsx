"use client"
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react'; // Using lucide-react for icons
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {href: "/home", label: "Home"},
    {href: "/gallery", label: "Gallery"},
    {href: "/about", label: "About"},
    {href: "/services", label: "Services"},
    {href: "/contact", label: "Contact"},
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-50 text-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold"><Link href="/home">
            <Image
            src={"/images/logo/brand.png"}
            alt="QueenLens Photography"
            width={200}
            height={200}
            />
            </Link></div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-blue-900 ${pathname === link.href ? "font-bold" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gray-900 text-slate-50 px-4 py-1 rounded hover:bg-blue-950">
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
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-50 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`text-2xl ${pathname === link.href ? "font-bold" : ""}`}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={toggleMenu}
              className="bg-gray-900 text-slate-50 px-6 py-2 rounded hover:bg-blue-950"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;