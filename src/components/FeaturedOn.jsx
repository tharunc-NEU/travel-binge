import React from "react";

const logos = [
  "assets/NatGEO.jpg",
  "assets/Conde.jpeg",
  "assets/wanderlust.jpeg",
  "assets/lonelyplanet.jpeg",
];

const FeaturedOn = () => {
  return (
    <div className="mx-8 mb-16">
      <h2 className="text-4xl font-display font-semibold text-center mb-8">
        Featured On
      </h2>
      <div className="flex justify-center gap-8 items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;
