import React from "react";
import AllParkings from "./AllParkings";
import "./ParkingsPanel.css";
import SingleParkingCar from "./SingeParkingCar";

const ParkingsPanel = (props) => {
  return (
    <div>
      {props.filteredParkingNumber.length === 0
        ? props.parkings.map((parking) => (
            <AllParkings key={parking.id} number={parking.number} />
          ))
        : props.filteredParkingNumber.map((parking) => (
            <SingleParkingCar key={parking.id} number={parking.number} />
          ))}
    </div>
  );
};

export default ParkingsPanel;
