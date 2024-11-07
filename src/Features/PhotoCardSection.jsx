import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PhotoCardSection = () => {
  const photoCards = [
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself",
      image: "https://example.com/path-to-image.jpg", // Replace with actual image path
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself",
      image: "https://example.com/path-to-image.jpg", // Replace with actual image path
    },
    {
      name: "Mr Belba Ngoy",
      feedback: "Always a remarkable experience for my team and myself",
      image: "https://example.com/path-to-image.jpg", // Replace with actual image path
    },
    // Add more cards if needed
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">
        What Do Our Attendees Have To Say?
      </h2>
      <p className="text-gray-500 mb-6">Well, See For Yourself!</p>

      {/* Photo Cards */}
      <div className="flex justify-center gap-4 items-center">
        {/* Left Arrow Button */}
        <button className="text-gray-400 hover:text-gray-600">
          <FaArrowLeft size={24} />
        </button>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto">
          {photoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 max-w-xs"
            >
              <div className="flex flex-col items-center">
                {/* Image */}
                <div className="w-24 h-24 rounded-full border-4 border-purple-400 overflow-hidden mb-3">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold">{card.name}</h3>

                {/* Feedback */}
                <p className="text-sm text-gray-600 mt-2">{card.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button className="text-gray-400 hover:text-gray-600">
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PhotoCardSection;
