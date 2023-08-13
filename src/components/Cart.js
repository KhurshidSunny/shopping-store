import { useProduct } from "../context/ProductContext";
import "./Cart.css";
import SingleProduct from "./SingleProduct";

function Cart() {
  const { products } = useProduct();
  return (
    <ul className="card">
      {products.map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Cart;
