import React from 'react';
// Import all the images you intend to use
import house1 from '../assets/house1.jpeg';
import projectImg1 from '../assets/project_img_1.jpg'; // Assuming flat1.jpg maps to this, or adjust as needed
import projectImg2 from '../assets/project_img_2.jpg'; // Assuming plot1.jpg maps to this, or adjust as needed
// You can import more images if your listings expand

const listings = [
  // Use the imported variables for the image paths
  { id: 1, title: "Luxury House in Islamabad", price: "PKR 25M", location: "Islamabad", img: house1 },
  { id: 2, title: "Modern Flat in Lahore", price: "PKR 12M", location: "Lahore", img: projectImg1 }, // Using projectImg1 for flat1.jpg
  { id: 3, title: "Plot in Bahria Town", price: "PKR 8M", location: "Rawalpindi", img: projectImg2 }, // Using projectImg2 for plot1.jpg
  // Add more listings as needed, using the imported image variables
];

const FeaturedListings = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Listings</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {listings.map(({ id, title, price, location, img }) => (
          <div key={id} className="shadow-lg rounded-lg overflow-hidden">
            <img src={img} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-blue-600">{price}</p>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;