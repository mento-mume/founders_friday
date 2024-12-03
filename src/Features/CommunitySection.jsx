// import { FaArrowRight } from "react-icons/fa";
// import image from "../assets/images/Ellipse 309.png";

// const CommunitySection = () => {
//   const profiles = [
//     { color: "#8300FF" },
//     { color: "#FF5A5F" },
//     { color: "#00A699" },
//     { color: "#FC642D" },
//     { color: "#FFB400" },
//     { color: "#007A87" },
//     { color: "#FFB400" },
//   ];

//   return (
//     <section className="mt-16 md:mt-40 px-4">
//       <div className="flex flex-col items-center text-center py-8 md:py-16 px-4 md:px-8 mx-auto max-w-4xl">
//         <h2 className="text-xl md:text-2xl font-bold mb-2">
//           Register And Be Part of Our Community
//         </h2>
//         <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
//           Join our community of over 1000+ founders, developers, and tech
//           junkies in general. Be inspired by people who live to inspire!
//         </p>

//         <div className="relative w-full max-w-3xl h-32 md:h-40 mb-8 md:mb-12">
//           <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">
//             {profiles.map((profile, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 overflow-hidden"
//                 style={{ borderColor: profile.color }}
//               >
//                 <img
//                   src={image}
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="text-[#8300FF] border-2 border-[#8300FF] flex items-center justify-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-3xl hover:bg-[#F3E8FF]">
//           <span>Register Now</span>
//           <FaArrowRight size={18} />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CommunitySection;
import { FaArrowRight } from "react-icons/fa";
import image from "../assets/images/Ellipse 309.png";

const CommunitySection = () => {
  const profiles = [
    { color: "#8300FF" },
    { color: "#FF5A5F" },
    { color: "#00A699" },
    { color: "#FC642D" },
    { color: "#FFB400" },
    { color: "#007A87" },
    { color: "#FFB400" },
  ];

  return (
    <section className="community-section">
      <div className="community-section__container">
        <h2 className="community-section__title">
          Register And Be Part of Our Community
        </h2>
        <p className="community-section__description">
          Join our community of over 1000+ founders, developers, and tech
          junkies in general. Be inspired by people who live to inspire!
        </p>

        <div className="community-section__profile-grid">
          <div className="community-section__profile-wrapper">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="community-section__profile"
                style={{ borderColor: profile.color }}
              >
                <img
                  src={image}
                  alt="Profile"
                  className="community-section__profile-image"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="community-section__cta-button">
          <span className="community-section__cta-button-text">
            Register Now
          </span>
          <FaArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
