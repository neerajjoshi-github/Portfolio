"use client";
import React, { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        {/* <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ x: "200vh" }}
              animate={{ x: 0 }}
              exit={{ x: "200vh" }}
              transition={{
                duration: 1,
              }}
              className="z-[15] absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-main"
            >
              <img src="/gifs/cat-loder.gif" alt="" />
            </motion.div>
          )}
        </AnimatePresence> */}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
