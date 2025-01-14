"use client"
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import worksData from "@/data/worksData";
import Link from "next/link";

const Work = ({ name, category, src, color, year }) => {
    const { setCursor } = useCursor();

    const handleMouseEnter = () => {
        setCursor("project", color, src);
    };

    const handleMouseLeave = () => {
        setCursor("default");
    };

    const handleClick = () => {
        handleMouseLeave()
    }

    return (
        <motion.div
            className="c-p relative w-full h-fit py-[1rem] hover:opacity-40 transition-all max-tablet:"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="relative w-full flex items-center justify-between">
                <div className="w-[25%] flex justify-start">
                    <span className="text-color text-[1.5rem] font-[600]">/{year}</span>
                </div>

                <div className="w-[25%] flex justify-start">
                    <h1 className="text-color text-[2.5rem] font-[500] tracking-[-1px]">{name}</h1>
                </div>

                <div className="w-[50%] flex justify-end">
                    <p className="text-color text-[1rem] font-[500]">
                        {category}
                    </p>
                </div>
            </div>
            <div className="pt-[2rem] border-b border-border" />
        </motion.div>
    );
};

const Works = () => {
    return (
        <div className="size-full pb-[50px] flex flex-col">
            {worksData.map((i) => (
                <Link key={i.id} href={`/works/${i.id}`}>
                    <Work id={i.id} year={i.year} name={i.name} category={i.category} src={i.src} alt={i.alt} color={i.color} />
                </Link>
            ))}
        </div>
    );
};

export default Works;
