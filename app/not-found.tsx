import React from "react";
import Link from "next/link";

const hoverMessage = "Page Not Found".split("");

const NotFound = () => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-[30] p-4 bg-[url(/images/night-sky-moon.jpg)] bg-cover bg-center  flex flex-col text-center gap-10 items-center justify-center text-7xl sm:text-8xl md:text-9xl text-white">
      <div className="flex flex-col items-center">
        <div className="w-[300px] -mt-24">
          <img
            className="w-full h-full"
            src="/gifs/cat-eyes-moving.gif"
            alt=""
          />
        </div>
        <div className="-mt-24">
          <h1 className="font-rampart-one">404</h1>
          <h1 className="font-rampart-one">
            {hoverMessage.map((alp, index) => {
              return (
                <span
                  className={`${
                    index === 0 ? "text-primary" : "hover:text-primary"
                  } select-none duration-150`}
                >
                  {alp}
                </span>
              );
            })}
          </h1>
        </div>
        <h2 className="text-2xl font-mono mt-8">
          Lost your way? Go back to{" "}
          <Link href="/" className="underline text-primary font-bold">
            Home
          </Link>{" "}
          page.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
