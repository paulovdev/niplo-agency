"use client";

import { motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft } from "react-icons/fa";
import SectionText from "../reusable/section-text";

const icons = [
  {
    id: 1,
    logo: <FaApple />,
    name: "Apple",
  },
  {
    id: 2,
    logo: <FaGoogle />,
    name: "Google",
  },
  {
    id: 3,
    logo: <FaAmazon />,
    name: "Amazon",
  },
  {
    id: 4,
    logo: <FaMicrosoft />,
    name: "Microsoft",
  },
];

const Partners = () => {
  const logoVariants = {
    hover: {
      top: "-100%",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    initial: {
      top: "0%",
    },
  };

  const opacityVariants = {
    hover: { opacity: 1 },
    initial: { opacity: 0 },
  };
  return (
    <section className="pb-[150px] mb-[50px] border-b border-border max-tablet:pb-[100px]">
      <SectionText
        text="Selected Partners"
        src="/partners"
        linkText="all partners"
        linkBol={true}
      />

      <div className="w-full flex items-center gap-[1.5rem] max-tablet:flex-col">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className={`relative w-full h-[400px] bg-background2 rounded-[1rem] flex items-center justify-center cursor-pointer z-10 group max-tablet:h-[300px]`}
            initial="initial"
            whileHover="hover"
          >
            <div className="w-full h-[100px] overflow-hidden">
              <motion.div
                className="relative size-full flex items-center justify-start flex-col"
                variants={logoVariants}
              >
                <span className="text-color text-[4rem] group-hover:text-color">
                  {icon.logo}
                </span>
                <span className="relative top-[65px] font-general text-color text-[1rem] uppercase font-[500] tracking-[1px] group-hover:text-color">
                  {icon.name}
                </span>
              </motion.div>
            </div>

            <motion.div
              className="absolute w-[40px] h-[40px] top-[25px] right-[25px] bg-background rounded-full flex items-center justify-center"
              key={icon.id}
              variants={opacityVariants}
            >
              <BsPlus color="#333333" size={32} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
