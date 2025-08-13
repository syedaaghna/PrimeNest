import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import projectImg1 from "../assets/project_img_1.jpg";
import projectImg2 from "../assets/project_img_2.jpg";
import projectImg3 from "../assets/project_img_3.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeaturedCarousel = () => {
  const navigate = useNavigate(); // Initialize the hook
  const slides = [
    { id: 1, image: projectImg1, title: "Modern Luxury Villa, Islamabad" },
    { id: 2, image: projectImg2, title: "Spacious Apartment, Lahore DHA" },
    {
      id: 3,
      image: projectImg3,
      title: "Prime Commercial Plot, Bahria Town Rawalpindi",
    },
  ];

  const handleViewDetails = () => {
    navigate("/properties");
  };

  return (
    <motion.section
      id="featured-properties"
      className="py-12 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Featured Properties
        </h2>

        <div className="w-full max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            transitionTime={800}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-80 md:h-96 lg:h-[500px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-4 text-white text-left">
                  <p className="text-3xl md:text-4xl font-semibold mb-1">
                    {slide.title}
                  </p>
                  <p className="text-lg md:text-xl text-gray-300">
                    Explore exclusive properties.
                  </p>
                  <button
                    onClick={handleViewDetails}
                    className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedCarousel;
