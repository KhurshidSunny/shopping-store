import { useProduct } from "../context/ProductContext";
import "./Cart.css";
import SingleProduct from "./SingleProduct";

function Cart() {
  const { products, sort, byStock } = useProduct();

  function transformProducts() {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byStock) {
      sortedProducts = sortedProducts.filter((item) => item.inStock);
    }

    return sortedProducts;
  }

  return (
    <ul className="card">
      {transformProducts().map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Cart;
