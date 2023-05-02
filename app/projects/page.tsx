import React from "react";
import PageWrapper from "../components/PageWrapper";
import ProjectCard from "../components/ProjectCard";
import { projectCardsData } from "<@>/data/projectPageData";

const page = () => {
  return (
    <PageWrapper>
      <div className="pt-20 pb-10 text-white px-4 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-bold font-mono">
          Things I've Built
        </h1>
        {projectCardsData.map((data) => {
          return <ProjectCard data={data} />;
        })}
      </div>
    </PageWrapper>
  );
};

export default page;
