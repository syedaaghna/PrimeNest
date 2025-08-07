import React from 'react';
import { motion } from 'framer-motion';

const filterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PropertyFilters = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-xl flex flex-wrap gap-4 items-center justify-between mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div variants={filterVariants}>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
        <select id="location" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option>All Locations</option>
          <option>Islamabad</option>
          <option>Rawalpindi</option>
          <option>Lahore</option>
        </select>
      </motion.div>

      <motion.div variants={filterVariants}>
        <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
        <select id="price-range" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option>Any Price</option>
          <option>Under PKR 10M</option>
          <option>PKR 10M - 20M</option>
          <option>PKR 20M+</option>
        </select>
      </motion.div>

      <motion.div variants={filterVariants}>
        <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
        <select id="property-type" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option>All Types</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Plot</option>
        </select>
      </motion.div>

      <motion.div variants={filterVariants}>
        <button className="mt-4 md:mt-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Search
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PropertyFilters;