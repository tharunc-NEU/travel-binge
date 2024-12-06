import React from "react";

const destinations = [
  { name: "Chennai", image: "/assets/chennai.jpg", tagline: "Heritage Reimagined" },
  { name: "Bali", image: "/assets/bali.jpg", tagline: "Island of Gods" },
  { name: "Dubai", image: "/assets/dubai.jpg", tagline: "Luxury Redefined" },
  { name: "London", image: "/assets/london.jpg", tagline: "Cultural Capital" },
  { name: "New York", image: "/assets/new_york.jpg", tagline: "The Big Apple" },
  { name: "Rome", image: "/assets/rome.jpg", tagline: "Eternal City" },
  { name: "Sydney", image: "/assets/sydney.jpg", tagline: "Harbour City" },
  { name: "Tokyo", image: "/assets/tokyo.jpg", tagline: "A Metropolis of Wonder" },
  
  
  
  
  
];

const ExplorePlaces = () => {
  return (
    <section id="explore-places" className="py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Explore Places
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
              <p className="text-gray-600">{destination.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExplorePlaces;
