import React, { useState } from "react";
import styles from "./SingleParkingCar.module.css";
import ReservationDate from "./ReservationDate";
import SingleParkingClientInformation from "./SingleParkingClientInformation";

const SingleParkingCar = (props) => {
  const FIRSTCLIENTDATA = [{
        clientName: 'Grzegorz',
        regNumber: "GDA45678",
        phoneNumber: "504345687",
        carBrand: "Toyota Corolla",
        date: new Date(2020, 7, 14),
  }]
  
  const [clientsData, setClientsData] = useState(FIRSTCLIENTDATA);

  const saveClientsDataHandler = (enteredClientData) => {
    const actualClientData = {
      ...enteredClientData,
    };
    setClientsData(actualClientData);
    console.log(clientsData)
  };

  //const addClientsDataHandler = (act) => {
  // setClientsData((prevCData) => {
  //   return [cData, ...prevCData];
  // });
  // };

  return (
    <div>
      <div>
        <SingleParkingClientInformation
          onSaveClientInformationData={saveClientsDataHandler}
        />
      </div>
      <div className={`${styles["singleParkingCar__largeWindow"]}`}>
        <div>{props.number}</div>
        <div>{clientsData.clientName}</div>
        <ReservationDate date={props.date} />
        <div>{clientsData.regNumber}</div>
        <div>{clientsData.phoneNumber}</div>
        <div>{clientsData.carBrand}</div>
      </div>
    </div>
  );
};

export default SingleParkingCar;
