"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { paragraphData } from "<@>/data/aboutPageData";
import Marquee from "react-fast-marquee";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs, IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import PageWrapper from "../components/PageWrapper";
import SparklesBackground from "../components/SparklesBackground";

const marqueeSlides = [
  {
    id: 1,
    icon: RiReactjsFill,
    title: "React Js",
  },
  {
    id: 2,
    icon: SiNextdotjs,
    title: "Next Js",
  },
  {
    id: 3,
    icon: SiMongodb,
    title: "MongoDb",
  },
  {
    id: 4,
    icon: SiTailwindcss,
    title: "Tailwind CSS",
  },
  {
    id: 5,
    icon: SiExpress,
    title: "Express Js",
  },
  {
    id: 6,
    icon: SiTypescript,
    title: "TypeScript",
  },
  {
    id: 7,
    icon: IoLogoCss3,
    title: "CSS",
  },
  {
    id: 8,
    icon: IoLogoNodejs,
    title: "Node Js",
  },
  {
    id: 9,
    icon: AiFillHtml5,
    title: "HTML",
  },
];

const page = () => {
  const [borderHeight, setBorderHeight] = useState(0);
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setBorderHeight(latest);
  });

  return (
    <PageWrapper>
      <div className="relative z-[1] flex min-h-[100vh] max-md:flex-col max-md:pt-20">
        <SparklesBackground />
        <div className="md:fixed md:top-0 md:left-0 md:w-[40%] md:h-screen flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ x: "-50vw", opacity: 0 }}
              animate={{ x: "0", opacity: 1 }}
              transition={{ type: "spring", duration: 2 }}
              className="w-[90%] h-[60vh] border border-white group overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src="/images/profileImage.jpg"
                alt="Profile Image"
              />
            </motion.div>
            <h2 className="font-caveat font-semibold text-6xl text-primary">
              Neeraj Joshi
            </h2>
          </div>
        </div>
        <div className="backdrop-blur-[2px] md:ml-auto md:w-[60%] min-h-screen flex flex-col items-center md:justify-center py-10 pr-3 pl-6 sm:pr-6 sm:pl-10 md:pt-20 md:border-l md:border-white text-white">
          <div>
            <h2 className="text-6xl font-semibold mb-6">Hi there!</h2>
            <div
              ref={divRef}
              className="relative pl-4 text-sm lg:text-xl flex flex-col gap-4"
            >
              <motion.span
                initial={{ height: 0 }}
                animate={{ height: `${borderHeight * 100}%` }}
                transition={{ duration: 3, type: "tween" }}
                className="md:hidden absolute left-0 top-0 h-full w-px bg-white"
              ></motion.span>
              {paragraphData.map((p, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{
                      x: "60vw",
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 * index,
                      type: "spring",
                      stiffness: 45,
                      damping: 10,
                    }}
                  >
                    {p.value}
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="w-full mt-10">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Tech I am familiar with.
            </h2>
            <Marquee
              className="mt-6 rounded-xl"
              gradient
              gradientColor={[2, 6, 23]}
              gradientWidth={200}
            >
              {marqueeSlides.map((slide) => {
                return (
                  <slide.icon
                    key={slide.id}
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-4"
                  />
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
