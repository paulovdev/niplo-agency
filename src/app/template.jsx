"use client";
import { CursorProvider } from "@/context/cursor-context";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { usePathname } from "next/navigation";

import Layout from "@/utils/transition/Layout";
import Nav from "@/components/nav/navbar";
import Cursor from "@/utils/cursor";

const Template = ({ children }) => {
  const refPos = useRef(null);
  const key = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <CursorProvider>
        <Layout key={key}>
          <div ref={refPos}>
            <Nav />
            <Cursor refPos={refPos} />
            {children}
          </div>
        </Layout>
      </CursorProvider>
    </AnimatePresence>
  );
};

export default Template;
