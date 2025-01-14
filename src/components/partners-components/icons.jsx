"use client"

import { motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaSpotify, FaSnapchat, FaPinterest, FaTiktok, FaReddit, FaSlack } from 'react-icons/fa';

const icons = [
    {
        id: 1,
        logo: <FaApple />,
        name: "Apple",
    },
    {
        id: 2,
        logo: <FaGoogle />,
        name: "Google",
    },
    {
        id: 3,
        logo: <FaAmazon />,
        name: "Amazon",
    },
    {
        id: 4,
        logo: <FaMicrosoft />,
        name: "Microsoft",
    },
    {
        id: 5,
        logo: <FaFacebook />,
        name: "Facebook",
    },
    {
        id: 6,
        logo: <FaTwitter />,
        name: "Twitter",
    },
    {
        id: 7,
        logo: <FaInstagram />,
        name: "Instagram",
    },
    {
        id: 8,
        logo: <FaLinkedin />,
        name: "LinkedIn",
    },
    {
        id: 9,
        logo: <FaYoutube />,
        name: "YouTube",
    },
    {
        id: 10,
        logo: <FaSpotify />,
        name: "Spotify",
    },
    {
        id: 11,
        logo: <FaSnapchat />,
        name: "Snapchat",
    },
    {
        id: 12,
        logo: <FaPinterest />,
        name: "Pinterest",
    },
    {
        id: 13,
        logo: <FaTiktok />,
        name: "TikTok",
    },
    {
        id: 14,
        logo: <FaReddit />,
        name: "Reddit",
    },
    {
        id: 15,
        logo: <FaSlack />,
        name: "Slack",
    }
];

const logoVariants = {
    hover: {
        top: "-100%",
        transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    initial: {
        top: "0%",
    }
};

const opacityVariants = {
    hover: { opacity: 1 },
    initial: { opacity: 0 }
};


export default function Icons() {

    return (
        <>
            <div className="w-full bg-background grid grid-cols-4 gap-[1.5rem]">
                {icons.map((icon) => (

                    <motion.div
                        key={icon.id}
                        className={`relative w-full h-[450px] bg-background2 rounded-[1rem] flex items-center justify-center cursor-pointer z-10 group`}
                        initial="initial"
                        whileHover="hover"
                    >
                        <div className="w-full h-[100px] overflow-hidden">
                            <motion.div className="relative size-full  flex items-center justify-start flex-col" variants={logoVariants}>

                                <span className="text-color text-[5rem] group-hover:text-color">
                                    {icon.logo}
                                </span>
                                <span className="relative top-[65px] text-color text-[1rem] uppercase font-[600] tracking-[1px] group-hover:text-color">
                                    {icon.name}
                                </span>
                            </motion.div>

                        </div>

                        <motion.div
                            className="absolute w-[40px] h-[40px] top-[25px] right-[25px] bg-background4 rounded-full flex items-center justify-center"
                            key={icon.id}
                            variants={opacityVariants}
                        >
                            <BsPlus color="#111111" size={32} />
                        </motion.div>
                    </motion.div>

                ))}
            </div>

        </>
    );
}
