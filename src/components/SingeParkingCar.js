import React, { useState } from "react";
import styles from "./SingleParkingCar.module.css";
import SingleParkingClientInformation from "./SingleParkingClientInformation";
import {useDispatch} from 'react-redux';
import Button from "./UI/Button";
import { showFormActions } from '../store/index';

const SingleParkingCar = (props) => {
  const FIRSTCLIENTDATA = [{
        clientName: 'Grzegorz',
        regNumber: "GDA45678",
        phoneNumber: "504345687",
        carBrand: "Toyota Corolla",
        date: new Date(2020, 7, 14),
  }]

  
  const dispatch = useDispatch();
  const [clientsData, setClientsData] = useState(FIRSTCLIENTDATA);

  const hideFormHandler = () => {
    dispatch(showFormActions.hideForm());
  };

  const saveClientsDataHandler = (enteredClientData) => {
    const actualClientData = {
      ...enteredClientData,
    };
    setClientsData(actualClientData);
    console.log(clientsData)
  };

  return (
    <React.Fragment>
      <div>
        <SingleParkingClientInformation
          onSaveClientInformationData={saveClientsDataHandler}
        />
      </div>
      <div className={styles['allparkings__largeWindow']}> 
        <div>{clientsData.clientName}</div>
        <div>{clientsData.regNumber}</div>
        <div>{clientsData.phoneNumber}</div>
        <div>{clientsData.carBrand}</div>
      </div>
      <Button onClick = {hideFormHandler} buttonName='Close'/>
    </React.Fragment>
  );
};

export default SingleParkingCar;
