// FILE: /src/components/TopDestinationCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const TopDestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${destination.id}`, { state: { destination } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 cursor-pointer"
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{destination.name}</h3>
        <p className="text-gray-600">{destination.tagline}</p>
        <p className="text-gray-600 mt-2">{destination.description}</p>
      </div>
    </div>
  );
};

export default TopDestinationCard;