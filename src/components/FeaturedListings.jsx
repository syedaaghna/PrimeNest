
import React from 'react';
import { motion } from 'framer-motion';
import house1 from '../assets/house1.jpeg';
import projectImg1 from '../assets/project_img_1.jpg';
import projectImg2 from '../assets/project_img_2.jpg';

const listings = [
  { id: 1, title: "Luxury House in Islamabad", price: "PKR 25M", location: "Islamabad", img: house1 },
  { id: 2, title: "Modern Flat in Lahore", price: "PKR 12M", location: "Lahore", img: projectImg1 },
  { id: 3, title: "Plot in Bahria Town", price: "PKR 8M", location: "Rawalpindi", img: projectImg2 },
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

const FeaturedListings = () => {
  return (
    <section className="py-16 px-4 bg-white"> 
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12" 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Featured Listings
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {listings.map(({ id, title, price, location, img }) => (
            <motion.div
              key={id}
              className="shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-103 cursor-pointer" 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} 
            >
              <img src={img} alt={title} className="w-full h-56 object-cover" /> 
              <div className="p-4 bg-white"> 
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3> 
                <p className="text-blue-600 font-bold mb-1">{price}</p> 
                <p className="text-sm text-gray-600">{location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;