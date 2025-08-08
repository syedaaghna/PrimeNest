
import React from "react";
import FeaturedCarousel from "../ui/FeaturedCarousel";
import Hero from "../components/Hero"; 
import CityHighlights from "../components/CityHighlights"; 
import Testimonials from "../components/Testimonials"; 
import FloatingSocialButtons from "../components/SocialMediaButtons";


const Home = () => {
  return (
    <>
     <FloatingSocialButtons /> 
      <Hero />
      <FeaturedCarousel />
      <CityHighlights />
      <Testimonials />
    </>
  );
};

export default Home;