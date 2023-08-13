import "./SingleProduct.css";

function SingleProduct() {
  return (
    <li className="singleItem">
      <div className="card-image">
        <img src="./images/p1.avif" alt="product imge" />
      </div>
      <div className="content-container">
        <h3>Product name</h3>
        <p className="price">$ product price</p>
        <p>4 Days Delivery</p>

        <div className="rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <button>Add to Cart</button>
      </div>
    </li>
  );
}

export default SingleProduct;
