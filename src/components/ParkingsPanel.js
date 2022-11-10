import React, { useEffect, useState } from "react";
import AllParkings from "./AllParkings";
import styles from "./ParkingsPanel.module.css";
import SingleParkingCar from "./SingeParkingCar";
import ParkingsArea from "./UI/ParkingsArea";
import Header from "./Layout/Header";
import ParkingSummary from "./ParkingSummary";

const ParkingsPanel = (props) => {


  const [isLoading, setIsLoading] = useState(true);
  const [bError, setBError] = useState();
  const [parkings, setParkings] = useState([])

  useEffect(() => {
    const fetchParkings = async () => {
      const response = await fetch(
        'https://react-htttp-792a0-default-rtdb.firebaseio.com/parkings.json'
      );

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const responseData = await response.json();
      const loadedParkings = [];
      for (const key in responseData) {
        loadedParkings.push({
          id: key,
          number: responseData[key].number,
        });
      }
      setParkings(loadedParkings);
      setIsLoading(false);
    };
    fetchParkings().catch((error) => {
      setIsLoading(false);
      setBError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.ParkingsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (bError) {
    return (
      <section className={styles.ParkingsError}>
        <p>{bError}</p>
      </section>
    );
  }

  const parkingLength = props.parkings.length;
  const fParkingLength = props.filteredParkingNumber.length;
  
  const showParkingOrParkings =
      props.filteredParkingNumber.map((parking) => (
          <ParkingsArea>
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
          </ParkingsArea>
        ));
         
  return (
    <React.Fragment>
      <Header />
      <ParkingSummary />
      <div
        className={`${styles["parkingPanel__mainboard-grid"]} ${
          !(parkingLength && fParkingLength === 0) ? styles.sc : ""
        }`}
      >
       {parkings.map((parking) => (
          <AllParkings
            key={parking.id}
            number={parking.number}
            id={parking.id}
          />))}         
      </div>
    </React.Fragment>
  );
};

export default ParkingsPanel;
