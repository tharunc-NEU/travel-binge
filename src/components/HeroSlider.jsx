import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "assets/hero.jpeg",
    title: "Discover the World",
    description: "Adventure awaits in every corner of the globe. Start exploring today!",
    buttonText: "Get Started",
    buttonLink: "#",
  },
  {
    image: "assets/hero22.jpeg",
    title: "Find Your Paradise",
    description: "From tropical islands to bustling cities, find the perfect getaway.",
    buttonText: "Explore Now",
    buttonLink: "#",
  },
  {
    image: "assets/hero3.jpeg",
    title: "Unforgettable Journeys",
    description: "Create memories that last a lifetime. Your adventure starts here.",
    buttonText: "Join Us",
    buttonLink: "#",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative mx-8 mb-16 max-w-full">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0 w-full">
              <img
                src={slide.image}
                alt={`Travel Hero ${index + 1}`}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-10 left-10 z-20 text-white">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-4">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`dot w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-300"
              } hover:bg-white`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
