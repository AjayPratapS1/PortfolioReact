import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, linkTo}) => {
  return (
    <Link to={linkTo}>
      <button  className="btn-pink flex items-center">
        {text}
      </button>
    </Link>
  );
};

export default Button;
