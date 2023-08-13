import "./SingleProduct.css";

function SingleProduct({ item }) {
  return (
    <li className="singleItem">
      <div className="card-image">
        <img src="./images/p1.avif" alt="product imge" />
      </div>
      <div className="content-container">
        <h3>{item.productName}</h3>
        <p className="price">$ {item.price}</p>
        <p>{item.fastDelivery} Days Delivery</p>

        <div className="rating">{item.rating}</div>
        <button>Add to Cart</button>
      </div>
    </li>
  );
}

export default SingleProduct;
