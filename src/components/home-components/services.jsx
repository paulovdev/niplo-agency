"use client";

import { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionText from "../reusable/section-text";
import servicesData from "@/data/servicesData";
import Image from "next/image";

const Services = () => {
  const [activeService, setActiveService] = useState(1);

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
    <section className="w-full h-fit pb-[100px] mb-[50px] mx-auto my-0 border-b border-border">
      <SectionText text="our services" linkBol={false} marginBottom={0} />

      <div className="flex items-start justify-between">
        <div className="relative w-full flex items-center justify-between gap-[1.5rem] max-tablet:flex-col ">
          <div className="size-full">
            {servicesData.map((service) => {
              const servicePersonalized = (
                <span className="text-[.8rem] font-[600] font-chivo">
                  &#91;{service.id}&#93;
                </span>
              );

              return (
                <Fragment key={service.id}>
                  <motion.h1
                    onMouseEnter={() => setActiveService(service.id)}
                    className={`${
                      service.id === activeService
                        ? "text-color"
                        : "text-color2"
                    } text-[2.5rem] font-[500] uppercase tracking-[-1px] select-none transition-all max-tablet:text-[2rem]`}
                  >
                    {service.id === activeService ? (
                      <>
                        {servicePersonalized} {service.title}
                      </>
                    ) : (
                      service.title
                    )}
                  </motion.h1>
                </Fragment>
              );
            })}
          </div>

          <div className="size-full flex items-end justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                variants={anim}
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <Image
                  src={
                    servicesData.find((service) => service.id === activeService)
                      ?.src
                  }
                  alt={`${servicesData.src}`}
                  width={500}
                  height={500}
                  className="w-[900px] h-[650px] object-cover rounded-[1rem] border border-border max-tablet:h-[400px]"
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
