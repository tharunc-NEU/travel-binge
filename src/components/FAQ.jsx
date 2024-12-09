// FILE: /src/components/FAQ.jsx

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16 px-8">
        <h1 className="text-5xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">What is BingeTravel?</h2>
            <p className="text-gray-600">
              BingeTravel is a travel company dedicated to providing unforgettable travel experiences, handpicked itineraries, and personalized recommendations.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">How can I make a reservation?</h2>
            <p className="text-gray-600">
              You can make a reservation by visiting our Reservation page and filling out the form with your details.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">What destinations do you offer?</h2>
            <p className="text-gray-600">
              We offer a wide range of destinations including beaches, mountains, cities, and cultural sites. Visit our Destinations page to explore more.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">How can I contact you?</h2>
            <p className="text-gray-600">
              You can contact us by visiting our Contact Us page and filling out the form with your message.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;