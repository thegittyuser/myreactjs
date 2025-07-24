import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import resortimage from "./assets/Write_up_DV.webp";
import product_1 from "./assets/main-products/loose pleated shorts.webp";
import product_2 from "./assets/main-products/textured polo shirt.webp";
import product_3 from "./assets/main-products/textured polo shirt 2.webp";
import product_4 from "./assets/main-products/ribbed polo shirt.webp";
import product_5 from "./assets/main-products/double strap slippers.webp";
import "./App.css";
import Products from "./components/products.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="resort-image">
        <img src={resortimage} alt="" />
      </div>
      {/* Products Section 1 */}
      <section className="products">
        {/* Main Products */}
        <div className="main-products">
          <div className="products-1 p-1">
            <img src={product_1} alt="" />
            <div className="text-contents">
              <div className="name-price">
                <span>Loose pleated shorts</span>
                <span>PKR 3,990</span>
              </div>
              <div className="color-category">
                <span>1 Color | Loose Fit</span>
              </div>
            </div>
          </div>
          <div className="products-1 p-2">
            <img src={product_2} alt="" />
            <div className="text-contents">
              <div className="name-price">
                <span>Loose pleated shorts</span>
                <span>PKR 3,990</span>
              </div>
              <div className="color-category">
                <span>1 Color | Loose Fit</span>
              </div>
            </div>
          </div>
          <div className="products-1 p-3">
            <img src={product_3} alt="" />
            <div className="text-contents">
              <div className="name-price">
                <span>Loose pleated shorts</span>
                <span>PKR 3,990</span>
              </div>
              <div className="color-category">
                <span>1 Color | Loose Fit</span>
              </div>
            </div>
          </div>
        </div>
        {/* main Products 2 */}
        <div className="main-products-2">
          <div className="products-2">
            <img src={product_4} alt="" />
            <div className="text-contents">
              <div className="name-price">
                <span>Ribbed Polo Shirt</span>
                <span className="inline">PKR 2,990</span>
              </div>
              <div className="color-category">
                <span>2 Color | Releaxed Fit</span>
              </div>
            </div>
          </div>
          <div className="products-2">
            <img src={product_5} alt="" />
            <div className="text-contents">
              <div className="name-price">
                <span>Double Strap Slippers</span>
                <span></span>
              </div>
              <div className="color-category">
                <span>Sold Out</span>
              </div>
            </div>
          </div>
        </div>
        {/* banner image */}
        <div className="main-banner">
          <div className="banner-image">
            <h2>Product Details</h2>
            <p>
              Releaxed Fit <br /> Basic Textured T-Shirt <br /> Basic Pleated
              Trousers
            </p>
          </div>
        </div>
        <div className="main-banner-text">
          <div className="text-contents">
            <div className="name-price">
              <span>Basic Textured T-Shirt</span>
              <span className="inline">PKR 2,990</span>
            </div>
            <div className="color-category">
              <span>1 Color | Releaxed Fit</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
