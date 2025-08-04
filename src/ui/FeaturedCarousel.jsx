// FeaturedCarousel.jsx
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import projectImg1 from '../assets/project_img_1.jpg';
import projectImg2 from '../assets/project_img_2.jpg';
import projectImg3 from '../assets/project_img_3.jpg'; // Assuming you have a third image, or use one of the existing ones again

const FeaturedCarousel = () => {
  const slides = [
    { id: 1, image: projectImg1, title: "Modern Luxury Villa, Islamabad" },
    { id: 2, image: projectImg2, title: "Spacious Apartment, Lahore DHA" },
    { id: 3, image: projectImg3, title: "Prime Commercial Plot, Bahria Town Rawalpindi" }, // Using projectImg3, adjust if needed
  ];

  return (
    <section className="py-12 bg-gray-50"> {/* Added section for semantic structure and background */}
      <div className="container mx-auto px-4"> {/* Centered container for better layout */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Featured Properties
        </h2>

        <div className="w-full max-w-4xl mx-auto shadow-xl rounded-xl overflow-hidden"> {/* Increased max-width, added shadow and rounded corners */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            transitionTime={800} // Smoother transitions
            // Optional: customize arrows and indicators via props or custom CSS
            // renderArrowPrev={(onClickHandler, hasPrev, label) =>
            //   hasPrev && (
            //     <button type="button" onClick={onClickHandler} title={label} className="absolute z-10 top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-lg transition-colors">
            //       <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            //     </button>
            //   )
            // }
            // renderArrowNext={(onClickHandler, hasNext, label) =>
            //   hasNext && (
            //     <button type="button" onClick={onClickHandler} title={label} className="absolute z-10 top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full shadow-lg transition-colors">
            //       <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            //     </button>
            //   )
            // }
            // renderIndicator={(onClickHandler, isSelected, index, label) => {
            //   if (isSelected) {
            //     return (
            //       <li
            //         className="w-3 h-3 bg-blue-600 rounded-full mx-1 cursor-pointer"
            //         aria-label={`Selected: ${label} ${index + 1}`}
            //         value={index}
            //         key={index}
            //         role="button"
            //         onClick={onClickHandler}
            //       />
            //     );
            //   }
            //   return (
            //     <li
            //       className="w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer"
            //       aria-label={`${label} ${index + 1}`}
            //       value={index}
            //       key={index}
            //       role="button"
            //       onClick={onClickHandler}
            //     />
            //   );
            // }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-80 md:h-96 lg:h-[500px]" // Increased height for better visual impact
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-4 text-white text-left">
                  <p className="text-3xl md:text-4xl font-semibold mb-1">
                    {slide.title}
                  </p>
                  <p className="text-lg md:text-xl text-gray-300">
                    Explore exclusive properties.
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300 ease-in-out">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;