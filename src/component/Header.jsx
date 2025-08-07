import React from 'react';
import logo from '../assets/logo.png'; // Make sure the path is correct

// Import the icons you need from react-icons/fa
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm font-sans fixed top-0 w-full z-50">
      
      {/* Left Section: Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Ankita Mehendi Artist Logo" className="h-16 w-40" />
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

      {/* Right Section: Social Icons & Button */}
      <div className="flex items-center space-x-4">
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