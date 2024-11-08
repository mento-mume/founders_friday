import image1 from "../assets/images/Frame 714.png";

import { FaArrowRight } from "react-icons/fa";

const WhatHappens = () => {
  return (
    <section className="mt-20 md:mt-40 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0">
        <div className="text-center md:text-left md:max-w-lg">
          <p className="text-[#5C00B3] text-xl font-bold">Founders Friday</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            What Happens At <br className="hidden md:block" /> Founders Friday
          </h1>
          <p className="text-base md:text-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <button className="flex items-center justify-center md:justify-start text-white bg-[#8300FF] px-6 py-3 rounded-md font-semibold hover:bg-[#6E00CC]">
            Learn More <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className=" w-full  md:max-w-md lg:max-w-lg h-auto">
          <img src={image1} className=" w-full " alt="Background Image" />
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
