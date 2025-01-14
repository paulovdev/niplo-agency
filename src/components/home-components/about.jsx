"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = [
  "WE ARE A <B>CREATIVE</B> AGENCY COLLABORATING",
  "WITH BRANDS TO BUILD INSIGHTFUL <B>STRATEGIES</B>",
  "CREATE <B>UNIQUE</B> DESIGNS AND CRAFT EXPERIENCES",
  "THAT BRING <B>POSITIVE</B> CHANGE AND VALUE.",
];

const About = () => {
  const { ref, inView } = useInView();
  const appear = {
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
    <section className="max-w-[1200px] pb-[125px] mb-[50px] mx-auto my-0 max-tablet:pb-[75px] max-tablet:px-0">
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden" ref={ref}>
          <motion.h1
            className="text-center text-[3rem] font-[500] tracking-[-1px] leading-[1.2] max-tablet:text-[2.5rem] max-tablet:text-start"
            custom={index}
            variants={appear}
            initial="initial"
            animate={inView ? "animate" : ""}
          >
            <div dangerouslySetInnerHTML={{ __html: phrase }} />
          </motion.h1>
        </div>
      ))}
    </section>
  );
};

export default About;
