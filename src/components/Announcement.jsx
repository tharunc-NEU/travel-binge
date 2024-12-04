import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white px-4 py-4 my-8 mx-8 rounded-lg text-center">
      <p className="font-display text-black text-sm flex items-center justify-center gap-3">
        <i className="fa-solid fa-tag"></i>
        <span className="font-medium">Special Offer:</span> Get 20% off on all destinations! Use code
        <span className="font-bold bg-white/20 px-3 py-1 rounded">TRAVEL20</span>
        <a href="#" className="underline ml-2 hover:text-primary">Book Now</a>
      </p>
    </div>
  );
};

export default Announcement;
