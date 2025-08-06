import { ageContext } from "./ComponentA.jsx";

import "../context_hook/box.css";
import { useContext } from "react";

function ComponentC() {
  const age = useContext(ageContext);
  return (
    <>
      <div className="box">
        <h1>This is Component C</h1>
        <h2>{`Your Age Again is ${age}`}</h2>
      </div>
    </>
  );
}

export default ComponentC;
