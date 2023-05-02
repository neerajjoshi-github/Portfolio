import { useEffect, useState } from "react";

const onClickHandler = () => {
  window.scrollTo(0, window.innerHeight);
};

const ScrollDownButton = () => {
  const [scrollYValue, setSscrollYValue] = useState(0);
  const onWindowScrollHandler = () => {
    setSscrollYValue(scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onWindowScrollHandler);
    return () => {
      window.removeEventListener("scroll", onWindowScrollHandler);
    };
  }, []);
  return (
    <div
      className={`${
        scrollYValue > 20 ? "hidden" : ""
      } lg:!hidden z-10 cursor-pointer absolute animate-bounce bottom-4 left-1/2 -translate-x-1/2`}
    >
      <div
        onClick={onClickHandler}
        className="w-6 h-6 bg-primary custom-spin rotate-90 border-b-2 border-r-2 border-white rounded-full"
      ></div>
      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-5 w-[2px] bg-white"></span>
    </div>
  );
};

export default ScrollDownButton;
