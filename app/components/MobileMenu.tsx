"use client";
import Link from "next/link";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const links = [
  {
    title: "Home",
    pathname: "/",
  },
  {
    title: "About",
    pathname: "/about",
  },
  {
    title: "Projects",
    pathname: "/projects",
  },
  {
    title: "Contact",
    pathname: "/contact",
  },
];

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu: FC<MobileMenuProps> = ({ closeMenu }) => {
  const router = useRouter();
  const onClickHandler = (pathname: string) => {
    router.push(pathname);
    closeMenu();
  };
  return (
    <motion.div
      initial={{ left: "-85px" }}
      animate={{ left: 0 }}
      exit={{ left: "-85px" }}
      transition={{ type: "spring" }}
      className="h-full pt-16 z-10 bg-main/50 backdrop-blur-sm border-r border-white text-white font-mono w-[80px] fixed top-0 left-0 flex sm:hidden justify-center items-center"
    >
      <ul className="flex gap-5 text-lg uppercase font-semibold tracking-tighter vertical-text">
        {links.map((link) => {
          return (
            <li
              key={link.title}
              onClick={() => onClickHandler(link.pathname)}
              className="duration-300 hover:text-primary cursor-pointer"
            >
              {link.title}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
