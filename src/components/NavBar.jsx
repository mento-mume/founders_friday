import founderslogo from "../assets/images/founderslogo.png";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? " text-[#8300FF]  " : "text-black ";
  return (
    <nav className="bg-[#FDF7FF] border border-[#75687E]  p-4">
      <div className="flex items-center justify-between ml-20 mr-24">
        {/* Logo and Title */}
        <NavLink className="flex items-center space-x-2 font-bold">
          <img className="h-10 w-auto" alt="founders logo" src={founderslogo} />
          <span className="text-xl">Founders Friday</span>
        </NavLink>

        {/* Nav Links and Button */}
        <div className="flex items-center space-x-24">
          <div className=" space-x-7">
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
          </div>
          <button className="text-[#8300FF] border-2 border-[#8300FF]  justify-center space-x-2 px-[15px] flex items-center py-4 rounded-3xl w-48 h-auto">
            <span>Register</span>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
