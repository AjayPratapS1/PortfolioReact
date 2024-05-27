import React from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const Button = ({ text, linkTo, flag }) => {
  return (
    <Link to={linkTo}>
      <button className="btn-pink flex items-center gap-3">
        {text}
        {flag && <IoIosSend className="w-10 h-10" />}
      </button>
    </Link>
  );
};

export default Button;
