import { useState } from "react";
import "../hooks/css/state.css";

function MyHook() {
  const [count, setCount] = useState(15);
  return (
    <>
      <div>
        <h2>{count}</h2>
        <br />
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click To Increment
        </button>
        <br />
        <button className="btn" onClick={() => setCount(count - 1)}>
          Click To Decrement
        </button>
      </div>
    </>
  );
}

export default MyHook;
