import Hero from "../components/Hero";
import WhatHappens from "../Features/WhatHappens";
import WhatWeOffer from "../Features/WhatWeOffer";
import WhoAreWe from "../Features/WhoAreWe";
import Kaduna from "../Features/Kaduna";
import Sponsor from "../Features/Sponsor";
import Register from "../Features/Register";
import PhotoCardSection from "../Features/PhotoCardSection";
// import vector from "../assets/images/Vector 1.png";
// import vector2 from "../assets/images/Vector 3.png";

const HomePage = () => {
  return (
    <>
      {/* <img
        src={vector}
        className="absolute -z-10 w-[900px] h-[100xpx] ml-[290px]"
      /> */}
      <Hero />
      <WhoAreWe />
      {/* <img src={vector2} className="absolute  -z-10 ml-[290px] " /> */}
      <WhatWeOffer />
      <WhatHappens />
      <Sponsor />
      <Kaduna />
      <Register />
      <PhotoCardSection />
    </>
  );
};

export default HomePage;
