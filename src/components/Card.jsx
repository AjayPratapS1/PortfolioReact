import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Card = ({
  project,
  projectImage,
  image1,
  image2,
  image3,
  image4,
  image5,
  heading,
  paragraph,
  github,
  projectlink,
}) => {
  return (
    <div className="xl:w-full w-[90%]">
      <div
        style={{ backgroundImage: `url(${projectImage})` }}
        className={`max-w-[90%] h-[550px] bg-cover bg-center relative shadow-[0px_0px_40px_#1f1f1f]
      group flex justify-center items-center 
      transition-all duration-[0.5s]
      ease-[ease] delay-[0s] 
      font-medium z-[1] 
      px-8 py-3
      before:content-[""] before:absolute
      before:bg-[#5c6ab5] before:opacity-80 before:z-[-1] 
      before:origin-left before:transition-all
      before:duration-[0.8s] before:scale-x-0 
      before:inset-0 hover:before:scale-x-100 
      ${project % 2 == 0 ? "ml-0 xl:ml-40" : "ml-0"}
        `}
      >
        <div
          className={`text-[5rem] sm:text-[13rem] absolute -top-8 sm:-top-20 ${
            project % 2 == 0 ? "-left-2 sm:-left-10" : "-right-2 -sm:right-10"
          } text-white font-bold hidden transition-all duration-500
         group-hover:flex z-10`}
        >
          {project}
        </div>

        <div
          className={`max-w-[350px] sm:max-w-[800px] flex flex-col gap-5 absolute p-2 ${
            project % 2 == 0
              ? "-right-[20%] sm:-right-[30%] lg:-right-[18%]"
              : "left-[10%]"
          } z-10 group-hover:scale-110 transition-all  duration-500`}
        >
          <div className="max-w-8 sm:max-w-10 flex gap-4">
            <img src={image1} alt="images" />
            <img src={image2} alt="images" />
            <img src={image3} alt="images" />
            <img src={image4} alt="images" />
            <img src={image5} alt="images" />
          </div>
          <div className="text-3xl sm:text-5xl text-white font-bold">
            {heading}
          </div>
          <div className="text-lg text-white font-medium italic max-w-[70%] ">
            {paragraph}
          </div>
          <div className="flex gap-5 items-center">
            <div
              className='bg-orange w-fit text-white shadow-[5px_5px_7px_0px_#0000003f] text-lg
     cursor-pointer transition-all duration-[0.5s]
      ease-[ease] delay-[0s] 
      font-medium relative z-[1] 
      px-8 py-3
       border-2 border-orange
       before:content-[""] before:absolute
        before:bg-white before:z-[-1] 
        before:origin-left before:transition-all
        before:duration-[0.8s] before:scale-x-0 
        before:inset-0 hover:before:scale-x-100
         hover:border-orange hover:text-[black]
          hover:border-4 group
  }'
            >
              <a href="#" className=" text-white group-hover:text-black">
                Read more
              </a>
            </div>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className=" text-white hover:text-orange transition-all duration-100"
            >
              <FaGithub className="w-9 h-9" />
            </a>
            <a
              href={projectlink}
              target="_blank"
              rel="noreferrer"
              className=" text-white hover:text-orange transition-all duration-100"
            >
              <FaLink className="w-9 h-9 " />
            </a>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full bg-[#1f1f1f9a] "></div>
      </div>
    </div>
  );
};

export default Card;
