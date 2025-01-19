"use client";

import TextSlide from "../reusable/text-slide";

const Hero = () => {
  return (
    <section className="w-full h-[60dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end select-none pointer-events-none">
      <div className="w-full flex items-end justify-between max-laptop:flex-col max-laptop:items-start">
        <TextSlide
          color="text-color"
          phrases={["NIPLO AGENCY ✦"]}
          description={[
            "Art agency and designer based in paris, primarily focusing on",
            "creating timeless identities for brands.",
          ]}
          rightContentBol={false}
          descriptionVisibleBol={true}
        />
      </div>
    </section>
  );
};

export default Hero;
