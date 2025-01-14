"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PerspectiveMenuText = ({ label, isActive }) => {
  return (
    <div className="active-menu-link size-full  bg-none flex items-start justify-center flex-col ">
      <div
        className={` text-[4rem] max-tablet:text-[2.5rem] ${
          isActive ? "text-active" : "text-color3"
        } font-[400]`}
      >
        {label}
      </div>
    </div>
  );
};

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
      height: "50vh",
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

  const navigationsMenuText = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <>
      <motion.div
        variants={menuAnim}
        initial="closed"
        animate={menuToggle ? "open" : "closed"}
        className="fixed w-full h-0 top-0 right-0 bg-background5 backdrop-blur-3xl select-none overflow-hidden z-[49]"
      >
        <motion.div
          variants={contentAnim}
          initial="closed"
          animate={menuToggle ? "open" : "closed"}
          className="relative size-full  py-[4rem] px-[2.5rem] flex items-center justify-between border-b border-border2 
                    max-tablet:flex-col max-tablet:px-[1rem] max-tablet:py-[6rem]"
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
          <div className="w-fit mt-[3rem] grid grid-cols-2 gap-[2rem]">
            <div className="w-full">
              <p className="mb-[1.5rem] text-color4 uppercase text-[1rem] font-[500] tracking-[-.3px]">
                CONNECT
              </p>
              <p className="text-color3 text-[1rem] font-[400] tracking-[-.3px]">
                1600 Amphitheatre Parkway Mountain View — California
              </p>
            </div>
            <div className="w-full">
              <p className="mb-[1.5rem] text-color4 uppercase text-[1rem] font-[500] tracking-[-.3px]">
                SOCIALS
              </p>
              <p className="mb-[.5rem] text-color3 text-[1rem] font-[400] tracking-[-.3px]">
                Instagram
              </p>
              <p className="text-color3 text-[1rem] font-[400] tracking-[-.3px]">
                LinkedIn
              </p>
            </div>
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
