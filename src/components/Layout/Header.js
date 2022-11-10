import React from "react";
import classes from "./Header.module.css";
import parkingImage from '../../assets/parkingImage.png'

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Laura Parking App</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={parkingImage} alt="A table full off delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
