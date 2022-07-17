import './App.css';
import React, { useState, useEffect } from 'react';
import SingleParking from './components/SingleParking';

const parkingNames = [
  {id: '0'},
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
  {id: '8'},
  {id: '9'},
  {id: '10'},
  {id: '11'},
  {id: '12'},
  {id: '13'},
  {id: '14'},
  {id: '15'},
  {id: '16'},
  {id: '17'},
  {id: '18'},
  {id: '19'},
]

function ParkingApp() {
    // React States
  const [parkings, setParkings] = useState([])
  const [quickBoard, setQuickBoard] = useState('quickBoard')
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonName, setButtonName] = useState('Start', true);
  const [titleName, setTitleName] = useState('Sign In')
  const [logToApp, setLogToApp] = useState(true)
  
  //useEffect(() => {
    //async() => {
    //const res = await axios.get('http:localhost:3001/api/parkings');
    //const res = fetch('http:localhost:3001/api/parkings');
    //console.log(res)
    //})
  
    // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
      uname: "invalid username",
      pass: "invalid password"
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
          setTitleName('LauraParkingApp');
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
  const renderForm = (
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
      </div>
    );
  const showParking = () => {
    if(logToApp) {
    const showedParkings = [...parkingNames]
    .map((parking) => ({...parking, id: Math.random()}))
    
    //<li key={parking.id} id={parking.id}>{parking}</li>)
    setParkings(showedParkings)
    setButtonName('Log out')
    setLogToApp(false)
    setQuickBoard('mainboard-grid')
    }
    else {
    setLogToApp(true)
    setIsSubmitted(false)
    setButtonName('Start')
    setParkings([])
    setQuickBoard('quickBoard')
    }
    
  }
  return (
    <div className="App">
      <div className="app">
      <div className="login-form">
        <div className="tittle">{titleName}</div>
        {isSubmitted ? 
        <div>
          <button onClick={showParking}>{buttonName}</button>
          <div className={quickBoard}>
            {parkings.map(parking =>(
              <SingleParking key={parking.id}/> 
            ))
          } 
          </div>
        </div> 
        : renderForm}
      </div>
    </div>
    </div>
  );
}
export default ParkingApp; 