import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white px-6 py-5 my-9 mx-8 rounded-lg text-center shadow-md">
      <p className="font-display text-black text-sm flex items-center justify-center gap-3">
        <i className="fa-solid fa-tag"></i>
        <span className="font-medium">Special Offer:</span> Get 20% off on all destinations! Use code
        <span className="font-bold bg-white/20 px-3 py-1 rounded">TRAVEL20</span>
        <a href="#" className="underline ml-2 hover:text-primary">Book Now</a>
      </p>
    </div>
  );
};

export default Announcement;

// import React from "react";

// const Announcement = () => {
//   return (
//     <div className="bg-white px-6 py-5 my-9 mx-8 rounded-lg text-center shadow-md">
//       <p className="font-display text-black text-base flex items-center justify-center gap-3">
//         <i className="fa-solid fa-tag text-lg"></i>
//         <span className="font-medium text-lg">Special Offer:</span> Get 20% off on all destinations! Use code
//         <span className="font-bold bg-white/20 px-3 py-1 rounded">TRAVEL20</span>
//         <a href="#" className="underline ml-2 hover:text-primary text-lg">Book Now</a>
//       </p>
//     </div>
//   );
// };

// export default Announcement;
