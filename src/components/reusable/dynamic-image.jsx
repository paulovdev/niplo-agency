"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function DynamicImage({
  src,
  alt = "",
  width,
  height,
  className = "",
  blurDataURL = "",
}) {
  const [blur, setBlur] = useState(blurDataURL);

  // Usar um efeito para definir o blurDataURL de forma assíncrona
  useEffect(() => {
    if (!blur && src) {
      const loadImage = async () => {
        const res = await fetch(src);
        const imgBlob = await res.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          const base64String = reader.result;
          setBlur(base64String);
        };

        reader.readAsDataURL(imgBlob);
      };

      loadImage();
    }
  }, [src, blur]);

  // Verifique se o blurDataURL foi carregado
  if (!blur) return <div>Loading...</div>; // Ou qualquer outro indicador de carregamento

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder="blur"
      blurDataURL={blur}
    />
  );
}

export default DynamicImage;
