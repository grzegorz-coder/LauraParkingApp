import styles from "./SingleParkingCar.module.css";
import ReservationDate from "./ReservationDate";

const SingleParkingCar = (props) => {
    
  return (
    <div>
      <div className={`${styles['singleParkingCar__largeWindow']}`}>
        <div>{props.number}</div>
        <ReservationDate date={props.date} />
        <div>{props.cName}</div>
        <div>{props.rNumber}</div>
        <div>{props.pNumber}</div>
        <div>{props.carBrand}</div>
        
      </div>
    </div>
  );
};

export default SingleParkingCar;
