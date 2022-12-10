import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'
import AllParkings from "./AllParkings";
import styles from "./ParkingsPanel.module.css";
import SingleParkingCar from "./SingeParkingCar";
import ParkingSummary from "./ParkingSummary";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

const ParkingsPanel = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [bError, setBError] = useState();
  const [parkings, setParkings] = useState([]);
  //const [showModal, setShowModal] = useState(false);
  const showForm = useSelector((state) => state.showForm)

  useEffect(() => {
    const fetchParkings = async () => {
      const response = await fetch(
        "https://react-htttp-792a0-default-rtdb.firebaseio.com/parkings.json"
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

  return (
    <React.Fragment>
      {showForm && <Modal>
        <SingleParkingCar />
        </Modal>}
      <ParkingSummary />
      <div className={styles["parkingPanel__mainboard-grid"]}>
        {parkings.map((parking) => (
          <AllParkings
            key={parking.id}
            number={parking.number}
            id={parking.id}
          />
        ))}
      </div>
      <Button onClick={props.onClick} buttonName={"Log out"}></Button>
    </React.Fragment>
  );
};

export default ParkingsPanel;
