import React from "react";
import Card from "./Card";
import { projectData, projectDataWork } from "../../data";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const Projects = () => {
  const location = useLocation();
  let datas;
  // console.log(location.pathname);
  location.pathname === "/work"
    ? (datas = projectDataWork)
    : (datas = projectData);
  return (
    <div className="bg-faded  mt-10 flex flex-col gap-10 pt-10 " id="Projects">
      <h2 className="text-8xl font-bold text-orange mx-auto ">Projects</h2>
      <div className="w-[400px] sm:w-[800px] lg:w-[1100px] xl:w-[1200px] mx-auto pt-8 pb-12 flex justify-center items-center flex-col gap-36">
        {datas.map((data) => {
          return <Card key={data.project} {...data} />;
        })}
      </div>
      {/* button */}
      {
        <div className="mx-auto mb-6">
          {location.pathname != "/work" && (
            <Button text={"More Projects"} linkTo={"/work"} />
          )}
        </div>
      }
    </div>
  );
};

export default Projects;
