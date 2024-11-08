import image from "../assets/images/IMG_2721 1.png";
import { FaArrowRight } from "react-icons/fa";

const Register = () => {
  return (
    <section className="mt-16 md:mt-40 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-[500px] flex-shrink-0">
          <img
            src={image}
            className="w-full md:w-[500px] h-auto"
            alt="Event promotion"
          />
        </div>
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold">
            At Founder&apos;s Friday, Every Friday Is a Learning Experience!
          </h2>
          <p className="text-base md:text-lg">
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria&apos;s startup landscape.
          </p>

          <button className="bg-[#8300FF] text-white flex items-center justify-center space-x-2 px-6 py-3 rounded-full hover:bg-[#6E00CC]">
            <span>Register</span>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
