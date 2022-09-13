import React from "react";
import styles from "./LauraParkingApp.module.css";
import UserLoginPanel from "./components/UserLoginPanel";

const LauraParkingApp = () => {
 
  return (
    <div className={styles.app}>
      <div>
        <UserLoginPanel />
      </div>
    </div>
  );
};

export default LauraParkingApp;
