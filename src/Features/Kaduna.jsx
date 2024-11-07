import Back from "../assets/images/IMG_2647 1.png";
import logo from "../assets/images/bigLogo.png";
import { FaArrowRight } from "react-icons/fa";
const Kaduna = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat text-white pl-20 "
      style={{ backgroundImage: `url(${Back})` }}
    >
      <div className="relative z-10 p-8 flex flex-row items-center justify-center">
        <div>
          <p className="text-[#EBE9ED] text-xl font-semibold">
            Founders Friday is coming to
          </p>
          <h1 className="text-5xl font-bold text-[#A649FF] mb-8">Kaduna</h1>
          <p className="mt-4 text-lg text-[#EBE9ED] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <button className="text-[#8300FF] border-2 border-[#8300FF]  justify-center space-x-2 px-[15px] flex items-center py-4 rounded-full w-48 h-auto">
            <span>Register</span>
            <FaArrowRight size={20} />
          </button>
        </div>
        <div>
          <img src={logo} />
        </div>
      </div>
    </section>
  );
};

export default Kaduna;
