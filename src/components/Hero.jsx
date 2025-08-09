
import React from 'react';
import { motion } from 'framer-motion'; 

const Hero = () => {
  return (
    <>
      <section className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white relative" style={{ backgroundImage: "url('/hero.png')" }}>
       
        <div className="absolute inset-0 bg-black opacity-40"></div> 
        <motion.div
          className="relative bg-opacity-50 p-6 rounded-lg text-center z-10" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}   
          transition={{ duration: 1, ease: "easeOut" }} 
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
          
        </motion.div>
      </section>
    </>
  );
};

export default Hero;