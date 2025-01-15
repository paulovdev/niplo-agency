"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InViewAnimation = ({ children }) => {
  const { ref, inView } = useInView();
  const appear = {
    initial: { y: "10%", opacity: 0 },
    animate: (i) => ({
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <div className="overflow-hidden" ref={ref}>
      <motion.div
        className="text-center text-color2 text-[2.5rem] font-[500] tracking-[-1px] leading-[1.2] "
        variants={appear}
        initial="initial"
        animate={inView ? "animate" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default InViewAnimation;
