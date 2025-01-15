"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useCursor } from "@/context/cursor-context";

import Menu from "./menu";
import Link from "next/link";

const PerspectiveMenu = ({ label, color, delayed }) => {
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => {
    setCursorVariant("navbar");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  const navigationsTextAnimCustom = {
    hover: {
      color: color,
      transition: {
        duration: 0.5,
        delay: delayed,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div
      className="c-n size-full  bg-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.p
        className="font-chivo text-color font-[500] text-[.9rem] uppercase"
        animate="hover"
        variants={navigationsTextAnimCustom}
      >
        {label}
      </motion.p>
    </div>
  );
};

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const pathname = usePathname();
  const isAboutRoute = pathname === "/about" || pathname === "/blog";
  const isWorksRoute = /^\/works\/.+$/.test(pathname);
  const isRouteValid = isAboutRoute || isWorksRoute;

  const textColor = isRouteValid
    ? "#e0dfdd"
    : menuToggle
    ? "#e0dfdd"
    : "#222222";
  const textChange = menuToggle ? "CLOSE" : "MENU";

  const navigationsTextAnim = {
    hover: {
      top: "-100%",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    initial: {
      top: "0%",
    },
  };

  const navigationsText = [
    { title: "NIPLO AGENCY", title2: "GO TO HOME?", href: "/" },
    { title: "BRAND DESIGN", title2: "WEB DEVELOPMENT" },
    { title: "©2025", title2: "RIGHTED" },
  ];
  return (
    <>
      <nav
        className={`fixed w-full h-[50px] top-0 pb-[3rem] pt-[1.5rem] px-[2.5rem] flex items-center 
                    z-50 pointer-events-none select-none max-tablet:px-[1rem]`}
      >
        <ul className="w-full flex items-center justify-between">
          {navigationsText.map((i, index) => (
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
                      delayed={menuToggle ? 0 : 1}
                    />
                    <PerspectiveMenu
                      label={pathname === "/" ? "u are in home" : i.title2}
                      href={i.href}
                      color={textColor}
                      delayed={menuToggle ? 0 : 1}
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
                    delayed={menuToggle ? 0 : 1}
                  />
                  <PerspectiveMenu
                    label={i.title2}
                    href={i.href}
                    color={textColor}
                    delayed={menuToggle ? 0 : 1}
                  />
                </motion.div>
              )}
            </li>
          ))}

          <li className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto">
            <motion.div
              className="relative size-full "
              onClick={() => setMenuToggle(!menuToggle)}
              whileHover="hover"
              variants={navigationsTextAnim}
            >
              <PerspectiveMenu
                label={textChange}
                color={textColor}
                delayed={menuToggle ? 0 : 1}
              />
              <PerspectiveMenu
                label={textChange}
                color={textColor}
                delayed={menuToggle ? 0 : 1}
              />
            </motion.div>
          </li>
        </ul>
      </nav>

      <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </>
  );
}
