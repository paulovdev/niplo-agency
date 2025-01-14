"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import SectionText from "../reusable/section-text";
import worksData from "@/data/worksData";
import Link from "next/link";

const Work = ({ year, name, category, src, color, id }) => {
  const { setCursor } = useCursor();

  const handleMouseEnter = () => {
    setCursor("project", color, src);
  };

  const handleMouseLeave = () => {
    setCursor("default");
  };
  const handleClick = () => {
    handleMouseLeave();
  };

  return (
    <motion.div
      className="c-p relative w-full h-fit py-[1rem] hover:opacity-60 transition-all "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative w-full flex items-center justify-between">
        <div className="w-[25%] flex justify-start">
          <span className="text-color text-[1.5rem] font-[600] max-tablet:text-[.9rem]">
            /{year}
          </span>
        </div>

        <div className="w-[25%] flex justify-start">
          <h1 className="text-color text-[2.5rem] font-[500] tracking-[-1px] max-tablet:text-[1.5rem] max-tablet:font-[600]">
            {name}
          </h1>
        </div>

        <div className="w-[50%] flex justify-end">
          <p className="text-color text-[1rem] font-[500] max-tablet:text-[.9rem]">
            {category}
          </p>
        </div>
      </div>
      <div className="pt-[2rem] border-b border-border" />
    </motion.div>
  );
};

const Works = () => {
  const workDataLimited = worksData.slice(0, 5);
  return (
    <section className="pb-[50px] select-none pointer-events-none">
      <SectionText
        text="Selected works"
        src="/works"
        linkText="all works"
        linkBol={true}
      />

      <div className="c-p relative w-full h-fit">
        <div className="relative w-full flex items-center justify-between">
          <div className="w-[25%] flex justify-start">
            <span className="font-general text-color text-[.8rem] font-[600] uppercase ">
              year:
            </span>
          </div>

          <div className="w-[25%] flex justify-start">
            <h1 className="font-general text-color text-[.8rem] font-[600] uppercase ">
              NAME:
            </h1>
          </div>

          <div className="w-[50%] flex justify-end">
            <p className="font-general text-color text-[.8rem] font-[600] uppercase ">
              type:
            </p>
          </div>
        </div>

        <div className="pt-[2rem] border-b border-border" />
      </div>

      <div className="size-full flex flex-col max-tablet:p-0 select-auto pointer-events-auto">
        {workDataLimited.map((i) => (
          <Link key={i.id} href={`/works/${i.id}`}>
            <Work
              key={i.alt}
              id={i.id}
              year={i.year}
              name={i.name}
              category={i.category}
              src={i.src}
              alt={i.alt}
              color={i.color}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Works;
