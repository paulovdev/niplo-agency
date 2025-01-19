"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.08, duration: 2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
