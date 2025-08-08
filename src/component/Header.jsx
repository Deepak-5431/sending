import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm font-sans fixed top-0 w-full z-50">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Ankita Mehendi Artist Logo" className="h-12 sm:h-14 md:h-16 w-auto" />
      </div>

      {/* Navigation (desktop) */}
      <nav className="hidden md:flex flex-grow justify-center space-x-6 text-sm uppercase tracking-wider font-light">
        {["Home", "Our Services", "About Us", "Reviews", "Gallery", "Contact Us", "Blog"].map((item, index) => (
          <a key={index} href="#" className="text-gray-600 hover:text-red-800 transition-colors">
            {item}
          </a>
        ))}
      </nav>

      {/* Social Icons & Button (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex space-x-2">
          {[FaFacebookF, FaInstagram, FaPinterestP, FaYoutube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <button className="px-4 py-2 bg-red-800 text-white text-sm uppercase tracking-wider font-light rounded-sm hover:bg-red-900 transition-colors">
          Learn Mehendi
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-red-800 focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Background Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Slide-in Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-start px-6 py-6">
          {/* Close Icon inside sidebar */}
          <div className="flex justify-end md:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-red-800"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4">
            {["Home", "Our Services", "About Us", "Reviews", "Gallery", "Contact Us", "Blog"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-red-800 uppercase tracking-wide text-sm"
                onClick={() => setIsMobileMenuOpen(false)} // closes menu on link click
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Spacer to push footer down */}
          <div className="flex-grow" />

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3 pt-4">
            {[FaFacebookF, FaInstagram, FaPinterestP, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Learn Mehendi Button */}
          <button className="mt-6 w-full py-2 bg-red-800 text-white text-sm uppercase tracking-wider rounded-sm hover:bg-red-900">
            Learn Mehendi
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;