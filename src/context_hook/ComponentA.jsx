import { useState } from "react";
import { createContext } from "react";
import ComponentB from "./ComponentB.jsx";
export const ageContext = createContext();
import "../context_hook/box.css";

function ComponentA() {
  const [age, setAge] = useState(15);
  return (
    <>
      <div className="box">
        <h1>This is Component A</h1>
        <h2>{`Your Age is ${age}`}</h2>
        <ageContext.Provider value={age}>
          <ComponentB age={age} />
        </ageContext.Provider>
      </div>
    </>
  );
}

export default ComponentA;
