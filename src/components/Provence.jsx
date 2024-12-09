// FILE: /src/components/Provence.jsx

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mockProvence from "../mockProvence";

const Provence = () => {
  return (
    <div>
      <Navbar />
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + mockProvence.image})` }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center mb-8">{mockProvence.name}</h1>
        </div>
      </section>
      <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Lavender Fields</h2>
          <p className="text-lg text-gray-600 mb-8">
            {mockProvence.description}
          </p>
          <img src={process.env.PUBLIC_URL + mockProvence.image} alt={mockProvence.name} className="w-full h-auto rounded-lg shadow-lg mb-8" />
          <h2 className="text-3xl font-bold mb-4">3-Day Trip Plan</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Day 1: Arrival and Lavender Fields</h3>
            <p className="text-lg text-gray-600">
              Arrive in Provence and check into your charming countryside accommodation. Spend the day exploring the beautiful lavender fields and enjoying the serene landscape.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Day 2: Wine Tasting and Village Tours</h3>
            <p className="text-lg text-gray-600">
              Start your day with a wine tasting tour at one of Provence's renowned vineyards. In the afternoon, visit the picturesque villages and experience the local culture and cuisine.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Day 3: Hiking and Scenic Views</h3>
            <p className="text-lg text-gray-600">
              Enjoy a morning hike through the scenic trails of Provence, offering breathtaking views of the countryside. Spend the afternoon relaxing and taking in the tranquil surroundings.
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

export default Provence;