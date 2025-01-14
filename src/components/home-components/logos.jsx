"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const Logos = () => {
    const images = [
        { id: 1, src: "/logos/logo-1.svg", alt: "Logo 1" },
        { id: 2, src: "/logos/logo-2.svg", alt: "Logo 2" },
        { id: 3, src: "/logos/logo-3.svg", alt: "Logo 3" },
        { id: 4, src: "/logos/logo-4.svg", alt: "Logo 4" },
        { id: 5, src: "/logos/logo-5.svg", alt: "Logo 5" },
        { id: 6, src: "/logos/logo-6.svg", alt: "Logo 6" },
    ];

    return (
        <div className="relative w-full h-[15vh] overflow-hidden py-[2.5rem] backdrop-blur-xl">
            <motion.div
                transition={{
                    duration: 125,
                    ease: "linear",
                    repeat: Infinity,
                }}
                initial={{ translateX: 0 }}
                animate={{ translateX: "-100%" }}
                className="flex gap-16"
                style={{ width: "200%" }}
            >
                {[...Array(2)].map((_, index) => (
                    <div key={index} className="flex gap-16">
                        {images.map(({ id, src, alt }) => (
                            <Image
                                key={id}
                                src={src}
                                alt={alt}
                                width={300}
                                height={300}
                                className="h-8 w-auto"
                            />
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Logos;
