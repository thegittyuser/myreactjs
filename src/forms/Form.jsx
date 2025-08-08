import { useState } from "react";
import "./form.css";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
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
      </div>
    </>
  );
}

export default Form;
