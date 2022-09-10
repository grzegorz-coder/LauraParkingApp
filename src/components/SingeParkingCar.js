import "./SingleParkingCar.css"
import ReservationDate from "./ReservationDate";

const SingleParkingCar = (props) => {
    return (
    <div>
        <li>
        <div>{props.number}</div>
        <ReservationDate date={props.date} />
        <div>{props.cName}</div>
        <div>{props.rNumber}</div>
        <div>{props.pNumber}</div>
        <div>{props.carBrand}</div>
         </li>
    </div>)
}

export default SingleParkingCar;