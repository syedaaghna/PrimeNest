// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

const Hero = () => {
  return (
    <>
      <section className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white relative" style={{ backgroundImage: "url('/hero.png')" }}>
        {/* Overlay for text readability, keeping the existing one, or adding if missing */}
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Added a subtle overlay for text contrast */}

        <motion.div
          className="relative bg-opacity-50 p-6 rounded-lg text-center z-10" // Added z-10 to ensure text is above overlay
          initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
          animate={{ opacity: 1, y: 0 }}   // Animate to fully visible and original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Find Your Dream Home
          </motion.h1>
          <motion.p
            className="mb-6 text-lg md:text-xl" // Added some text sizing for aesthetics
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Properties in Islamabad, Rawalpindi & Lahore
          </motion.p>
          <motion.button
            className="bg-blue-600 px-8 py-3 rounded-md text-white hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-semibold" // Enhanced button styles
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            Browse Listings
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;