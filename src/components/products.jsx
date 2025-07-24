import product_1 from "../assets/main-products/loose pleated shorts.webp";

let products = {
  name: "Ribbed T-Shirt",
  price: 3000,
  variation: "Blue Color",
  image: product_1,
};

function Products() {
  return (
    <>
      <div>
        <p>{products.name}</p>
        <p>{products.price}</p>
        <p>{products.variation}</p>
        <img src={products.image} />
      </div>
    </>
  );
}

export default Products;
