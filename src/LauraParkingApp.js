import React from "react";
import styles from "./LauraParkingApp.module.css";
import UserLoginPanel from "./components/UserLoginPanel";

const LauraParkingApp = () => {
 
  return (
    <React.Fragment>
      <div className={styles.app}>
        <UserLoginPanel />
      </div>
    </React.Fragment>
  );
};

export default LauraParkingApp;
