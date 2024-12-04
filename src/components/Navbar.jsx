import React from "react";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 flex items-center justify-between border-b border-gray-200">
      {/* Logo Section */}
      <div>
        <a href="#" id="brand">
          <img src="/assets/logo.jpeg" alt="Logo" className="h-20 w-auto object-contain" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center gap-8">
        <a href="/index.html" className="font-display text-gray-700 hover:text-primary">
          Home
        </a>
        <a href="/destination.html" className="font-display text-gray-700 hover:text-primary">
          Destinations
        </a>
        <a href="/topdestination.html" className="font-display text-gray-700 hover:text-primary">
          Top Destination
        </a>
        <a href="/login.html" className="font-display text-gray-700 hover:text-primary">
          Login
        </a>
        <a href="/about.html" className="font-display text-gray-700 hover:text-primary">
          About
        </a>
      </div>

      {/* Contact Us Button */}
      <div className="flex items-center gap-4">
        <a href="/contact.html">
          <button className="font-display text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <span>Contact Us</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
