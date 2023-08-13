import "./Cart.css";
import SingleProduct from "./SingleProduct";

function Cart() {
  return (
    <ul className="card">
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
      <SingleProduct />
    </ul>
  );
}

export default Cart;
