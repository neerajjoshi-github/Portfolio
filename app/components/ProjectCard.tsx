import React, { FC } from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubAlt } from "react-icons/fa";
import { ProjectCardDataType } from "<@>/data/projectPageData";

type ProjectCardProps = {
  data: ProjectCardDataType;
};

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="max-w-[1080px] group md:ml-20 mt-10 min-h-[350px] flex flex-col md:flex-row items-center bg-slate-800/50 px-4 py-6 rounded-lg">
      <div className="relative w-[200px] sm:w-[380px] lg:w-[400px] h-[250px]">
        <img
          className="absolute z-[4] top-0 left-[50%] -translate-x-1/2 md:left-0 md:translate-x-0  w-[150px] sm:w-[280px] h-[160px] lg:w-[300px] lg:h-[180px] object-cover border border-white transition duration-150 group-hover:-translate-y-5"
          src={data.imageUrls[0]}
          alt=""
        />
        <img
          className="absolute top-14 max-sm:-right-10 sm:left-32 md:left-20 z-[3] w-[150px] sm:w-[280px] h-[160px] lg:w-[300px] lg:h-[180px] object-cover border border-blue-500 transition delay-200 duration-300 group-hover:translate-x-5"
          src={data.imageUrls[1]}
          alt=""
        />
        <img
          className="absolute z-[1]  top-10 -left-14 sm:-left-10 md:-left-20 w-[150px] sm:w-[280px] h-[160px] lg:w-[300px] lg:h-[180px] object-cover border border-purple-500 transition delay-[600ms] duration-300 group-hover:-translate-x-5"
          src={data.imageUrls[2]}
          alt=""
        />
        <img
          className="absolute z-[2] top-20 sm:top-24 left-0 sm:left-5 md:-left-10 w-[150px] sm:w-[280px] h-[160px] lg:w-[300px] lg:h-[180px] object-cover border border-primary transition delay-[400ms] duration-300 group-hover:translate-y-5"
          src={data.imageUrls[3]}
          alt=""
        />
      </div>
      <div className="flex-1 max-md:mt-7  h-full ml-3 flex flex-col items-center">
        <div className="flex flex-col gap-5">
          <Link href="" className="">
            <h1>
              <span className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {data.titile}
                <span className="group-hover:w-[150%] duration-300 absolute -bottom-1 left-0 bg-primary w-full h-px"></span>
              </span>
            </h1>
          </Link>
          <p className="text-sm lg:text-lg font-mono">{data.description}</p>
        </div>
        <div className="w-full mt-8 flex lg:flex-row flex-col max-lg:gap-2 justify-between items-center">
          <div className="text-lg lg:text-xl">{data.tech}</div>
          <div className="flex items-center gap-4">
            <Link
              href={data.liveLink}
              className="w-6 lg:w-7 hover:text-primary duration-500"
            >
              <FiExternalLink className="w-full h-full" />
            </Link>
            <Link
              href={data.githubLink}
              className="w-6 lg:w-7 hover:text-primary duration-500"
            >
              <FaGithubAlt className="w-full h-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
