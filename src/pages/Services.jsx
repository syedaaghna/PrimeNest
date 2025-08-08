import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Our Comprehensive Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we can assist you with all your real estate needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.id}`} className="group block">
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 8h.01M9 12h.01M9 16h.01M15 8h.01M15 12h.01M15 16h.01M9 21h6"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-center">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
