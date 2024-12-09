// FILE: /src/components/VeniceCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import mockVenice from "../mockVenice";

const VeniceCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${mockVenice.id}`, { state: { destination: mockVenice } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 cursor-pointer"
    >
      <img
        src={mockVenice.image}
        alt={mockVenice.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{mockVenice.name}</h3>
        <p className="text-gray-600">{mockVenice.description}</p>
      </div>
    </div>
  );
};

export default VeniceCard;