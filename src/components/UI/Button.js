import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <React.Fragment>
      <button className={classes.button}>{props.buttonName}</button>
    </React.Fragment>
  );
};

export default Button;
