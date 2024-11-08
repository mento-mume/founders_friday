import { FaCaretDown } from "react-icons/fa";

const FAQ = () => {
  const Faqs = [
    { questions: "Lorem ipsum dolor sit amet, consectetur adi elit." },
    { questions: "Lorem ipsum dolor sit amet, consectetur adi elit." },
    { questions: "Lorem ipsum dolor sit amet, consectetur adi elit." },
    { questions: "Lorem ipsum dolor sit amet, consectetur adi elit." },
    { questions: "Lorem ipsum dolor sit amet, consectetur adi elit." },
    { questions: "Lorem ipsum dolor sit amet, consectetur adi elit." },
  ];

  return (
    <section className="mt-16 md:mt-[180px] px-4 md:px-20">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl md:text-5xl font-bold">FAQ</h1>
      </div>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-y-11 md:gap-x-16 max-w-3xl md:max-w-5xl mx-auto">
        {Faqs.map((faq, index) => (
          <button
            key={index}
            className="flex items-center justify-between w-full p-4 text-left text-lg font-semibold text-[#340066] border-b border-gray-300"
          >
            <span>{faq.questions}</span>
            <FaCaretDown />
          </button>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
