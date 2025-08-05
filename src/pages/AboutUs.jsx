import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick"; // <-- Import Slider

import teamMember1 from "../assets/profile_img_1.png";
import teamMember2 from "../assets/profile_img_2.png";
import bahriaLogo from "../assets/Bahria_Town_Logo.png";
import parkviewLogo from "../assets/parkview.jpg";
import capitalLogo from "../assets/capital_logo.png";
import blueworldLogo from "../assets/blue-world-city-logo.webp";
import WhyChooseUs from "../components/WhyChooseUs";

const team = [
  {
    name: "Ali Raza",
    role: "Founder & CEO",
    image: teamMember1,
  },
  {
    name: "Ayesha Khan",
    role: "Senior Agent",
    image: teamMember2,
  },
  // Added more team members for the carousel to be visible
  {
    name: "John Doe",
    role: "Marketing Head",
    image: teamMember1,
  },
  {
    name: "Jane Smith",
    role: "Property Analyst",
    image: teamMember2,
  },
];

const partners = [
  { name: "Bahria Town", logo: bahriaLogo },
  { name: "Park View City", logo: parkviewLogo },
  { name: "Capital Smart City", logo: capitalLogo },
  { name: "Blue World City", logo: blueworldLogo },
  // Added more partners for the carousel to be visible
  { name: "Bahria Town 2", logo: bahriaLogo },
  { name: "Park View City 2", logo: parkviewLogo },
];

const achievements = [
  {
    title: "Top Real Estate Partner 2024",
    description:
      "Awarded by Bahria Town for highest client satisfaction and sales.",
  },
  {
    title: "Trusted Agency Certification",
    description:
      "Recognized by Park View City for transparency and legal compliance.",
  },
];

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutUs = () => {
  // Carousel settings for Team members
  const teamSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 team members at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Carousel settings for Partners
  const partnersSettings = {
    dots: false, // No dots for partners
    arrows: false, // No arrows for a cleaner look
    infinite: true,
    speed: 1500, // Slower slide transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear", // Smooth continuous scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-14 px-6 md:px-16" id="about-us-section">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionHeaderVariants}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={paragraphVariants}
        >
          We are a trusted real estate agency, partnering with leading
          developers like Bahria Town and Park View City. Our mission is to
          bring you transparent, secure, and client-centric property solutions.
        </motion.p>

        {/* Mission & Vision - Fixed Height */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg min-h-[220px]" // <-- Added min-h for consistent height
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To revolutionize the real estate experience by offering clients
              clear, secure, and rewarding investments across Islamabad,
              Rawalpindi, and Lahore.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg min-h-[220px]" // <-- Added min-h for consistent height
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most client-focused and transparent real estate firm in
              Pakistan, recognized for our integrity, knowledge, and
              long-lasting partnerships.
            </p>
          </motion.div>
        </div>

        {/* Team Carousel Section */}
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionHeaderVariants}
        >
          Meet Our Team
        </motion.h3>
        <div className="mx-auto max-w-4xl">
          <Slider {...teamSettings}>
            {team.map((member, index) => (
              <div key={index} className="px-2">
                <motion.div
                  className="w-full text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardVariants}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-blue-500"
                  />
                  <h4 className="text-xl font-semibold mt-4">{member.name}</h4>
                  <p className="text-blue-600">{member.role}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Partners Carousel Section */}
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-6 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionHeaderVariants}
        >
          Our Partners
        </motion.h3>
        <div className="mx-auto max-w-4xl">
          <Slider {...partnersSettings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-2">
                <motion.div
                  className="min-w-[150px] flex justify-center items-center h-28"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 max-w-full mx-auto grayscale hover:grayscale-0 transition duration-300 object-contain"
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Achievements */}
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-6 mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionHeaderVariants}
        >
          Our Achievements
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-xl transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <h4 className="text-xl font-bold text-blue-700">{award.title}</h4>
              <p className="text-gray-600 mt-2">{award.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-14 bg-blue-100 p-6 rounded-xl shadow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-2">
            Our Commitment
          </h3>
          <p className="text-gray-700">
            We ensure transparency, client satisfaction, and real value in every
            deal. Our goal is not just to sell properties but to build trust.
          </p>
        </motion.div>
      </div>
      <WhyChooseUs />
    </section>
  );
};

export default AboutUs;