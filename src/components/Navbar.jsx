import React from "react";
import Navlogo from "../assets/userAsset/Navlogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Tilt from "react-parallax-tilt";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1200px] mx-auto pr-2 pl-2 pt-4">
      <Tilt>
        <div className="flex items-center">
          <img src={Navlogo} alt="navlogo" width={80} height={100}></img>
          <span className="-m-4 text-xl md:text-2xl mr-4">
            jay Pratap Singh
          </span>
        </div>
      </Tilt>
      <div className="md:flex gap-10 hidden">
        {["Projects", "Skills", "Contact me"].map((item, index) => {
          return (
            <a
              href={`#${item}`}
              key={index}
              className="text-xl hover:font-bold transition-all cursor-pointer "
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className="lg:hidden md:hidden">
        <GiHamburgerMenu className="w-8 h-8 ml-5 text-hero" />
      </div>
    </nav>
  );
};

export default Navbar;
