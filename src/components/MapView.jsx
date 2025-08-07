import React from 'react';
import { motion } from 'framer-motion';

const MapView = () => {
  return (
    <motion.div
      className="w-full h-80 bg-gray-300 rounded-xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Placeholder for a map or image */}
      <div className="flex items-center justify-center w-full h-full text-gray-600">
        <p>Map Placeholder</p>
      </div>
    </motion.div>
  );
};

export default MapView;