import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AnimatedCursor from "react-animated-cursor";
import { ImCross } from "react-icons/im";
function App() {
  const [full, setFull] = useState();
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#E84949",
        }}
        outerStyle={{
          border: "3px solid #E84949",
        }}
      />
      {full ? (
        <div className="w-screen h-screen font-vietnam m-0 p-0 box-border overflow-y-auto overflow-x-hidden scroll-smooth">
          <Navbar setFull={setFull} />
          <HeroSection />
          <Projects />
          <Skills />
          <Contact />
          <footer className="w-full bg-[#343D68] relative flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-5 sm:justify-around p-6 pb-10 sm:p-20 sm:items-center overflow-hidden">
            <div className="text-3xl select-none sm:text-6xl font-medium text-[#535C87] absolute bottom-0 left-0 ">
              Ajay Pratap Singh
            </div>
            <div className="flex gap-10">
              {["Projects", "Skills", "Contact me"].map((item, index) => {
                return (
                  <a
                    href={`#${item}`}
                    key={index}
                    className="text-lg text-white hover:text-orange transition-all cursor-pointer "
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="flex gap-5 text-white items-center">
              <a
                href="https://www.linkedin.com/in/ajay895/"
                target="_blank"
                className="hover:text-orange transition-all duration-100"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/AjayPratapS1/"
                target="_blank"
                className="hover:text-orange transition-all duration-100"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/__ajay.singh?igsh=MTBhYcndhZjF4dw=="
                target="_blank"
                className="hover:text-orange transition-all duration-100"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="mailto:ajaypratapsingh8958a@gmail.com"
                className="hover:text-orange transition-all duration-100"
              >
                <IoIosMail className="w-10 h-10" />
              </a>
            </div>
          </footer>
        </div>
      ) : (
        <div className="w-screen h-screen relative font-vietnam m-0 p-0 box-border overflow-y-auto overflow-x-hidden scroll-smooth">
          <ImCross
            onClick={() => {
              setFull(true);
            }}
            className="absolute top-7 z-10 right-10 w-8 h-8 text-hero animate-spin"
          />
          <div className="relative mx-auto  text-hero p-8 flex flex-col space-y-36 justify-center items-center w-full h-full">
            {["Projects", "Skills", "Contact me"].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-11/12 flex flex-col items-center gap-4 z-0"
                >
                  <a
                    onClick={() => {
                      setFull(true);
                    }}
                    href={`#${item}`}
                    className="animate-bounce"
                  >
                    <div className="text-4xl md:text-6xl transition-all duration-200 hover:font-bold">{item}</div>
                  </a>
                  <div className="bg-hero w-9/12 h-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
