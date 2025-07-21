import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import resortimage from "./assets/Write_up_DV.webp";
import product_1 from "./assets/main-products/loose pleated shorts.webp";
import product_2 from "./assets/main-products/textured polo shirt.webp";
import product_3 from "./assets/main-products/textured polo shirt 2.webp";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="resort-image">
        <img src={resortimage} alt="" />
      </div>
      {/* Products */}
      <section className="main-products">
        <div className="products-1 p-1">
          <img src={product_1} alt="" />
        </div>
        <div className="products-1 p-2">
          <img src={product_2} alt="" />
        </div>
        <div className="products-1 p-3">
          <img src={product_3} alt="" />
        </div>
      </section>
    </>
  );
}

export default App;
