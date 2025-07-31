import "./css/form.css";
function Form() {
  return (
    <>
      <div className="form-box">
        <form>
          <div className="usernameInput input-box">
            <label htmlFor="username">Enter Username:</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="emailInput input-box">
            <label htmlFor="email">Enter Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="passwordInput input-box">
            <label htmlFor="password">Enter Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="submitInput input-box">
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
