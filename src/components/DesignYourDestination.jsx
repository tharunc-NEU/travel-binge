// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// // Import mock data
// import destinations from "../mockDestinations";


// const DesignYourDestination = () => {
//   const [selectedType, setSelectedType] = useState("all");

//   // Filter destinations based on selected type
//   const filteredDestinations =
//     selectedType === "all"
//       ? destinations
//       : destinations.filter((destination) => destination.type === selectedType);

//   return (
//     <div className="bg-[#FCFCFC]">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="text-center py-12">
//         <h1 className="text-5xl font-bold">Design Your Destination</h1>
//         <p className="text-lg mt-4 text-gray-600">
//           Customize your travel experience and explore the world your way.
//         </p>
//       </section>

//       {/* Destination Type Filter */}
//       <div className="text-center py-6">
//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="border px-4 py-2 rounded-lg shadow-sm focus:outline-none"
//         >
//           <option value="all">All Types</option>
//           <option value="beach">Beach</option>
//           <option value="mountain">Mountain</option>
//           <option value="city">City</option>
//           <option value="cultural">Cultural</option>
//         </select>
//       </div>

//       {/* Map */}
//       <div className="h-[600px] w-full px-8">
//         <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="© OpenStreetMap contributors"
//           />
//           {filteredDestinations.map((destination, index) => (
//             <Marker
//               key={index}
//               position={destination.coordinates}
//             >
//               <Popup>
//                 <div className="text-center">
//                   <img
//                     src={destination.image}
//                     alt={destination.name}
//                     className="w-32 h-24 object-cover rounded-md mb-2"
//                   />
//                   <h3 className="font-bold">{destination.name}</h3>
//                   <p>{destination.description}</p>
//                   <a
//                     href={destination.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline"
//                   >
//                     Official Page
//                   </a>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default DesignYourDestination;


// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import mockDestinations from "../mockDestinations";

// const DesignYourDestination = () => {
//   const [selectedType, setSelectedType] = useState("all");

//   // Filter destinations based on the selected type
//   const filteredDestinations =
//     selectedType === "all"
//       ? mockDestinations
//       : mockDestinations.filter((destination) => destination.type === selectedType);

//   return (
//     <div className="bg-[#FCFCFC]">
//       <Navbar />
//       <section className="text-center py-12">
//         <h1 className="text-5xl font-bold">Design Your Destination</h1>
//         <p className="text-lg mt-4 text-gray-600">
//           Customize your travel experience and explore the world your way.
//         </p>
//       </section>

//       {/* Destination Type Filter */}
//       <div className="text-center py-6">
//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           className="border px-4 py-2 rounded-lg shadow-sm focus:outline-none"
//         >
//           <option value="all">All Types</option>
//           <option value="beach">Beach</option>
//           <option value="mountain">Mountain</option>
//           <option value="city">City</option>
//           <option value="cultural">Cultural</option>
//         </select>
//       </div>

//       {/* Map */}
//       <div className="h-[600px] w-full px-8">
//         <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="© OpenStreetMap contributors"
//           />
//           {filteredDestinations.map((destination, index) => (
//             <Marker key={index} position={destination.coordinates}>
//               <Popup>
//                 <div className="text-center">
//                   <img
//                     src={destination.image}
//                     alt={destination.name}
//                     className="w-32 h-24 object-cover rounded-md mb-2"
//                   />
//                   <h3 className="font-bold">{destination.name}</h3>
//                   <p>{destination.description}</p>
//                   <a
//                     href={destination.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline"
//                   >
//                     Official Page
//                   </a>
//                 </div>
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default DesignYourDestination;


import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Footer from "./Footer";
import Navbar from "./Navbar";
import mockDestinations from "../mockDestinations";

const DesignYourDestination = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Function to handle the "Get Recommendations" button
  const handleGetRecommendations = (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Filter destinations based on selected type
    const recommendations = mockDestinations.filter((destination) => {
      const matchesType =
        selectedType === "all" || destination.type === selectedType;
      return matchesType;
    });

    setFilteredDestinations(recommendations); // Update filtered destinations
  };

  return (
    <div className="bg-[#FCFCFC]">
      <Navbar />
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold">Design Your Destination</h1>
        <p className="text-lg mt-4 text-gray-600">
          Customize your travel experience and explore the world your way.
        </p>
      </section>

      {/* Destination Form */}
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
        <div className="flex gap-6">
          <div className="flex-1">
            <label htmlFor="start-date" className="block text-lg font-semibold mb-2">
              Start Date
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="end-date" className="block text-lg font-semibold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="Enter your budget"
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition"
        >
          Get Recommendations
        </button>
      </form>

      {/* Recommendations Section */}
      {filteredDestinations.length > 0 && (
        <section className="py-16 px-8">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Recommended Destinations
          </h2>
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
                  <p className="text-gray-600">{destination.description}</p>
                  <a
                    href={destination.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Official Page
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DesignYourDestination;
