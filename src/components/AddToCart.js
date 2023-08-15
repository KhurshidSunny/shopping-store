import { useProduct } from "../context/ProductContext";
import "./AddToCart.css";
import AddToCartItem from "./AddToCartItem";

function AddToCart() {
  const { cart } = useProduct();

  return (
    <ul className="product-container">
      {cart.length > 0 ? (
        cart.map((item) => <AddToCartItem item={item} key={item.id} />)
      ) : (
        <div>The Cart is Empty</div>
      )}
    </ul>
  );
}

export default AddToCart;
