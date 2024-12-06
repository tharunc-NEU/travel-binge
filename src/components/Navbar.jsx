// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="px-10 py-6 flex items-center justify-between border-b border-gray-200">
//       {/* Logo Section */}
//       <div>
//         <Link to="/">
//           <img src="/assets/logo.jpeg" alt="Logo" className="h-24 w-auto object-contain" />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex-1 flex justify-center gap-8">
//         <Link to="/" className="font-display text-gray-700 hover:text-primary">
//           Home
//         </Link>
//         <Link to="/destinations" className="font-display text-gray-700 hover:text-primary">
//           Destinations
//         </Link>
//         <a href="/topdestination.html" className="font-display text-gray-700 hover:text-primary">
//            Top Destination
//          </a>
//         <Link to="/about" className="font-display text-gray-700 hover:text-primary">
//           About
//         </Link>
//         <Link to="/contact" className="font-display text-gray-700 hover:text-primary">
//           Contact
//         </Link>
//       </div>

//       {/* Example Button */}
//       <div>
//         <Link to="/login">
//           <button className="font-display text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
//             Login
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-10 py-6 flex items-center justify-between border-b border-gray-200">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src="/assets/logo.jpeg" alt="Logo" className="h-24 w-auto object-contain" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex justify-center gap-8">
        <Link to="/" className="font-display text-gray-700 hover:text-primary">
          Home
        </Link>
        <Link to="/destinations" className="font-display text-gray-700 hover:text-primary">
          Destinations
        </Link>
        {/* <Link to="/design-your-destination" className="font-display text-gray-700 hover:text-primary">
          Design Your Destination
        </Link> */}
        <a href="/topdestination.html" className="font-display text-gray-700 hover:text-primary">
          Top Destination
        </a>
        <Link to="/about" className="font-display text-gray-700 hover:text-primary">
          About
        </Link>

        
        <Link to="/contact" className="font-display text-gray-700 hover:text-primary">
          Login
        </Link>
      </div>

      {/* Example Button */}
      <div>
        <Link to="/login">
          <button className="font-display text-gray-700 border border-gray-300 px-6 py-2 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
