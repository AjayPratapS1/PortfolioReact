import React from "react";
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
function App() {
  return (
    <div className="w-screen h-screen font-vietnam m-0 p-0 box-border overflow-y-auto overflow-x-hidden scroll-smooth">
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
      <footer className="w-full bg-[#343D68] relative flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-5 sm:justify-around p-6 pb-10 sm:p-20 sm:items-center overflow-hidden">
        <div className="text-3xl sm:text-6xl font-medium text-[#535C87] absolute bottom-0 left-0 ">
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
  );
}

export default App;
