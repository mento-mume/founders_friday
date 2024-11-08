import Back from "../assets/images/IMG_2647 1.png";
import logo from "../assets/images/bigLogo.png";
import { FaArrowRight } from "react-icons/fa";

const Kaduna = () => {
  return (
    <section
      className=" mt-20 relative h-screen w-full bg-cover bg-center bg-no-repeat text-white flex items-center justify-center p-4 md:p-20"
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 text-center md:text-left max-w-3xl">
        <div className="max-w-md space-y-6">
          <p className="text-[#EBE9ED] text-lg md:text-xl font-semibold">
            Founders Friday is coming to
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#A649FF]">
            Kaduna
          </h1>
          <p className="text-sm md:text-lg text-[#EBE9ED]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center text-[#8300FF] border-2 border-[#8300FF] px-4 py-3 rounded-full space-x-2 hover:bg-[#F3E8FF] w-48">
              <span>Register</span>
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="max-w-xs md:max-w-md">
          <img src={logo} alt="Big logo" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Kaduna;
