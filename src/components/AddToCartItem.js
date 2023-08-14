import "./AddToCartItem.css";
function AddToCartItem() {
  return (
    <li className="product-row">
      <img src="./images/p1.avif" alt="Product 1" className="product-image" />
      <div className="product-details">
        <span className="product-name">Product 1</span>
        <span className="product-price">$19.99</span>
      </div>
      <button className="delete-button">&times;</button>
    </li>
  );
}

export default AddToCartItem;
