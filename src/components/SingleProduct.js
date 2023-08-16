import { useState } from "react";
import "./SingleProduct.css";
import { useProduct } from "../context/ProductContext";

function SingleProduct({ item }) {
  const { addToCart, removeFromCart } = useProduct();
  const starContainerStyle = {
    display: "flex",
  };

  return (
    <li className="singleItem">
      <div className="card-image">
        <img src={item.image} alt="product imge" />
      </div>
      <div className="content-container">
        <h3>{item.productName}</h3>
        <p className="price">$ {item.price}</p>
        <p>{item.fastDelivery} Days Delivery</p>

        <div className="rating">
          {
            <div style={starContainerStyle}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <span className="fas fa-star" key={i}></span>
              ))}
            </div>
          }
        </div>

        {item.add ? (
          <button onClick={() => removeFromCart(item.id)}>
            Remove From Cart
          </button>
        ) : (
          <button onClick={() => addToCart(item.id)}>Add to cart</button>
        )}
      </div>
    </li>
  );
}

export default SingleProduct;
