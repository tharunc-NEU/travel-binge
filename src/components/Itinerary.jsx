import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Itinerary = () => {
  const location = useLocation();
  const { destination } = location.state;

  return (
    <div className="bg-[#FCFCFC] font-display">
      <Navbar />
      <section className="py-16 px-8">
        <h1 className="text-4xl font-semibold text-center mb-8">{destination.name}</h1>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full max-w-4xl mx-auto rounded-lg mb-8"
        />
        <h2 className="text-2xl font-semibold mb-4">5-Day Itinerary</h2>
        <ul className="space-y-4">
          {destination.itinerary.map((item, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow">
              <strong>Day {item.day}:</strong> {item.activity}
            </li>
          ))}
        </ul>
        <a
          href={destination.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
        >
          Visit Official Page
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Itinerary;
