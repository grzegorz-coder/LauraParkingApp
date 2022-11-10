import React, {useState} from "react";

import styles from "./AllParkings.module.css";

const AllParkings = (props) => {
  const [isReserved, setIsReserved] = useState(false);
  
  const changeTile = () => {
    !isReserved ? setIsReserved(true) : setIsReserved(false);
  };
  return (
    <React.Fragment>
      <div className={`${styles["allParkings__mainboard-grid"]}`}>
        <button
          className={`${styles["allparkings__parking"]} ${
            isReserved ? styles.red : ""
          }`}
          onClick={changeTile}
        >
          {props.number}
        </button>
      </div>
    </React.Fragment>
  );
};

export default AllParkings;
