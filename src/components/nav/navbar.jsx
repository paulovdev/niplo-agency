"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useWindowScroll } from "react-use";

import Menu from "./menu";
import Link from "next/link";
import { PerspectiveMenu } from "./perspectiveText";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { y } = useWindowScroll();
  const [menuToggle, setMenuToggle] = useState(false);
  const pathname = usePathname();
  const isWorksRoute = /^\/works\/.+$/.test(pathname);

  const textColor = isWorksRoute ? "#e0dfdd" : "#222222";

  const navigationsTextAnim = {
    hover: {
      top: "-100%",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    initial: {
      top: "0%",
    },
  };

  const opacityAnim = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const navigationsText = [
    { title: "NIPLO AGENCY", title2: "GO TO HOME?", href: "/" },
    { title: "BRAND DESIGN", title2: "WEB DEVELOPMENT" },
    { title: "©2025", title2: "RIGHTED" },
  ];

  useEffect(() => {
    setScrolled(y > 550);
  }, [y]);

  return (
    <>
      <nav
        className="fixed w-full h-[50px] top-0 pb-[1rem] pt-[1rem] px-[2.5rem] flex items-center 
        z-50 pointer-events-none select-none  max-tablet:px-[1rem]"
      >
        <ul
          className="w-full flex items-center justify-between"
          variants={opacityAnim}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {!scrolled &&
            navigationsText.map((i, index) => (
              <li
                className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto"
                key={i.title}
              >
                {index === 0 ? (
                  <Link href={`${i.href}`}>
                    <motion.div
                      className="relative size-full "
                      variants={navigationsTextAnim}
                      whileHover="hover"
                    >
                      <PerspectiveMenu
                        label={i.title}
                        href={i.href}
                        color={textColor}
                      />
                      <PerspectiveMenu
                        label={pathname === "/" ? "u are in home" : i.title2}
                        href={i.href}
                        color={textColor}
                      />
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    className="relative size-full max-tablet:hidden"
                    variants={navigationsTextAnim}
                    whileHover="hover"
                  >
                    <PerspectiveMenu
                      label={i.title}
                      href={i.href}
                      color={textColor}
                    />
                    <PerspectiveMenu
                      label={i.title2}
                      href={i.href}
                      color={textColor}
                    />
                  </motion.div>
                )}
              </li>
            ))}

          {!scrolled && (
            <li className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto">
              <motion.div
                className="relative size-full mb-[20px]"
                onClick={() => setMenuToggle(!menuToggle)}
                whileHover="hover"
                variants={navigationsTextAnim}
              >
                <PerspectiveMenu label="MENU" color={textColor} />
                <PerspectiveMenu label="MENU" color={textColor} />
              </motion.div>
            </li>
          )}

          <AnimatePresence>
            {scrolled && (
              <motion.div
                className="absolute top-0 right-0 bg-background5 px-[2rem] py-[1.5rem] cursor-pointer pointer-events-auto"
                variants={opacityAnim}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <li className="w-fit h-[20px] overflow-hidden ">
                  <motion.div
                    className="relative size-full mb-[20px]"
                    variants={navigationsTextAnim}
                  >
                    <PerspectiveMenu label="MENU" color="#fff" />
                    <PerspectiveMenu label="MENU" color="#fff" />
                  </motion.div>
                </li>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </nav>

      <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </>
  );
}
