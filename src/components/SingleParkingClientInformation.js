import React, { useState } from "react";
import "./SingleParkingClientInformation.module.css";

const SingleParkingClientInformation = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPNumber, setEnteredPNumber] = useState("");
  const [enteredRCarNumber, setEnteredRCarNumber] = useState("");
  const [enteredCBrand, setEnteredCBrand] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const pNumberChangeHandler = (event) => {
    setEnteredPNumber(event.target.value);
  };
  const rCarNumberChangeHandler = (event) => {
    setEnteredRCarNumber(event.target.value);
  };
  const cBrandChangeHandler = (event) => {
    setEnteredCBrand(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const clientInformationData = {
        clientName: enteredName,
        regNumber: enteredRCarNumber,
        phoneNumber: enteredPNumber,
        carBrand: enteredCBrand,
        date: new Date(enteredDate),
    };

    props.onSaveClientInformationData(clientInformationData);
    setEnteredName("");
    setEnteredPNumber("");
    setEnteredRCarNumber("");
    setEnteredCBrand("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Client Name</label>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div>
            <label>Client phone number</label>
            <input
              type="number"
              value={enteredPNumber}
              onChange={pNumberChangeHandler}
            />
          </div>
          <div>
            <label>Car registration number</label>
            <input
              type="number"
              value={enteredRCarNumber}
              onChange={rCarNumberChangeHandler}
            />
          </div>
          <div>
            <label>Car brand</label>
            <input
              type="number"
              value={enteredCBrand}
              onChange={cBrandChangeHandler}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Client Information Data</button>
        </div>
      </form>
    </div>
  );
};

export default SingleParkingClientInformation;
