import React, { useState } from "react";

const places = [
  "Paris", "Bali", "Tokyo", "Dubai", "New York", "London", "Sydney", "Rome",
];

const SearchFeature = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-semibold text-center mb-6">Search Places</h2>
      <div className="flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for destinations..."
          className="px-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring focus:ring-primary"
        />
      </div>
      <ul className="mt-4 text-center">
        {places
          .filter((place) =>
            place.toLowerCase().includes(query.toLowerCase())
          )
          .map((place, index) => (
            <li key={index} className="py-2 text-lg text-gray-700">
              {place}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SearchFeature;
