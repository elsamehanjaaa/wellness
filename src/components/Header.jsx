import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Wellness Center
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-primary-600 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-6 bg-gray-600 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              ></span>
              <span
                className={`transition-all duration-300 absolute h-0.5 w-6 bg-gray-600 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-6 bg-gray-600 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-600 hover:text-primary-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;