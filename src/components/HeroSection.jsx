import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[500px]">
      <img
        src="/assets/destinations_hero.jpg"
        alt="Destinations Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Explore Your Next Adventure</h1>
        <p className="text-xl mb-6">
          Discover destinations tailored to your dreams.
        </p>
        <a
          href="#explore-places"
          className="bg-primary px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
