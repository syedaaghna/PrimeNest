import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property, index }) => {
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1, // slight stagger effect if index passed
      },
    },
  };

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`); // Replace with property.slug if needed
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-[200px]">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{property.title}</h3>
          <p className="text-sm text-gray-500 flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {property.location || property.city}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <p className="text-lg font-semibold text-blue-600">Rs. {property.price.toLocaleString()}</p>
          <button
            onClick={handleViewDetails}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700 transition-all"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
