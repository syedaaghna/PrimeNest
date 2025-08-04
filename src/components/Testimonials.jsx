
import React from "react";
import { motion } from "framer-motion"; 
import profileImg1 from "../assets/profile_img_1.png";
import profileImg2 from "../assets/profile_img_2.png";
import profileImg3 from "../assets/profile_img_3.png";

const testimonials = [
  {
    name: "Ali Khan",
    feedback: "RealEstatePro made finding my dream home a breeze! The listings were accurate, and the team was incredibly helpful throughout the process. Highly recommend their services.",
    avatar: profileImg1,
  },
  {
    name: "Sarah Ahmed",
    feedback: "The professionals at RealEstatePro are top-notch. They guided me every step of the way, from property viewing to closing the deal. Truly a seamless and pleasant experience.",
    avatar: profileImg2,
  },
  {
    name: "Usman Tariq",
    feedback: "I was impressed by the wide range of properties available and the detailed descriptions. RealEstatePro helped me find exactly what I was looking for, quickly and efficiently.",
    avatar: profileImg3,
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

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50"> {/* Enhanced background gradient */}
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12" // Enhanced heading style
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" // Increased gap
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="border border-gray-200 p-6 rounded-lg shadow-xl bg-gradient-to-br from-blue-50 to-white
                       transform transition-all duration-300 ease-in-out
                       hover:scale-103 hover:shadow-2xl hover:border-blue-300 cursor-pointer" 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)" }} 
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={`${t.name}'s avatar`}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500 shadow-md"  
                />
                <div>
                  <p className="font-semibold text-xl text-gray-800">{t.name}</p> 
                </div>
              </div>
              <p className="italic text-gray-700 leading-relaxed mb-4 text-base">
                "{t.feedback}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;