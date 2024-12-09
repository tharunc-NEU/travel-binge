import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-10 py-6 flex items-center justify-between border-b border-gray-200">
      <div>
        <Link to="/">
          <img src="/assets/logo.jpeg" alt="Logo" className="h-24 w-auto object-contain" />
        </Link>
      </div>

      <div className="flex-1 flex justify-center gap-8">
        <Link to="/" className="font-display text-gray-700 hover:text-primary">
          Home
        </Link>
        <Link to="/destinations" className="font-display text-gray-700 hover:text-primary">
          Destinations
        </Link>
        <Link to="/top-destinations" className="font-display text-gray-700 hover:text-primary">
          Top Destinations
        </Link>
        <Link to="/about-us" className="font-display text-gray-700 hover:text-primary">
          About Us
        </Link>
        <Link to="/contact-us" className="font-display text-gray-700 hover:text-primary">
          Contact Us
        </Link>
        <Link to="/faq" className="font-display text-gray-700 hover:text-primary">
          FAQ
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/reservation">
          <button className="font-display text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            Reservation
          </button>
        </Link>
        <Link to="/auth">
          <button className="font-display text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;