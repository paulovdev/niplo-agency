"use client";

import { useCursor } from "@/context/cursor-context";
import { motion } from "framer-motion";

export const PerspectiveMenu = ({ label, color }) => {
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => {
    setCursorVariant("navbar");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  const navigationsTextAnimCustom = {
    hover: {
      color: color,
      transition: {
        duration: 0.5,

        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
   
      <motion.p
        className="font-chivo text-color font-[500] text-[.9rem] uppercase"
        animate="hover"
        variants={navigationsTextAnimCustom}
        onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {label}
      </motion.p>
  
  );
};

export const PerspectiveMenuText = ({ label, isActive }) => {
  return (
    <div className="active-menu-link size-full  bg-none flex items-start justify-center flex-col ">
      <div
        className={`uppercase tracking-[1px] font-[400] text-[4.5vw] max-tablet:text-[2.5rem] 
          ${isActive ? "text-active" : "text-color3"} `}
      >
        {label}
      </div>
    </div>
  );
};
