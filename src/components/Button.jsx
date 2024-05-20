import React from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Button = ({ text, linkTo, flag }) => {
  return (
    <Link to={linkTo}>
      <div
        className='bg-orange w-fit text-white shadow-[5px_5px_7px_0px_#0000003f] text-lg
        cursor-pointer transition-all duration-[0.5s] ease-[ease] delay-[0s] font-medium relative z-[1] px-8 py-3
        border-2 border-orange before:content-[""] before:absolute
        before:bg-white before:z-[-1] before:origin-left before:transition-all
        before:duration-[0.8s] before:scale-x-0 before:inset-0 hover:before:scale-x-100
        hover:border-orange hover:text-[black] hover:border-4 group}'
      >
        <div className="flex items-center gap-3">
          {text}

          {flag && <IoIosSend className="w-10 h-10" />}
        </div>
      </div>
    </Link>
  );
};

export default Button;
