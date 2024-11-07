import Frame682 from "../assets/images/Frame 682.png";
import { FaArrowRight } from "react-icons/fa";
const Sponsor = () => {
  return (
    <section className="mt-[180px]">
      <div className="mx-20">
        <div className="">
          <p className="text-xl font-bold text-[#5C00B3]">
            Sponsor The Next Friday
          </p>
          <div className="flex flex-row  space-x-[300px]">
            <h2 className="text-4xl text-left font-bold">
              Why Sponsor Founders Friday?
            </h2>

            <p className="text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
        <div className="mx-44 mt-[68px] flex flex-row space-x-32">
          <div>
            <img src={Frame682} className="w-[600px]" />
          </div>
          <div>
            <div className="mb-4">
              <h3 className="text-xl fot-bold">How To Sponsor</h3>
              <p className="italic">Ready to Make an Impact?</p>
              <p className="text-xs mb-2">
                Fill out the form below or contact us at [contact email/phone
                number] to learn more about how you can sponsor the next
                Founders Friday
              </p>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label htmlFor="name" className="block text-sm font-medium ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="mt-2 block w-full border-black border rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="company" className="block text-sm font-medium ">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="company name"
                  name="company"
                  className="mt-2 block w-full border-black border rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="email" className="block text-sm font-medium ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                  className="mt-2 block w-full border-black  border rounded-md shadow-sm"
                  required
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium ">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="phone number"
                  className="mt-2 block w-full border-black border rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="col-span-1">
                <button className="flex items-center text-white bg-[#8300FF] px-6 py-3 rounded-md font-semibold hover:bg-[#6E00CC]">
                  Sponsor <FaArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
