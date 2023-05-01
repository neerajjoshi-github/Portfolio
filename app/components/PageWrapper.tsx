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
        initial={{}}
        transition={{
          duration: 10,
        }}
        animate={{}}
        className=""
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
