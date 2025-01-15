"use client";

import TextSlide from "../reusable/text-slide";

const Hero = () => {
  return (
    <section className="w-full h-[60dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end select-none pointer-events-none">
      <div className="w-full flex items-end justify-between max-tablet:flex-col max-tablet:items-start">
        <div className="flex flex-col gap-[1rem]">
          <TextSlide
            color="text-color"
            phrases={["NIPLO AGENCY ✦"]}
            rightContentBol={false}
          />
        </div>

        <div className="max-w-[600px] max-tablet:mt-[6rem]">
          <p className="text-color font-general text-[1rem] font-[500] tracking-[-.2px] leading-[1.4]">
            ART DIRECTOR AND DESIGNER BASED IN PARIS, PRIMARILY FOCUSING ON
            CREATING TIMELESS IDENTITIES FOR BRANDS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
