"use client";

import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import { useCursor } from "@/context/cursor-context";


function Cursor({ refPos }) {
    const { cursorVariant, cursorData, colorData } = useCursor();

    const mouse = useMouse(refPos, {
        enterDelay: 50,
        leaveDelay: 50,
        fps: 60,
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            height: 15,
            width: 15,
            x: mouseXPosition - 7.5,
            y: mouseYPosition - 7.5,
            mixBlendMode: "difference",
            borderRadius: "100%",

        },
        project: {
            height: 350,
            width: 450,
            x: mouseXPosition - 225,
            y: mouseYPosition - 175,
            borderRadius: "3rem",
            transition: { duration: 0.1 },
        },
        navbar: {
            opacity: 0,
            x: mouseXPosition - 5,
            y: mouseYPosition - 5,

            transition: { duration: 0.4 },
        },
    };

    return (
        <motion.div
            className="fixed top-0 left-0 bg-background pointer-events-none z-[49]"
            variants={variants}
            animate={cursorVariant}
        >
            {cursorVariant === "project" && (
                <motion.div
                    className="size-full rounded-[1rem] flex items-center justify-center"
                    style={{ background: colorData }}
                >

                    {cursorData && (
                        <motion.div
                            key={cursorData}
                            initial={{ width: 0, height: 0, opacity: 0 }}
                            animate={{ width: 350, height: 250, opacity: 1 }}
                            exit={{ width: 0, height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                            }}
                            className="absolute flex items-center justify-center overflow-hidden"

                        >
                            <video className="img-bg absolute top-0 left-0 size-full object-cover rounded-[1rem]"
                                loop
                                muted
                                autoPlay
                                id="current-video"
                                src={cursorData} alt="" />
                            <div className="absolute w-[100px] h-[100px]  backdrop-blur-xl rounded-full flex items-center justify-center"
                            >
                                <p className="text-color3">View</p>
                            </div>
                        </motion.div>
                    )}



                </motion.div>
            )}
        </motion.div>
    );
}

export default Cursor;