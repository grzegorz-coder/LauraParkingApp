import React, { useState } from "react";
import "./LauraParkingApp.css";
//import ParkingsPanel from "./components/ParkingsPanel";
import UserLoginPanel from "./components/UserLoginPanel";

const LauraParkingApp = () => {
  /*const parkingNames = [
    { id: "0" },
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
  ];*/
  // const [parkings, setParkings] = useState([]);
  // const [buttonName, setButtonName] = useState("Start", true);
  
  //const showParkings = () => {
  //  const showedParkings = [...parkingNames].map((parking) => ({
  //    ...parking,
  //    id: Math.random(),
  //  }));
  //  setParkings(showedParkings);
  //  setButtonName("Your Parkins:");
  //};

  const saveLoginPanelDataHandler = (enteredLoginPanelData) => {
    const loginPanelData = {
      ...enteredLoginPanelData,
      id: Math.random().toString(),
    };
    console.log(loginPanelData);
  };

  return (
    <div>
      <div>
        <UserLoginPanel
          onSaveLoginPanelData={saveLoginPanelDataHandler}
          
        />
      </div>
      {/*<div>
        {isSubmitted ? (
          <ParkingsPanel
            parkings={parkings}
            showParkings={showParkings}
            buttonName={buttonName}
          />
        ) : (
          <div></div>
        )}
        </div>*/}
    </div>
  );
};

export default LauraParkingApp;
