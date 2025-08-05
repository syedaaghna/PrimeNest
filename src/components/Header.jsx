import { useState } from "react";
import logo1 from "../assets/logo1.avif";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero-section" },
    { name: "About Us", href: "#about-us-section" },
    { name: "Properties", href: "#featured-properties" },
    { name: "Services", href: "#services-section" },
    { name: "Blog", href: "#blog-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <header className="bg-gray-900 shadow-md absolute top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logo1} alt="PrimeNest Logo" className="h-8" />
          <span className="text-2xl font-bold text-white">PrimeNest</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-600 bg-gray-800 text-white rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700">
            Login
          </button>
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-gray-800 shadow-inner border-t border-gray-700 px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-200 text-sm font-medium hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;