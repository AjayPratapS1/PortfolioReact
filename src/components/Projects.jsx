import React from "react";
import Card from "./Card";
import projectData from "../../data";

const Projects = () => {
  return (
    <div className="bg-faded  mt-10 flex flex-col gap-10 pt-10 " id="Projects">
      <h2 className="text-8xl font-bold text-orange mx-auto ">Projects</h2>
      <div className="w-[400px] sm:w-[800px] lg:w-[1100px] xl:w-[1200px] mx-auto pt-8 pb-12 flex justify-center items-center flex-col gap-36">
        {projectData.map((data) => {
          return <Card key={data.project} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
