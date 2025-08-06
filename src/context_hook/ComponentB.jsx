import ComponentC from "./ComponentC.jsx";
import { ageContext } from "./ComponentA.jsx";
import "../context_hook/box.css";
import { useContext } from "react";

function ComponentB() {
  const age = useContext(ageContext);
  return (
    <>
      <div className="box">
        <h1>This is Component B</h1>
        <h2>{`Your Age Again is ${age}`}</h2>
        <ComponentC />
      </div>
    </>
  );
}

export default ComponentB;
