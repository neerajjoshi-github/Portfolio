import React from "react";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col text-center gap-10 justify-center items-center text-6xl sm:text-8xl md:text-9xl text-white">
      <div className="w-[300px]">
        <img className="w-full h-full" src="/gifs/cat-eyes-moving.gif" alt="" />
      </div>
      <div className="-mt-24">
        <h1 className="font-rampart-one">404</h1>
        <h1 className="font-rampart-one">Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
