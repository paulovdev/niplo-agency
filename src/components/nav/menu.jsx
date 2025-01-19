"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { PerspectiveMenu, PerspectiveMenuText } from "./perspectiveText";

const Menu = ({ menuToggle, setMenuToggle }) => {
  const pathname = usePathname();

  useEffect(() => {
    setMenuToggle(false);
  }, [pathname]);

  const navigationsMenuTextAnim = {
    hover: {
      top: "-100%",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    initial: {
      top: "0%",
    },
  };

  const menuAnim = {
    closed: {
      height: "0",
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5,
      },
    },
    open: {
      height: "75vh",
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        delay: 0,
      },
    },
  };

  const contentAnim = {
    closed: {
      opacity: 0,
      y: 50,
      transition: { stiffness: 40, delay: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { stiffness: 40, delay: 1 },
    },
  };

  const overlayAnim = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        delay: 0.15,
      },
    },
  };

  const navigationsTextAnim = {
    hover: {
      top: "-100%",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    initial: {
      top: "0%",
    },
  };

  const navigationsMenuText = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Partners", href: "/partners" },
  ];

  const navigationsText = [
    { title: "NIPLO AGENCY", title2: "NIPLO AGENCY", href: "/" },
    { title: "BRAND DESIGN", title2: "WEB DEVELOPMENT" },
    { title: "©2025", title2: "RIGHTED" },
  ];

  return (
    <>
      <motion.div
        variants={menuAnim}
        initial="closed"
        animate={menuToggle ? "open" : "closed"}
        className="fixed w-full h-0 top-0 right-0 bg-background5 backdrop-blur-3xl select-none overflow-hidden z-[50]"
      >
        <div className="fixed w-full h-[50px] top-0 pb-[3rem] pt-[1.5rem] px-[2.5rem] flex items-center z-50 pointer-events-none select-none">
          <div className="w-full flex items-center justify-between">
            <ul className="w-full flex items-center justify-between">
              {navigationsText.map((i, index) => (
                <li
                  className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto"
                  key={i.title}
                >
                  <motion.div
                    className="relative size-full max-tablet:hidden"
                    variants={navigationsTextAnim}
                    whileHover="hover"
                  >
                    <PerspectiveMenu
                      label={i.title}
                      href={i.href}
                      color="#fff"
                    />
                    <PerspectiveMenu
                      label={i.title2}
                      href={i.href}
                      color="#fff"
                    />
                  </motion.div>
                </li>
              ))}

              <li className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto">
                <motion.div
                  className="relative size-full "
                  onClick={() => setMenuToggle(!menuToggle)}
                  whileHover="hover"
                  variants={navigationsTextAnim}
                >
                  <PerspectiveMenu label="CLOSE" color="#fff" />
                  <PerspectiveMenu label="CLOSE" color="#fff" />
                </motion.div>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          variants={contentAnim}
          initial="closed"
          animate={menuToggle ? "open" : "closed"}
          className="relative size-full py-[3rem] px-[2.5rem] flex items-center justify-between border-b border-border2 
                    max-tablet:flex-col max-tablet:px-[1rem] max-tablet:py-[8rem]"
        >
          <div className="w-full flex flex-wrap gap-[2.5rem] max-tablet:gap-[1rem]">
            {navigationsMenuText.map((i) => {
              const isActive = pathname === i.href;
              return (
                <div
                  key={i.name}
                  className="w-fit h-[80px] max-tablet:h-[50px] mb-4 overflow-hidden cursor-pointer"
                >
                  <Link href={i.href}>
                    <motion.div
                      className="relative size-full "
                      variants={navigationsMenuTextAnim}
                      initial="initial"
                      whileHover="hover"
                    >
                      <PerspectiveMenuText label={i.name} isActive={isActive} />
                      <PerspectiveMenuText label={i.name} isActive={isActive} />
                    </motion.div>
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={overlayAnim}
        initial="closed"
        animate={menuToggle ? "open" : "closed"}
        className="fixed w-[100vw] h-[100vh] backdrop-blur-3xl top-0 left-0 pointer-events-none z-[48]"
      />
    </>
  );
};

export default Menu;
