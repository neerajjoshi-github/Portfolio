"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, OrbitControls, Html, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const page = () => {
  const hoverEffectText =
    "I would love to hear from whether you have a project todicuss, opportunity to give or just want to say hi, I’ll try my best to get back to you!".split(
      ""
    );

  return (
    <>
      <PageWrapper>
        <div className="font-mono w-full h-[200vh] lg:h-screen">
          <Canvas shadows className="z-[1]">
            <Html fullscreen className="flex flex-col lg:flex-row">
              <div className="lg:w-[60%] h-full flex flex-col gap-6 items-center justify-center px-6 pt-16 pb-10">
                <h2 className="w-full text-7xl xs:text-8xl sm:text-9xl md:text-[10rem] select-none text-start font-rampart-one text-white">
                  <span className="text-primary">G</span>
                  <span className="hover:text-primary">E</span>
                  <span className="hover:text-primary">T</span>{" "}
                  <span className="hover:text-primary">I</span>
                  <span className="hover:text-primary">N</span>
                </h2>
                <h2 className="w-full text-7xl xs:text-8xl sm:text-9xl md:text-[10rem] select-none text-end font-rampart-one text-white">
                  <span className="hover:text-primary">T</span>
                  <span className="hover:text-primary">O</span>
                  <span className="hover:text-primary">U</span>
                  <span className="hover:text-primary">C</span>
                  <span className="hover:text-primary">H</span>
                </h2>

                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-mono text-white font-semibold text-center">
                    {hoverEffectText.map((alp, index) => {
                      return (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            type: "spring",
                            duration: 0.2 * index,
                          }}
                          className="hover:text-primary select-none duration-50"
                        >
                          {alp}
                        </motion.span>
                      );
                    })}
                  </h2>
                  <a
                    href="mailto:neerajjoshi7037@gmail.com"
                    target="_blank"
                    className="max-sm:shadow-primary group relative mt-4 shadow-lg duration-700 shadow-white hover:shadow-primary text-white font-semibold"
                  >
                    <button className="select-none text-xl backdrop-blur-sm cursor-pointer py-2 px-10 duration-150 border-2 border-white">
                      Say Hello!
                    </button>
                    <span className="group-hover:w-full duration-500 absolute top-0 left-0 w-0 h-[2px] bg-primary"></span>
                    <span className="group-hover:h-full duration-500 absolute bottom-0 right-0 h-0 w-[2px] bg-primary"></span>
                    <span className="group-hover:w-full duration-500 absolute bottom-0 right-0 w-0 h-[2px] bg-primary"></span>
                    <span className="group-hover:h-full duration-500 absolute top-0 left-0 h-0 w-[2px] bg-primary"></span>
                  </a>
                </div>
              </div>
              <div className="lg:w-[40%] flex flex-col justify-center h-full max-lg:border-t lg:border-l border-white text-white">
                <div className="h-[50%] px-2 flex flex-col gap-6 items-center justify-center">
                  <h2 className="text-2xl lg:text-lg xl:text-2xl font-semibold text-center">
                    I’m currently looking for new employment opportunities and
                    projects.
                  </h2>
                  <a
                    className="text-white relative group font-semibold text-center text-2xl xl:text-4xl"
                    href="mailto:neerajjoshi7037@gmail.com"
                    target="_blank"
                  >
                    neerajjoshi7037@gmail.com
                    <span className="absolute -bottom-1 h-[2px] w-[25%] bg-white left-1/2 group-hover:w-[45%] duration-300"></span>
                    <span className="absolute -bottom-1 h-[2px] w-[25%] bg-white right-1/2 group-hover:w-[45%] duration-300"></span>
                  </a>
                </div>
                <div className="flex flex-col max-lg:items-center max-lg:justify-center gap-6 py-10 px-8 border-t border-white">
                  <h3 className="text-3xl font-black">Social Links</h3>
                  <a
                    href="/twitter"
                    className="text-xl max-sm:underline max-sm:underline-offset-2 cursor-pointer hover:underline underline-offset-2"
                  >
                    Twitter
                  </a>
                  <a
                    href="/linkedln"
                    className="text-xl max-sm:underline max-sm:underline-offset-2 cursor-pointer hover:underline underline-offset-2"
                  >
                    Linkedln
                  </a>
                  <a
                    href="/github"
                    className="text-xl max-sm:underline max-sm:underline-offset-2 cursor-pointer hover:underline underline-offset-2"
                  >
                    Github
                  </a>
                </div>
              </div>
            </Html>

            <Sparkles size={1} scale={12} count={1500} />
            <Sparkles size={2} scale={12} count={300} />
            <Sparkles size={3} scale={12} count={20} />
            <Sparkles size={10} scale={12} count={8} />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={5}
              saturation={0}
              fade
              speed={2}
            />

            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              autoRotateSpeed={1}
            />
          </Canvas>
        </div>
      </PageWrapper>
    </>
  );
};

export default page;

{
  /* <div
ref={circleRef}
className="absolute hidden circle select-none w-10 h-10 pointer-events-none rounded-full"
>
<Canvas className="w-10 h-10">
  <Sparkles size={10} count={1} color={"rgb(224,46,133)"} />
</Canvas>
</div> */
}

// const circleRef = useRef<HTMLDivElement>(null);
// const orbitControlRef = useRef(null);
// useEffect(() => {
//   window.addEventListener("mousemove", (e) => {
//     if (circleRef.current) {
//       const x = e.clientX - circleRef.current?.offsetWidth / 2;
//       const y = e.clientY - circleRef.current?.offsetHeight / 2;
//       circleRef.current.style.transform = `translate(${x}px,${y}px)`;
//     }
//   });
// });

// const MouseMove = () => {
//   return useFrame((state) => {
//     const { x, y } = state.mouse;
//     if (orbitControlRef.current) {
//       orbitControlRef.current.setAzimuthalAngle((Math.PI / 180) * 45 * -x);
//       orbitControlRef.current.setPolarAngle(y + 0.6 * ((Math.PI / 180) * 90));
//       console.log(orbitControlRef.current);
//     }
//   });
// };

{
  /* <MouseMove /> */
}
