import React from "react";
import userImage from "../assets/userAsset/UserImage.png";
import circle from "../assets/userAsset/circle.png";
import cube from "../assets/userAsset/cube.png";
import dots from "../assets/userAsset/dots.png";
import plus from "../assets/userAsset/plus.png";
import zigzags from "../assets/userAsset/zigzags.png";
import Role from "./Role";
import Button from "./Button";

const linkedin = "https://www.linkedin.com/in/ajay895/";

const HeroSection = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto flex justify-between  items-center px-4 my-16 pb-32 ">
      <div className="absolute left-5 -bottom-16 select-none text-faded lg:text-8xl md:text-7xl text-4xl font-bold">
        Ajay pratap Singh
      </div>
      <div className="lg:max-w-2xl md:max-w-sm max-w-full flex flex-col gap-8 justify-center">
        <h1 className="text-2xl sm:text-4xl text-hero">
          Hi! Ajay Pratap Singh
        </h1>
        <p className="text-3xl sm:text-5xl font-medium text-hero">
          I am a <Role />
        </p>

        <p className="text-base w-[70%]">
          I'm a software developer and here is my portfolio website. Here you'll
          learn about my journey as a software developer.
        </p>
        <Button text={"Hire Me"} linkTo={linkedin} />
      </div>
      <div className="max-w-md md:flex hidden relative">
        <div className="p-8 grayscale animate-[scaleImage_5s_linear_infinite]">
          <img src={userImage} alt="userImg"></img>
        </div>

        <div className="absolute bottom-0 left-0 animate-[shakeEffect_linear_6s_infinite]">
          <img src={circle} alt="circle"></img>
        </div>

        <div className="absolute -top-3 left-[50%] animate-[shakeEffectPlus_5s_ease-in_infinite]">
          <img src={plus} alt="plus"></img>
        </div>

        <div className="absolute -bottom-4 right-0 animate-[dotsAnimation_5s_infinite]">
          <img src={dots} alt="dots"></img>
        </div>

        <div className="absolute  right-[1em] top-[-0.8em] animate-[cubeRotate_3s_infinite]">
          <img src={cube} alt="cube"></img>
        </div>

        <div className="absolute top-4 -left-3 animate-[zigzags_5s_ease-in_infinite]">
          <img src={zigzags} alt="zigzags"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
