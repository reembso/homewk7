import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      {}
      <button className={props.class}>{props.text}</button>
    </div>
  );
};

export default Button;
