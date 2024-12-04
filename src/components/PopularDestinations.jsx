import React from "react";

const PopularDestinations = () => {
  const destinations = [
    {
      image: "assets/florida.avif",
      alt: "Florida",
      title: "Florida, USA",
      description:
        "Enjoy the sunny beaches, vibrant nightlife, and thrilling theme parks of Florida, a perfect getaway for everyone.",
    },
    {
      image: "assets/great_canyon.avif",
      alt: "Grand Canyon",
      title: "Grand Canyon, USA",
      description:
        "Marvel at the breathtaking views and natural wonders of the Grand Canyon, one of the most iconic landmarks in the world.",
    },
    {
      image: "assets/italy.jpeg",
      alt: "Italy",
      title: "Italy",
      description:
        "Explore the rich history, world-renowned cuisine, and stunning landscapes of Italy, a must-visit destination for travelers.",
    },
  ];

  return (
    <div className="mx-8 mb-16">
      <h2 className="text-6xl font-display font-semibold text-center mb-12">
        Popular Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.alt}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-display font-semibold mb-3">
                {destination.title}
              </h3>
              <p className="text-gray-600 text-sm">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
