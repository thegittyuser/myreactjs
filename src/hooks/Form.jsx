import { useState } from "react";
import "./css/form.css";
function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reloading
    alert("Form Submission Successful");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div className="usernameInput input-box">
            <label htmlFor="username">Enter Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="emailInput input-box">
            <label htmlFor="email">Enter Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="passwordInput input-box">
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submitInput input-box">
            <input type="submit" />
          </div>
        </form>

        <p>
          Username is: {username} <br /> Email is: {email} <br /> Password is:{" "}
          {password}
        </p>
      </div>
    </>
  );
}

export default Form;
