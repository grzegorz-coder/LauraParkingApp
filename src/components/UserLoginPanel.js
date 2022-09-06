import React, {useState} from "react";
import "./UserLoginPanel.css";


const UserLoginPanel = (props) => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [titleName, setTitleName] = useState("Sign In");

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

    const loginPanelData = {submitted: isSubmitted};

    props.onSaveLoginPanelData(loginPanelData);

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
        setTitleName("LauraParkingApp");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    };
    
    
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
    <div className="login-form">
      <div className="tittle">{titleName}</div>
      {!isSubmitted ? 
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div> : <button onClick={clickLogOut}>Log Out</button>}
      </div>          
  );
};

export default UserLoginPanel;
