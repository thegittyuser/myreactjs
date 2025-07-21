import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import resortimage from "./assets/Write_up_DV.webp"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="resort-image">
        <img src={resortimage} alt="" />
      </div>
    </>
  );
}

export default App;
