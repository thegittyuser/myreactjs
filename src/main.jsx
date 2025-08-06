import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
// import Counter from "./hooks/Counter.jsx";
// import Form from "./hooks/Form.jsx";
// import List from "./hooks/List.jsx";
import ComponentA from "./context_hook/ComponentA.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentA />
  </StrictMode>
);
