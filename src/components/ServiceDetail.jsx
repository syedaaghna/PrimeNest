// src/components/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// This is your services data. You can expand on this with more content.
const servicesData = [
  {
    id: "buying-selling",
    title: "Property Buying/Selling",
    description: "Guidance on the process, legal support, and valuation services to help you buy or sell properties smoothly.",
    fullContent: "Our team provides comprehensive guidance for both buyers and sellers. We assist with market analysis, property valuation, legal documentation, and negotiation to ensure a successful transaction. We're with you every step of the way, from initial consultation to closing the deal.",
  },
  {
    id: "rental-management",
    title: "Rental Management",
    description: "Tenant screening, rent collection, and maintenance to ensure hassle-free property rental.",
    fullContent: "We take the stress out of being a landlord. Our services include thorough tenant screening, timely rent collection, handling maintenance requests, and managing legal compliance. We protect your investment and ensure a steady income stream.",
  },
  {
    id: "investment",
    title: "Investment Consultancy",
    description: "Market analysis and ROI projections for investors seeking profitable opportunities.",
    fullContent: "Our expert consultants help you navigate the real estate investment landscape. We provide detailed market trend analysis, property sourcing, ROI projections, and risk assessments to help you make informed decisions and build a profitable portfolio.",
  },
  {
    id: "marketing",
    title: "Property Marketing",
    description: "Digital and traditional marketing strategies to promote your property effectively.",
    fullContent: "We use a multi-channel approach to get your property in front of the right audience. Our services include professional photography, virtual tours, social media campaigns, and targeted advertising to maximize visibility and attract qualified buyers or renters.",
  },
  {
    id: "after-sales",
    title: "After-Sales Support",
    description: "Assistance with documentation, handover, and any post-purchase requirements.",
    fullContent: "Our support doesn't end after the sale. We provide assistance with all post-purchase requirements, including utility transfers, property handover, and follow-up support to ensure a seamless transition for all parties involved.",
  },
];

const ServiceDetail = () => {
  // Use the useParams hook to get the serviceId from the URL
  const { serviceId } = useParams();

  // Find the service object in our data array that matches the URL ID
  const service = servicesData.find((s) => s.id === serviceId);

  // If no service is found, display a "not found" message
  if (!service) {
    return (
      <div className="bg-gray-50 min-h-screen pt-24 pb-12 flex justify-center items-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="mt-6 inline-block text-blue-600 hover:underline">
            Go back to all services
          </Link>
        </div>
      </div>
    );
  }

  // If the service is found, display its details
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{service.description}</p>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-700 leading-relaxed text-base">
            {service.fullContent}
          </p>
          {/* Add more sections, images, or a contact form for this specific service */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;