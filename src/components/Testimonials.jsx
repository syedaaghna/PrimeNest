import React from "react";
// Import the profile images
import profileImg1 from "../assets/profile_img_1.png";
import profileImg2 from "../assets/profile_img_2.png";

import profileImg3 from "../assets/profile_img_3.png"; // Or reuse profileImg1 if only two unique images

const testimonials = [
  {
    name: "Ali Khan",
    feedback:
      "RealEstatePro made finding my dream home a breeze! The listings were accurate, and the team was incredibly helpful throughout the process. Highly recommend their services.",
    avatar: profileImg1, // Assigning the first image
  },
  {
    name: "Sarah Ahmed",
    feedback:
      "The professionals at RealEstatePro are top-notch. They guided me every step of the way, from property viewing to closing the deal. Truly a seamless and pleasant experience.",
    avatar: profileImg2,
  },
  {
    name: "Usman Tariq",
    feedback:
      "I was impressed by the wide range of properties available and the detailed descriptions. RealEstatePro helped me find exactly what I was looking for, quickly and efficiently.",
    avatar: profileImg3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-gray-200 p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-white
                       transform transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-xl hover:border-blue-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={t.avatar}
                alt={`${t.name}'s avatar`}
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-400"
              />
              <div>
                <p className="font-semibold text-lg text-gray-800">{t.name}</p>
              </div>
            </div>
            <p className="italic text-gray-700 leading-relaxed mb-4">
              "{t.feedback}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
