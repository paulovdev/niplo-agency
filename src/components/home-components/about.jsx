"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = [
  "We are a <b>creative</b> agency collaborating",
  "with brands to build insightful <b>strategies</b>",
  "create <b>unique</b> designs and craft experiences",
  "that bring <b>positive</b> change and value.",
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
    <section className="max-w-[1200px] pb-[125px] mb-[50px] mx-auto my-0 max-tablet:px-[1rem]">
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden" ref={ref}>
          <motion.h1
            className="text-center text-[3rem] font-[500] tracking-[-1px] leading-[1.2] max-tablet:text-[2.5rem]"
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
