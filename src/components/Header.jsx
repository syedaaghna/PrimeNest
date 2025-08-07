// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; 
import logo1 from "../assets/logo1.avif";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" }, 
    { name: "About Us", to: "/about" },
    { name: "Properties", to: "/properties" },
    { name: "Services", to: "#services-section" },
    { name: "Blog", to: "#blog-section" },
    { name: "Contact", to: "#contact-section" },
  ];


  const handleNavigation = (e, to) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      const targetId = to.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setMenuOpen(false); 
  };
  const handleLoginClick = () => {
  
  window.location.href = "/login"; 
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
            <Link
              key={item.name}
              to={item.to}
              onClick={(e) => handleNavigation(e, item.to)}
              className="hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-600 bg-gray-800 text-white rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700" onClick={handleLoginClick}>
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
              <Link
                key={item.name}
                to={item.to}
                onClick={(e) => handleNavigation(e, item.to)}
                className="text-gray-200 text-sm font-medium hover:text-blue-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;