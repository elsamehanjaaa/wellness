import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className={`p-1.5 rounded-full ${isScrolled ? 'bg-emerald-600' : 'bg-emerald-500'}`}>
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className={`text-xl font-cormorant font-semibold ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
            Thermen Spa
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Treatments', 'About', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition hover:text-emerald-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking"
            className="btn btn-primary text-sm py-2.5"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col gap-4">
              {['Home', 'Treatments', 'About', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 font-medium py-2 hover:text-emerald-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#booking"
                className="btn btn-primary text-sm py-2.5 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;