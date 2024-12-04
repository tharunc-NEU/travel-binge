import React from "react";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import HeroSlider from "./components/HeroSlider";
import PopularDestinations from "./components/PopularDestinations";
import SpecialTrips from "./components/SpecialTrips";
import UserReviews from "./components/UserReviews";
import FeaturedOn from "./components/FeaturedOn";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <HeroSlider />
      <SpecialTrips />
      <PopularDestinations />
      <FeaturedOn />
      <UserReviews />
      
      <Footer />
    </>
  );
};

export default Home;
