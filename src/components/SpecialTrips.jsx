import React from "react";

const SpecialTrips = () => {
  return (
    <div className="mx-8 mb-16 bg-orange-400 p-8 rounded-lg shadow-md flex items-center">
      <div className="text-white flex-1">
        <h2 className="text-4xl font-bold mb-4">Special Trips: Las Vegas</h2>
        <p className="mb-4">
          Discover the excitement of Las Vegas with exclusive offers on luxury stays, entertainment,
          and dining experiences. From world-renowned shows to the dazzling lights of the Strip,
          Las Vegas offers an unforgettable experience for all.
        </p>
        <a
          href="#"
          className="bg-white text-orange-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition"
        >
          Book Now
        </a>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/assets/Las Vegas.jpeg"
          alt="Las Vegas"
          className="rounded-lg w-64 h-48 object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default SpecialTrips;
