import image from "../assets/images/IMG_2721 1.png";
import { FaArrowRight } from "react-icons/fa";
const Register = () => {
  return (
    <section className="mt-[180px]">
      <div className="mx-20 flex flex-row items-center justify-center space-x-24">
        <div>
          <img src={image} className="w-[500px]" />
        </div>
        <div className="flex flex-col space-y-5">
          <h2 className="text-xl font-bold">
            At Founder&apos;s Friday, Every Friday Is a Learning Experience!
          </h2>
          <p className="text-lg">
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria&apos;s startup landscape.
          </p>

          <button className="text-[#8300FF] text-white bg-[#8300FF]  justify-center space-x-2 px-[15px] flex items-center py-4 rounded-full w-48 h-auto">
            <span>Register</span>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
