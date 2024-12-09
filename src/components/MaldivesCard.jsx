// FILE: /src/components/MaldivesCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import mockMaldives from "../mockMaldives";

const MaldivesCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${mockMaldives.id}`, { state: { destination: mockMaldives } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 duration-300 cursor-pointer"
    >
      <img
        src={mockMaldives.image}
        alt={mockMaldives.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{mockMaldives.name}</h3>
        <p className="text-gray-600">{mockMaldives.description}</p>
      </div>
    </div>
  );
};

export default MaldivesCard;