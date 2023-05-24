import React from "react";
import PageWrapper from "../components/PageWrapper";
import LinkButton from "../components/LinkButton";
import SparklesBackground from "../components/SparklesBackground";

const page = () => {
  return (
    <PageWrapper>
      <div className="relative z-[1] flex min-h-[100vh] max-md:flex-col">
        <SparklesBackground />
        <div className="backdrop-blur-[0.1px] flex flex-col h-[200vh] lg:h-screen w-full lg:flex-row">
          <div className="lg:w-[60%] h-screen flex flex-col gap-6 items-center justify-center px-6 pt-16 pb-10">
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
                I would love to hear from whether you have a project todicuss,
                opportunity to give or just want to say hi, I’ll try my best to
                get back to you!
              </h2>
              <LinkButton herf="mailto:neerajjoshi7037@gmail.com">
                Say Hello!
              </LinkButton>
            </div>
          </div>
          <div className="lg:w-[40%] flex flex-col justify-center h-screen max-lg:border-t lg:border-l border-white text-white">
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
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
