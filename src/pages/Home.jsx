// Home.jsx
import React from "react";
import FeaturedCarousel from "../ui/FeaturedCarousel";
import Hero from "../components/Hero"; // <-- Corrected path
import CityHighlights from "../components/CityHighlights"; // <-- Corrected path
import Testimonials from "../components/Testimonials"; // <-- Corrected path


const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCarousel />
      <CityHighlights />
      <Testimonials />
    </>
  );
};

export default Home;