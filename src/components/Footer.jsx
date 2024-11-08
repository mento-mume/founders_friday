import founderslogo from "../assets/images/founderslogo.png";
import facebook from "../assets/images/Frame 642.png";
import instagram from "../assets/images/Frame 643.png";
import twitter from "../assets/images/Frame 644.png";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-[#8300FF]" : "text-black";

  return (
    <section className="mt-[180px] border-t-2 border-[#75687E] py-8 md:py-16">
      <div className="mx-4 md:mx-20">
        <div className="mt-5 flex items-center justify-center md:justify-start">
          <NavLink className="flex items-center space-x-2 font-bold">
            <img
              className="h-16 w-auto"
              alt="founders logo"
              src={founderslogo}
            />
            <span className="text-2xl font-bold text-center md:text-left">
              Founders <br />
              Friday
            </span>
          </NavLink>
        </div>

        <div className="mx-auto mt-[40px] mb-20 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Want To Be A Part Of Abuja&apos;s Biggest Tech Community?
          </h1>
          <button className="text-[#8300FF] border-2 border-[#8300FF] flex items-center justify-center space-x-2 px-6 py-3 rounded-3xl hover:bg-[#F3E8FF] mx-auto md:mx-0">
            <span>Register For Our Next Event</span>
            <FaArrowRight size={20} />
          </button>
        </div>

        <div className="pt-6 border-t-2 border-[#B86DFF] flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Social Icons */}
          <div className="flex space-x-5 mb-6 md:mb-0">
            <img src={facebook} alt="Facebook" className="h-6 w-auto" />
            <img src={instagram} alt="Instagram" className="h-6 w-auto" />
            <img src={twitter} alt="Twitter" className="h-6 w-auto" />
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-7 text-center md:text-left">
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
