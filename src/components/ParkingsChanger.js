import React from "react";

const ParkingsChanger = (props) => {
    const dropDownChangeHandler = (event) => {
    props.filterChangeHandler(event.target.value);
  };
    return (
    <React.Fragment>
        <div>
        <label>Select your parking number:</label>
        <select onChange={dropDownChangeHandler} value={props.selectedParking}>
          <option value="0">select all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      </React.Fragment>)
}
export default ParkingsChanger;