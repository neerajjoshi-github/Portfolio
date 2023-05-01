"use client";
import Model from "./components/Model";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="w-screen md:h-[100vh] h-[200vh] bg-main text-white flex flex-col-reverse  md:flex-row">
        <div className="z-[1] bg-main/20 backdrop-blur-sm w-[100%] md:w-[60%] h-screen px-2 md:px-6 py-10 flex flex-col justify-center gap-10">
          <h1 className="text-6xl lg:text-8xl font-caveat font-bold">
            Hello ,
          </h1>
          <h1 className="text-6xl lg:text-8xl font-caveat font-bold">
            <span className="mr-2">I</span>'m Neeraj Joshi
          </h1>
          <div className="flex flex-col max-sm:px-4 gap-5 items-end">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-caveat">
              &#8213; A full stack web develper
            </p>
            <p className="text-xl mt-4">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
        <div className="w-[100%] sticky top-0 left-0 md:w-[40%] h-screen md:border-l border-white">
          <Model />
        </div>
      </main>
    </PageWrapper>
  );
}
