"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const MaskBackground = ({ src, title }) => {
  /* if (window.innerWidth > 768) { } */

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "start start",
        end: "+=2500 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        ease: "power1.inOut",
      },
    });

    clipAnimation.to(".image-background", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    clipAnimation.to(".background-text ", {
      scale: "1.5",
      opacity: 1,
    });
  });

  return (
    <section
      className="min-h-screen w-screen px-[2.5rem] pb-[100px] flex items-center justify-center max-tablet:px-[1rem]"
      id="about"
    >
      <div className="w-screen h-dvh" id="clip">
        <div
          className="image-background absolute left-1/2 top-0 z-20 h-[100vh] origin-center -translate-x-1/2 overflow-hidden rounded-[2rem] max-tablet:w-[30vw]"
          style={{ width: "100%" }}
        >
          <video
            className="img-bg absolute top-0 left-0 size-full object-cover"
            loop
            muted
            autoPlay
            id="current-video"
            src={src}
            alt=""
          />
        </div>

        <div className="background-text absolute left-1/2 top-1/2 z-20 -translate-x-1/2 opacity-0">
          <h1 className="text-color3 text-center text-[3rem] font-[400] tracking-[-1px] leading-[1]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MaskBackground;
