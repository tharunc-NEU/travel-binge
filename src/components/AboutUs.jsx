// import React from "react";
// import Layout from "../components/Layout";

// const AboutUs = () => {
//   return (
//     <Layout>
//       <section className="bg-gray-100 py-16 px-8">
//         <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>
//         <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
//           Founded with a passion for exploration, BingeTravel is committed to making travel dreams
//           a reality. Our focus is on providing unforgettable travel experiences, handpicked
//           itineraries, and personalized recommendations. We believe that each journey brings new
//           perspectives and moments to cherish forever.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {/* Our Mission */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//             <p className="text-gray-600">
//               To inspire and empower people to travel more, explore the world, and experience the
//               richness of diverse cultures. We are committed to providing a seamless travel
//               experience with tailored itineraries, excellent customer support, and unforgettable
//               memories.
//             </p>
//           </div>

//           {/* Our Vision */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
//             <p className="text-gray-600">
//               To become a global leader in the travel industry, renowned for creating exceptional
//               travel experiences and promoting sustainable tourism. Our vision is a world where
//               people connect, understand, and cherish cultural diversity through travel.
//             </p>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default AboutUs;

import React from "react";
import Layout from "../components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-20 px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded with a passion for exploration, BingeTravel is committed to making travel dreams a reality. Our focus is on providing unforgettable travel experiences, handpicked itineraries, and personalized recommendations. We believe that each journey brings new perspectives and moments to cherish forever.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To inspire and empower people to travel more, explore the world, and experience the richness of diverse cultures. We are committed to providing a seamless travel experience with tailored itineraries, excellent customer support, and unforgettable memories.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become a global leader in the travel industry, renowned for creating exceptional travel experiences and promoting sustainable tourism. Our vision is a world where people connect, understand, and cherish cultural diversity through travel.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of travel experts works tirelessly to bring you the best travel experiences. Meet the people behind BingeTravel who make your journeys unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
            <img src="/assets/team1.jpg" alt="Team Member" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>

          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
            <img src="/assets/team2.jpg" alt="Team Member" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>

          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
            <img src="/assets/team3.jpg" alt="Team Member" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Emily Brown</h3>
            <p className="text-gray-600">Creative Director</p>
          </div>

          {/* Team Member */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2">
            <img src="/assets/team4.jpg" alt="Team Member" className="w-full h-56 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Michael Lee</h3>
            <p className="text-gray-600">Marketing Head</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
