// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Destinations from "./components/Destinations";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/destinations" element={<Destinations />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Destinations from "./components/Destinations";
// import DesignYourDestination from "./components/DesignYourDestination";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/destinations" element={<Destinations />} />
//         <Route path="/design-your-destination" element={<DesignYourDestination />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Destinations from "./components/Destinations";
// import DesignYourDestination from "./components/DesignYourDestination";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/destinations" element={<Destinations />} />
//         <Route path="/design-your-destination" element={<DesignYourDestination />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Destinations from "./components/Destinations";
import DesignYourDestination from "./components/DesignYourDestination";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/design-your-destination" element={<DesignYourDestination />} />
      </Routes>
    </Router>
  );
};

export default App;
