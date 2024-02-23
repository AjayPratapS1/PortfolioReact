import React from "react";
import blob from "../assets/userAsset/blobVector.png";
import html from "../assets/stack/HTML.png";
import css from "../assets/stack/CSS.png";
import javascript from "../assets/stack/Javascript.svg";
import nodeJs from "../assets/stack/NodeJs.svg";
import react from "../assets/stack/React.png";
import tailwind from "../assets/stack/Tailwind.png";
import vercel from "../assets/stack/Vercel.svg";
import redux from "../assets/stack/Redux.svg";
import next from "../assets/stack/Next.svg";
import bash from "../assets/stack/Bash.svg";
import bootstrap from "../assets/stack/Bootstrap.svg";
import chartJs from "../assets/stack/ChartJs.svg";
import docker from "../assets/stack/Docker.svg";
import express from "../assets/stack/Express.png";
import git from "../assets/stack/Git.svg";
import github from "../assets/stack/Github.svg";
import graphql from "../assets/stack/Graphql.svg";
import K8s from "../assets/stack/K8s.svg";
import materialUi from "../assets/stack/MaterialUI.svg";
import MongoDB from "../assets/stack/MongoDB.svg";

const Skills = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto relative gap-10 lg:gap-36 flex lg:flex-row flex-col-reverse justify-center items-center pt-20 pb-20 px-8 md:pl-8 md:pr-8 lg:mt-36 lg:mb-36 my-20"
      id="Skills"
    >
      <div className="absolute -right-[5%] -bottom-[6%] md:-right-[10%] md:-bottom-[11%] lg:-right-10 lg:-bottom-[25%] xl:-right-[25%] xl:-bottom-[34.5%] text-[13vw] text-faded font-semibold">
        Skills
      </div>
      <div className="max-w-full p-4 lg:p-0 lg:max-w-[450px]">
        <h2 className="text-5xl font-semibold text-orange">
          <span className="text-8xl">M</span>e and
          <div>MyTech Stack</div>
        </h2>
        <p className="mt-5">
          Hi Everyone My name is Ajay Pratap Singh I am doing Full Stack Web
          Developer I have been practice Web Development for last 6 Months. I am
          Currently working on Tailwind Css and Making Beautiful UI-UX are my
          fey. features
        </p>
        <p className="mt-5">
          I am also a 2 star coder on Codechef and I achieves{" "}
          <span className="font-bold">Global Rank 759</span> in Starters 74
          Division 4 <span className="font-bold">Global Rank 2209 </span>in
          Starters 70 Division 4.
        </p>
        <p className="mt-5">
          Good knowledge of web designing and Knowledge of C/C++ Python and Data
          structure and Algorithms.
        </p>
      </div>
      <div className="max-w-full lg:max-w-[600px] flex flex-wrap gap-8 relative justify-center items-center">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10 animate-[blobAnimate_3s_linear_infinite]">
          <img src={blob} alt="blob" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px] hover:scale-125 transition-all duration-500">
          <img src={html} alt="html" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={css} alt="css" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]   hover:scale-125 transition-all duration-500">
          <img src={javascript} alt="javascript" className="w-24 h-24" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={react} alt="react" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={nodeJs} alt="nodejs" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={next} alt="next" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={redux} alt="redux" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={tailwind} alt="tailwind" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={bootstrap} alt="bootstrap" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]   hover:scale-125 transition-all duration-500">
          <img src={materialUi} alt="materialUi" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={express} alt="express" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={git} alt="git" className="w-24 h-24" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={github} alt="github" className="w-24 h-24" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]   hover:scale-125 transition-all duration-500">
          <img src={graphql} alt="graphql" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]   hover:scale-125 transition-all duration-500">
          <img src={MongoDB} alt="MongoDB" className="w-24 h-24" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={vercel} alt="vercel" className="w-24 h-24" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={chartJs} alt="chartJs" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={bash} alt="bash" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={docker} alt="docker" />
        </div>
        <div className="max-w-[50px] sm:max-w-[90px]  hover:scale-125 transition-all duration-500">
          <img src={K8s} alt="K8s" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
