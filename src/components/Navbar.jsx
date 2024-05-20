import React, { useState } from "react";
import Navlogo from "../assets/userAsset/Navlogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Tilt from "react-parallax-tilt";
const Navbar = ({ setFull }) => {
  return (
    <nav className="flex justify-between items-center max-w-[1200px] mx-auto pr-2 pl-2 pt-4">
      <Tilt>
        <div className="flex items-center animate-pulse">
          <img src={Navlogo} alt="navlogo" width={80} height={100}></img>
          <span className="-m-4 text-xl md:text-2xl mr-4">
            jay Pratap Singh
          </span>
        </div>
      </Tilt>
      <div className="flex justify-center items-center">
        {
          <GiHamburgerMenu
            onClick={() => {
              setFull(false);
            }}
            className="w-8 h-8 ml-5 text-hero"
          />
        }
      </div>
    </nav>
  );
};

export default Navbar;
