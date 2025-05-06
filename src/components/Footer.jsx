import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
<footer className="bg-pink-300 text-white py-12">
<div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 items-start">
  {/* Logo and About */}
  <div className="flex flex-col h-full">
    <div className="mb-4">
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo3.png" 
          alt="ThermenSpa Logo"
          width={200} 
          height={200}
          className="mr-2"
        />
      </Link>
    </div>

    <div>
      <p className="text-base text-black mb-2">
        Escape to a sanctuary where ancient rituals blend seamlessly with modern comfort.
      </p>
      <p className="text-base text-black">
        At ThermenSpa, we craft personalized wellness journeys that rejuvenate the body, calm the mind, and uplift the soul.
      </p>
    </div>
  </div>

  {/* Quick Links */}
  <div className="flex flex-col h-full justify-start">
    <h3 className="text-lg text-pink-800 font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2 text-sm text-black">
      <li><a href="/" className="hover:underline">Home</a></li>
      <li><a href="/about" className="hover:underline">About Us</a></li>
      <li><a href="/services" className="hover:underline">Services</a></li>
      <li><a href="/contact" className="hover:underline">Contact</a></li>
    </ul>
  </div>

  {/* Contact Info */}
  <div className="flex flex-col h-full justify-start">
    <h3 className="text-lg text-pink-800 font-semibold mb-4">Contact</h3>
    <ul className="space-y-3 text-sm text-black">
      <li className="flex items-start gap-2">
        <MapPin className="w-4 h-4 mt-1 text-black" />
        Kingston Street 3201, New Jersey, NY
      </li>
      <li className="flex items-start gap-2">
        <Phone className="w-4 h-4 mt-1 text-black" />
        +31 02–123–456–789
      </li>
      <li className="flex items-start gap-2">
        <Mail className="w-4 h-4 mt-1 text-black" />
        contact@thermenspa.com
      </li>
    </ul>
  </div>

  {/* Newsletter */}
  <div className="flex flex-col h-full justify-start">
    <h3 className="text-lg text-pink-800 font-semibold mb-4">Stay Connected</h3>
    <p className="text-sm text-black mb-4">
      Subscribe to receive exclusive offers and wellness tips.
    </p>
    <form className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        placeholder="Your email"
        className="px-4 py-2 rounded bg-white text-pink-900 text-sm w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-rose-200 text-pink-900 px-4 py-2 hover:bg-rose-300"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>


  {/* Footer Bottom */}
  <div className="border-t border-white/10 mt-10 pt-6 text-center text-black ">
    &copy; {new Date().getFullYear()} ThermenSpa. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
