import React from "react";

const PropertyFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <select
        name="city"
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Cities</option>
        <option value="Islamabad">Islamabad</option>
        <option value="Rawalpindi">Rawalpindi</option>
        <option value="Lahore">Lahore</option>
      </select>
      <select
        name="type"
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Types</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
        <option value="Plot">Plot</option>
        <option value="Commercial">Commercial</option>
        <option value="Farmhouse">Farmhouse</option>
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        onChange={handleChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default PropertyFilters;
