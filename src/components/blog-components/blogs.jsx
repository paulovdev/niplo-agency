"use client"
import { motion } from 'framer-motion';

import Image from "next/image"

export default function Blogs() {
    const imgZoom = {
        hover: {
            skew: 1,
            transition: {
                duration: 0.5,
                ease: [0.73, 1, 0.68, 1],
            }
        }
    }

    const blogs = [
        { title: "Mush Energy just won 2 gold awards ", category: "SPORTS", min: "5 MINS", img: "/blog/blog-1.avif" },
        { title: "How Aesop has reshaped the industry", category: "DESIGN", min: "5 MINS", img: "/blog/blog-2.avif" },
        { title: "How creator nike connects with their fans", category: "INSIGHTS", min: "5 MINS", img: "/blog/blog-3.avif" },
        { title: "Mush Energy just won 2 gold award", category: "SPORTS", min: "5 MINS", img: "/blog/blog-4.avif" },
        { title: "How Aesop has reshaped the industr", category: "DESIGN", min: "5 MINS", img: "/blog/blog-5.avif" },
        { title: "The making of an award-winning website", category: "INSIGHTS", min: "5 MINS", img: "/blog/blog-6.avif" },
    ]

    return (
        <div className="py-[5rem] grid grid-cols-3 gap-[1.5rem]">

            {blogs.map((i, index) => (
                <div className="relative size-full  mb-[4rem]" key={i.title}>
                    <motion.div variants={imgZoom} custom={index} whileHover="hover">
                        <Image
                            className="relative w-full h-[500px] mb-[1.5rem] rounded-[1rem] object-cover brightness-[85%] select-none"
                            src={i.img}
                            width={500}
                            height={500}
                            priority={true}
                            alt=""
                        />
                    </motion.div>

                    <div className="mb-[1rem] flex items-center gap-[1.5rem]">
                        <p className="px-[1rem] py-[.5rem] border border-border2 rounded-[2rem] text-color4 text-end text-[.8rem] font-[600] tracking-[1px] leading-[1]">{i.category}</p>
                        <span className="text-color5 text-end text-[.8rem] font-[600] tracking-[1px] leading-[1]">{i.min}</span>
                    </div>

                    <h2 className="text-color4 text-[2rem] font-[400] tracking-[-.5px] leading-[1.1]">{i.title}</h2>
                </div>
            ))}

        </div>
    )
}