import founderslogo from "../assets/images/founderslogo.png";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-[#8300FF]" : "text-black";

  return (
    <nav className="border-b-2 border-[#75687E] p-4 relative">
      <div className="flex items-center justify-between ml-4 md:ml-20 mr-4 md:mr-24">
        <NavLink to="/" className="flex items-center space-x-2 font-bold">
          <img
            className="h-8 w-auto md:h-10"
            alt="founders logo"
            src={founderslogo}
          />
          <span className="text-lg md:text-xl">Founders Friday</span>
        </NavLink>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links and Register Button */}
        <div className="hidden md:flex items-center space-x-7">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
          <button className="text-[#8300FF] border-2 border-[#8300FF] flex items-center justify-center space-x-2 px-4 py-2 rounded-3xl w-40 md:w-48">
            <span>Register</span>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-70 flex flex-col items-center justify-center z-50 md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center space-y-6 text-white text-lg">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/gallery"
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <button
              className="text-[#8300FF] border-2 border-[#8300FF] flex items-center justify-center space-x-2 px-4 py-2 rounded-3xl w-48"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Register</span>
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
