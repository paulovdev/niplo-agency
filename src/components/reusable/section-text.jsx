"use client";

import Link from "next/link";
import { useState } from "react";

const SectionText = ({ text, src, linkText, linkBol, marginBottom }) => {
  const [isLinkActive, setIsLinkActive] = useState(linkBol);

  return (
    <div
      className="w-full mb-[2.5rem] flex items-center justify-between select-none pointer-events-none"
      style={{ marginBottom: marginBottom }}
    >
      <h2 className="font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase ">
        {text}
      </h2>
      {isLinkActive && (
        <Link
          className="px-[1.3rem] py-[.3rem] font-chivo text-color text-[.75rem] tracking-[-.1px] font-[500] uppercase border border-border rounded-[2rem] select-auto pointer-events-auto"
          href={src}
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default SectionText;
