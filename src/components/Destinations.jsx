import React, { useState } from "react";
import Navbar from "./Navbar";

const destinations = [
  {
    name: "Andes Mountains",
    image: "/assets/andes.jpg",
    tagline: "South America's Spine",
    type: "mountain",
    coordinates: [-32.6532, -70.0112],
  },
  {
    name: "Bali",
    image: "/assets/bali.jpg",
    tagline: "Island of Gods",
    type: "beach",
    coordinates: [-8.3405, 115.092],
  },
  {
    name: "Cape Town",
    image: "/assets/cape_town.jpeg",
    tagline: "Mother City of South Africa",
    type: "city",
    coordinates: [-33.9249, 18.4241],
  },
  {
    name: "Chennai",
    image: "/assets/chennai.jpg",
    tagline: "Heritage Reimagined",
    type: "cultural",
    coordinates: [13.0827, 80.2707],
  },
  {
    name: "Dubai",
    image: "/assets/dubai.jpg",
    tagline: "Luxury and Skyscrapers",
    type: "city",
    coordinates: [25.276987, 55.296249],
  },
  {
    name: "Himalayas",
    image: "/assets/himalayas.jpg",
    tagline: "Abode of Snow",
    type: "mountain",
    coordinates: [27.9881, 86.925],
  },
  {
    name: "Istanbul",
    image: "/assets/istanbul.jpeg",
    tagline: "Where East Meets West",
    type: "cultural",
    coordinates: [41.0082, 28.9784],
  },
  {
    name: "Mount Everest Base Camp",
    image: "/assets/everest_base_camp.jpg",
    tagline: "Roof of the World",
    type: "mountain",
    coordinates: [28.0043, 86.8528],
  },
  {
    name: "Mount Kilimanjaro",
    image: "/assets/kilimanjaro.jpg",
    tagline: "Africa's Tallest Peak",
    type: "mountain",
    coordinates: [-3.0674, 37.3556],
  },
  {
    name: "New York",
    image: "/assets/new_york.jpg",
    tagline: "The Big Apple",
    type: "city",
    coordinates: [40.7128, -74.006],
  },
  {
    name: "Paris",
    image: "/assets/paris.jpg",
    tagline: "The City of Love",
    type: "cultural",
    coordinates: [48.8566, 2.3522],
  },
  {
    name: "Rio de Janeiro",
    image: "/assets/rio.jpeg",
    tagline: "Carnival Capital",
    type: "beach",
    coordinates: [-22.9068, -43.1729],
  },
  {
    name: "Rocky Mountains",
    image: "/assets/rocky_mountains.jpg",
    tagline: "North America's Mountain Playground",
    type: "mountain",
    coordinates: [39.5501, -105.7821],
  },
  {
    name: "Rome",
    image: "/assets/rome.jpg",
    tagline: "The Eternal City",
    type: "cultural",
    coordinates: [41.9028, 12.4964],
  },
  {
    name: "Singapore",
    image: "/assets/singapore.jpeg",
    tagline: "Garden City",
    type: "city",
    coordinates: [1.3521, 103.8198],
  },
  {
    name: "Swiss Alps",
    image: "/assets/swiss_alps.jpg",
    tagline: "Majestic Peaks of Europe",
    type: "mountain",
    coordinates: [46.8182, 8.2275],
  },
  {
    name: "Sydney",
    image: "/assets/sydney.jpg",
    tagline: "The Harbour City",
    type: "beach",
    coordinates: [-33.8688, 151.2093],
  },
  {
    name: "Tokyo",
    image: "/assets/tokyo.jpg",
    tagline: "A Fusion of Tradition and Technology",
    type: "city",
    coordinates: [35.6895, 139.6917],
  },
];


// Hidden destinations
const hiddenDestinations = [
  {
    name: "London",
    image: "/assets/london.jpg",
    tagline: "Cultural Capital",
    type: "city",
    coordinates: [51.5074, -0.1278],
  },
  {
    name: "Los Angeles",
    image: "/assets/los_angeles.jpg",
    tagline: "City of Angels",
    type: "city",
    coordinates: [34.0522, -118.2437],
  },
  {
    name: "Los Cabos",
    image: "/assets/los_cabos.jpg",
    tagline: "Mexico's Paradise",
    type: "beach",
    coordinates: [22.8905, -109.9167],
  },
  
  
];


