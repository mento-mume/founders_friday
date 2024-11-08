import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image from "../assets/images/Ellipse 309.png";

const PhotoCardSection = () => {
  const photoCards = [
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself",
      image: image,
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself",
      image: image,
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself",
      image: image,
    },
  ];

  return (
    <div className="mt-16 md:mt-40 px-4 md:px-20 text-center">
      <h2 className="text-2xl font-bold mb-2">
        What Do Our Attendees Have To Say?
      </h2>
      <p className="text-gray-500 mb-6">Well, See For Yourself!</p>

      <div className="flex justify-center space-x-6 mb-6">
        <button className="text-gray-400 hover:text-gray-600">
          <FaArrowLeft size={24} />
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          <FaArrowRight size={24} />
        </button>
      </div>

      <div className="flex gap-6 items-center justify-center overflow-x-auto py-8">
        {photoCards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-4 max-w-xs w-full sm:w-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-[#8300FF] overflow-hidden mb-3">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{card.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCardSection;
