import { useContext } from "react";
import { usernameContext } from "./form.jsx";

function Welcome() {
  const username = useContext(usernameContext);
  return (
    <div className="welcome">
      <h1>{`Hello ${username} Welcome to the Application!`}</h1>
      <p>
        We are glad to have you here. You have successfully proceed the form
        submission.
      </p>
    </div>
  );
}
export default Welcome;
