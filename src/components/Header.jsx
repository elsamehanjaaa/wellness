"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

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
    <header className="sticky top-0 w-full border-b bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 backdrop-blur-md z-50 transition-all duration-200">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="rounded-full bg-emerald-600 p-1.5 transition-colors group-hover:bg-emerald-700">
                <Leaf className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">
                Thermen<span className="text-emerald-400">Spa</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-1 py-2 text-sm font-medium transition hover:text-white text-emerald-100"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="relative rounded-md p-2 text-emerald-100 hover:bg-emerald-700/60"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute inset-0 m-auto h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-sm font-medium text-white transition hover:bg-emerald-700 h-10 px-4 py-2"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md hover:bg-emerald-700/60 text-emerald-100 h-10 w-10 md:hidden"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] border-b border-emerald-800" : "max-h-0"
        }`}
      >
        <nav className="container px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-emerald-100 hover:text-white transition font-medium py-2"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-sm font-medium text-white transition hover:bg-emerald-700 h-10 px-4 py-2 w-full"
            onClick={closeMenu}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
