// import PropTypes from "prop-types";
// import ellipseIcon from "../assets/images/Ellipse 308.png";
// import plusIcon from "../assets/images/plus 1.png";

// const InfoRow = ({ title, description }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-[#3C3641] py-4 mb-8 space-y-4 md:space-y-0 ">
//       <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-32 w-full md:w-auto">
//         <div className="flex items-center space-x-10 w-[400px]">
//           <img src={ellipseIcon} className="w-6 h-6" alt="Ellipse icon" />
//           <h2 className="text-lg md:text-2xl font-semibold">{title}</h2>
//         </div>

//         <p className="text-sm md:text-base font-semibold max-w-full md:max-w-xl mt-2 md:mt-0">
//           {description}
//         </p>
//       </div>

//       <img src={plusIcon} className="w-8 h-8 md:w-10 md:h-10" alt="Plus icon" />
//     </div>
//   );
// };

// InfoRow.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default InfoRow;
import PropTypes from "prop-types";
import ellipseIcon from "../assets/images/Ellipse 308.png";
import plusIcon from "../assets/images/plus 1.png";

const InfoRow = ({ title, description }) => {
  return (
    <div className="info-row">
      <div className="info-row__content">
        <div className="info-row__header">
          <img
            src={ellipseIcon}
            className="info-row__icon"
            alt="Ellipse icon"
          />
          <h2 className="info-row__title">{title}</h2>
        </div>

        <p className="info-row__description">{description}</p>
      </div>

      <img src={plusIcon} className="info-row__icon" alt="Plus icon" />
    </div>
  );
};

InfoRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InfoRow;
