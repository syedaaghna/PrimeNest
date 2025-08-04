import React from 'react';
// Import the images you want to use for each city highlight
import projectImg4 from '../assets/project_img_4.jpg'; // Assuming these are city-specific images
import projectImg5 from '../assets/project_img_5.jpg';
import projectImg6 from '../assets/project_img_6.jpg';

const cities = [
  {
    name: "Islamabad",
    description: "Capital city with elite housing projects.",
    link: "#",
    img: projectImg4 // Assigning image to Islamabad
  },
  {
    name: "Rawalpindi",
    description: "Thriving neighborhoods and affordable plots.",
    link: "#",
    img: projectImg5 // Assigning image to Rawalpindi
  },
  {
    name: "Lahore",
    description: "Historic charm meets modern living.",
    link: "#",
    img: projectImg6 // Assigning image to Lahore
  },
];

const CityHighlights = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">City Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <div key={city.name} className="bg-white p-0 rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:scale-105"> {/* Removed text-center from outer div, added transition */}
            <img src={city.img} alt={city.name} className="w-full h-48 object-cover" /> {/* Image added here */}
            <div className="p-6 text-center"> {/* Added p-6 and text-center here for content */}
              <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
              <p className="text-gray-600 mb-4">{city.description}</p>
              <a href={city.link} className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200">Explore</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityHighlights;