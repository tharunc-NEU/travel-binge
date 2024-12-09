// FILE: /src/components/Maldives.jsx

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mockMaldives from "../mockMaldives";

const Maldives = () => {
  return (
    <div>
      <Navbar />
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + mockMaldives.image})` }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center mb-8">{mockMaldives.name}</h1>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Tropical Paradise</h2>
          <p className="text-lg text-gray-600 mb-8">
            {mockMaldives.description}
          </p>
          <img src={process.env.PUBLIC_URL + mockMaldives.image} alt={mockMaldives.name} className="w-full h-auto rounded-lg shadow-lg mb-8" />
          <h2 className="text-3xl font-bold mb-4">3-Day Trip Plan</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Day 1: Arrival and Relaxation</h3>
            <p className="text-lg text-gray-600">
              Arrive in the Maldives and check into your luxurious resort. Spend the day relaxing on the pristine beaches, swimming in the crystal-clear waters, and enjoying the resort's amenities.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Day 2: Snorkeling and Island Exploration</h3>
            <p className="text-lg text-gray-600">
              Start your day with a snorkeling excursion to explore the vibrant coral reefs and marine life. In the afternoon, take a guided tour of a nearby island to experience the local culture and cuisine.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Day 3: Water Sports and Sunset Cruise</h3>
            <p className="text-lg text-gray-600">
              Enjoy a variety of water sports such as kayaking, paddleboarding, and jet skiing. In the evening, embark on a sunset cruise to witness the breathtaking views of the Maldives as the sun sets over the horizon.
            </p>
          </div>
          <div className="text-center mt-8">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Maldives;