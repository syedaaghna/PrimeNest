import { useState } from "react";
import logo1 from "../assets/logo1.avif";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Properties",
    "Services",
    "Blog",
    "Contact",
  ];

  return (
    <header className="bg-transparent shadow-md absoulte  top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logo1} alt="RealEstatePro Logo" className="h-8" />
          <span className="text-2xl font-bold text-gray-700">PrimeNest</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-700">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-bluex-400"
          />
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700">
            {" "}
            {/* Changed hover:bg-grey-700 to hover:bg-blue-700 */}
            Login
          </button>
          <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700">
            {" "}
            {/* Changed hover:bg-grey-700 to hover:bg-blue-700 */}
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-white shadow-inner border-t border-gray-200 px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 text-sm font-medium hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
