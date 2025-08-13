// src/components/CityHighlights.jsx

import React from 'react';
import { motion } from 'framer-motion';
import projectImg4 from '../assets/project_img_4.jpg';
import projectImg5 from '../assets/project_img_5.jpg';
import projectImg6 from '../assets/project_img_6.jpg';
import { Link } from "react-router-dom"; // Import Link

const cities = [
  {
    name: "Islamabad",
    description: "Capital city with elite housing projects. Discover luxurious villas and modern apartments in serene surroundings.",
    link: "#",
    img: projectImg4
  },
  {
    name: "Rawalpindi",
    description: "Thriving neighborhoods and affordable plots. An evolving real estate market with diverse investment opportunities.",
    link: "#",
    img: projectImg5
  },
  {
    name: "Lahore",
    description: "Historic charm meets modern living. Explore a blend of traditional homes and contemporary developments.",
    link: "#",
    img: projectImg6
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CityHighlights = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          City Highlights
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cities.map((city) => (
            <motion.div
              key={city.name}
              className="bg-white p-0 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-103 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            >
              <img src={city.img} alt={city.name} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{city.name}</h3>
                <p className="text-gray-600 mb-4 text-base leading-relaxed">{city.description}</p>
                <Link to={`/properties/${city.name.toLowerCase()}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Explore Properties
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CityHighlights;