import React from "react";
import Button from "./UI/Button";
import styles from './UserForm.module.css'
const UserForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>
        <div className={styles.input}>
          <label> Username </label>
          <input type="text" name="uname" />
          {props.renderErrorMessage("uname")}
        </div>
        <div className={styles.input}>
          <label> Password </label>
          <input type="password" name="pass" />
          {props.renderErrorMessage("pass")}
        </div>
        <div>
          <Button buttonName={"Log In"}></Button>
        </div>
      </form>
    </React.Fragment>
  );
};
export default UserForm;
