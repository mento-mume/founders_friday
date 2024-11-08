import InfoRow from "../components/InfoRow";

const WhatWeOffer = () => {
  return (
    <section className="px-4 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        What We Offer
      </h1>
      <div className="space-y-6">
        <InfoRow
          title="Monthly Meetups"
          description="Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities."
        />
        <InfoRow
          title="Diverse Network"
          description="Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts."
        />
        <InfoRow
          title="Knowledge Sharing"
          description="Gain insights and learn from industry leaders and peers through in-depth discussions and shared experiences."
        />
        <InfoRow
          title="Collaboration Opportunities"
          description="Find potential co-founders, mentors, or partners for your next big venture."
        />
        <InfoRow
          title="Community Support"
          description="Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges."
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
