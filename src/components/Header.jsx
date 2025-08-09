import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.avif";
import { FaChevronDown } from "react-icons/fa";
import { services } from "../data/servicesData"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Properties", to: "/properties" },
    { name: "Services", to: "/services", isDropdown: true },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 shadow-md absolute top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo1} alt="PrimeNest Logo" className="h-8" />
          <span className="text-2xl font-bold text-white">PrimeNest</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-200 relative">
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-200 text-sm font-medium focus:outline-none"
                >
                  <span>{item.name}</span>
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`} // ✅ Dynamic URL
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-200 text-sm"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                className="hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700"
            onClick={handleLoginClick}
          >
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
          {navItems.map((item) =>
            item.isDropdown ? (
              <div key={item.name} className="space-y-2">
                <button
                  className="flex justify-between items-center text-gray-200 text-sm font-medium hover:text-blue-500 w-full text-left"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {item.name}
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="block text-gray-400 text-sm hover:text-blue-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.to}
                className="block text-gray-200 text-sm font-medium hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
