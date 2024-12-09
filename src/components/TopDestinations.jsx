// FILE: /src/components/TopDestinations.jsx

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopDestinationCard from "./TopDestinationCard";
import mockTopDestinations from "../mockTopDestinations";

const TopDestinations = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16 px-8">
        <h1 className="text-5xl font-bold text-center mb-8">Top Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockTopDestinations.map((destination, index) => (
            <TopDestinationCard key={index} destination={destination} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TopDestinations;