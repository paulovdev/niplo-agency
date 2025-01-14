"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionText from "../reusable/section-text";

const Services = () => {
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      src: "/services/services-video-1.mp4",
      title: "Creative Excellence",
      id: 1,
    },
    {
      src: "/services/services-video-2.mp4",
      title: "Customized Solutions",
      id: 2,
    },
    {
      src: "/services/services-video-3.mp4",
      title: "Full-Stack Expertise",
      id: 3,
    },
    {
      src: "/services/services-video-4.mp4",
      title: "Transparent Communication",
      id: 4,
    },
  ];

  const anim = {
    enter: {
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="w-full h-fit mb-[100px] mx-auto my-0 ">
      <SectionText text="services" linkBol={false} />

      <div className="flex items-start justify-between">
        <div className="relative w-full flex items-center justify-between gap-[1.5rem] max-tablet:flex-col ">
          <div className="size-full">
            {services.map((service) => (
              <motion.h1
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`${
                  service.id === activeService ? "text-color" : "text-color2"
                } text-[3rem] font-[500] tracking-[-1px] select-none transition-all  max-tablet:text-[2rem]`}
              >
                {service.title}
              </motion.h1>
            ))}
          </div>

          <div className="size-full  flex items-end justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                variants={anim}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <video
                  src={
                    services.find((service) => service.id === activeService)
                      ?.src
                  }
                  width={1600}
                  height={1200}
                  loop
                  muted
                  autoPlay
                  className="w-[800px] h-[550px] object-cover rounded-[1rem] border border-border max-tablet:h-[400px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
