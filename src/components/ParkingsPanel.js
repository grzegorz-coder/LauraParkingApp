import React from "react";
import AllParkings from "./AllParkings";
import "./ParkingsPanel.css";
import SingleParkingCar from "./SingeParkingCar";

const ParkingsPanel = (props) => {
  return (
    <div className="parkingPanel__mainboard-grid">
      
        {props.filteredParkingNumber.length === 0
          ? props.parkings.map((parking) => (
              <AllParkings
                key={parking.id}
                number={parking.number}
              />
            ))
          : props.filteredParkingNumber.map((parking) => (
              <SingleParkingCar
                key={parking.id}
                number={parking.number}
                cName={parking.clientName}
                pNumber={parking.phoneNumber}
                rNumber={parking.regNumber}
                cBrand={parking.carBrand}
                date={parking.date}
              />
            ))}
      
    </div>
  );
};

export default ParkingsPanel;
