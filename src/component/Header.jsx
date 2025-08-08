
import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Make sure the path is correct

// Import the icons you need from react-icons/fa
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm font-sans fixed top-0 w-full z-50">
      {/* Left Section: Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Ankita Mehendi Artist Logo" className="h-16 w-40" />
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Middle Section: Navigation Links */}
      <nav className="hidden md:flex flex-grow justify-center space-x-8 text-sm uppercase tracking-wider font-light">
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">HOME</a>
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">OUR SERVICES</a>
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">ABOUT US</a>
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">REVIEWS</a>
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">GALLERY</a>
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">CONTACT US</a>
        <a href="#" className="text-gray-600 hover:text-red-800 transition-colors">BLOG</a>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden animate-fade-in z-50">
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">HOME</a>
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">OUR SERVICES</a>
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">ABOUT US</a>
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">REVIEWS</a>
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">GALLERY</a>
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">CONTACT US</a>
          <a href="#" className="w-full text-center py-3 border-b text-gray-600 hover:text-red-800 transition-colors">BLOG</a>
          <div className="flex justify-center space-x-2 py-3">
            <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
              <FaInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
              <FaPinterestP className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
              <FaYoutube className="h-4 w-4" />
            </a>
          </div>
          <button className="mb-3 px-6 py-2 bg-red-800 text-white text-sm uppercase tracking-wider font-light rounded-sm hover:bg-red-900 transition-colors">
            LEARN MEHENDI
          </button>
        </div>
      )}

      {/* Right Section: Social Icons & Button */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Social Media Icons */}
        <div className="flex space-x-2">
          <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
            <FaPinterestP className="h-4 w-4" />
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center hover:bg-red-900 transition-colors">
            <FaYoutube className="h-4 w-4" />
          </a>
        </div>

        {/* Learn Mehendi Button */}
        <button className="px-6 py-2 bg-red-800 text-white text-sm uppercase tracking-wider font-light rounded-sm hover:bg-red-900 transition-colors">
          LEARN MEHENDI
        </button>
      </div>

    </header>
  );
};

export default Header;