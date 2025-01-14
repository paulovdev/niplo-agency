"use client";

import TextSlide from "../reusable/text-slide";

const Hero = () => {
  return (
    <section className="w-full h-[60dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end select-none pointer-events-none">
      <div className="w-full flex items-end justify-between max-tablet:flex-col max-tablet:items-start">
        <div className="flex flex-col gap-[1rem]">
          <span className=" text-color2 text-[.8rem] font-chivo font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
            WELCOME TO
          </span>
          <TextSlide
            color="text-color"
            phrases={["Niplo Agency ✦"]}
            rightContentBol={false}
          />
        </div>

        <div className="max-w-[500px] max-tablet:mt-[1rem]">
          <p className="text-color font-general text-[1rem] font-[500] tracking-[-.5px] leading-[1.1]">
            Art Director and Designer based in Paris, primarily focusing on
            creating timeless identities for brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
