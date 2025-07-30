import { useState } from "react";
import "./css/form.css";
function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formMessage = (e) => {
    e.preventDefault();
    alert(`All fields are required!`);
  };

  return (
    <>
      <div className="form-box">
        <form action="welcome.jsx" onSubmit={formMessage}>
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
      </div>
    </>
  );
}

export default Form;
