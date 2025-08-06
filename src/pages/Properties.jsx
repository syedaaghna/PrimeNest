
import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";
import MapView from "../components/MapView";
import { properties } from "../data/propertyData";

const Properties = () => {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredProperties = properties.filter((p) => {
    const matchesCity = filters.city ? p.city === filters.city : true;
    const matchesType = filters.type ? p.type === filters.type : true;
    const matchesMinPrice = filters.minPrice ? p.price >= filters.minPrice : true;
    const matchesMaxPrice = filters.maxPrice ? p.price <= filters.maxPrice : true;
    return matchesCity && matchesType && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="container mx-auto px-4 py-6 mt-20"> 
      <h2 className="text-2xl font-bold mb-4">Explore Properties</h2>
      <PropertyFilters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="mt-8">
        <MapView />
      </div>
    </div>
  );
};

export default Properties;