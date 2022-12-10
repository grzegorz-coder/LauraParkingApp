import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import styles from "./AllParkings.module.css";
import { showFormActions } from '../store/index';

const AllParkings = (props) => {
  const dispatch = useDispatch();
  const [isReserved, setIsReserved] = useState(false);
  const changeTile = () => {
    !isReserved ? setIsReserved(true) : setIsReserved(false);
  };

  const showFormHandler = () => {
    dispatch(showFormActions.showForm());
  };
  
  return (
    <React.Fragment>
          
       <div className={`${styles["allParkings__mainboard-grid"]}`}>
        <button
          className={`${styles["allparkings__parking"]} ${
            isReserved ? styles.red : ""
          }`}
          onClick={showFormHandler}
        >
          {props.number}
        </button>
      </div>
    </React.Fragment>
  );
};

export default AllParkings;
