// "use client";
import LinkButton from "./components/LinkButton";
import Model from "./components/Model";
import PageWrapper from "./components/PageWrapper";
import ScrollDownButton from "./components/ScrollDownButton";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <main className="w-screen lg:h-[100vh] h-[200vh] bg-main text-white flex flex-col-reverse lg:flex-row">
        <div className="z-[1] bg-main/20 backdrop-blur-sm w-[100%] lg:w-[60%] h-screen px-2 sm:pl-4 sm:pr-8 lg:px-6 pt-8 pb-4 flex flex-col justify-center gap-10">
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
          <div className="flex items-center max-sm:justify-around sm:gap-8">
            <LinkButton herf="mailto:neerajjoshi7037@gmail.com">
              Hire Me
            </LinkButton>
            <LinkButton herf="">Resume</LinkButton>
          </div>
        </div>
        <div className="w-[100%] sticky top-0 left-0 lg:w-[40%] h-screen lg:border-l border-white">
          <Model />
        </div>
        <ScrollDownButton />
      </main>
    </PageWrapper>
  );
}
