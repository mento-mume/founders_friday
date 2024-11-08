import pic from "../assets/images/IMG_2857 1.png";
import { FaArrowRight, FaDonate } from "react-icons/fa";

const WhoAreWe = () => {
  return (
    <div className="mt-32 md:mt-[135px] px-4 md:px-[80px] h-auto md:h-[564px]">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-7 items-center">
        <div className="flex justify-center">
          <img
            src={pic}
            alt="group picture of attendees"
            className="w-full max-w-md md:w-[500px] md:h-[400px] rounded-lg"
          />
        </div>

        <div className="px-4 md:px-6 max-w-full md:max-w-2xl rounded-lg border-l-4 border-[#8300FF]">
          <h2 className="text-2xl font-bold text-[#1A1A1A] text-center md:text-left">
            Who Are We?
          </h2>

          <p className="text-[#6E6E6E] mt-4 text-center md:text-left">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>

          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-6 space-y-4 md:space-y-0">
            <button className="flex items-center text-white bg-[#8300FF] px-6 py-3 rounded-full font-semibold hover:bg-[#6E00CC] w-full md:w-auto justify-center">
              Register <FaArrowRight className="ml-2" />
            </button>

            <button className="flex items-center text-[#8300FF] border-2 border-[#8300FF] px-6 py-3 rounded-full font-semibold hover:bg-[#F3E8FF] w-full md:w-auto justify-center">
              Donate <FaDonate className="ml-2" />
            </button>
          </div>

          <p className="mt-10 md:mt-[161px] text-[#6E6E6E] font-medium text-center md:text-left">
            Founder&apos;s Friday is more than just a meetup — it&apos;s a
            movement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
