import "./AddToCart.css";
import AddToCartItem from "./AddToCartItem";

function AddToCart() {
  return (
    <ul className="product-container">
      <AddToCartItem />
      <AddToCartItem />
      <AddToCartItem />
      <AddToCartItem />
    </ul>
  );
}

export default AddToCart;
