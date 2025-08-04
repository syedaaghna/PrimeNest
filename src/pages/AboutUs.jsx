import React from "react";

const team = [
  {
    name: "Ali Raza",
    role: "Founder & CEO",
    image: "/team1.jpg",
  },
  {
    name: "Ayesha Khan",
    role: "Senior Agent",
    image: "/team2.jpg",
  },
];

const partners = [
  { name: "Bahria Town", logo: "/bahria_logo.png" },
  { name: "Park View City", logo: "/parkview_logo.png" },
  { name: "Capital Smart City", logo: "/capital_logo.png" },
  { name: "Blue World City", logo: "/blueworld_logo.png" },
];

const achievements = [
  {
    title: "Top Real Estate Partner 2024",
    description: "Awarded by Bahria Town for highest client satisfaction and sales.",
  },
  {
    title: "Trusted Agency Certification",
    description: "Recognized by Park View City for transparency and legal compliance.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-14 px-6 md:px-16" id="about">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-10">
          We are a trusted real estate agency, partnering with leading developers like Bahria Town and Park View City. Our mission is to bring you transparent, secure, and client-centric property solutions.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize the real estate experience by offering clients clear, secure, and rewarding investments across Islamabad, Rawalpindi, and Lahore.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">Our Vision</h3>
            <p className="text-gray-600">
              To be the most client-focused and transparent real estate firm in Pakistan, recognized for our integrity, knowledge, and long-lasting partnerships.
            </p>
          </div>
        </div>

        {/* Team */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="w-64 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-blue-500"
              />
              <h4 className="text-xl font-semibold mt-4">{member.name}</h4>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos Carousel */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Partners</h3>
        <div className="overflow-x-auto whitespace-nowrap pb-6 scrollbar-hide">
          <div className="flex space-x-10 justify-center items-center">
            {partners.map((partner, index) => (
              <div key={index} className="min-w-[150px]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 mx-auto grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <h3 className="text-3xl font-bold text-gray-800 mb-6 mt-14">Our Achievements</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-xl transition"
            >
              <h4 className="text-xl font-bold text-blue-700">{award.title}</h4>
              <p className="text-gray-600 mt-2">{award.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment */}
        <div className="mt-14 bg-blue-100 p-6 rounded-xl shadow-inner">
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Our Commitment</h3>
          <p className="text-gray-700">
            We ensure transparency, client satisfaction, and real value in every deal. Our goal is not just to sell properties but to build trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
