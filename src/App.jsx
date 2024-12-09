import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Destinations from "./components/Destinations";
import AboutUs from "./components/AboutUs";
import AuthPage from "./components/AuthPage";
import TopDestinations from "./components/TopDestinations";
import ContactUs from "./components/ContactUs";
import Reservation from "./components/Reservation";
import Maldives from "./components/Maldives";
import Provence from "./components/Provence";
import Venice from "./components/Venice";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/top-destinations" element={<TopDestinations />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/destination/maldives" element={<Maldives />} />
        <Route path="/destination/provence" element={<Provence />} />
        <Route path="/destination/venice" element={<Venice />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;