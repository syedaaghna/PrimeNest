
import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{property.title}</h3>
      <p className="text-sm text-gray-500">{property.city}</p>
      <p className="text-md text-green-600 font-bold">
        Rs. {property.price.toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">{property.size}</p>
    </div>
  );
};

export default PropertyCard;
