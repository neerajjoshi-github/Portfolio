"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  HamburgerIcon,
  CloseIcon,
} from "./icons";
import MobileMenu from "./MobileMenu";
import { AnimatePresence, motion } from "framer-motion";

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

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => [setIsMobileMenuOpen(!isMobileMenuOpen)];
  return (
    <>
      <nav className="z-20 bg-main/20 backdrop-blur-lg border-b border-white text-white fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-10 h-16">
        <div className="max-md:hidden absolute right-[150px] -z-[10] -top-[31px] w-44">
          <img className="w-full" src="/gifs/cat-gif.gif" alt="" />
        </div>
        <nav className="hidden sm:flex items-center gap-10 uppercase font-semibold">
          {links.map((link, id) => {
            return (
              <Fragment key={id}>
                <Link
                  href={link.pathname}
                  className={`${
                    link.pathname === pathname
                      ? "text-shadow"
                      : "hover:text-shadow"
                  } group relative font-bold`}
                >
                  {link.title}
                  {link.pathname === pathname && (
                    <motion.span
                      layoutId="underline"
                      className={`absolute -bottom-0.5 left-0 w-full transition-[width] ease duration-500 h-[1px] bg-white`}
                    />
                  )}
                </Link>
              </Fragment>
            );
          })}
        </nav>
        <div
          onClick={toggleMobileMenu}
          className="flex sm:hidden cursor-pointer"
        >
          <AnimatePresence>
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </AnimatePresence>
        </div>

        <nav className="flex items-center gap-5">
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            className="w-7 h-auto cursor-pointer"
          >
            <TwitterIcon />
          </motion.div>
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            className="w-7 h-auto cursor-pointer"
          >
            <GithubIcon />
          </motion.div>
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            className="w-7 h-auto cursor-pointer"
          >
            <LinkedInIcon />
          </motion.div>
        </nav>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
