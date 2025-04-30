import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-full bg-emerald-600">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-cormorant font-semibold text-white">
                Thermen Spa
              </span>
            </div>
            <p className="text-emerald-100 mb-4 leading-relaxed">
              Our wellness center is dedicated to helping you achieve balance in body, mind, and spirit through holistic treatments and nature-inspired therapies.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-emerald-100 hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {['Facial Treatments', 'Body Massage', 'Aromatherapy', 'Mud Therapy', 'Cryotherapy', 'Meditation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-emerald-100 hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-emerald-300" />
                <span className="text-emerald-100">info@thermenspa.com</span>
              </li>
              <li className="flex items-start">
                <PhoneCall className="w-5 h-5 mr-2 mt-0.5 text-emerald-300" />
                <span className="text-emerald-100">+31 02–123–456–789</span>
              </li>
              <li className="mt-4">
                <button className="btn btn-primary py-2.5 w-full">
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-emerald-800 text-center text-emerald-200 text-sm">
          <p>© {new Date().getFullYear()} Thermen Spa & Wellness Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;