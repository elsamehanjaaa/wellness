"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from 'next/image';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-pink-300 backdrop-blur-md py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <Link href="/" className="flex items-center">
  <Image 
    src="/logo3.png" 
    alt="ThermenSpa Logo"
    width={200} 
    height={200}
    className="mr-2"
  />
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-wellness-dark hover:text-opacity-70 transition-colors">Home</a>
          <a href="/aboutus" className="text-wellness-dark hover:text-opacity-70 transition-colors">About</a>
          <a href="/services" className="text-wellness-dark hover:text-opacity-70 transition-colors">Services</a>
          <a href="/contactus" className="text-wellness-dark hover:text-opacity-70 transition-colors">Contact</a>
        </nav>
        <a
                href="/bookappointment"
                type="submit"
                className=" bg-pink-800 text-white font-semibold 
                           px-4 py-2 rounded-md transition duration-100 
                           shadow-md hover:bg-pink-400 focus:outline-none 
                           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Book Appointment
              </a>


        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-wellness-dark p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute w-full shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#services" className="text-wellness-dark hover:text-opacity-70 transition-colors" onClick={toggleMenu}>Home</a>
           <a href="#about" className="text-wellness-dark hover:text-opacity-70 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-wellness-dark hover:text-opacity-70 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#contact" className="text-wellness-dark hover:text-opacity-70 transition-colors" onClick={toggleMenu}>Contact</a>
            <button className="bg-wellness-lavender hover:bg-wellness-lavender/80 text-wellness-dark w-full py-2 rounded">
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
