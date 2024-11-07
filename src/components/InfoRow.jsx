import PropTypes from "prop-types";
import ellipseIcon from "../assets/images/Ellipse 308.png";
import plusIcon from "../assets/images/plus 1.png";

const InfoRow = ({ title, description }) => {
  return (
    <div className="flex flex-row items-center space-x-20 justify-between border-b-2 border-[#3C3641] py-4 mb-8">
      {/* Left section with the ellipse icon, title, and description */}
      <div className="flex flex-row items-center space-x-44">
        {/* Ellipse icon and title */}
        <div className="flex flex-row items-center space-x-20">
          <img src={ellipseIcon} className="w-6 h-6" alt="Ellipse icon" />
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>

        {/* Description */}
        <p className="text-base font-semibold max-w-xl">{description}</p>
      </div>

      {/* Plus icon */}
      <img src={plusIcon} className="w-10 h-10" alt="Plus icon" />
    </div>
  );
};
InfoRow.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InfoRow;
