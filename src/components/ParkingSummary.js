import React from "react";
import classes from "./ParkingSummary.module.css";

const ParkingSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Your Laura Parking Application</h2>
      <p>
        Select and click on the reserved parking space, then complete the form
      </p>
      <p>
        Please note that a parking space can only be reserved for a maximum of two months.
      </p>
    </section>
  );
}
export default ParkingSummary