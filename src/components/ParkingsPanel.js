import "./ParkingsPanel.css";
import SingleParkingCar from "./SingleParkingCar";

const ParkingsPanel = (props) => {
  return (
    <div>
      <button onClick={props.showParking}>{props.buttonName}</button>
      <div className="">
        {props.parkings.map((parking) => (
         <SingleParkingCar />
        ))}
      </div>
    </div>
  );
};

export default ParkingsPanel;
