import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { ImCross } from "react-icons/im";
import Footer from "../components/common/Footer";

const Home = () => {
    const [full, setFull] = useState(true);
  return (
    <>
      {full ? (
        <div className="w-screen h-screen font-vietnam m-0 p-0 box-border overflow-y-auto overflow-x-hidden scroll-smooth">
          <Navbar setFull={setFull} />
          <HeroSection />
          <Projects />
          <Skills />
          <Contact />
          <Footer/>
        </div>
      ) : (
        <div className="w-screen h-screen relative font-vietnam m-0 p-0 box-border overflow-y-auto overflow-x-hidden scroll-smooth">
          <ImCross
            onClick={() => {
              setFull(true);
            }}
            className="absolute top-7 z-10 right-10 w-8 h-8 text-hero"
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
                    <div className="text-4xl md:text-6xl transition-all duration-200 hover:font-bold">
                      {item}
                    </div>
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
};

export default Home;
