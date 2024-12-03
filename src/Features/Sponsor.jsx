// import Frame682 from "../assets/images/Frame 682.png";
// import { FaArrowRight } from "react-icons/fa";

// const Sponsor = () => {
//   return (
//     <section className="mt-20 md:px-4 px-20">
//       <div className="mx-auto md:mx-20">
//         <div className="text-center md:text-left ">
//           <p className="text-xl font-bold text-[#5C00B3] mb-4">
//             Sponsor The Next Friday
//           </p>
//           <div className="flex flex-col md:flex-row md:space-x-10">
//             <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
//               Why Sponsor Founders Friday?
//             </h2>
//             <p className="text-sm md:text-base md:text-right">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
//               rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
//               dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
//               suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
//               turpis. Pellentesque habitant morbi tristique senectus et netus et
//               malesuada fames ac turpis egestas.
//             </p>
//           </div>
//         </div>
//         <div className="mt-10 flex flex-col lg:flex-row lg:space-x-8">
//           <div className="mb-8 lg:mb-0 lg:w-1/2 flex justify-center lg:justify-start">
//             <img
//               src={Frame682}
//               className="w-full max-w-md lg:max-w-lg"
//               alt="Sponsorship illustration"
//             />
//           </div>
//           <div className="lg:w-1/2">
//             <div className="mb-6 text-center lg:text-left">
//               <h3 className="text-lg md:text-xl font-bold">How To Sponsor</h3>
//               <p className="italic mt-1">Ready to Make an Impact?</p>
//               <p className="text-xs mb-4">
//                 Fill out the form below or contact us at [contact email/phone
//                 number] to learn more about how you can sponsor the next
//                 Founders Friday.
//               </p>
//             </div>
//             <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="col-span-1">
//                 <label htmlFor="name" className="block text-sm font-medium">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Full Name"
//                   className="mt-2 block w-full border-black border rounded-md shadow-sm"
//                   required
//                 />
//               </div>

//               <div className="col-span-1">
//                 <label htmlFor="company" className="block text-sm font-medium">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   name="company"
//                   placeholder="Company name"
//                   className="mt-2 block w-full border-black border rounded-md shadow-sm"
//                   required
//                 />
//               </div>

//               <div className="col-span-1">
//                 <label htmlFor="email" className="block text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   className="mt-2 block w-full border-black border rounded-md shadow-sm"
//                   required
//                 />
//               </div>

//               <div className="col-span-1">
//                 <label htmlFor="phone" className="block text-sm font-medium">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   placeholder="Phone number"
//                   className="mt-2 block w-full border-black border rounded-md shadow-sm"
//                   required
//                 />
//               </div>
//               <div className="col-span-2 sm:col-span-1">
//                 <button className="flex items-center justify-center w-full text-white bg-[#8300FF] px-6 py-3 rounded-md font-semibold hover:bg-[#6E00CC]">
//                   Sponsor <FaArrowRight className="ml-2" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sponsor;
import Frame682 from "../assets/images/Frame 682.png";
import { FaArrowRight } from "react-icons/fa";

const Sponsor = () => {
  return (
    <section className="sponsor">
      <div className="sponsor__container">
        <div className="sponsor__header">
          <p className="sponsor__title">Sponsor The Next Friday</p>
          <div className="sponsor__content">
            <h2 className="sponsor__subtitle">Why Sponsor Founders Friday?</h2>
            <p className="sponsor__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
              dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
              suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
              turpis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
        <div className="sponsor__main">
          <div className="sponsor__image-wrapper">
            <img
              src={Frame682}
              className="sponsor__image"
              alt="Sponsorship illustration"
            />
          </div>
          <div className="sponsor__form-container">
            <div className="sponsor__form-header">
              <h3 className="sponsor__form-title">How To Sponsor</h3>
              <p className="sponsor__form-subtitle">Ready to Make an Impact?</p>
              <p className="sponsor__form-description">
                Fill out the form below or contact us at [contact email/phone
                number] to learn more about how you can sponsor the next
                Founders Friday.
              </p>
            </div>
            <form className="sponsor__form">
              <div className="sponsor__form-group">
                <label htmlFor="name" className="sponsor__form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  className="sponsor__form-input"
                  required
                />
              </div>

              <div className="sponsor__form-group">
                <label htmlFor="company" className="sponsor__form-label">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                  className="sponsor__form-input"
                  required
                />
              </div>

              <div className="sponsor__form-group">
                <label htmlFor="email" className="sponsor__form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="sponsor__form-input"
                  required
                />
              </div>

              <div className="sponsor__form-group">
                <label htmlFor="phone" className="sponsor__form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  className="sponsor__form-input"
                  required
                />
              </div>
              <div className="sponsor__form-button-container">
                <button className="sponsor__form-button">
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
