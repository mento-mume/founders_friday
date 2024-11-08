import { FaArrowRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Ellipse1 from "../assets/images/Ellipse 1.png";
import Ellipse2 from "../assets/images/Ellipse 2.png";
import Ellipse3 from "../assets/images/Ellipse 3.png";
import Ellipse4 from "../assets/images/Ellipse 4.png";
import Ellipse5 from "../assets/images/Ellipse 5.png";
import Frame16 from "../assets/images/Frame 16.png";
import Frame17 from "../assets/images/Frame 17 .png";
import Frame20 from "../assets/images/Frame 20.png";
import Frame22 from "../assets/images/Frame 22.png";

const Hero = () => {
  return (
    <section className="mt-16 md:mt-32">
      <div className="max-w-4xl flex flex-col md:flex-row md:space-x-11 mx-4 md:mx-20">
        <div className="flex flex-col max-w-full md:max-w-[822px] mb-8 md:mb-0">
          <div>
            <p className="font-bold text-lg text-center md:text-left">
              Join our premier monthly meetup for startup founders and tech
              visionaries
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#8300FF] mb-4 text-center md:text-left">
              Connect, Collaborate, Innovate!
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-8 text-center md:text-left">
              Every last Friday of the month, we bring together the brightest
              minds in our local tech ecosystem. Whether you’re a seasoned
              entrepreneur or just starting your journey, Founder&apos;s Friday
              is your launchpad for new ideas, valuable connections, and
              game-changing opportunities.
            </p>

            <button className="text-[#8300FF] border-2 border-[#8300FF] flex items-center justify-center space-x-2 px-6 py-3 rounded-3xl hover:bg-[#F3E8FF] mb-6 w-full md:w-auto">
              <span>Register For Our Next Event</span>
              <FaArrowRight size={20} />
            </button>
            <p className="text-sm text-gray-500 text-center md:text-left">
              Join us for our next meetup on the 26th of July 2024
            </p>
          </div>
          <div>
            {/* Collaborator Logos */}
            <div className="flex justify-center md:justify-start space-x-4 mt-8 md:mt-10">
              <img
                src={Ellipse1}
                alt="Collaborator 1"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
              <img
                src={Ellipse2}
                alt="Collaborator 2"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
              <img
                src={Ellipse3}
                alt="Collaborator 3"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
              <img
                src={Ellipse4}
                alt="Collaborator 4"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
              <img
                src={Ellipse5}
                alt="Collaborator 5"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 flex justify-center md:justify-start space-x-2 items-center">
              <span>Become a collaborator today</span>
              <FaArrowUpRightFromSquare size={15} />
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0">
          <img
            src={Frame16}
            alt="image of attendees"
            className="w-60 md:w-96"
          />
          <img
            src={Frame17}
            alt="image of attendees"
            className="w-60 md:w-96"
          />
          <img
            src={Frame20}
            alt="image of attendees"
            className="w-40 md:w-52"
          />
          <img
            src={Frame22}
            alt="image of attendees"
            className="w-20 md:w-24"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
