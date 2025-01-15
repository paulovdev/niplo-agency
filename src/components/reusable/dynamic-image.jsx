"use client";

import Image from "next/image";

function DynamicImage({ src, alt = "", width, height, className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default DynamicImage;