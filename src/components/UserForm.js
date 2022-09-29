import React from "react";
import styles from "./UserForm.module.css";
const UserForm = (props) => {

    return (
  <React.Fragment>
    <form onSubmit={props.handleSubmit}>
      <div>
        <label >Username </label>
        <input type="text" name="uname" required />
        {props.renderErrorMessage("uname")}
      </div>
      <div>
        <label>Password </label>
        <input type="password" name="pass" required />
        {props.renderErrorMessage("pass")}
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
  </React.Fragment>)
};
export default UserForm;
