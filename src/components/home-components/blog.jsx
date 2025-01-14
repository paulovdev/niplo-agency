"use client";
import { motion } from "motion/react";

import Image from "next/image";
import SectionText from "../reusable/section-text";

export default function Blog() {
  const blogs = [
    {
      title: "Mush Energy just won 2 gold awards ",
      description:
        "In the ever-evolving landscape of branding, advertising, and digital experiences, we find ourselves at a crossroads between mere creation and profound impact. As architects of this",
      category: "SPORTS",
      min: "5 MINS",
      img: "/blog/blog-1.avif",
    },
    {
      title: "How Aesop has reshaped the industry",
      description:
        "In the ever-evolving landscape of branding, advertising, and digital experiences, we find ourselves at a crossroads between mere creation and profound impact. As architects of this",
      category: "DESIGN",
      min: "3 MINS",
      img: "/blog/blog-2.avif",
    },
    {
      title: "How creator nike connects with their fans",
      description:
        "In the ever-evolving landscape of branding, advertising, and digital experiences, we find ourselves at a crossroads between mere creation and profound impact. As architects of this",
      category: "INSIGHTS",
      min: "8 MINS",
      img: "/blog/blog-3.avif",
    },
  ];
  const imgZoom = {
    hover: {
      skew: 1,
      transition: {
        duration: 0.5,
        ease: [0.73, 1, 0.68, 1],
      },
    },
  };

  return (
    <>
      <SectionText
        text="newsroom"
        src="/blog"
        linkText="all blogs"
        linkBol={true}
      />

      <div className="mb-[100px] grid grid-cols-3 gap-[1.5rem] max-tablet:grid-cols-1">
        {blogs.map((i, index) => (
          <div
            className="relative size-full mb-[4rem] max-tablet:mb-0"
            key={i.title}
          >
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
              <p className="px-[1rem] py-[.5rem] text-color text-end text-[.7rem] font-[500] tracking-[1px] leading-[1] bg-background rounded-[2rem]">
                {i.category}
              </p>
              <span className="text-color3 text-end text-[.7rem] font-[500] tracking-[1px] leading-[1]">
                {i.min}
              </span>
            </div>

            <h2 className="pb-[.5rem] text-color font-chivo uppercase text-[1rem] font-[500] leading-[1.1]">
              {i.title}
            </h2>
            <p className="text-color2 text-[1rem] font-general font-[400] tracking-[-1px] leading-[1.1]">
              {i.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
