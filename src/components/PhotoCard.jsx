import PropTypes from "prop-types";
const PhotoCard = ({ src, alt, label, rotation, size = "w-48" }) => {
  return (
    <div className={`relative transform ${rotation} shadow-lg`}>
      <img src={src} alt={alt} className={`rounded-lg ${size}`} />
      <p className="absolute bottom-2 left-2 text-white text-sm bg-[#8300FF] px-2 py-1 rounded">
        {label}
      </p>
    </div>
  );
};

PhotoCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  label: PropTypes.string,
  rotation: PropTypes.string,
  size: PropTypes.string,
};

// Default prop values
PhotoCard.defaultProps = {
  alt: "",
  rotation: "",
  size: "w-48",
};

export default PhotoCard;
