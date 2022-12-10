import React, { useState } from "react";
import ParkingsPanel from "./ParkingsPanel";
import Header from "./Layout/Header";
import UserForm from "./UserForm";

const UserLoginPanel = (props) => {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  //User Login Date
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        props.onSaveLoginPanelData(isSubmitted);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // JSX code for login form

  const clickLogOut = () => {
    setIsSubmitted(false);
  };
  
  return (
    <React.Fragment>
      <Header />
      {!isSubmitted ? (
        <UserForm
          handleSubmit={handleSubmit}
          renderErrorMessage={renderErrorMessage}
        />
      ) : (
        <div>
          <ParkingsPanel
            onClick={clickLogOut}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default UserLoginPanel;
