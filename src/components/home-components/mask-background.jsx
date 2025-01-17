"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./about";
import TextSlide from "@/components/reusable/text-slide";

const MaskBackground = ({ src, title }) => {
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
      filter: "brightness(60%)",
    });

    clipAnimation.to(".background-text-1 ", {
      scale: "1.2",
      opacity: 1,
      left: "10%",
    });
    clipAnimation.to(".background-text-2 ", {
      opacity: 1,
      top: "30%",
    });
  });

  return (
    <section
      className="min-h-screen w-screen px-[2.5rem] pb-[100px] flex items-center justify-center max-laptop:px-[1rem]"
      id="about"
    >
      <div className="w-screen h-dvh" id="clip">
        <div
          className="image-background absolute left-1/2 top-0 z-20 h-[100vh] origin-center -translate-x-1/2 overflow-hidden rounded-[1rem] max-tablet:w-[30vw]"
          style={{ width: "100%", filter: "brightness(100%)" }}
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

        <div className="background-text-1 absolute w-screen h-fit left-[25%] top-[80%] z-20  opacity-0">
          <TextSlide
            color="text-color3"
            phrases={["LIKE YOURS"]}
            rightContentBol={false}
          />
        </div>

        <div className="background-text-2 absolute w-screen h-fit left-[50%] top-[50%] z-20  opacity-0 max-tablet:left-0">
          <About />
        </div>
      </div>
    </section>
  );
};

export default MaskBackground;
