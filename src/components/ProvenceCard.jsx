// FILE: /src/components/ProvenceCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import mockProvence from "../mockProvence";

const ProvenceCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${mockProvence.id}`, { state: { destination: mockProvence } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 cursor-pointer"
    >
      <img
        src={mockProvence.image}
        alt={mockProvence.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{mockProvence.name}</h3>
        <p className="text-gray-600">{mockProvence.description}</p>
      </div>
    </div>
  );
};

export default ProvenceCard;