"use client";

import iconsData from "@/data/iconsData";
import { motion } from "framer-motion";
import Image from "next/image";

const logoVariants = {
  hover: {
    top: "-100%",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  initial: {
    top: "0%",
  },
};

export default function Icons() {
  return (
    <>
      <div className="w-full bg-background grid grid-cols-4 gap-[1.5rem] max-tablet:grid-cols-2">
        {iconsData.map((icon) => (
          <motion.div
            key={icon.id}
            className={`relative w-full h-[250px] bg-background2 rounded-[1rem] flex items-center justify-center cursor-pointer z-10 group `}
            initial="initial"
            whileHover="hover"
          >
            <div className="w-full h-[120px] overflow-hidden">
              <motion.div
                className="relative w-[350px] h-full mx-auto flex items-center justify-center flex-col"
                variants={logoVariants}
              >
                <Image
                  src={icon.logo}
                  width={150}
                  height={150}
                  alt={icon.logo}
                  className="relative top-[20px] w-[200px] h-[60px] object-center object-contain"
                />

                <span className="relative top-[90px] text-start text-color text-[1rem] font-[400] tracking-[-.2px] leading-[1.4] max-laptop:text-[.8rem] group-hover:text-color">
                  {icon.name}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
