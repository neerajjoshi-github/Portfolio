import React, { FC } from "react";
import Link from "next/link";

type LinkButtonProps = {
  herf: string;
  children: React.ReactNode;
};

const LinkButton: FC<LinkButtonProps> = ({ herf, children }) => {
  return (
    <Link
      href={herf}
      target="_blank"
      className="max-sm:shadow-primary inline-block font-mono group relative mt-4 shadow-lg duration-700 shadow-white hover:shadow-primary text-white font-semibold"
    >
      <button className="select-none text-xl backdrop-blur-sm cursor-pointer py-2 px-10 duration-150 border-2 border-white">
        {children}
      </button>
      <span className="group-hover:w-full duration-500 absolute top-0 left-0 w-0 h-[2px] bg-primary"></span>
      <span className="group-hover:h-full duration-500 absolute bottom-0 right-0 h-0 w-[2px] bg-primary"></span>
      <span className="group-hover:w-full duration-500 absolute bottom-0 right-0 w-0 h-[2px] bg-primary"></span>
      <span className="group-hover:h-full duration-500 absolute top-0 left-0 h-0 w-[2px] bg-primary"></span>
    </Link>
  );
};

export default LinkButton;
