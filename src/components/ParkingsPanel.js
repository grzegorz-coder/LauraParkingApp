import React from "react";
import AllParkings from "./AllParkings";
import styles from "./ParkingsPanel.module.css";
import SingleParkingCar from "./SingeParkingCar";

const ParkingsPanel = (props) => {
  const parkingLength = props.parkings.length;
  const fParkingLength = props.filteredParkingNumber.length;

  return (
    <div
      className={`${styles['parkingPanel__mainboard-grid']} ${
        !(parkingLength && fParkingLength === 0) ? styles.sc : ""
      }`}
    >
      {fParkingLength === 0
        ? props.parkings.map((parking) => (
            <AllParkings key={parking.id} number={parking.number} id={parking.id} />
          ))
        : props.filteredParkingNumber.map((parking) => (
            <SingleParkingCar
              key={parking.id}
              id={parking.id}
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
