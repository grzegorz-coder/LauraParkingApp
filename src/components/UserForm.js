import "./UserForm.css";
const UserForm = (props) => {

    return (
  <div className="form">
    <form onSubmit={props.handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {props.renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {props.renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" value="Log In" />
      </div>
    </form>
  </div>)
};
export default UserForm;
