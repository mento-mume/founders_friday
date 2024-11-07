import pic from "../assets/images/IMG_2857 1.png";
import { FaArrowRight, FaDonate } from "react-icons/fa";
const WhoAreWe = () => {
  return (
    <div className=" mt-[135px] h-[564px] ">
      <div className="mx-[80px] flex flex-row space-x-7">
        <div>
          <img
            src={pic}
            alt="group picture of attendees"
            className="w-[500px] h-[400px]"
          />
        </div>

        <div className="  px-6 max-w-2xl mx-auto rounded-lg border-l-4 border-[#8300FF]">
          <h2 className="text-2xl font-bold text-[#1A1A1A]">Who Are We?</h2>

          <p className="text-[#6E6E6E] mt-4">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>

          <div className="flex space-x-4 mt-6">
            <button className="flex items-center text-white bg-[#8300FF] px-6 py-3 rounded-full font-semibold hover:bg-[#6E00CC]">
              Register <FaArrowRight className="ml-2" />
            </button>

            <button className="flex items-center text-[#8300FF] border-2 border-[#8300FF] px-6 py-3 rounded-full font-semibold hover:bg-[#F3E8FF]">
              Donate <FaDonate className="ml-2" />
            </button>
          </div>

          <p className="mt-[161px] text-[#6E6E6E] font-medium">
            Founder&apos;s Friday is more than just a meetup — it&apos;s a
            movement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
