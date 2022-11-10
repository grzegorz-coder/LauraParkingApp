import React from "react";
import classes from './ParkingsArea.module.css'

const ParkingsArea = (props) => {
    return <div className={classes.parkingsArea}>{props.children}</div>
}

export default ParkingsArea