"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { RiArrowRightDownLine } from "react-icons/ri";

const TextSlide = ({ phrases, color, span, rightContentBol }) => {
  const [isAnimationDelayed, setIsAnimationDelayed] = useState(false);

  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [rightContent, setRightContent] = useState(rightContentBol);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationDelayed(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const animation = {
    initial: { y: "100%" },
    animate: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full flex items-end justify-between">
        <div className="">
          {phrases.map((phrase, index) => (
            <div key={index} className="overflow-hidden flex flex-col">
              <motion.h1
                className={`max-w-[1200px] ${color} text-[5rem] font-[500] tracking-[-1px] leading-[1] max-tablet:text-[3rem] max-tablet:font-[600]`}
                custom={index}
                variants={animation}
                initial="initial"
                animate={isAnimationDelayed ? "animate" : "initial"}
              >
                {phrase}
              </motion.h1>
            </div>
          ))}
        </div>
        {rightContent && (
          <>
            <span
              className={` ${color} text-[1rem] font-[600] tracking-[-.2px]`}
            >
              {span}
            </span>
            <motion.div className="max-tablet:hidden" style={{ rotate }}>
              <RiArrowRightDownLine className={`${color}`} size={42} />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default TextSlide;
