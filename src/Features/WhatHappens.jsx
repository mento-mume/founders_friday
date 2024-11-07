import image1 from "../assets/images/IMG_2501 3.png";
import image2 from "../assets/images/IMG_2519 2.png";
import { FaArrowRight } from "react-icons/fa";
const WhatHappens = () => {
  return (
    <section className="mt-40">
      <div className="flex flex-row mx-20 space-x-20">
        <div>
          <div>
            <p className="text-[#5C00B3] text-xl font-bold">Founders Friday</p>
            <h1 className="text-4xl font-bold">
              What Happens At <br />
              Founders Friday
            </h1>
          </div>
          <p className="text-2xl my-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <button className="flex items-center text-white bg-[#8300FF] px-6 py-3 rounded-md font-semibold hover:bg-[#6E00CC]">
            Learn More <FaArrowRight className="ml-2" />
          </button>
        </div>
        {/* <div className=" flex flex-row ">
          <img src={image2} className="w-[950px] z-40 " />
          <img src={image1} className="w-[950px] z-0  " />
        </div>
         */}
        <div className="relative w-[950px] h-auto">
          <img
            src={image1}
            className="absolute top-0 left-[60px] w-full z-0"
            alt="Background Image"
          />
          <img
            src={image2}
            className="absolute top-[120px] left-0 w-full z-40"
            alt="Foreground Image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
