import image from "../assets/images/IMG_2721 1.png";
import { FaArrowRight } from "react-icons/fa";

const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <div className="register__image-wrapper">
          <img src={image} className="register__image" alt="Event promotion" />
        </div>
        <div className="register__content">
          <h2 className="register__title">
            At Founder&apos;s Friday, Every Friday Is a Learning Experience!
          </h2>
          <p className="register__description">
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria&apos;s startup landscape.
          </p>

          <button className="register__cta-button">
            <span className="register__cta-button-text">Register</span>
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
