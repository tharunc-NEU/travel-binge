// FILE: /src/components/AboutUs.jsx

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-16 px-8">
        <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Founded with a passion for exploration, BingeTravel is committed to making travel dreams
          a reality. Our focus is on providing unforgettable travel experiences, handpicked
          itineraries, and personalized recommendations. We believe that each journey brings new
          perspectives and moments to cherish forever.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Our Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to inspire and enable people to explore the world, discover new cultures,
              and create lasting memories. We strive to provide exceptional service and curated travel
              experiences that cater to the unique preferences of each traveler.
            </p>
          </div>
          {/* Our Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to be the leading travel company known for our innovative approach,
              personalized service, and commitment to sustainability. We aim to make travel accessible
              and enjoyable for everyone, while promoting responsible tourism practices.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;