import React from "react";

const ReservationDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
      <React.Fragment>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </React.Fragment>)
    
}

export default ReservationDate