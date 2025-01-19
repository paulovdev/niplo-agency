"use client";
import { motion } from "motion/react";

import Image from "next/image";
import SectionText from "../reusable/section-text";
import blogsData from "@/data/blogsData";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { appearAnimY } from "@/utils/anim";

export default function Blog() {
  const imgZoom = {
    hover: {
      skew: 1,
      transition: {
        duration: 0.5,
        ease: [0.73, 1, 0.68, 1],
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <section className="pb-[50px] select-none pointer-events-none" ref={ref}>
      <SectionText
        text="newsroom"
        src="/blog"
        linkText="all blogs"
        linkBol={true}
      />

      <motion.div
        className="mb-[100px] grid grid-cols-3 gap-[1.5rem] max-tablet:grid-cols-1"
        variants={appearAnimY}
        initial="initial"
        animate={inView ? "animate" : ""}
      >
        {blogsData.slice(0, 3).map((i, index) => (
          <Link href={`/blog/${i.id}`} key={i.title}>
            <div className="relative size-full mb-[4rem] max-tablet:mb-0">
              <motion.div
                className=""
                variants={imgZoom}
                custom={index}
                whileHover="hover"
              >
                <Image
                  className="relative w-full h-[500px] mb-[1.5rem] rounded-[.5rem] object-cover brightness-[85%] select-none"
                  src={i.img}
                  width={800}
                  height={800}
                  priority={true}
                  alt=""
                />
              </motion.div>

              <div className="absolute top-5 left-5 mb-[1rem] flex items-center gap-[1rem]">
                <p className="px-[1rem] font-chivo py-[.5rem] text-color text-end text-[.7rem] font-[500] tracking-[1px] leading-[1] bg-background rounded-[2rem]">
                  {i.category}
                </p>
                <span className="text-color3 text-end text-[.7rem] font-[500] tracking-[1px] leading-[1]">
                  {i.min}
                </span>
              </div>

              <h2 className="pb-[.5rem] text-color font-general uppercase text-[1rem] tracking-[-.5px] font-[500] leading-[1.1]">
                {i.title}
              </h2>
              <p className="text-color2 text-[.9rem] font-[400] leading-[1.3]">
                {i.titleDescription}
              </p>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