const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Combine all destinations for search and recommendations
  const allDestinations = [...destinations, ...hiddenDestinations];

  // Filter for search functionality
  const filteredSearchDestinations = allDestinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle "Get Recommendations" for Design Your Destination
  const handleGetRecommendations = (e) => {
    e.preventDefault(); // Prevent form submission

    const recommendations = allDestinations.filter((destination) => {
      const matchesType =
        selectedType === "all" || destination.type === selectedType;
      return matchesType;
    });

    setFilteredDestinations(recommendations); // Update filtered destinations
  };

  // Determine which destinations to render in "Explore Places"
  const destinationsToRender =
    searchQuery.trim() === ""
      ? destinations // Default visible destinations
      : filteredSearchDestinations; // Include hidden destinations when searching

  return (
    <div className="bg-[#FCFCFC] font-display">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: `url(/assets/destinations_hero.jpg)`,
        }}
      >
        <div className="bg-black/50 p-8 rounded-lg text-center">
          <h1 className="text-5xl text-white font-bold mb-4">Explore Destinations</h1>
          <p className="text-lg text-gray-200">Find your next adventure and discover the world.</p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center px-8 py-8">
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-lg px-4 py-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Explore Places */}
      <section id="explore-places" className="py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-12">Explore Places</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinationsToRender.map((destination, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300"
            >
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
          {destinationsToRender.length === 0 && (
            <p className="text-gray-500 text-center col-span-full">No destinations match your search.</p>
          )}
        </div>
      </section>

      {/* Design Your Destination Section */}
<section className="py-16 px-8 bg-gray-50">
  <h2 className="text-4xl font-semibold text-center mb-12">Design Your Destination</h2>
  <form
    onSubmit={handleGetRecommendations}
    className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
  >
    {/* Destination Type */}
    <div>
      <label htmlFor="destination-type" className="block text-lg font-semibold mb-2">
        Destination Type
      </label>
      <select
        id="destination-type"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="all">All Types</option>
        <option value="beach">Beach</option>
        <option value="mountain">Mountain</option>
        <option value="city">City</option>
        <option value="cultural">Cultural</option>
      </select>
    </div>

    {/* Travel Dates */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="start-date" className="block text-lg font-semibold mb-2">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="end-date" className="block text-lg font-semibold mb-2">
          End Date
        </label>
        <input
          type="date"
          id="end-date"
          className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>

    {/* Budget */}
    <div>
      <label htmlFor="budget" className="block text-lg font-semibold mb-2">
        Budget
      </label>
      <input
        type="number"
        id="budget"
        placeholder="Enter your budget"
        className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    {/* Interests */}
<div>
  <label htmlFor="interests" className="block text-lg font-semibold mb-2">
    Interests
  </label>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
      <input
        type="checkbox"
        id="hiking"
        value="hiking"
        className="mr-2"
      />
      <label htmlFor="hiking" className="text-gray-700">
        Relaxation
      </label>
    </div>
    <div>
      <input
        type="checkbox"
        id="nightlife"
        value="nightlife"
        className="mr-2"
      />
      <label htmlFor="nightlife" className="text-gray-700">
        Nightlife
      </label>
    </div>
    <div>
      <input
        type="checkbox"
        id="history"
        value="history"
        className="mr-2"
      />
      <label htmlFor="history" className="text-gray-700">
        History
      </label>
    </div>
    <div>
      <input
        type="checkbox"
        id="wildlife"
        value="wildlife"
        className="mr-2"
      />
      <label htmlFor="wildlife" className="text-gray-700">
        Wildlife
      </label>
    </div>
    <div>
      <input
        type="checkbox"
        id="food"
        value="food"
        className="mr-2"
      />
      <label htmlFor="food" className="text-gray-700">
        Food & Culinary
      </label>
    </div>
    <div>
      <input
        type="checkbox"
        id="adventure"
        value="adventure"
        className="mr-2"
      />
      <label htmlFor="adventure" className="text-gray-700">
        Adventure Sports
      </label>
    </div>
  </div>
</div>


    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
    >
      Get Recommendations
    </button>
  </form>
</section>

{/* Recommendations Section */}
{filteredDestinations.length > 0 && (
  <section className="py-16 px-8">
    <h2 className="text-4xl font-semibold text-center mb-12">Recommended Destinations</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredDestinations.map((destination, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300"
        >
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
)}


   </div>
  );
};

export default Destinations;