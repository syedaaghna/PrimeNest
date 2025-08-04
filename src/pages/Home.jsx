
import React from "react";
import FeaturedCarousel from "../ui/FeaturedCarousel";
import Hero from "../components/Hero"; 
import CityHighlights from "../components/CityHighlights"; 
import Testimonials from "../components/Testimonials"; 


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